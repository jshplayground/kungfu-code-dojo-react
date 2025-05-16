"use client";

import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import Floating, { FloatingElement } from "@/components/ui/parallax-floating";
const ParallaxHeader = () => {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    animate("img", {
      opacity: [0, 1]
    }, {
      duration: 0.5,
      delay: stagger(0.15)
    });
  }, []);
  return <div className="flex w-full min-h-[110vh] justify-center items-center bg-transparent overflow-hidden relative" ref={scope}>
      <motion.div className="z-50 text-center space-y-6 items-center flex flex-col px-4 relative" initial={{
      opacity: 0,
      y: 10
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.88,
      delay: 0.5
    }}>
        <h1 className="text-4xl md:text-6xl lg:text-7xl z-50 text-light-text font-bold">
          Clases de Kung Fu
          <span className="block mt-2 text-tech-neon-green font-normal text-6xl">contra Negacionistas de la IA</span>
        </h1>
        <p className="text-lg md:text-xl z-50 text-light-text max-w-2xl">
          Aprende técnicas milenarias adaptadas al mundo digital para defender la verdad sobre la inteligencia artificial.
        </p>
        <motion.a href="#enrollment" className="z-50 bg-kungfu-red hover:bg-kungfu-red-darker text-white font-bold py-3 px-8 rounded-md transition-all shadow-lg hover:shadow-xl transform hover:scale-105" whileHover={{
        y: -5
      }} whileTap={{
        y: 0
      }}>
          Únete a la Resistencia
        </motion.a>
      </motion.div>

      <Floating sensitivity={1.5} className="overflow-hidden">
        {/* Top left image - increased size and adjusted position */}
        <FloatingElement depth={0.5} className="top-[2%] left-[8%]">
          <motion.img initial={{
          opacity: 0
        }} src="/lovable-uploads/05d89baf-def1-4d29-9021-fac9092518b1.png" alt="Maestro practicando kung fu con muñeco de madera" className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform rounded-xl shadow-lg" />
        </FloatingElement>
        
        {/* Top right image - increased size and adjusted position */}
        <FloatingElement depth={1} className="top-[5%] left-[68%]">
          <motion.img initial={{
          opacity: 0
        }} alt="Kung Fu Digital contra Negacionistas de la IA" className="w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform rounded-xl shadow-lg" src="/lovable-uploads/de940f8a-2a8a-4bfc-ab8d-b46debe78590.png" />
        </FloatingElement>
        
        {/* Bottom left image - increased size and adjusted position */}
        <FloatingElement depth={2} className="top-[60%] left-[12%]">
          <motion.img initial={{
          opacity: 0
        }} alt="Kung fu frente a negacionista con cartel" className="w-56 h-48 md:w-72 md:h-60 lg:w-80 lg:h-64 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform rounded-xl shadow-lg" src="/lovable-uploads/cbf2c301-a31e-4244-a9a2-d7750e444d30.png" />
        </FloatingElement>
        
        {/* Bottom right image - increased size and adjusted position */}
        <FloatingElement depth={1} className="top-[55%] left-[70%]">
          <motion.img initial={{
          opacity: 0
        }} alt="Kung fu contra negacionista con cartel" className="w-52 h-52 md:w-64 md:h-64 lg:w-80 lg:h-80 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform rounded-xl shadow-lg" src="/lovable-uploads/52ba5d99-2f8e-4249-8f0f-de0fd67b7e27.png" />
        </FloatingElement>
      </Floating>
    </div>;
};
export default ParallaxHeader;