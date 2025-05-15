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
  return <div className="flex w-full min-h-[90vh] justify-center items-center bg-transparent overflow-hidden relative" ref={scope}>
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
          Kung Fu Digital
          <span className="block mt-2 text-tech-neon-green">contra Negacionistas de la IA</span>
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

      <Floating sensitivity={1} className="overflow-hidden">
        <FloatingElement depth={0.5} className="top-[5%] left-[11%]">
          <motion.img initial={{
          opacity: 0
        }} src="/lovable-uploads/05d89baf-def1-4d29-9021-fac9092518b1.png" alt="Maestro practicando kung fu con muñeco de madera" className="w-32 h-32 md:w-48 md:h-48 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform rounded-xl" />
        </FloatingElement>
        <FloatingElement depth={1} className="top-[8%] left-[70%]">
          <motion.img initial={{
          opacity: 0
        }} alt="Kung Fu Digital contra Negacionistas de la IA" className="w-24 h-24 md:w-36 md:h-36 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform rounded-xl" src="/lovable-uploads/de940f8a-2a8a-4bfc-ab8d-b46debe78590.png" />
        </FloatingElement>
        <FloatingElement depth={2} className="top-[50%] left-[15%]">
          <motion.img initial={{
          opacity: 0
        }} alt="Kung fu frente a negacionista con cartel" src="/lovable-uploads/b073ac69-7851-4b6c-becf-fa59eb52cab3.png" className="w-40 h-28 md:w-40 md:h-40 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform rounded-xl" />
        </FloatingElement>
        <FloatingElement depth={1} className="top-[45%] left-[75%]">
          <motion.img initial={{
          opacity: 0
        }} src="/lovable-uploads/a8431f73-3e53-4e68-a60b-e2f46773c8d7.png" alt="Kung fu contra negacionista con cartel" className="w-32 h-32 md:w-44 md:h-44 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform rounded-xl" />
        </FloatingElement>
      </Floating>
    </div>;
};
export default ParallaxHeader;