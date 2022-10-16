import {createUseStyles} from 'react-jss'

import { ImageList, ImageListItem } from "../components.js";
import TestData from "./test-data.json"



const styles = createUseStyles({
  tile : {
    borderRadius : '12px',
    overflow: "hidden"
  }
})

function GiphyViewerBody() {
  const data = TestData.data.slice(0, 9);

  console.log(TestData, data)

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
      {data.map((item) => (
        <ImageListItem key={item.id} className={classes.tile}>
          <img src={`${item.images.source.url}`} alt={item.title} loading="lazy" />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default GiphyViewerBody;
