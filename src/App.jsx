
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom'
import Example from './components/Example'
import { Header } from './components/Header'
import Login from './pages/auth/Login'
import Expense from './pages/expense-tracker/Expense'

function App() {

  return (<>
  <Router>
    <Routes>
      <Route path='/' element={<><Header/></>}>  </Route>
      <Route path='/login' element={<><Login/></>}>  </Route>
      <Route path='/expense' element={<><Header/><Expense/></>}>  </Route>
    </Routes>
  </Router>


  </>
  )
}

export default App
