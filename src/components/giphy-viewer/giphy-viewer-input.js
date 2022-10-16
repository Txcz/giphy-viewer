import { createUseStyles } from 'react-jss'
import { TextField, InputAdornment, SearchIcon } from "../components.js";

const styles = createUseStyles({
  main : {
    margin: "24px 0", 
  },
})

function GiphyViewerInput() {
  const classes = styles();

  return (
    <div className={classes.main}>
      <TextField
        sx={{
          width: {
            xs: "100%",
            md: "50%"
          }
        }}
        className={classes.input}
        id="outlined-basic" 
        label="Search..." 
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

export default GiphyViewerInput;
