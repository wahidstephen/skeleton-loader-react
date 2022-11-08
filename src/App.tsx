import { useEffect, useState } from 'react';
import './App.css';
import { SkeletonLoader } from './components/loader/SkeletonLoader';
import logo from './logo.svg';

function App() {

  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true)
    setTimeout(() => setLoader(false), 5000)
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <SkeletonLoader showLoader={loader} skeletonData={{ width: '80%', circle: true }}>
          <img src={logo} className="App-logo" alt="logo" />
        </SkeletonLoader>
        <SkeletonLoader showLoader={loader}>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
        </SkeletonLoader>
        <SkeletonLoader showLoader={loader} skeletonData={{ height: `calc(10px + 2vmin)`, customClass: `check-custom-class` }}>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </SkeletonLoader>
      </header>
    </div >
  );
}

export default App;
