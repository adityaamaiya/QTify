import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Section from './components/Section/Section';
import Carousel from './components/Carousel/Carousel';

function App() {
  
  return (
    
      <div className="home">
        <header className="header">
          <Navbar />
        </header>
        < Hero/>
        <Section title="Top Albums" data="top"/>
        <Carousel />
        <Section title="New Albums" data="new"/>
        
      </div>
  );
}

export default App;
