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
    
        <Link to={"/covid"} className='btn'>COVID</Link>
      
        <Link to={"/hiv"} className='btn'>HIV</Link>
      
        <Link to={"/diabetes"} className='btn'>DIABETES</Link>
      
        <Link to={"/tb"} className='btn'>TB</Link>
      
    </div> 
    </>
      
  );
}

export default TestType;
