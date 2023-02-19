/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-filename-extension */
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';

import { Footer} from './component/footer/footer-footer.jsx';
import {Header} from './component/header/header-header.jsx';
import { BookPage } from './pages/book';
import { MainPage } from './pages/main';
import { PageOffer } from './pages/offer/offer-agreement';
import { PageRules } from './pages/usage-rules/usage-rules';
import { store } from './redux/store.jsx';

import './reset.css';
import style from './index.module.css'


const root = ReactDOM.createRoot(document.getElementById('root')); 

root.render(
  <HashRouter>
    <Provider store={store}>
      <div className={style.wrapper}>
        <Header />
        <Routes>
          <Route>
            <Route path='/' element={<Navigate to='/books/all' />} />
            <Route path='/books/:category' element={<MainPage />} />
          </Route>

          <Route path='/page-rules' element={<PageRules />} />
          <Route path='/page-offer' element={<PageOffer />} />
          {/* <Route path='/books/all/:id' element={<BookPage />} /> */}
          <Route path='/books/:category/:id' element={<BookPage />} />

        </Routes>
        <Footer />
      </div>
    </Provider>
  </HashRouter>
);
