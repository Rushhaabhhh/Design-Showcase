import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, Camera, Car, ShoppingBag, Watch, ArrowRight, Github, Linkedin } from 'lucide-react';

const slides = [
  { 
    title: 'Movie Posters', 
    content: 'Explore stunning movie poster designs that capture the essence of storytelling.',
    icon: <Camera className="w-8 h-8 mb-4" />,
    color: 'from-purple-500 to-pink-500'
  },
  { 
    title: 'Car Designs', 
    content: 'Discover innovative automotive designs that push the boundaries of engineering.',
    icon: <Car className="w-8 h-8 mb-4" />,
    color: 'from-blue-500 to-cyan-500'
  },
  { 
    title: 'Fashion Gallery', 
    content: 'Experience the latest trends in fashion with our curated collection.',
    icon: <ShoppingBag className="w-8 h-8 mb-4" />,
    color: 'from-green-500 to-emerald-500'
  },
  { 
    title: 'Luxury Timepieces', 
    content: 'Admire the craftsmanship of premium watch designs.',
    icon: <Watch className="w-8 h-8 mb-4" />,
    color: 'from-yellow-500 to-orange-500'
  }
];

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const navVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col relative overflow-hidden">
      {/* Animated Background Gradient */}
      <motion.div 
        className={`absolute inset-0 bg-gradient-to-br ${slides[activeIndex].color} opacity-10`}
        animate={{ opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      {/* Header */}
      <header className="relative z-50 flex justify-between items-center p-6 bg-gray-900/50 backdrop-blur-md">
        <motion.h1 
          className="text-3xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Design<span className="text-blue-500">Forge</span>
        </motion.h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['About', 'Gallery', 'Contact'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative group"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-lg">{item}</span>
              <motion.span 
                className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              className="absolute top-full right-0 w-64 bg-gray-800 p-6 rounded-l-lg md:hidden"
              initial="closed"
              animate="open"
              exit="closed"
              variants={navVariants}
            >
              {['About', 'Gallery', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block py-3 px-4 hover:bg-gray-700 rounded-lg transition-colors"
                  whileHover={{ x: 10 }}
                >
                  {item}
                </motion.a>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section className="relative flex-1 flex flex-col items-center justify-center text-center p-10 md:p-20">
        <motion.h2
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Crafting Digital <span className="text-blue-500">Experiences</span>
        </motion.h2>
        
        <motion.p 
          className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Explore a showcase of innovative designs across multiple domains
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <motion.a
            href="#gallery"
            className="group flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Gallery
            <motion.span
              initial={{ x: 0 }}
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.span>
          </motion.a>
        </motion.div>
      </section>

      {/* Featured Designs Section */}
      <section id="gallery" className="relative py-20 px-6 md:px-10">
        <motion.h3 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {slides.map((slide, index) => (
            <motion.div
              key={index}
              className="group relative bg-gray-800 p-6 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.1 }}
              />
              {slide.icon}
              <h4 className="text-xl font-bold mb-3">{slide.title}</h4>
              <p className="text-gray-400">{slide.content}</p>
              <ChevronRight className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gray-800/50 backdrop-blur-md py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © 2024 DesignForge. Crafted with passion
          </p>
          <div className="flex gap-4">
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;