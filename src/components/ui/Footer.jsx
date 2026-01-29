import React from 'react';
import Button from './Button';
import logo from '../../assets/icon/kkp-white.png';
import logoPapua from '../../assets/icon/papuabaratdaya-logo.png';

const Footer = () => {
  const navLinks = [
    { label: 'Tentang', href: '#' },
    { label: 'Pengelolaan Kawasan', href: '#' },
    { label: 'Kawasan Konservasi', href: '#' },
    { label: 'Layanan', href: '#' },
    { label: 'Publikasi', href: '#' },
    { label: 'Kontak', href: '#' },
  ];

  return (
    <footer className="footer-section bg-raja-ampat text-white py-10 px-6 md:px-12 lg:px-20">
      {/* Top Section - CTA */} 
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-0">
          Siap untuk Menjelajahi<br />
          Raja Ampat?
        </h2>
        <div className="flex gap-4">
          <Button variant="primaryDark">
            Beli TJL
          </Button>
          <Button variant="outline">
            Selengkapnya
          </Button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {/* Logo & Address */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <img 
                src={logoPapua} 
                alt="Logo Papua Barat Daya" 
                className="h-16 w-auto object-contain"
              />
              <img 
                src={logo} 
                alt="Logo BLUD UPTD" 
                className="h-16 w-auto object-contain"
              />
            </div>
          </div>
          
          <div className="space-y-1 text-sm">
            <p className="font-semibold">
              Kantor Induk BLUD UPTD Pengelolaan KKP Kepulauan Raja Ampat
            </p>
            <p className="text-white/80">
              Jl. Yos Sudarso<br />
              Distrik Kota Waisai, Kabupaten Raja Ampat<br />
              Papua Barat Daya (98482)
            </p>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="space-y-3">
          {navLinks.map((link, index) => (
            <a 
              key={index}
              href={link.href}
              className="block text-sm hover:text-white/80 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Contact Info */}
        <div className="space-y-3 text-sm">
          <a 
            href="mailto:environmentalfee.r4@gmail.com" 
            className="block hover:text-white/80 transition-colors"
          >
            environmentalfee.r4@gmail.com
          </a>
          <a 
            href="tel:082134059338" 
            className="block hover:text-white/80 transition-colors"
          >
            0821-3405-9338
          </a>
          <p className="text-white/60 pt-4">
            Copyright © 2024
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
