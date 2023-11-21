
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './Layout/Footer/Footer';
import Header from './Layout/Header/Header';
import Home from './Pages/Home';
import About from './components/About';
import EBook from './Pages/EBook';
import Aatmasanvad from './Pages/Aatmasanvad';
import Events from './Pages/Events';
import PdfViewer from './components/PdfViewer';


function App() {
  return (
    <>

      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/ebook' element={<EBook />} />
          <Route path='/pdfviewer' element={<PdfViewer/>}/>
        </Routes>
        <Footer />
      </Router>

    </>
  );
}

export default App;
