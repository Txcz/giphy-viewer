import { createUseStyles } from 'react-jss';
import { useContext } from "react";


import { ImageList, ImageListItem } from "../components.js";
import { GiphyViewerDataContext } from "./giphy-viewer-data-context";



const styles = createUseStyles({
  tile : {
    borderRadius : '12px',
    overflow: "hidden"
  }
});

function GiphyViewerBody() {
  const { data } = useContext(GiphyViewerDataContext);


  const classes = styles();

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
        <ImageListItem key={item.id} className={classes.tile}>
          <img src={`${item.images["original_still"].url}`} alt={item.title} loading="lazy" />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default GiphyViewerBody;
