import { createUseStyles } from 'react-jss'

import { Pagination } from "../components";

const styles = createUseStyles({
  main : {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    margin: "24px"
  }
})

function GiphyViewerControls() {
  const classes = styles();

  return (
    <div className={classes.main}>
      <Pagination 
        count={10} 
        variant="outlined" 
        shape="rounded" 
      />
    </div>
  );
}


export default GiphyViewerControls;
