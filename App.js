import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
//import About from './components/About';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
{/*import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";*/}


function App() {
  const[mode,setMode]=useState('light');

  const[alert,setAlert]=useState(null);

  const showAlert=(massege, type)=>{
    setAlert({
      msg: massege,
      type: type
    })
  }
setTimeout(()=>{
  setAlert(null);
},1500)

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='gray';
      showAlert("Dark mode has been Enable","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been Enable","success");
    }
  }

  const toggleLike=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='green';
    
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
     
    }
  }

  return (
    <>
   
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} toggleLike={toggleLike}/> 
<Alert alert={alert}/>
<div className='container'>
 {/*<Switch>
         <Route path="/about">
            <About />
          </Route>
          <Route path="/">
        
          </Route>
  </Switch>*/}
  <TextForm showAlert={showAlert} heading="Enter to the text analayz" mode={mode} />
</div>


   </>
  ); 
}

export default App;
