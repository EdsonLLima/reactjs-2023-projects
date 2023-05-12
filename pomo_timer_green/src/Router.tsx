import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { History } from './pages/History'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  )
}
// caso precise fazer uma roda por exeplo administrativa ou outraespecifica

//     <Route path="/admin" element={<DefaultLayout />}>
//         <Route path="/products" element={<History />} />
//     </Route>

// ex: http://localhost:5173/admin/products
