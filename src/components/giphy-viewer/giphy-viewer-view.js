import { useState } from "react";

import GiphyViewerBody from "./giphy-viewer-body";
import GiphyViewerControls from "./giphy-viewer-controls";
import GiphyViewerInput from "./giphy-viewer-input";


function GiphyViewerView() {
  const [searchValue, setSearchValue] = useState();

  return (
    <>
      <GiphyViewerInput searchValue={searchValue} setSearchValue={setSearchValue}/>
      <GiphyViewerBody/>
      <GiphyViewerControls searchValue={searchValue}/>
    </>
  );
}


export default GiphyViewerView;
