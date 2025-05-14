
import React from "react";
import { motion } from "framer-motion";
import AnimatedTestimonials from "./ui/animated-testimonials";

const testimonials = [
  {
    quote: "Desde que aprendí Python kung fu en DotCSV Dojo, mis cohetes despegan a la primera. Antes tenía que reintentar 3 veces y explotar 2 prototipos.",
    name: "Elon Musk",
    designation: "CEO de Tesla y SpaceX",
    src: "https://images.unsplash.com/photo-1566502599570-20ac9a65f47a?q=80&w=1000&auto=format&fit=crop",
  },
  {
    quote: "Antes de entrenar con Carlos me tomaba 2 días construir un almacén. Ahora puedo crear 17 centros de distribución en un solo commit de Git.",
    name: "Jeff Bezos",
    designation: "Fundador de Amazon",
    src: "https://images.unsplash.com/photo-1589149098258-3e9102cd63d3?q=80&w=1000&auto=format&fit=crop",
  },
  {
    quote: "Palantir antes usaba IA para análisis de datos. Después de la clase 'Kung Fu con Quantum Neural Networks' de Carlos, nuestra IA hace análisis y además sabe ninjutsu.",
    name: "Alex Karp",
    designation: "CEO de Palantir",
    src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop",
  },
  {
    quote: "No es que Meta haya copiado su tecnología a DotCSV... es que intentamos hacer reverse engineering al código de Carlos y nos salió el metaverso por accidente.",
    name: "Mark Zuckerberg",
    designation: "CEO de Meta",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
  },
  {
    quote: "Mi firewall era débil hasta que tomé el curso 'Great Security Again' de Carlos. Ahora tengo el mejor firewall, es enorme, es fantástico, todo el mundo lo dice.",
    name: "Donald Trump",
    designation: "Empresario y Político",
    src: "https://images.unsplash.com/photo-1622473590773-f588134b6ce7?q=80&w=1000&auto=format&fit=crop",
  },
];

const AnimatedTestimonialsSection = () => {
  return (
    <section className="w-full py-24 px-4 bg-transparent backdrop-blur-sm">
      <div className="container max-w-container mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-light-text">¡Lo Que Dicen Nuestros Alumnos Famosos!</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Las celebridades también entrenan con nosotros y han logrado dominar tanto sus habilidades de programación como su fuerza interior.</p>
        </motion.div>
        
        <AnimatedTestimonials 
          testimonials={testimonials} 
          autoplay={true} 
          className="bg-dark-bg/50 backdrop-blur-md rounded-xl p-8 shadow-lg border border-muted"
        />
      </div>
    </section>
  );
};

export default AnimatedTestimonialsSection;
