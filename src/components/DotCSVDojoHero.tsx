
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

type DotCSVDojoHeroProps = {
  mainTitle?: string;
  rotatingTexts?: string[];
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
};

export const DotCSVDojoHero: React.FC<DotCSVDojoHeroProps> = ({
  mainTitle = "¡Desata tu Guerrero IA Interior!",
  rotatingTexts = ["Derrota Bugs", "Compila Patadas", "Optimiza tu Ki"],
  subtitle = "El primer dojo que combina Kung Fu y programación para afrontar los desafíos de la IA.",
  ctaText = "¡Inscríbete Ya!",
  ctaLink = "#enrollment"
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length);
    }, 2000);
    
    return () => clearInterval(interval);
  }, [rotatingTexts.length]);

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex flex-col justify-center items-center px-4 py-16">
      <InteractiveDotBackground />
      <div className="container max-w-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="lg:w-1/2">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-light-text mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {mainTitle}
            </motion.h1>

            <motion.div 
              className="text-2xl md:text-3xl font-bold text-tech-neon-green h-12 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <RotatingText texts={rotatingTexts} currentIndex={currentTextIndex} />
            </motion.div>

            <motion.p 
              className="text-lg text-light-text mb-8 max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {subtitle}
            </motion.p>

            <motion.a
              href={ctaLink}
              className="inline-block bg-kungfu-red hover:bg-kungfu-red-darker text-white font-bold py-3 px-8 rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:scale-105 shiny-border"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              whileHover={{ y: -5 }}
              whileTap={{ y: 0 }}
            >
              {ctaText}
            </motion.a>
          </div>

          <motion.div 
            className="lg:w-2/5 flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <div className="relative w-full h-full aspect-square max-w-lg">
              <div className="w-full h-full rounded-xl overflow-hidden shiny-border">
                <div className="w-full h-full bg-subtle-gray flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="text-6xl mb-2">🥋</div>
                    <p className="text-light-text">Carlos Santana (DotCSV) en posición de combate</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const RotatingText: React.FC<{ texts: string[]; currentIndex: number }> = ({ texts, currentIndex }) => {
  return (
    <div className="relative h-full">
      {texts.map((text, index) => (
        <motion.div
          key={text}
          className="absolute inset-0 flex items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: currentIndex === index ? 1 : 0, 
            y: currentIndex === index ? 0 : 20 
          }}
          transition={{ duration: 0.3 }}
        >
          {text}
        </motion.div>
      ))}
    </div>
  );
};

const InteractiveDotBackground: React.FC = () => {
  const [dots, setDots] = useState<Array<{ x: number; y: number; size: number; color: string; delay: number; }>>([]);

  useEffect(() => {
    const generateDots = () => {
      const newDots = [];
      const numberOfDots = Math.floor(window.innerWidth / 25);
      
      for (let i = 0; i < numberOfDots; i++) {
        newDots.push({
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 8 + 4,
          color: Math.random() > 0.5 ? 'kungfu-red' : 'tech-neon-green',
          delay: Math.random() * 5
        });
      }
      
      setDots(newDots);
    };
    
    generateDots();
    window.addEventListener('resize', generateDots);
    
    return () => window.removeEventListener('resize', generateDots);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {dots.map((dot, index) => (
        <motion.div
          key={index}
          className={`dot bg-${dot.color}`}
          style={{
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.8, 0.2, 0.8],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: dot.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default DotCSVDojoHero;
