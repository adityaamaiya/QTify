import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Card from './components/Card/Card';
import Section from './components/Section/Section';

function App() {
  
  return (
    
      <div className="home">
        <header className="header">
          <Navbar />
        </header>
        < Hero/>
        <Section title="Top Albums" data="top"/>
        <Section title="New Albums" data="new"/>
      </div>
  );
}

export default App;
