import Dashboard from "./components/Dashboard"
import LandingPage from "./components/Landingpage"
import {Routes,Route} from 'react-router-dom'
import jobs from './jobs.json'

function App() {
  const job = jobs.job_postings
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='/dashboard' element ={<Dashboard />} />
      </Routes>
      {/* <LandingPage /> */}
    </div>
  )
}

export default App
