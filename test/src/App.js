import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Heading from "./components/Heading";
import Card from "./components/Card";
import Footer from './components/Footer';


function App() {
  return (
  <div className="Container">
  <Navbar/>
  <Heading/>
  <Card/>  
  <Footer/>
  </div>
  
  );
}


export default App;
