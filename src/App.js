import 'bootstrap/dist/css/bootstrap.min.css';
import SkiSlopeList from './components/SkiSlopeList';
import Navbar from './components/Navbar';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import "./App.css"
import Home from './pages/Home';
import Austria from './pages/Austria';
import Bulgaria from './pages/Bulgaria';
import SignUp from './pages/SignUp';


function App() {
 
 
  return (
    <>
      <Router>
         < Navbar/>
      <Switch/>
            <Route path='/' exact component={Home}/>
            <Route path='/austria' exact component={Austria}/>
            <Route path='/bulgaria' exact component={Bulgaria}/>
            <Route path='/sign-up' exact component={SignUp}/>
       <Switch/>

      </Router>
      
    </>
  );
}

export default App;
