import { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';

import { TextField, InputAdornment, SearchIcon } from "../components.js";
import { useDebounce } from '../../hooks/hooks.js';
import { GiphyViewerDataContext } from "./giphy-viewer-data-context";

const styles = createUseStyles({
  main : {
    margin: "24px 0", 
  },
})

function GiphyViewerInput({ searchValue, setSearchValue }) {
  const classes = styles();
  const { handlers } = useContext(GiphyViewerDataContext);
  const debouncedValue = useDebounce(searchValue, 500);

  useEffect(() => {
    debouncedValue && handlers.onLoad({ name: debouncedValue });
  }, [debouncedValue, handlers?.onLoad])

  return (
    <div className={classes.main}>
      <TextField
        sx={{
          width: {
            xs: "100%",
            md: "50%"
          }
        }}
        id="outlined-basic" 
        label="Search..." 
        onChange={(event) => setSearchValue(event.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

GiphyViewerInput.propTypes = {
  searchValue: PropTypes.string,
  setSearchValue: PropTypes.func,
};

export default GiphyViewerInput;
