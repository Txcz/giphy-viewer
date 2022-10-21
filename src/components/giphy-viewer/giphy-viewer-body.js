import { useContext } from "react";

import { ImageList, ImageListItem } from "../components.js";
import { GiphyViewerDataContext } from "./giphy-viewer-data-context";

import './giphy-viewer-body.scss';


function GiphyViewerBody() {
  const { data } = useContext(GiphyViewerDataContext);

  return (
    <ImageList 
      gap={8}
      sx={{
        gridTemplateColumns: {
          xs: "repeat(1, 1fr) !important",
          md: "repeat(3, 1fr) !important",
        }
      }}
    >
      {data.data.map((item) => (
        <ImageListItem key={item.id} className={"giphy-viewer-body-tile"}>
          <img src={`${item.images["downsized"].url}`} alt={item.title} loading="lazy" />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default GiphyViewerBody;
