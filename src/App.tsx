import { ReactComponent as Logo } from './logoPlane.svg';
import { Navigate, Route, Routes } from 'react-router-dom';
import Link from '@mui/material/Link';

import { TicketsSearch, Home, GridTickets } from './pages';

import style from './App.module.scss';

const App = () => (
   <div className={style.App}>
      <div className={style.logoContainer}>
         <Logo />
      </div>
      <div className={style.linkContainer}>
         <Link href="/home">Home</Link>
         <Link href="/search">Search</Link>
         <Link href="/grid">Grid</Link>
      </div>
      <section className={style.mainContainer}>
         <Routes>
            <Route path="/">
               <Route index element={<Navigate to="/search" replace />} />
               <Route path="/home" element={<Home />} />
               <Route path="/search" element={<TicketsSearch />} />
               <Route path="/grid" element={<GridTickets />} />
               <Route path="/*" element={<div className={style.error}>404 Error</div>} />
            </Route>
         </Routes>
      </section>
   </div>
);

export default App;
