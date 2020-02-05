import React from 'react';
import { BrowserRouter } from 'react-router-dom'
 
import LandingPage from './ProjectBuilder/Landing'
// import NavigationItems from './NavigationBar/NavigationItems'
// import Footer from './Footer/Footer'

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <LandingPage/>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
