
import React, { useState } from "react";
import { motion } from "framer-motion";
import PhotoGallery from "./ui/gallery";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import AnimatedTestimonials from "./ui/animated-testimonials";

const testimonials = [
  {
    quote: "Antes discutía durante horas con negacionistas de la IA sin resultados. Después del entrenamiento en DotCSV Dojo, ahora convenzo a tres ejecutivos por minuto de que la IA no les robará el trabajo.",
    name: "Elon Musk",
    designation: "CEO de Tesla y SpaceX",
    src: "https://images.unsplash.com/photo-1566502599570-20ac9a65f47a?q=80&w=1000&auto=format&fit=crop",
  },
  {
    quote: "Mi tío compartía fake news sobre la IA en cada reunión familiar. Tras aplicar la técnica 'Patada Voladora de Datos' que aprendí con Carlos, ahora mi tío tiene un chatbot como asistente.",
    name: "Jeff Bezos",
    designation: "Fundador de Amazon",
    src: "https://images.unsplash.com/photo-1589149098258-3e9102cd63d3?q=80&w=1000&auto=format&fit=crop",
  },
  {
    quote: "Antes nos enfrentábamos a manifestantes anti-IA cada semana. Después del curso 'Kung Fu contra el Negacionismo Digital', nuestro equipo convierte opositores en usuarios entusiastas en solo dos horas.",
    name: "Alex Karp",
    designation: "CEO de Palantir",
    src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop",
  },
  {
    quote: "Meta estaba perdiendo la batalla de la opinión pública sobre IA. Tras contratar a tres alumnos del Dojo DotCSV, nuestro índice de aceptación subió un 300%. Todavía no sé cómo lo hicieron.",
    name: "Mark Zuckerberg",
    designation: "CEO de Meta",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
  },
  {
    quote: "En mi partido había muchos escépticos de la IA. Apliqué la técnica 'Gran Firewall de la Verdad' y ahora todos entienden que la IA es fantástica, absolutamente fantástica, la mejor.",
    name: "Donald Trump",
    designation: "Empresario y Político",
    src: "https://images.unsplash.com/photo-1622473590773-f588134b6ce7?q=80&w=1000&auto=format&fit=crop",
  },
];

const AnimatedTestimonialsSection = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  // Convert testimonials for PhotoGallery format
  const galleryPhotos = testimonials.map((testimonial, index) => ({
    id: index + 1,
    order: index,
    x: `${(index - 2) * 160}px`,
    y: `${15 + (index * 8) % 40}px`,
    zIndex: 50 - (index * 10),
    direction: index % 2 === 0 ? "left" as const : "right" as const,
    src: testimonial.src,
    alt: testimonial.name
  }));

  return (
    <section className="w-full py-24 px-4 bg-transparent backdrop-blur-sm relative">
      <div className="container max-w-container mx-auto">
        <PhotoGallery 
          title="¡Luchadores contra el Negacionismo!"
          subtitle="HISTORIAS QUE INSPIRAN"
          buttonText="Ver Todos los Testimonios"
          photos={galleryPhotos}
          onClick={() => setDialogOpen(true)}
          animationDelay={0.2}
        />

        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent className="bg-dark-bg/95 backdrop-blur-md border-gray-800 max-w-4xl">
            <DialogHeader>
              <DialogTitle className="text-3xl font-bold text-center text-light-text">Testimonios de Nuestros Luchadores</DialogTitle>
            </DialogHeader>
            <div className="p-6">
              <AnimatedTestimonials 
                testimonials={testimonials} 
                autoplay={true} 
                className="bg-dark-bg/50 backdrop-blur-md rounded-xl p-8 shadow-lg border border-muted"
              />
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default AnimatedTestimonialsSection;
