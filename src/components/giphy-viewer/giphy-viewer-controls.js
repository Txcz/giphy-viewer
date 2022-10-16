import { useContext } from "react";
import PropTypes from 'prop-types'
import { createUseStyles } from 'react-jss'

import { Pagination } from "../components";
import { GiphyViewerDataContext } from "./giphy-viewer-data-context";

import Config from "./config";

const styles = createUseStyles({
  main : {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    margin: "24px"
  }
})

function GiphyViewerControls({searchValue}) {
  const classes = styles();
  const { handlers, data: { pagination } } = useContext(GiphyViewerDataContext);

  return (
    <div className={classes.main}>
      <Pagination 
        page={(Math.floor(pagination.offset/Config.LIST_IMAGE_LIMIT))+1}
        onChange={(e, page) => handlers.onLoad({ offset: (page-1)*Config.LIST_IMAGE_LIMIT, name: searchValue })}
        count={Math.round(pagination.total_count/Config.LIST_IMAGE_LIMIT)+1} 
        variant="outlined" 
        shape="rounded" 
      />
    </div>
  );
};

GiphyViewerControls.propTypes = {
  searchValue: PropTypes.string
};

export default GiphyViewerControls;
