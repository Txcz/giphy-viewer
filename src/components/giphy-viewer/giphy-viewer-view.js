import { useContext, useState } from "react";

import GiphyViewerBody from "./giphy-viewer-body";
import GiphyViewerControls from "./giphy-viewer-controls";
import GiphyViewerInput from "./giphy-viewer-input";
import { GiphyViewerDataContext } from "./giphy-viewer-data-context";

function GiphyViewerView() {
  const { state, error } = useContext(GiphyViewerDataContext);
  const [searchValue, setSearchValue] = useState();

  let out;

  switch (state){
    case "initial":
      out = "Loading...";
      break;
    case "loading":
    case "ready":
      out = (
        <>
          <GiphyViewerInput searchValue={searchValue} setSearchValue={setSearchValue} />
          <GiphyViewerBody />
          <GiphyViewerControls searchValue={searchValue} />
        </>
      )
      break;
    case "error":
    default:
      out = (
        <>
          <div>An error occurred while loading data.</div>
          <br/>
          <div>{typeof error === "string" ? error : JSON.stringify(error, null, 2)}</div>
        </>
      )
  }

  return (
    <div>
      {out}
    </div>
  );
}


export default GiphyViewerView;
