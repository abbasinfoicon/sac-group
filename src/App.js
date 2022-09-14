import './App.css';
import { useEffect } from 'react';
import ScrollToTop from "react-scroll-to-top";
import Footer from './components/lib/Footer';
import Header from './components/lib/Header';
import Index from './routes/index';
import ScrollTop from './components/lib/ScrollTop';


function App() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <ScrollTop />
      <Header />
      <Index />
      <Footer />

      <ScrollToTop smooth color="#066d8e" />
    </>
  );
}

export default App;
