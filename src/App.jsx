// App.jsx
import './App.css'
import { Routes, Route } from 'react-router-dom'
import SQLLandingPage from './components/SQLLandingPage'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<SQLLandingPage />} />
      </Routes>
    </>
  )
}
  
export default App
