import { Provider } from 'react-redux'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import ProtectedRoute from './pages/ProtectedRoute'
import Dashboard from './pages/Dashboard'
import store from './redux/store'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <Provider store={store}>
        <div>
          <Toaster position='top-right'toastOptions={{success: {theme: {primary: '#4aed88'}}}}></Toaster>
        </div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path='/login' element={<Login/>} />
          </Routes>
        </BrowserRouter>
    </Provider>
  )
}

export default App
