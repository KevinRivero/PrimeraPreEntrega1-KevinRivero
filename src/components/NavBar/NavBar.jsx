import React from 'react'
import { CartWidget } from '../CartWidget/CartWidget';

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div className="container-lg">
          <a className="navbar-brand" href="#">Kiosko online</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Ofertas</a>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Comestibles
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Alfajores</a></li>
                  <li><a className="dropdown-item" href="#">Caramelos</a></li>
                  <li><a className="dropdown-item" href="#">Chicles</a></li>
                  <li><a className="dropdown-item" href="#">Chocolates</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Bebidas
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Gaseosas</a></li>
                  <li><a className="dropdown-item" href="#">Cervezas</a></li>
                  <li><a className="dropdown-item" href="#">Vinos</a></li>
                  <li><a className="dropdown-item" href="#">Aguas y saborizados</a></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Buscar</button>
              <div className='ms-2'>
              <CartWidget cantidadItems={99}/>
              </div>
            </form>
          </div>
        </div>
      </nav>
  );
}



