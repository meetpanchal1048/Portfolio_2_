import { Navbar } from './Navbar/Navbar';
import { Header } from './Header/Header';
import { ProjectHeader } from './Projects/ProjectHeader';
import { Projects } from './Projects/Projects';
import { ProjectFooter } from './Projects/ProjectFooter';
import { Footer } from './Footer/Footer';
import { About } from './About/About';
import './App.css';

function App() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <About/>
      <ProjectHeader/>
      <Projects/>
      <ProjectFooter/>
      <Footer/>
    </div>
  );
}

export default App;
