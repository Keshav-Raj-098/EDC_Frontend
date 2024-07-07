import './App.css';
import Navbar from './components/navbar/Navbar';
import Header from './components/Header/header';
import Hero from './components/Hero/Hero';
import Footer from "./components/footer"
import { useState } from 'react' 

function App() {

  const [on, setOn] = useState("About")
  const [mode, setMode] = useState("dark")
  

  return (
    <div className="App" >

      <Navbar setOn={setOn} mode={mode} setMode={setMode}/>
      <Header  mode={mode} />
      <Hero on={on}  mode={mode} />
      <Footer  mode={mode} />
    
    </div>
  );
}

export default App;
