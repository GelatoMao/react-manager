import { RouterProvider, BrowserRouter } from 'react-router-dom'
import Router from './router'
import './App.css'

function App() {
  return (
    // 组建路由
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}

export default App
