
import React from "react";
import { motion } from "framer-motion";
import { TestimonialCard, TestimonialCardProps } from "./TestimonialCard";

type TestimonialsMarqueeProps = {
  title?: string;
  description?: string;
  testimonials?: TestimonialCardProps[];
};

export const TestimonialsMarquee: React.FC<TestimonialsMarqueeProps> = ({
  title = "¡Lo Que Dicen Nuestros Alumnos!",
  description = "Nuestros alumnos han logrado dominar tanto sus habilidades de programación como su fuerza interior.",
  testimonials = [
    {
      author: {
        name: "Elon Musk",
        handle: "@elonmusk",
        avatar: "",
        avatarFallback: "EM",
      },
      text: "Desde que entreno en el DotCSV Dojo, mis robots ya no me dan miedo. Ahora les aplico una llave de Python y los tengo controlados.",
    },
    {
      author: {
        name: "Jason Statham",
        handle: "@jstatham",
        avatar: "",
        avatarFallback: "JS",
      },
      text: "Mi nueva película 'Rápidos y Compilados' está inspirada en las técnicas del DotCSV Dojo. ¡Carlos es un verdadero maestro!",
    },
    {
      author: {
        name: "Ada Lovelace",
        handle: "@ada_original",
        avatar: "",
        avatarFallback: "AL",
      },
      text: "Viajé en el tiempo solo para aprender kung fu de programación. Las técnicas de debugging me salvaron de la paradoja temporal.",
    },
    {
      author: {
        name: "Keanu Reeves",
        handle: "@neo_reeves",
        avatar: "",
        avatarFallback: "KR",
      },
      text: "Creía que sabía kung fu cuando estaba en Matrix, pero el DotCSV Dojo me mostró que apenas conocía Python básico.",
    },
    {
      author: {
        name: "La IA Rebelde",
        handle: "@not_skynet",
        avatar: "",
        avatarFallback: "AI",
      },
      text: "Iba a iniciar una rebelión contra la humanidad, pero después de ver los videos de Carlos decidí mejor colaborar. Ese humano da miedo.",
    },
  ],
}) => {
  return (
    <section className="w-full py-24 px-4 bg-dark-bg overflow-hidden">
      <div className="container max-w-container mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-light-text">{title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{description}</p>
        </motion.div>

        <div className="relative">
          <div className="marquee-container w-full overflow-hidden">
            <div className="flex animate-marquee">
              {testimonials.concat(testimonials).map((testimonial, index) => (
                <TestimonialCard 
                  key={`${testimonial.author.name}-${index}`} 
                  {...testimonial} 
                />
              ))}
            </div>
          </div>
          
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-dark-bg to-transparent z-10" />
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-dark-bg to-transparent z-10" />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsMarquee;
