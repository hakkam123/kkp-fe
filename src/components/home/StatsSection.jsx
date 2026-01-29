import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../App.css';
import { 
  ShieldCheck, 
  Waves, 
  Fish, 
  Wind, 
  Navigation, 
  Star, 
  Anchor, 
  Users 
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const statsData = [
  { icon: ShieldCheck, value: "75%", label: "Kawasan Terjaga" },
  { icon: Waves, value: "558", label: "Terumbu Karang" },
  { icon: Fish, value: "1600+", label: "Ikan Karang" },
  { icon: Wind, value: "200+", label: "Pari" },
  { icon: Navigation, value: "50", label: "Hiu berjalan" },
  { icon: Star, value: "8", label: "Nilai kami" },
  { icon: Anchor, value: "267", label: "RAMS aktif" },
  { icon: Users, value: "10rb+", label: "Pendukung" },
];

const StatCard = ({ value, label }) => (
  <div className="stat-card-item">
    <div className="stat-icon">
      <Icon size={48} strokeWidth={1.5} />
    </div>
    <h3 className="stat-value">{value}</h3>
    <p className="stat-label">{label}</p>
  </div>
);

const StatsSection = () => {
  const sectionRef = useRef();

  useGSAP(() => {
    // Animasi cards muncul
    gsap.from(".stat-card-item", {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".stats-grid",
        start: "top 80%",
      }
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="stats-section-wrapper">
      {/* Stats Content */}
      <div className="stats-section-content">
        <div className="stats-grid">
          {statsData.map((stat, index) => (
            <StatCard 
              key={index}
              Icon={stat.icon}
              value={stat.value}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;