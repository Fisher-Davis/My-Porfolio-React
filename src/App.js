import './App.css';
import Profile from './My Portfolio/Profile/Profile';
import AboutMe from './My Portfolio/About Me/AboutMe';
import ContactMe from './My Portfolio/Contact Me/ContactMe';
import MyProjects from './My Portfolio/My Projects/MyProjects';
import Footer from './My Portfolio/Footer/Footer'

function App() {
  return (
    <div className="App">
     <Profile/>
     <AboutMe/>
     <MyProjects/>
     <ContactMe/>
     <Footer/>
     
    </div>
  );
}

export default App;
