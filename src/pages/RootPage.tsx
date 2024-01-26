// RootPage.tsx
import React from 'react';
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import MainDashboard from './MainDashboard';
import RouteProcesses from '../router/routesSections/RouteProcesses';
import RouteSales from '../router/routesSections/RouteSales';
import AnchorTag from '../components/AnchorTag';
import './RootPage.css'

interface AnchorTagProps {
  to: string;
  className?: string;
  onClick?: () => void; // Make sure to include the onClick property
  // ... other properties
}

const RootPage: React.FC = () => {
  const [activeMenuIndex, setActiveMenuIndex] = useState(null);
  const [activeSidebar, setActiveSidebar] = useState(false)

  
  // const signOut = AuthStore();
   
  const toggleSubMenu = (index) => {
      setActiveMenuIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const toggleMenu = () => {
      setActiveSidebar(!activeSidebar) 
  }

  const toggleClass = () => {
      // Implementa la lógica para cambiar la clase o realiza otras acciones según tus necesidades
      console.log('toggleClass function called');
  };

  const menuAnimationSales = {
    height: activeMenuIndex === 1 ? '400px' : '0',

  };

  const menuAnimationShopping = {
    height: activeMenuIndex === 2 ? '350px' : '',
  };

  const menuAnimationStore = {
    height: activeMenuIndex === 3 ? '350px' : '',
  };

  const menuAnimationProcesses = {
    height: activeMenuIndex === 4 ? '350px' : '',
  };


  return (
    <div className='root__dashboard'>
      <div className={`sidebar ${activeSidebar ? 'close' : ''}`}>
        <div className="logo__sidebar">
            <h2>P</h2>
        </div>
        <div className='arrow__sidebar' onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="10" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
        </div>
        <ul className='nav__items'>
          <div className={`nav__item ${activeMenuIndex === 0 ? 'activeMenu' : ''}`} >
            <AnchorTag className='nav__link' onClick={() => toggleSubMenu(0)}  to="/dashboard">
              <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm320 96c0-26.9-16.5-49.9-40-59.3V88c0-13.3-10.7-24-24-24s-24 10.7-24 24V292.7c-23.5 9.5-40 32.5-40 59.3c0 35.3 28.7 64 64 64s64-28.7 64-64zM144 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-16 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM400 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>
              <span>Dashboard</span>
            </AnchorTag>
          </div>
          <div className={`nav__item ${activeMenuIndex === 1 ? 'activeMenu' : ''}`}>
                <AnchorTag className='nav__link ' onClick={() => toggleSubMenu(1)} to="/sales/ordenes">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="26" viewBox="0 0 448 512"><path d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
                    <span>Ventas</span>
                    <svg className='arrow' onClick={toggleClass} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>
                </AnchorTag>
                <div className='sub__menu' style={menuAnimationSales}>
                    <AnchorTag className='sub__menu-link'>
                        <span>Ventas</span>
                    </AnchorTag>
                    <AnchorTag className='sub__menu-link'>
                        <span>Ventas</span>
                    </AnchorTag>
                    <AnchorTag className='sub__menu-link'>
                        <span>Ventas</span>
                    </AnchorTag>
                    <AnchorTag className='sub__menu-link'>
                        <span>Ventas</span>
                    </AnchorTag>
                </div>
            </div>
            <div className={`nav__item ${activeMenuIndex === 2 ? 'activeMenu' : ''}`}>
                <AnchorTag className='nav__link' onClick={() => toggleSubMenu(2)}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="18" width="20" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
                    <span>Compras</span>
                    <svg className="arrow" onClick={toggleClass} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>
                </AnchorTag>
                <div className='sub__menu' style={menuAnimationShopping}>
                    <AnchorTag className='sub__menu-link'>
                        <span>Compras</span>
                    </AnchorTag>
                    <AnchorTag className='sub__menu-link'>
                        <span>Compras</span>
                    </AnchorTag>
                    <AnchorTag className='sub__menu-link'>
                        <span>Compras</span>
                    </AnchorTag>
                    <AnchorTag className='sub__menu-link'>
                        <span>Compras</span>
                    </AnchorTag>
                </div>
            </div>
            <div className={`nav__item ${activeMenuIndex === 3 ? 'activeMenu' : ''}`}>
                <AnchorTag className='nav__link' onClick={() => toggleSubMenu(3)}>
                    <svg  xmlns="http://www.w3.org/2000/svg" height="18" width="22" viewBox="0 0 640 512"><path d="M58.9 42.1c3-6.1 9.6-9.6 16.3-8.7L320 64 564.8 33.4c6.7-.8 13.3 2.7 16.3 8.7l41.7 83.4c9 17.9-.6 39.6-19.8 45.1L439.6 217.3c-13.9 4-28.8-1.9-36.2-14.3L320 64 236.6 203c-7.4 12.4-22.3 18.3-36.2 14.3L37.1 170.6c-19.3-5.5-28.8-27.2-19.8-45.1L58.9 42.1zM321.1 128l54.9 91.4c14.9 24.8 44.6 36.6 72.5 28.6L576 211.6v167c0 22-15 41.2-36.4 46.6l-204.1 51c-10.2 2.6-20.9 2.6-31 0l-204.1-51C79 419.7 64 400.5 64 378.5v-167L191.6 248c27.8 8 57.6-3.8 72.5-28.6L318.9 128h2.2z"/></svg>
                    <span>Almacen</span>
                    <svg className="arrow"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>
                </AnchorTag>
                <div className='sub__menu' style={menuAnimationStore}>
                    <AnchorTag className='sub__menu-link'>
                        <span>Almacen</span>
                    </AnchorTag>
                    <AnchorTag className='sub__menu-link'>
                        <span>Almacen</span>
                    </AnchorTag>
                    <AnchorTag className='sub__menu-link'>
                        <span>Almacen</span>
                    </AnchorTag>
                    <AnchorTag className='sub__menu-link'>
                        <span>Almacen</span>
                    </AnchorTag>
                </div>
            </div>
            <div className={`nav__item ${activeMenuIndex === 4 ? 'activeMenu' : ''}`} >
                <AnchorTag className='nav__link' onClick={() => toggleSubMenu(4)} >
                    <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm320 96c0-26.9-16.5-49.9-40-59.3V88c0-13.3-10.7-24-24-24s-24 10.7-24 24V292.7c-23.5 9.5-40 32.5-40 59.3c0 35.3 28.7 64 64 64s64-28.7 64-64zM144 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-16 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM400 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>
                    <span>Procesos</span>
                    <svg className="arrow" onClick={toggleClass} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>
                </AnchorTag>
                <div className='sub__menu' style={menuAnimationProcesses}>
                    <AnchorTag className='sub__menu-link' to='./processes/articles'>
                        <span>Articulos</span>
                    </AnchorTag>
                    <AnchorTag className='sub__menu-link' to='./processes/users'>
                        <span>Usuarios</span>
                    </AnchorTag>
                    <AnchorTag className='sub__menu-link' to='/processes/branchoffice' >
                        <span>Sucursales</span>
                    </AnchorTag>
                    <AnchorTag className='sub__menu-link' to='/processes/typesusers' >
                        <span>Tipos de Us</span>
                    </AnchorTag>
                    <AnchorTag className='sub__menu-link' to='./processes/usergroups'>
                        <span>Grupos de Us</span>
                    </AnchorTag>
                    <AnchorTag className='sub__menu-link' to="/processes/company">
                        <span>Empresas</span>
                    </AnchorTag>
                    <AnchorTag className='sub__menu-link' to='./processes/areas'>
                        <span>Areas</span>
                    </AnchorTag>
                    <AnchorTag className='sub__menu-link' to='./processes/series'>
                        <span>Series</span>
                    </AnchorTag>
                    
                    <AnchorTag className='sub__menu-link' to='./processes/ranges'>
                        <span>Rangos</span>
                    </AnchorTag>
                </div>
            </div>
            <div className='nav__item'>
                <AnchorTag onClick={(event: React.MouseEvent<HTMLAnchorElement>) => { signOut(); }} className='nav__link'>
                    <svg xmlns="http://www.w3.org/2000/svg" className='signoff' height="20" width="20" viewBox="0 0 512 512"><path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/></svg>
                    <span>Cerrar session</span>
                </AnchorTag>
            </div>
        </ul>
      </div>
      <div className="main">
        <Routes>
          <Route path="dashboard" element={<MainDashboard />} />
          <Route path="processes/*" element={<RouteProcesses />} />
          <Route path="sales/*" element={<RouteSales />} />
        </Routes>
      </div>
    </div>
  );
};

export default RootPage;
