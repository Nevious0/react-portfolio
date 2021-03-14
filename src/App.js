import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Header from "./component/Header"
import Home from "./component/Home"
import About from "./component/About"
import Portfolio from "./component/Portfolio"
import Services from "./component/Services"
import Footer from './Footer'
import './App.css';

const App = () => {
  return (
<div>
<Router>
<div>
<Header/>

<Switch>
<Route path="/" exact component={Home}/>
<Route path="/about" component={About}/>
<Route path="/portfolio" component={Portfolio}/>
<Route path="/services" component={Services}/>
</Switch>

</div>
</Router>
<Footer/>
</div>
  );
}

export default App;
