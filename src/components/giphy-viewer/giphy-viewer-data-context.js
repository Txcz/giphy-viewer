import React from 'react';

import useDataLoader from '../../hooks/use-data-loader';

import Config from "./config";

const GiphyViewerDataContext = React.createContext();

const createGiphyUrl = ({name, offset = 0}) => {
  let url = Config.GIPHY_URL;

  url += name ? `search?q=${name}&` : "trending?";

  url += `api_key=${Config.GIPHY_API_KEY}&offset=${offset}&limit=${Config.LIST_IMAGE_LIMIT}`;

  return url
}

  const onLoad = (dtoIn) => (
    new Promise((resolve, reject) => {
      fetch(createGiphyUrl(dtoIn))
        .then(res => res.json())
        .then((result) => result?.meta?.status === 200 ? resolve(result): reject(result?.meta?.msg || result),
        (error) => reject(error)
      )
    })
  )

function GiphyViewerDataContextProvider({ children}) {
  const value = useDataLoader({
    handlers: {
      onLoad: onLoad
    }
  });

  return (
    <GiphyViewerDataContext.Provider value={value}>
      {children}
    </GiphyViewerDataContext.Provider>
  );
}

export default GiphyViewerDataContextProvider;
export {
  GiphyViewerDataContextProvider,
  GiphyViewerDataContext
}
