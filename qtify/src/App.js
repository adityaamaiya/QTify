import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import Navbar from './components/Navbar/Navbar';
import { useTheme } from '@mui/material/styles';
import Hero from './components/Hero/Hero';

function App() {
  const theme = useTheme();
  const appStyle = {
    backgroundColor: theme.palette.primary.main,
  };
  return (
    
      <div styles={appStyle} className="App">
        <header className="App-header">
          <Navbar />
        </header>
        < Hero/>
      </div>
    
  );
}

export default App;
