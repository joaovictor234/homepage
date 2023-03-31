import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { AllNews } from './components/AllNews';
import { Sidebar } from './components/Sidebar';
import NewsContextProvider from './context/NewsContext';
import NewsValuesContextProvider from './context/NewsValuesContext';
import About from './pages/About';
import Admin from './pages/Admin';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <NewsContextProvider>
        <NewsValuesContextProvider>
          <BrowserRouter>
            <Sidebar />
            <main className='content'>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/admin' element={<Admin />} />
                <Route path='/about' element={<About />} />
                <Route path='/all-news' element={<AllNews />} />
              </Routes>
            </main>
          </BrowserRouter>
        </NewsValuesContextProvider>
      </NewsContextProvider>
    </div>
  );
}

export default App;
