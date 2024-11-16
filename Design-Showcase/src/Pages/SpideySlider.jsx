import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Menu, ChevronLeft, ChevronRight, ArrowDownCircle, Twitter, Facebook, Youtube } from 'lucide-react';

// Import your images here
import spiderMask from '../assets/spiderman-mask.png';
import spiderHand from '../assets/spiderman-handjpg.png';
import spiderHelmet from '../assets/spiderman-helmet.png';
import whiteLogo from '../assets/white-logo-spiderman.png';
import pinkLogo from '../assets/pink-logo-spiderman.png';
import flag from '../assets/flag.png';

const SpideySlider = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [direction, setDirection] = useState(0);

  const slides = [
    {
      image: spiderMask,
      bg: "bg-[#3281c2]",
      scale: "scale-150",
      logoFilter: true
    },
    {
      image: spiderHand,
      bg: "bg-[#C54542]",
      scale: "scale-100",
      logoFilter: false
    },
    {
      image: spiderHelmet,
      bg: "bg-[#3281c2]",
      scale: "scale-120",
      logoFilter: true
    }
  ];

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    })
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = 2;
      if (nextIndex > 2) nextIndex = 0;
      return nextIndex;
    });
  };

  return (
    <main className="h-screen max-h-screen w-full overflow-hidden relative font-sans">
      {/* Background Logo */}
      <motion.div 
        className="absolute inset-0 w-full h-full z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <motion.img 
          src={pinkLogo} 
          alt="Spider Logo" 
          className="absolute w-[150%] h-[150%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover opacity-30"
          animate={{
            filter: slides[currentIndex].logoFilter 
              ? "invert(8%) sepia(55%) saturate(2056%) hue-rotate(196deg) brightness(95%) contrast(106%)"
              : "none",
            opacity: slides[currentIndex].logoFilter ? 0.2 : 0.3
          }}
          transition={{ duration: 1.5 }}
        />
      </motion.div>

      {/* Main Content */}
      <motion.div 
        className={`relative w-full h-full ${slides[currentIndex].bg}`}
        animate={{ backgroundColor: slides[currentIndex].bg === "bg-[#3281c2]" ? "#3281c2" : "#C54542" }}
        transition={{ duration: 1.5 }}
      >
        {/* Navigation */}
        <nav className="absolute w-full h-24 z-10 px-8 flex items-center text-white">
          <motion.div 
            className="h-16 w-16"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <img src={whiteLogo} alt="Spider-Man Logo" className="h-full w-full object-contain scale-150 pt-2"/>
          </motion.div>
          
          <div className="mx-12 text-xl">
            <Menu />
          </div>
          
          <div className="ml-auto mr-12 flex items-center gap-3 text-xl">
            <img src={flag} alt="Flag" className="h-10 w-10 object-contain" />
            <ArrowDownCircle />
            <span>ENG</span>
          </div>
          
          <button className="text-xl text-white bg-transparent">
            <Search />
          </button>
        </nav>

        {/* Main Slide Content */}
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 180, damping: 25, duration: 0.4 },
              opacity: { duration: 1},
              scale: { duration: 0.6 }
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <motion.img 
              src={slides[currentIndex].image} 
              alt="Spider-Man" 
              className={`absolute h-4/5 right-1/4 object-contain ${slides[currentIndex].scale}`}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
            
            <motion.div 
              className="absolute left-[20%] bottom-1/4 z-10 text-white"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <motion.h2 
                className="text-6xl font-bold mb-2"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
              >
                SPIDER
              </motion.h2>
              <motion.h2 
                className="text-6xl font-bold mb-8"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1.4 }}
              >
                MAN
              </motion.h2>
              <motion.p 
                className="text-xl font-semibold"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1.6 }}
              >
                SUPERHERO
              </motion.p>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="absolute z-10 w-full flex justify-between px-10 top-1/2 -translate-y-1/2">
          <motion.button
            className="text-white bg-transparent cursor-pointer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
            onClick={() => paginate(-1)}
          >
            <ChevronLeft size={60} />
          </motion.button>
          
          <motion.button
            className="text-white bg-transparent cursor-pointer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
            onClick={() => paginate(1)}
          >
            <ChevronRight size={60} />
          </motion.button>
        </div>

        {/* Thumbnails */}
        <div className="absolute bottom-16 right-8 z-10 flex gap-4">
          {slides.map((_, index) => (
            <motion.div
              key={index}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: index * 0.3 }}
              whileHover={{ scale: 1.1 }}
              className={`w-20 h-20 cursor-pointer overflow-hidden ${
                index === 1 ? "bg-[#832e2c]" : "bg-[#266598]"
              } relative`}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
            >
              <img 
                src={slides[index].image} 
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-contain"
              />
              <div className="absolute -top-4 left-1/3 text-white text-xl font-bold opacity-70">
                {String(index + 1).padStart(2, '0')}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Links */}
        <motion.div 
            className="absolute bottom-16 left-[20%] z-10 flex gap-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
            >
            {[Facebook, Youtube, Twitter].map((Icon, index) => (
                <motion.a
                key={index}
                href="#"
                className="w-12 h-12 grid place-content-center rounded-full text-white no-underline bg-white/10"
                whileHover={{ scale: 1.2, backgroundColor: 'rgba(255,255,255,0.2)' }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                <Icon size={24} /> {/* Use the imported icon components here */}
                </motion.a>
            ))}
            </motion.div>
      </motion.div>
    </main>
  );
};

export default SpideySlider;