
import { BrowserRouter , Switch, Route} from 'react-router-dom';
// import './App.css';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>

      <Switch>

        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route exact path='/'>
          <Home></Home>
        </Route>

        <Route path='/contact'>
          <Contact></Contact>
        </Route>
        




      </Switch>
      
      
      
      
      
      
      
      <Footer></Footer>
      
      </BrowserRouter>
  
    </div>
  );
}

export default App;
