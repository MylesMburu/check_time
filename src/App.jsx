import { Route , Routes } from 'react-router';
import './App.css';
import Home from './components/Home';
// import TestType from './components/testType/testType';
import Covid from './testPages/covid';
import Diabetes from './testPages/diabetes';
import Hiv from './testPages/hiv';
import Tb from './testPages/tb';

function App() {
  return (
    <>
      
    <Routes> 
      <Route path='/' element={<Home/>}/>
      <Route path='/tb' element={<Tb/>}/>
      <Route path='/hiv' element={<Hiv/>}/>
      <Route path='/covid' element={<Covid/>}/>
      <Route path='/diabetes' element={<Diabetes/>}/>

    </Routes>

    </>

  );
}

export default App;
