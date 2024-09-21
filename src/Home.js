import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";
import Faq from "./components/Faq/Faq";
import Player from "./components/Player/Player";

function App() {
  return (
    <div className="home">
      <header className="header">
        <Navbar />
      </header>
      <Hero />
      <Section title="Top Albums" data="/albums/top" showButton={true} />
      <Section title="New Albums" data="/albums/new" showButton={true} />
      <Section title="Songs" data="/songs" showButton={false} />
      <Faq data="/faq" />
      {/* <Player /> */}
    </div>
  );
}

export default App;
