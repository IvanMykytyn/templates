// React Router dom
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages
import {} from './pages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={...} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
