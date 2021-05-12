import TopNavbar from './components/TopNavbar/TopNavbar'
import Sidebar from './components/Sidebar/Sidebar'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/pages/Home';
import About from './components/pages/About';
import Work from './components/pages/Work';
import Contact from './components/pages/Contact';
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";
function App() {
  return (
    <>
    {Splitting()}
    <Router>
    <Sidebar/>
    <div id='main'>
      <TopNavbar/>
          <Route exact path='/' component={Home}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/work' component={Work}/>
          <Route exact path='/contact' component={Contact}/>
    </div>
      
    
    </Router>
    </>
  );
}

export default App;
