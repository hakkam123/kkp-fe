import { useRef, useEffect } from 'react';
import { useNavbar } from '../context/NavbarContext';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import '../navbar.css';

import LogoWhite from '../assets/icon/kkp-white.png';
import PolaNavbar from '../assets/images/pola-navbar.svg';

const Navbar = () => {
  const { isNavbarVisible, isLogoVisible } = useNavbar();
  const navRef = useRef();

  useEffect(() => {
    if (isNavbarVisible) {
      gsap.to(navRef.current, {
        yPercent: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out"
      });
    } else {
      gsap.to(navRef.current, {
        yPercent: -100,
        opacity: 0,
        duration: 0.6,
        ease: "power2.in"
      });
    }
  }, [isNavbarVisible]);

  useGSAP(() => {
    gsap.set(navRef.current, {
      yPercent: -100,
      opacity: 0
    });
  }, { scope: navRef });

  return (
    <nav ref={navRef} className="navbar">
      <div
        className="navbar-pattern-bg"
        style={{ backgroundImage: `url(${PolaNavbar})` }}
      ></div>

      <div className="navbar-container">
        <div className="navbar-logo">
          <img
            src={LogoWhite}
            alt="Logo KKP Raja Ampat"
            style={{
              opacity: isLogoVisible ? 1 : 0,
              visibility: isLogoVisible ? 'visible' : 'hidden',
              transition: 'opacity 0.5s ease, visibility 0.5s ease'
            }}
          />
        </div>

        <ul className="navbar-menu">
          <li><a href="#tentang">Tentang</a></li>
          <li><a href="#pengelolaan">Pengelolaan Kawasan</a></li>
          <li><a href="#konservasi">Kawasan Konservasi</a></li>
          <li><a href="#layanan">Layanan</a></li>
          <li><a href="#publikasi">Publikasi</a></li>
          <li><a href="#kontak">Kontak</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;