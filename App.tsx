
import React, { useEffect, useState } from 'react';
import RootNavigation from './src/navigation/RootNavigation';
import { store } from './src/redux/store';
import { Provider } from 'react-redux';
import SplashPagesComponent from './src/component/SplashPagesComponent';

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSplash(false);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  if (showSplash) {
    return <SplashPagesComponent />;
  }

  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
};

export default App;
