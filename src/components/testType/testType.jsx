import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Covid from '../../testPages/covid';
import Hiv from '../../testPages/hiv';
import Diabetes from '../../testPages/diabetes';
import Tb from '../../testPages/tb';

const TestType = () => {
  return (
    <Router>

    <div>testType</div>
    <Route path='/covid' component={Covid}/>
    <Route path='/hiv' component={Hiv }/>
    <Route path='/tb' component={Diabetes }/>
    <Route path='/diabetes' component={Tb }/>

    </Router>
    
  )
}

export default TestType