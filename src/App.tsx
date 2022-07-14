import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import './scss/app.scss';
import Main from './layout/Main';

const Cart = React.lazy(() => import(/* webpackChunkName: "Cart" */'./pages/Cart'))
const FullPizza = React.lazy(() => import(/* webpackChunkName: "Cart" */'./pages/FullPizza'))


function App() {
  return (
    <div className="content">
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Suspense fallback={<div>Идет загрузка корзины...</div>}>
            <Cart />
          </Suspense>} />
          <Route path="/pizza/:id" element={<Suspense fallback={<div>Идет загрузка пицц...</div>}>
            <FullPizza />
          </Suspense>} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
