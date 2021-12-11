import './App.css';
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';
import { Login } from './Components/Login';
import { Signup } from './Components/Signup';
import { Forgetpass } from './Components/Forgetpass';
import { Emailsent } from './Components/Emailsent';
import { Logout } from './Components/Logout';
import { Home } from './Components/Home';

function App() {
  return (
    <div className="App">
       <Router>
         <Routes>
           <Route path="/" element={<Login/>}/>
           <Route path="/signup" element={<Signup/>}/>
           <Route path="/forgetpass" element={<Forgetpass/>}/>
           <Route path="/emailsent" element={<Emailsent/>}/>
           <Route path="/logout" element={<Logout/>}/>
           <Route path="/home" element={<Home/>}/>
         </Routes>
       </Router>
    </div>
  );
}

export default App;
