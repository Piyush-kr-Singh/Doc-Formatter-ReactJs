import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


export default function Navbar(Props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${Props.mode} bg-${Props.mode}`}>
    <div className="container-fluid">
      {/* <Link className="navbar-brand" to="/">{Props.title}</Link> */}
      <a className="navbar-brand" href="#">{Props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            {/* <Link className="nav-link" to="/about">{Props.aboutText}</Link> */}
          </li>
        </ul>
        {/* <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-zprimary mr-5" type="submit">Search</button>
        </form> */}

        <div className={`form-check form-switch  text-${Props.mode==='light'? 'dark':'light'}`}>
        <input className="form-check-input" onClick={Props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{Props.text} Mode</label>
        </div>
      </div>
    </div>
  </nav>
  );
}


//It's just for take that you pass the correct data type as mentioned in the propType.
Navbar.propTypes = {
    title: PropTypes.string.isRequired,   //isRequired makes it mendatory to pass the title
    aboutText:PropTypes.string
}


//Default propTypes, used when no value has been passed.
Navbar.defaultProps = {
  title : 'Set the title',
  aboutText : 'About us'
}