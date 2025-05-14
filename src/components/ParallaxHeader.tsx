
"use client"

import { useEffect } from "react"
import { motion, stagger, useAnimate } from "motion/react"

import Floating, { FloatingElement } from "@/components/ui/parallax-floating"

const ParallaxHeader = () => {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    animate("img", { opacity: [0, 1] }, { duration: 0.5, delay: stagger(0.15) })
  }, [])

  return (
    <div
      className="flex w-full min-h-[90vh] justify-center items-center bg-transparent overflow-hidden relative"
      ref={scope}
    >
      <motion.div
        className="z-50 text-center space-y-6 items-center flex flex-col px-4 relative"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.88, delay: 0.5 }}
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl z-50 text-light-text font-bold">
          Inteligencia Artificial
          <span className="block mt-2 text-tech-neon-green">&amp; Programación</span>
        </h1>
        <p className="text-lg md:text-xl z-50 text-light-text max-w-2xl">
          Cursos avanzados de programación e inteligencia artificial con un enfoque práctico y disciplinado.
        </p>
        <motion.a
          href="#enrollment"
          className="z-50 bg-kungfu-red hover:bg-kungfu-red-darker text-white font-bold py-3 px-8 rounded-md transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
          whileHover={{ y: -5 }}
          whileTap={{ y: 0 }}
        >
          Explorar Cursos
        </motion.a>
      </motion.div>

      <Floating sensitivity={1} className="overflow-hidden">
        <FloatingElement depth={0.5} className="top-[5%] left-[11%]">
          <motion.img
            initial={{ opacity: 0 }}
            src="/lovable-uploads/1836d83c-3cb1-4a8f-ae44-419a0d1a0577.png"
            alt="DotCSV en posición de combate"
            className="w-32 h-32 md:w-48 md:h-48 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform rounded-xl"
          />
        </FloatingElement>
        <FloatingElement depth={1} className="top-[8%] left-[70%]">
          <motion.img
            initial={{ opacity: 0 }}
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3"
            alt="Código de programación"
            className="w-24 h-24 md:w-36 md:h-36 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform rounded-xl"
          />
        </FloatingElement>
        <FloatingElement depth={2} className="top-[50%] left-[15%]">
          <motion.img
            initial={{ opacity: 0 }}
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3"
            alt="Circuitos electrónicos"
            className="w-28 h-28 md:w-40 md:h-40 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform rounded-xl"
          />
        </FloatingElement>
        <FloatingElement depth={1} className="top-[45%] left-[75%]">
          <motion.img
            initial={{ opacity: 0 }}
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3"
            alt="Algoritmos de IA"
            className="w-32 h-32 md:w-44 md:h-44 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform rounded-xl"
          />
        </FloatingElement>
      </Floating>
    </div>
  )
}

export default ParallaxHeader
