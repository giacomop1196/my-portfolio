import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import PortfolioHome from './components/PortfolioHome';
import PortfolioHeader from './components/PortfolioHeader';
import PortfolioFooter from './components/PortfolioFooter';
import PortfolioMoreSkills from './components/PortfolioMoreSkills';
import NotFound from './components/NotFound';


function App() {

  return (
    <>
      <BrowserRouter>
        <PortfolioHeader />
        <Routes>
          <Route path='/' element={<PortfolioHome />} />
          <Route path='/skills' element={<PortfolioMoreSkills />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <PortfolioFooter />
      </BrowserRouter>
    </>
  )
}

export default App
