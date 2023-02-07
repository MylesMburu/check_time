import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import Covid from '../../testPages/covid';
// import Hiv from '../../testPages/hiv';
// import Diabetes from '../../testPages/diabetes';
// import Tb from '../../testPages/tb';

function TestType() {
  return (
    <>
    <ul>
      <li>
        <Link to={"./covid"}>COVID</Link>
      </li>
    
      <li>
        <Link to={"./hiv"}>HIV</Link>
      </li>
    
      <li>
        <Link to={"./diabetes"}>DIABETES</Link>
      </li>
    
      <li>
        <Link to={"./tb"}>TB</Link>
      </li>
    </ul>
    </>
      
  );
}

export default TestType;
