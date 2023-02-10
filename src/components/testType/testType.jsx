import React from 'react';
import { Link } from 'react-router-dom';
import './testType.css'
// import Covid from '../../testPages/covid';
// import Hiv from '../../testPages/hiv';
// import Diabetes from '../../testPages/diabetes';
// import Tb from '../../testPages/tb';

function TestType() {
  return (
    <>
    <div className="list">
    <ul>
      <li className='btn'>
        <Link to={"/covid"}>COVID</Link>
      </li>
    
      <li className='btn'>
        <Link to={"/hiv"}>HIV</Link>
      </li>
    
      <li className='btn'>
        <Link to={"/diabetes"}>DIABETES</Link>
      </li>
    
      <li className='btn'>
        <Link to={"/tb"}>TB</Link>
      </li>
    </ul>
    </div>
    </>
      
  );
}

export default TestType;
