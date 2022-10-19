import { useContext } from "react";
import PropTypes from 'prop-types'

import { Pagination } from "../components";
import { GiphyViewerDataContext } from "./giphy-viewer-data-context";

import Config from "./config";
import './giphy-viewer-controls.scss';

function GiphyViewerControls({searchValue}) {
  const { handlers, data: { pagination } } = useContext(GiphyViewerDataContext);

  function getPage() {
    return (Math.floor(pagination.offset/Config.LIST_IMAGE_LIMIT))+1;
  }

  function getCount(){
    return Math.round(pagination.total_count/Config.LIST_IMAGE_LIMIT)+1;
  }

  function getOffset(page) {
    return (page-1)*Config.LIST_IMAGE_LIMIT;
  }

  function onChange(e, page){
    return  handlers.onLoad({ offset: getOffset(page) , name: searchValue });
  }

  // Fix pagination to last page does not work correctly, giphy api returns pagination.total_count somehow randomly, 
  // and by sending offset that match last page by total_count from last data, 
  // it may return empty data with total_count 0, or returns total_count so its off

  return (
    <div className={"giphy-viewer-controls"}>
      <Pagination 
        page={getPage()}
        onChange={onChange}
        count={getCount()} 
        variant="outlined" 
        shape="rounded" 
      />
    </div>
  );
}

GiphyViewerControls.propTypes = {
  searchValue: PropTypes.string
};

export default GiphyViewerControls;
