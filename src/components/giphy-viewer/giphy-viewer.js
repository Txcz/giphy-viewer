import GiphyViewerView from "./giphy-viewer-view";
import GiphyViewerDataContext from "./giphy-viewer-data-context";

function GiphyViewer() {
  return (
    <GiphyViewerDataContext>
      <GiphyViewerView />
    </GiphyViewerDataContext>
  );
}

export default GiphyViewer;
