import { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

import { TextField, InputAdornment, SearchIcon } from "../components.js";
import { useDebounce } from '../../hooks/hooks.js';
import { GiphyViewerDataContext } from "./giphy-viewer-data-context";

import './giphy-viewer-input.scss';

function GiphyViewerInput({ searchValue, setSearchValue }) {
  const { handlers } = useContext(GiphyViewerDataContext);
  const debouncedValue = useDebounce(searchValue, 500);

  useEffect(() => {
    handlers.onLoad({ name: debouncedValue });
  }, [debouncedValue, handlers?.onLoad])

  return (
    <div className={"giphy-viewer-input"}>
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
}

GiphyViewerInput.propTypes = {
  searchValue: PropTypes.string,
  setSearchValue: PropTypes.func,
};

export default GiphyViewerInput;
