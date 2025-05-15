
import React from "react";
import { motion } from "framer-motion";
import AnimatedTestimonials from "./ui/animated-testimonials";

const testimonials = [{
  quote: "Antes discutía durante horas con negacionistas de la IA sin resultados. Después del entrenamiento en DotCSV Dojo, ahora convenzo a tres ejecutivos por minuto de que la IA no les robará el trabajo.",
  name: "Elon Musk",
  designation: "CEO de Tesla y SpaceX",
  src: "https://images.unsplash.com/photo-1566502599570-20ac9a65f47a?q=80&w=1000&auto=format&fit=crop"
}, {
  quote: "Mi tío compartía fake news sobre la IA en cada reunión familiar. Tras aplicar la técnica 'Patada Voladora de Datos' que aprendí con Carlos, ahora mi tío tiene un chatbot como asistente.",
  name: "Jeff Bezos",
  designation: "Fundador de Amazon",
  src: "https://images.unsplash.com/photo-1589149098258-3e9102cd63d3?q=80&w=1000&auto=format&fit=crop"
}, {
  quote: "Antes nos enfrentábamos a manifestantes anti-IA cada semana. Después del curso 'Kung Fu contra el Negacionismo Digital', nuestro equipo convierte opositores en usuarios entusiastas en solo dos horas.",
  name: "Alex Karp",
  designation: "CEO de Palantir",
  src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop"
}, {
  quote: "Meta estaba perdiendo la batalla de la opinión pública sobre IA. Tras contratar a tres alumnos del Dojo DotCSV, nuestro índice de aceptación subió un 300%. Todavía no sé cómo lo hicieron.",
  name: "Mark Zuckerberg",
  designation: "CEO de Meta",
  src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
}, {
  quote: "En mi partido había muchos escépticos de la IA. Apliqué la técnica 'Gran Firewall de la Verdad' y ahora todos entienden que la IA es fantástica, absolutamente fantástica, la mejor.",
  name: "Donald Trump",
  designation: "Empresario y Político",
  src: "https://images.unsplash.com/photo-1622473590773-f588134b6ce7?q=80&w=1000&auto=format&fit=crop"
}];

const AnimatedTestimonialsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-dark-bg/50">
      <div className="container mx-auto max-w-6xl px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-light-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Lo que dicen nuestros alumnos
        </motion.h2>
        
        <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
      </div>
    </section>
  );
};

export default AnimatedTestimonialsSection;
