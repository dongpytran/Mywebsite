import React from 'react';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Album from './pages/Album';
import Contact from './pages/Contact';
import Waiting from './pages/Waiting';
import Error404 from './pages/Error404';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
      <ScrollToTop/>
        <Header/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/playlist' component={Album}/>
            <Route path='/contact' component={Contact}/>
            <Route path={['/Waiting-For-The-Light-That-Never-Come','/They-Dont-Know-Us','/Without-You','/Lost-Control','/Wild-Fire','/Faye','/Here-I-Come', '/One-Tribe']} component={Waiting}/>
            <Route component={Error404}/>
          </Switch>
        <Footer/>

      </Router> 
    </div>
  );
}

export default App;
