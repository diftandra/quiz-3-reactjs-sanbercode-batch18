import React from 'react';
import Routes from './Quiz-3/index'
import {LoginProvider} from "./Quiz-3/logincontext";


function App() {
  return (
      <><LoginProvider>
          <Routes/>
        </LoginProvider>
      </>
  );
}

export default App;
