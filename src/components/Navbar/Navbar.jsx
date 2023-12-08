import parrotLogo from "../../assets/Images/logo.png"
import "../../index.css"
import "./navbar.css"
import { useRef, useState } from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faBarsStaggered, faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons'
import Input from "./Input"


function SearchBar({search, onSearchChange}) {
  return <Input value={search} onChange={onSearchChange} placeholder="Rechercher..."/>
}

export default function Navbar () {

    const [burgerOpen, setBurgerOpen] = useState('');

    const toggleBurger = () => {
        setBurgerOpen(!burgerOpen);
    }

    const [search, setSearch] = useState('');


    const sideBarStyle = () => {
        if (burgerOpen) {
            return {
                display: 'block', 
                transition: 'left 400ms ease 0s',
                position: 'absolute',
                top: '0',
                left: '0',
                padding: '20px 10px 20px 25px',
                height: '100vh',
                backgroundColor: '#ffffff',
                width: '320px'
            }
        }
        return {
            display: 'block',
            position: 'absolute',
            top: '0',
            left: '-100%',
            transition: 'left 400ms ease 0s',
            padding: '20px 10px 20px 25px',
            height: '100vh',
            backgroundColor: '#ffffff',
            width: '320px'
        }
    }

    return (
      <>
        {/* Mobile */}
        <header>
          <nav className="navbar">
            <a href="/">
              <img
                className="logo"
                src={parrotLogo}
                alt="Logo of Vincent Parrot"
              />
            </a>

            {/* Burger Menu (Mobile) */}
            <div className="nav-icons">
              <FontAwesomeIcon
                className="search-font"
                icon={faMagnifyingGlass}
              />
              <div className="burger-font" onClick={toggleBurger}>
                <FontAwesomeIcon icon={faBarsStaggered} />
              </div>
            </div>
            <div style={sideBarStyle()}>
              <div className="burger-sideBar">
                <a href="/">
                  <img
                    className="logo"
                    src={parrotLogo}
                    alt="Logo of Vincent Parrot"
                  />
                </a>
                <FontAwesomeIcon icon={faXmark} />
              </div>
              <ul className="nav-item">
                <a href="/ventes">
                  <li>Ventes</li>
                </a>
                <a href="/avis" className="nav-link">
                  <li>Avis</li>
                </a>
                <a href="/se-connecter">
                  <li>Se connecter</li>
                </a>
              </ul>
            </div>
          </nav>

          {/* Desktop */}
          <nav className="navbar-desktop">
            <div className="nav-links">
              <a href="/ventes" className="nav-link">
                Nos occasions
              </a>
              <a href="/ventes" className="nav-link">
                Entretien
              </a>
              <a href="/ventes" className="nav-link">
                Mécanique
              </a>
              <a href="/ventes" className="nav-link">
                Carrosserie
              </a>
              <a href="#footer" className="nav-link">
                Avis
              </a>
            </div>
            <a href="/">
              <img
                className="logo"
                src={parrotLogo}
                alt="logo of Vincent Parrot"
              ></img>
            </a>
            <div className="nav-search-user">
              <SearchBar
                className="search-bar"
                search={search}
                onSearchChange={setSearch}
              />
              <FontAwesomeIcon
                className="search-font"
                icon={faMagnifyingGlass}
              />
              <a href="/se-connecter">
                <svg
                  className="svg-auth"
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.5 0C7.83266 0 0 7.83266 0 17.5C0 27.1673 7.83266 35 17.5 35C27.1673 35 35 27.1673 35 17.5C35 7.83266 27.1673 0 17.5 0ZM17.5 6.77419C20.9294 6.77419 23.7097 9.55444 23.7097 12.9839C23.7097 16.4133 20.9294 19.1935 17.5 19.1935C14.0706 19.1935 11.2903 16.4133 11.2903 12.9839C11.2903 9.55444 14.0706 6.77419 17.5 6.77419ZM17.5 31.0484C13.3579 31.0484 9.64617 29.1714 7.1623 26.2359C8.48891 23.7379 11.0857 22.0161 14.1129 22.0161C14.2823 22.0161 14.4516 22.0444 14.6139 22.0938C15.5312 22.3901 16.4909 22.5806 17.5 22.5806C18.5091 22.5806 19.4758 22.3901 20.3861 22.0938C20.5484 22.0444 20.7177 22.0161 20.8871 22.0161C23.9143 22.0161 26.5111 23.7379 27.8377 26.2359C25.3538 29.1714 21.6421 31.0484 17.5 31.0484Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </nav>
        </header>
      </>
    );
}


