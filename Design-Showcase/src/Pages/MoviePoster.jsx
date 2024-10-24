import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { Star, Play, Calendar, Clock, Share2, BookOpen, Award, Volume2, VolumeX, ThumbsUp, Twitter, Facebook, Instagram } from 'lucide-react';

import joker1 from '../assets/joker-1.jpg';
import joker2 from '../assets/joker-2.jpg';
import jokerName from '../assets/joker-name.png';
import jokerLogo from '../assets/joker-logo.png';
import jokerExtra1 from '../assets/joker-extra-1.jpg';
import jokerExtra2 from '../assets/joker-extra-2.jpg';
import jokerExtra3 from '../assets/joker-extra-3.jpg';
import jokerBgm from '../assets/joker-bgm.mp3';

const MoviePoster = () => {
    const [isMuted, setIsMuted] = useState(true);
    const [audio] = useState(new Audio(jokerBgm));
  
    useEffect(() => {
      audio.loop = true;
      audio.volume = 0.5;
  
      const playAudio = async () => {
        try {
          await audio.play();
        } catch (error) {
          console.log("Autoplay prevented. Please interact with the page first.");
        }
      };
      playAudio();
        return () => {
        audio.pause();
        audio.currentTime = 0;
      };
    }, [audio]);
  
    useEffect(() => {
      audio.muted = isMuted;
    }, [isMuted, audio]);
    const toggleMute = () => {
      setIsMuted(!isMuted);
    };

  const socialIcons = {
    twitter: Twitter,
    facebook: Facebook,
    instagram: Instagram
  }

  useEffect(() => {
    // Initial setup
    gsap.set("nav a:not(.logo)", { y: -50, opacity: 0 });
    gsap.set(".bg-1", { x: -500, opacity: 0 });
    gsap.set(".bg-2", { x: 500, opacity: 0 });
    gsap.set(".joker", { y: 80, opacity: 0 });
    gsap.set(".upper-text, .lower-text", { y: 10, opacity: 0 });
    gsap.set(".content-section", { y: 50, opacity: 0 });
    gsap.set(".awards-section", { y: 30, opacity: 0 });
    gsap.set(".trailer", { y: 20, opacity: 0 });
    gsap.set(".button-group", { y: 20, opacity: 0 });
    gsap.set(".social-links", { x: 50, opacity: 0 });
    gsap.set(".sound-toggle", { scale: 0, opacity: 0 });

    const tl = gsap.timeline();

    tl.to(".bg-1", {
      x: 0,
      duration: 1.5,
      opacity: 1,
      ease: "power4.out"
    })
    .to(".bg-2", {
      x: 0,
      duration: 1.5,
      opacity: 1,
      ease: "power4.out"
    }, "-=1.5")
    .to("nav a:not(.logo)", {
      y: 0,
      opacity: 1,
      stagger: 0.2,
      duration: 1,
      ease: "power2.out"
    }, "-=1")
    .to(".joker", {
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: "power4.out"
    }, "-=0.5")
    .to(".upper-text, .lower-text", {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out"
    }, "-=1")
    .to(".content-section", {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.5")
    .to(".awards-section", {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out"
    }, "-=0.5")
    .to(".trailer", {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out"
    }, "-=0.5")
    .to(".button-group", {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out"
    }, "-=0.5")
    .to(".social-links", {
      x: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.out"
    }, "-=0.8")
    .to(".sound-toggle", {
      scale: 1,
      opacity: 1,
      duration: 0.5,
      ease: "back.out"
    }, "-=0.5");

  }, []);

  return (
    <div className="min-h-screen w-screen bg-[#050505] overflow-hidden font-[Poppins]">
      <main className="relative flex flex-col h-screen">
        {/* Background Images */}
        <div className="absolute top-0 left-0 bg-1">
          <img src={joker1} alt="background-1" className="h-screen object-contain" />
        </div>
        <div className="absolute top-0 right-0 bg-2">
          <img src={joker2} alt="background-2" className="h-screen object-contain" />
        </div>

        {/* Sound Toggle */}
        <button 
            onClick={toggleMute}
            className="sound-toggle absolute bottom-10 right-80 z-20 bg-white/10 p-2 rounded-full hover:bg-white/20 transition-all"
            aria-label={isMuted ? "Unmute audio" : "Mute audio"}
            >
            {isMuted ? 
                <VolumeX size={20} className="text-white" /> : 
                <Volume2 size={20} className="text-white" />
            }
        </button>

        {/* Social Share Links */}
        <div className="social-links absolute bottom-10 right-8 flex flex-col gap-4 z-20">
            {Object.entries(socialIcons).map(([platform, Icon]) => (
                <button
                key={platform}
                className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-all"
                >
                <Icon size={20} className="text-white" />
                </button>
            ))}
        </div>

        {/* Navigation */}
        <nav className="w-screen flex items-center justify-center gap-[60px] relative z-10">
          <NavLink href="#" text="ABOUT" />
          <NavLink href="#" text="TRAILERS" />
          <a href="#" className="logo">
            <img src={jokerLogo} alt="logo" className="h-20 w-20 object-cover" />
          </a>
          <NavLink href="#" text="GALLERY" />
          <NavLink href="#" text="SHOP" />
        </nav>

        {/* Main Content Section */}
        <section className="w-full flex flex-col items-center text-[#D4D4D4] mt-[50px] gap-[15px] font-['Noto_Sans_Gothic'] relative z-10">
          <div className="upper-text flex items-end gap-[100px] opacity-80 tracking-[2px] text-[13px]">
            <span>JOAQUIN PHOENIX</span>
            <span>OCT 4<sup>TH</sup></span>
          </div>
          
          <div className="joker">
            <img src={jokerName} alt="joker" className="h-[250px]" />
          </div>
          
          <div className="lower-text font-[Poppins] font-[200] tracking-[7px] text-[20px] ml-[10px]">
            PUT ON A HAPPY FACE
          </div>

          {/* Movie Details & Info Section */}
          <div className="content-section mt-8 flex gap-8 items-start">
            {/* Movie Details */}
            <div className="text-white/80 space-y-3">
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>2h 2min</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>2019</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen size={16} />
                <span>Drama, Thriller</span>
              </div>
              <div className="flex items-center gap-2">
                <ThumbsUp size={16} />
                <span>96% Match</span>
              </div>
            </div>

            {/* Awards Section */}
            <div className="awards-section text-white/80 space-y-4 border-l border-white/20 pl-8">
              <div className="flex items-center gap-2">
                <Award size={20} className="text-[#F5C518]" />
                <span>Academy Award - Best Actor</span>
              </div>
              <div className="flex items-center gap-2">
                <Award size={20} className="text-[#F5C518]" />
                <span>Golden Globe - Best Actor</span>
              </div>
              <div className="flex items-center gap-2">
                <Award size={20} className="text-[#F5C518]" />
                <span>BAFTA - Best Actor</span>
              </div>
            </div>

            {/* Synopsis Section */}
            <div className="max-w-md border-l border-white/20 pl-8">
              <p className="text-sm leading-relaxed text-white/80">
                In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. 
                He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face 
                with his alter-ego: the Joker.
              </p>
            </div>
          </div>
        </section>

        {/* Trailers Section */}
        <article className="flex items-center justify-center mt-auto pb-5 relative z-10">
          <Trailer number="01" image={jokerExtra1} scale={false} hasPlay={false} />
          <Trailer number="02" image={jokerExtra2} scale={true} hasPlay={true} />
          <Trailer number="03" image={jokerExtra3} scale={false} hasPlay={false} />
        </article>

        {/* Buttons */}
        <div className="button-group absolute bottom-[50px] left-[100px] flex flex-col items-center gap-[10px] z-10">
          <button className="px-5 py-2.5 font-[Poppins] bg-white border border-[#ffffff10] text-[#310c0c] flex items-center gap-2.5 rounded-[2px] text-xs cursor-pointer hover:bg-gray-100 transition-colors">
            Watch Now <Play size={16} />
          </button>
          <button className="px-5 py-2.5 font-[Poppins] bg-[#F5C518] border border-[#ffffff0c] text-[#310c0c] flex items-center gap-2.5 rounded-[2px] text-xs cursor-pointer hover:brightness-110 transition-all">
            <strong>IMDb</strong> 8.4/10 <Star size={16} />
          </button>
        </div>
      </main>
    </div>
  );
};

const NavLink = ({ href, text }) => (
  <a 
    href={href} 
    className="text-[#D4D4D4] no-underline text-sm font-[200] relative before:content-[''] before:absolute before:h-[40px] before:w-[1px] before:top-[-180%] before:left-[50%] before:translate-x-[-50%] before:bg-[#D4D4D4]"
  >
    {text}
  </a>
);

const Trailer = ({ number, image, scale, hasPlay }) => (
  <div className={`trailer relative w-[250px] h-[120px] border border-[#d4d4d434] rounded-[10px] cursor-pointer transition-all duration-300 hover:brightness-110 ${scale ? 'scale-[1.2] z-10' : ''}`}>
    <img 
      src={image} 
      alt={`trailer-${number}`} 
      className="w-full h-full object-cover rounded-[10px] filter grayscale-[0.7]" 
    />
    <span className="absolute font-[100] text-[#D4D4D4] text-[30px] top-[-25px] left-[30px] z-[100]">
      {number}
    </span>
    {hasPlay && (
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-20">
        <Play size={40} />
      </div>
    )}
  </div>
);

export default MoviePoster;