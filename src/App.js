import { GiphyViewer } from './components/components';

import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Giphy Viewer App
      </header>
      <GiphyViewer/>
      <footer className="App-footer">
        Copyright @ 2022 Tomáš Hůla
      </footer>
    </div>
  );
}

export default App;
