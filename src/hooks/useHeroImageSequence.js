import { useEffect, useRef, useState } from 'react';

// 1. Ambil semua gambar dari folderassets
const heroImages = import.meta.glob('../assets/images/background/hero-section/HERO_*.jpg', { eager: true });

// 2. Sortir gambar berdasarkan angka pada nama file
const sortedImageUrls = Object.keys(heroImages)
  .sort((a, b) => {
    const numA = parseInt(a.match(/HERO_(\d+)/)[1]);
    const numB = parseInt(b.match(/HERO_(\d+)/)[1]);
    return numA - numB;
  })
  .map(key => heroImages[key].default);

const TOTAL_FRAMES = sortedImageUrls.length;

export const useHeroImageSequence = (canvasRef) => {
  const imagesRef = useRef([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const contextRef = useRef(null);
  const currentProgressRef = useRef(0);

  /**
   * Fungsi untuk menggambar frame berdasarkan progress (0 - 1)
   */
  const renderFrame = (progress) => {
    // Pastikan progress berada di antara 0 dan 1
    const safeProgress = Math.min(Math.max(0, progress), 1);
    currentProgressRef.current = safeProgress;

    const frameIndex = Math.floor(safeProgress * (TOTAL_FRAMES - 1));
    const img = imagesRef.current[frameIndex];
    const context = contextRef.current;
    const canvas = canvasRef.current;

    if (!img || !context || !canvas) return;

    // Bersihkan canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Logika Aspect Ratio (Cover Effect)
    const imgAspect = img.width / img.height;
    const canvasAspect = canvas.width / canvas.height;
    let drawWidth, drawHeight, drawX, drawY;

    if (canvasAspect > imgAspect) {
      drawWidth = canvas.width;
      drawHeight = canvas.width / imgAspect;
      drawX = 0;
      drawY = (canvas.height - drawHeight) / 2;
    } else {
      drawHeight = canvas.height;
      drawWidth = canvas.height * imgAspect;
      drawX = (canvas.width - drawWidth) / 2;
      drawY = 0;
    }

    context.drawImage(img, drawX, drawY, drawWidth, drawHeight);
  };

  /**
   * Effect 1: Preload semua gambar ke dalam memori
   */
  useEffect(() => {
    let loadedCount = 0;
    const images = [];

    const onImageLoad = () => {
      loadedCount++;
      if (loadedCount === TOTAL_FRAMES) {
        imagesRef.current = images;
        setImagesLoaded(true);
      }
    };

    sortedImageUrls.forEach((src, index) => {
      const img = new Image();
      img.src = src;
      img.onload = onImageLoad;
      img.onerror = () => {
        console.error(`Gagal memuat gambar: ${src}`);
        onImageLoad(); // Tetap hitung agar tidak stuck
      };
      images[index] = img;
    });

    return () => {
      images.forEach(img => {
        img.onload = null;
        img.onerror = null;
      });
    };
  }, []);

  /**
   * Effect 2: Setup Konteks Canvas & Handle Resize
   */
  useEffect(() => {
    if (!imagesLoaded || !canvasRef.current) return;

    const canvas = canvasRef.current;
    contextRef.current = canvas.getContext('2d');

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // Re-render frame terakhir saat resize agar gambar tidak hilang/distorsi
      renderFrame(currentProgressRef.current);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Render frame pertama (0)
    renderFrame(0);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [imagesLoaded, canvasRef]);

  // Mengembalikan status loaded dan fungsi kontrol untuk digunakan di useHomePageParallax
  return { 
    imagesLoaded, 
    renderFrame, 
    totalFrames: TOTAL_FRAMES 
  };
};

export default useHeroImageSequence;