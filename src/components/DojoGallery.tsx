
import React from "react";
import { motion } from "framer-motion";

type GalleryItem = {
  id: number;
  type: "image";
  src_placeholder: string;
  alt: string;
  caption?: string;
  bgColor?: string;
};

type DojoGalleryProps = {
  title?: string;
  items?: GalleryItem[];
};

export const DojoGallery: React.FC<DojoGalleryProps> = ({
  title = "Metodología",
  items = [
    {
      id: 1,
      type: "image",
      src_placeholder: "contenido-teorico",
      alt: "Contenido Teórico",
      caption: "Fundamentos teóricos explicados de forma clara y concisa",
      bgColor: "kungfu-red",
    },
    {
      id: 2,
      type: "image",
      src_placeholder: "proyectos-practicos",
      alt: "Proyectos Prácticos",
      caption: "Aplicación práctica de los conocimientos con proyectos reales",
      bgColor: "tech-neon-green",
    },
    {
      id: 3,
      type: "image",
      src_placeholder: "mentorias-personalizadas",
      alt: "Mentorías Personalizadas",
      caption: "Sesiones individuales para resolver dudas específicas",
      bgColor: "kungfu-red",
    },
    {
      id: 4,
      type: "image",
      src_placeholder: "comunidad-aprendizaje",
      alt: "Comunidad de Aprendizaje",
      caption: "Acceso a comunidad exclusiva para compartir conocimientos",
      bgColor: "tech-neon-green",
    },
    {
      id: 5,
      type: "image",
      src_placeholder: "recursos-adicionales",
      alt: "Recursos Adicionales",
      caption: "Material complementario para profundizar en los temas",
      bgColor: "kungfu-red",
    },
    {
      id: 6,
      type: "image",
      src_placeholder: "certificacion",
      alt: "Certificación",
      caption: "Certificado de finalización reconocido en la industria",
      bgColor: "tech-neon-green",
    },
  ],
}) => {
  return (
    <section id="gallery" className="w-full py-24 px-4 bg-dark-bg">
      <div className="container max-w-container mx-auto">
        <motion.h2
          className="section-title text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <GalleryImage key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const GalleryImage: React.FC<{ item: GalleryItem; index: number }> = ({ item, index }) => {
  return (
    <motion.div
      className="relative overflow-hidden rounded-lg aspect-video group shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className={`w-full h-full bg-card bg-opacity-80 flex items-center justify-center border border-${item.bgColor} border-opacity-30`}>
        <div className="text-center p-6">
          <div className="text-5xl mb-4">📊</div>
          <p className="text-light-text text-lg font-medium">{item.alt}</p>
        </div>
      </div>
      
      {item.caption && (
        <motion.div 
          className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <p className="text-light-text text-center">{item.caption}</p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default DojoGallery;
