import React from 'react';
import './App.css';
import './components/AllView'
import {MyProvider} from "./GlobalVaribale";
import AllView from "./components/AllView";

function App() {
  return (
      <div>
        <MyProvider>
          <AllView/>
        </MyProvider>
      </div>

  );
}

export default App;
