// App.js

import React from 'react';
import Navbar from './Components/Navbar';
import Content from './Components/Content';
import Footer from './Components/Footer';
// import Navbar from './Components/Navbar.js'; // Import the Navbar component

const App = () => {
  return (
    <div style={{overflowX:"hidden"}}>
     <Navbar/>
     <Content/>
     <Footer/>
      {/* Add other components/content of your app below */}
      <div>
   
        {/* Additional content */}
      </div>
    </div>
  );
};

export default App;
