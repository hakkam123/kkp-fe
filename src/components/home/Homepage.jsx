import React, { useState, useCallback } from 'react';
import { useNavbar } from '../../context/NavbarContext';
import { useHomePageParallax } from '../../hooks/homePageParallax';
import '../../App.css';
import {
  Phone
} from 'lucide-react';

import InfoCard from '../ui/InfoCard';
import Button from '../ui/Button';
import DropdownCard from '../ui/DropdownCard';

import heroVideo from '../../assets/video/hero2.MP4';
import perairaanVideo from '../../assets/video/perairan2.MP4';
import infoSectionVideo from '../../assets/video/info2.MP4';
import callCenterVideo from '../../assets/video/callcenter2.MP4';
import statsSectionVideo from '../../assets/video/stats2.MP4';
import ctaSection from '../../assets/images/cta-section.jpeg';
import missionVideo from '../../assets/video/mission2.MP4';
// import maskLayer2 from '../../assets/images/awan_resized2.png';

import papuaBarat from '../../assets/icon/papuabaratdaya-logo.png';
import kkpNormal from '../../assets/icon/kkp-normal.png';
import iconCoral from '../../assets/icon/coral.svg';
import iconFish from '../../assets/icon/coral-fish.svg';
import iconDolphin from '../../assets/icon/dolphin.svg';
import iconJellyfish from '../../assets/icon/jellyfish.svg';
import iconTurtle from '../../assets/icon/turtle.svg';
import iconKawasanTerjaga from '../../assets/icon/mission-icon/kawasan-terjaga.svg';
import iconTerumbuKarang from '../../assets/icon/mission-icon/coral.svg';
import iconIkanKarang from '../../assets/icon/mission-icon/coral-fish.svg';
import iconPariManta from '../../assets/icon/mission-icon/pari-manta.svg';
import iconHiuBerjalan from '../../assets/icon/mission-icon/hiu-berjalan.svg';
import iconNilaiKami from '../../assets/icon/mission-icon/nilai-kami.svg';
import iconRams from '../../assets/icon/mission-icon/rams.svg';
import iconJuaraKami from '../../assets/icon/mission-icon/juara-kami.svg';
import dropdownIcon1 from '../../assets/icon/dropdown-icon/dropdown-1.svg';
import dropdownIcon2 from '../../assets/icon/dropdown-icon/dropdown-2.svg';
import dropdownIcon3 from '../../assets/icon/dropdown-icon/dropdown-3.svg';
import dropdownIcon4 from '../../assets/icon/dropdown-icon/dropdown-4.svg';
import hoverKawasanTerjaga from '../../assets/images/hover/kawasanterjaga.jpeg';
import hoverTerumbuKarang from '../../assets/images/hover/terumbukarang.jpeg';
import hoverIkanKarang from '../../assets/images/hover/ikankarang.jpeg';
import hoverPariManta from '../../assets/images/hover/parimanta.jpeg';
import hoverHiuBerjalan from '../../assets/images/hover/hiuberjalan.jpeg';
import hoverNilaiKami from '../../assets/images/hover/nilaikami.jpeg';
import hoverRams from '../../assets/images/hover/rams.png';
import hoverJuaraKami from '../../assets/images/hover/juarakami.jpeg';

const HomePage = () => {
  const { setIsNavbarVisible, setLogoVariant, setIsLogoVisible } = useNavbar();

  const [animatePerairanCards, setAnimatePerairanCards] = useState(false);
  const [animateInfoCards, setAnimateInfoCards] = useState(false);

  const triggerCardAnimation = useCallback((section) => {
    if (section === 'perairan') {
      setAnimatePerairanCards(true);
    } else if (section === 'info') {
      setAnimateInfoCards(true);
    }
  }, []);

  const container = useHomePageParallax(setIsNavbarVisible, setLogoVariant, triggerCardAnimation, setIsLogoVisible);

  const handleScrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  const statsData = [
    { icon: iconKawasanTerjaga, value: "75%", label: "Kawasan Terjaga", isImage: true, hoverImage: hoverKawasanTerjaga },
    { icon: iconTerumbuKarang, value: "558", label: "Terumbu Karang", isImage: true, hoverImage: hoverTerumbuKarang },
    { icon: iconIkanKarang, value: "1600", label: "Ikan Karang", isImage: true, hoverImage: hoverIkanKarang },
    { icon: iconPariManta, value: "200", label: "Pari Manta", isImage: true, hoverImage: hoverPariManta },
    { icon: iconHiuBerjalan, value: "50", label: "Hiu Berjalan", isImage: true, hoverImage: hoverHiuBerjalan },
    { icon: iconNilaiKami, value: "8", label: "Nilai Kami", isImage: true, hoverImage: hoverNilaiKami },
    { icon: iconRams, value: "267", label: "Raja Ampat\nMooring System", isImage: true, hoverImage: hoverRams },
    { icon: iconJuaraKami, value: "10rb", label: "Juara Kami", isImage: true, hoverImage: hoverJuaraKami },
  ];

  const infoCardsData = [
    { icon: iconCoral, value: "558", label: "Terumbu Karang", isImage: true },
    { icon: iconFish, value: "1600", label: "Jenis Ikan Karang", isImage: true },
    { icon: iconDolphin, value: "669", label: "Jenis Moluska", isImage: true },
    { icon: iconJellyfish, value: "15", label: "Mamalia Laut", isImage: true },
    { icon: iconTurtle, value: "5", label: "Jenis Penyu", isImage: true },
  ];

  return (
    <div ref={container} className="mask-main-container">
      <div className="mask-wrapper">

        <div className="hero-video-section relative w-full h-screen overflow-hidden z-1">
          {/* Video Background */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="hero-video absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>

          {/* FIXED: Removed 'mt-10' to ensure true vertical centering */}
          <div className="hero-overlay absolute inset-0 flex items-center justify-center z-10">
            <div className="hero-text-content flex flex-col items-center justify-center text-center w-full max-w-5xl px-4">

              {/* 1. HERO MAIN TITLE */}
              <h1 className="hero-title-main font-semibold text-white text-lg md:text-xl lg:text-2xl mb-4 tracking-wide">
                Kawasan Konservasi di Perairan Kepulauan
              </h1>

              {/* 2. HERO ANIMATED */}
              <h2 className="hero-title-animated font-butler font-extrabold text-white text-[8rem] md:text-[8rem] lg:text-[10rem] leading-none mb-12 tracking-tight">
                RAJA AMPAT
              </h2>

              <div className="hero-buttons-wrapper flex flex-row gap-6 items-center justify-center">
                <Button
                  variant="primaryDark"
                  className="hero-selengkapnya-btn"
                >
                  Beli TJL
                </Button>
                <Button
                  variant="glass"
                  className="hero-selengkapnya-btn min-w-40 px-8"
                  onClick={handleScrollToContent}
                >
                  Selengkapnya
                </Button>
              </div>

            </div>
          </div>
        </div>
        <div className="perairan-section absolute inset-0 z-20 flex items-center justify-center overflow-hidden">
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-1">
            <source src={perairaanVideo} type="video/mp4" />
          </video>
          <div className="relative z-2 w-full h-full flex flex-col items-center justify-center px-8">

            {/* 4. PERAIRAN TITLE*/}
            <h2 className="perairan-title font-butler font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl text-white text-[3.5rem]! text-center leading-tight z-21 px-4">
              Raja Ampat adalah 'rumah' <br /> bagi...
            </h2>

            <div className="info-cards-grid opacity-0 translate-y-12 relative z-20 w-full max-w-6xl">
              <div className="flex flex-wrap justify-center gap-6">
                <div className="flex gap-6 justify-center w-full">
                  {/* 6. INFO CARDS */}
                  {infoCardsData.slice(0, 3).map((card, index) => (
                    <InfoCard key={index} {...card} shouldAnimate={animatePerairanCards} />
                  ))}
                </div>
                {infoCardsData.length > 3 && (
                  <div className="flex gap-6 justify-center w-full">
                    {infoCardsData.slice(3, 5).map((card, index) => (
                      <InfoCard key={index + 3} {...card} shouldAnimate={animatePerairanCards} />
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* 5. PERAIRAN TITLE 2*/}
            <h2 className="perairan-title2 font-butler font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl text-white text-[3.5rem]! text-center leading-tight z-21 px-4 opacity-0 invisible">
              'Jantungnya' Segi Tiga <br /> Terumbu Karang <br /> Dunia.
            </h2>

          </div>
        </div>

        <div className="info-section absolute inset-0 z-30 flex items-center justify-center overflow-hidden">
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-1">
            <source src={infoSectionVideo} type="video/mp4" />
          </video>
          <div className="relative z-2 w-full h-full flex items-center justify-center px-8">
            <div className="info-cards-container w-full max-w-7xl">
              <div className="flex flex-col gap-6">
                <div className="flex gap-6 justify-center w-full font-butler">
                  {statsData.slice(0, 4).map((card, index) => (
                    <InfoCard key={index} {...card} shouldAnimate={animateInfoCards} />
                  ))}
                </div>
                <div className="flex gap-6 justify-center w-full font-butler font-bold">
                  {statsData.slice(4, 8).map((card, index) => (
                    <InfoCard key={index + 4} {...card} shouldAnimate={animateInfoCards} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="stats-section absolute inset-0 z-40 flex items-center justify-center overflow-hidden">
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-1">
            <source src={statsSectionVideo} type="video/mp4" />
          </video>
          <div className="relative z-2 w-full h-full flex flex-col justify-center px-12 py-16">
            <div className="w-full max-w-7xl mx-auto flex flex-col gap-8">

              {/* 7. STATS CONTENT 1 -> BOLD (700) */}
              <div className="stats-content-1 flex justify-start">
                <div className="text-left text-white">
                  <h2 className="font-butler font-bold text-[3rem] leading-none mb-2">
                    70%
                  </h2>
                  <p className="text-xl font-normal leading-relaxed">
                    luas lautan Raja Ampat adalah<br />
                    kawasan konservasi perairan.
                  </p>
                </div>
              </div>

              {/* 7. STATS CONTENT 2*/}
              <div className="stats-content-2 flex justify-end">
                <div className="text-right text-white">
                  <h2 className="font-normal font-inter text-xl leading-none mb-2 underline underline-offset-2">
                    Kami mengelola
                  </h2>
                  <h2 className="font-butler font-bold text-[3rem] leading-none mb-2">
                    1,9 Juta Hektare Kawasan
                  </h2>
                  <p className="text-xl font-normal leading-relaxed">
                    ada di dalam jejaring kawasan yang kami kelola.
                  </p>
                </div>
              </div>

              {/* 7. STATS CONTENT 3*/}
              <div className="stats-content-3 flex justify-start">
                <div className="text-left text-white">
                  <h2 className="font-normal text-xl leading-none mb-2">
                    Sebanyak
                  </h2>
                  <h2 className="font-butler font-bold text-[3rem] leading-none mb-2 underline underline-offset-4">
                    7 Area
                  </h2>
                  <p className="text-xl font-normal leading-relaxed">
                    ada di dalam jejaring kawasan yang kami kelola.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="conservation-section absolute inset-0 z-50 flex items-center justify-center overflow-hidden">
          <img src={ctaSection} alt="Conservation background" className="absolute inset-0 w-full h-full object-cover z-1" />
          <div className="absolute inset-0 bg-black/40 z-2"></div>

          <div className="conservation-content relative z-10 flex flex-col items-center justify-center text-center text-white px-4 max-w-4xl mx-auto">
            {/* 8. CONSERVATION */}
            <h2 className="font-butler font-extrabold text-4xl md:text-5xl mb-6">
              Mari mulai petualanganmu!
            </h2>

            <p className="text-base md:text-lg leading-relaxed mb-8 max-w-8xl">
              Kontribusimu adalah <span className="underline underline-offset-4">mandat bagi kami</span><br />
              <p>untuk melindungi, mengelola, dan mengatur pemanfaatan berkelanjutan</p>
              <p>dari Jejaring KKP di Kepulauan Raja Ampat</p>
              <p>Untuk sekarang dan generasi mendatang.</p>
              <p>Untuk Indonesia, dan dunia.</p>
            </p>
            <div className="flex gap-4 mb-8 w-full justify-center">
              <Button variant="primaryDark" className="conservation-hubungi-btn">Mari Berpetualang</Button>
              <Button variant="glass" className="conservation-hubungi-btn">Hubungi kami</Button>
            </div>

            <p className="text-sm md:text-base">
              Lokasi pembelian Kartu Tarif Jasa Lingkungan di <span className="underline underline-offset-4">Kota Sorong</span> dan <span className="underline underline-offset-4">Kabupaten Raja Ampat</span>
            </p>
          </div>
        </div>

        <div className="mission-section absolute inset-0 z-60 flex items-center justify-center overflow-hidden">
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-1">
            <source src={missionVideo} type="video/mp4" />
          </video>

          <div className="mission-content relative z-10 flex flex-col items-center justify-center text-center text-white px-4 w-full max-w-5xl mx-auto">
            {/* 9. MISSION CONTENT H2 -> EXTRABOLD (800) */}
            <h2 className="font-butler font-extrabold text-xl md:text-2xl lg:text-3xl mb-8 leading-tight">
              Bagi kami, ini lebih dari 'sekedar pekerjaan';<br />
              ini adalah cita-cita untuk merawat masa depan.
            </h2>

            <div className="flex flex-col gap-4 w-full items-center">
              <DropdownCard icon={dropdownIcon1} isImage={true} text="Mulai dari pengawasan berbasis masyarakat - Jaga Laut" highlightText="Jaga Laut">
                <p className='text-justify'>Jaga Laut adalah aktivitas rutin mendengar, melihat dan melaporkan segala aktivitas pemanfaatan pariwisata maupun perikanan di di dalam KKP Kepulauan Raja Ampat. Jaga Laut diselenggarakan minimal sebanyak 8 kali setiap bulannya. Anggota Tim Jaga Laut pada umumnya terdiri dari 5 personil di setiap kawasan, dan merupakan anggota masyarakat lokal Raja Ampat.</p>
              </DropdownCard>
              <DropdownCard icon={dropdownIcon2} isImage={true} text="Mengatur pelaku pariwisata, pengunjung, dan aktivitas pariwisata," highlightText="pariwisata">
                <div className="space-y-4">
                  <p className='text-justify'>Salah satu tugas Tim Jaga Laut adalah mengenai pariwisata bahari yang dilakukan pengunjung dan penyelenggara wisata di dalam KKP Kepulauan Raja Ampat agar aktivitas pemanfaatan dari sektor ini dapat terus dilakukan tanpa mengganggu, apalagi sampai merusak, keutuhan ekosistem pesisir dan laut.</p>
                  <p >Baca buku ini sebelum kamu mengunjungi Raja Ampat!</p>
                  <Button variant="primaryDark" className="mt-2">
                    Unduh Buku Etika Berwisata di Raja Ampat
                  </Button>
                  <p className='text-justify mt-4'>Seiring dengan berkembangnya industri pariwisata di Raja Ampat, bersama-sama dengan pemerintah di beragam tingkatan dan pemangku kepentingan lain kami mengembangkan beragam inisiatif berdasarkan prinsip-prinsip pariwisata berkelanjutan, mulai dari Sistem Pengendalian dan Pengawasan (Sispandalwas) pariwisata dan Raja Ampat Mooring System (RAMS).</p>
                </div>
              </DropdownCard>
              <DropdownCard
                icon={dropdownIcon3}
                isImage={true}
                text="Mengawasi aktivitas dan mengelola sumber daya perikanan,"
                highlightText="sumber daya perikanan"
              >
                <div className="space-y-4">
                  <p className='text-justify'>
                    Sebagai pengelola kawasan kami mengawasi segala aktivitas pemanfaatan perikanan yang dilakukan di dalam KKP Kepulauan Raja Ampat, dengan fokus umum kepada aktivitas perikanan yang ilegal, tidak dilaporkan, dan tidak diatur (Illegal, Unreported, and Unregulated Fishing – IUU Fishing), dan pengumpulan data pemanfaatan perikanan yang menjadi bagian dari pemantauan pemanfaatan sumber daya (Resources Use Monitoring atau RUM).
                  </p>
                  <p className='text-justify'>
                    Selain itu, terdapat aturan-aturan perikanan khusus yang hanya berlaku dan ditegakkan di dalam KKP Kepulauan Raja Ampat saja, seperti larangan penggunaan kapal ikan jenis cantrang dan bagan, kapal perikanan yang tidak boleh melebihi 2 GT, larangan beberapa alat tangkap perikanan seperti rawai, insang tancap (gill net) dan pukat cincin (purse seine), hingga larangan beberapa aktivitas perikanan seperti menangkap ikan hias dan aktivitas tambak.
                  </p>
                  <p className='text-justify'>
                    Untuk keterangan lebih terperinci mengenai apa yang boleh dan tidak boleh dilakukan di KKP Kepulauan Raja Ampat, silakan klik di sini.
                  </p>
                </div>
              </DropdownCard>

              <DropdownCard
                icon={dropdownIcon4}
                isImage={true}
                text="Hingga memantau tingkat kesehatan tempat tinggal ragam biota laut."
                highlightText="ragam biota laut"
              >
                <p className='text-justify'>
                  Salah satu tugas utama kami sebagai pengelola kawasan adalah untuk memantau kualitas ekologis melalui berbagai upaya rutin yang pada akhirnya akan menentukan kualitas dari jasa lingkungan yang disediakan oleh KKP Kepulauan Raja Ampat bagi beragam pemanfaat kawasan, seperti anggota masyarakat lokal, pekerja industri perikanan dan pariwisata, dan tentunya pengunjung.
                </p>
                <p className='text-justify'>
                  Bekerja sama dengan pemerintah antar-tingkatan, akademisi, peneliti, organisasi non-pemerintah, dan masyarakat kami menyelenggarakan pemantauan kesehatan terumbu karang (Reef Health Monitoring – RHM), status populasi spesies penting seperti pari manta, hiu belimbing, hiu berjalan, dan penyu, serta mengembangkan inisiatif lintas-sektor seperti peneliti warga (Citizen Science) dan mitra-mitra unggulan (Juara Kami).
                </p>
                <p className='text-justify'>
                  Klik di sini untuk melihat ragam data ilmiah yang kami miliki.</p>
              </DropdownCard>
            </div>
          </div>
        </div>

        <div className="callcenter-section absolute inset-0 z-70 flex items-center justify-center overflow-hidden">
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-1">
            <source src={callCenterVideo} type="video/mp4" />
          </video>

          <div className="callcenter-content relative z-10 flex flex-col items-center justify-center text-center text-white px-4 w-full max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-6 mb-6">
              <img src={papuaBarat} alt="Papua Barat Daya" className="h-20 w-auto" />
              <img src={kkpNormal} alt="KKP" className="h-20 w-auto" />
            </div>
            <div className="flex items-center gap-3 mb-8">
              <Phone size={40} strokeWidth={1.5} />
              <h2 className="font-butler font-extrabold text-4xl md:text-5xl">
                Call Center
              </h2>
            </div>
            <div className="space-y-2 text-base md:text-lg">
              <p>Bagi kamu yang berminat terlibat lebih dalam bisa <a href="#" className="underline underline-offset-4 hover:text-white/80">klik di sini</a>.</p>
              <p>Ingin tahu untuk apa kontribusimu dipergunakan? <a href="#" className="underline underline-offset-4 hover:text-white/80">Silakan pantau kerja kami di lapangan</a>.</p>
              <p>Kalau kamu punya pertanyaan. Atau ingin memberi masukan. Silakan <a href="#" className="underline underline-offset-4 hover:text-white/80">hubungi kami di sini</a>.</p>
            </div>
          </div>
        </div>

        <div className="mask-svg-layer">
          <svg viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" className="mask-svg">
            <defs>
              <mask id="textMask">
                <rect width="1920" height="1080" fill="white" />

                {/* 3. MASK SVG TEXT: KKP (BOLD/500) & RAJA AMPAT (EXTRABOLD/700+) */}
                <text
                  x="50%"
                  y="50%"
                  className="mask-group"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="black"
                  /* Kita set style manual untuk font Butler di SVG */
                  style={{ fontFamily: 'Butler, serif' }}
                >
                  {/* "KKP Kepulauan" -> BOLD */}
                  <tspan x="50%" dy="-0.2em" fontSize="100" fontWeight="700">KKP Kepulauan</tspan>

                  {/* "RAJA AMPAT" -> EXTRABOLD */}
                  <tspan x="50%" dy="1em" fontSize="180" fontWeight="800">RAJA AMPAT</tspan>
                </text>
              </mask>
            </defs>
            <rect width="1920" height="1080" fill="rgba(255, 255, 255, 0.92)" mask="url(#textMask)" />
          </svg>
        </div>

        <div className="transition-bar-top"></div>
      </div>
    </div>
  );
};

export default HomePage;