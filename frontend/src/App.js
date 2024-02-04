import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Homepage from './components/Homepage/Homepage';
import Loginpage from './components/Loginpage/Loginpage';
import Disease from './components/disease/Disease';
import Reportspage from './components/reports/Reportspage';
import Symptoms from './components/Symptoms/Symptoms';
import Stroke from './components/stroke/Stroke';
import Heart from './components/heart/Heart';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/' Component={Homepage} />
        <Route exact path='/login' Component={Loginpage} />
        <Route exact path='/symptoms' Component={Symptoms} />
        <Route exact path='/symptoms/heart' Component={Heart} />
        <Route exact path='/symptoms' Component={Symptoms} />
        <Route exact path='/disease' Component={Disease} />
        <Route exact path='/disease/pneumonia' Component={Homepage} />
        <Route exact path='/disease/stroke' Component={Stroke} />
        <Route exact path='/disease/heart' Component={Homepage} />
        <Route exact path='/disease/cancer' Component={Homepage} />
        <Route exact path='/disease/arthritis' Component={Homepage} />
        <Route exact path='/disease/angina' Component={Homepage} />
        <Route exact path='/disease/osteoporosis' Component={Homepage} />
        <Route exact path='/reports' Component={Reportspage} />
        <Route exact path='/login' Component={Loginpage} />


      </Routes>
        




    </div>
  );
}

export default App;
