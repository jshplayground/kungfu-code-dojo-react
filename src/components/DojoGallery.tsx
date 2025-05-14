
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
  title = "El Dojo en Acción",
  items = [
    {
      id: 1,
      type: "image",
      src_placeholder: "carlos-teaching",
      alt: "Carlos Santana Enseñando",
      caption: "Maestro Carlos explicando el arte del Debug-Fu",
      bgColor: "kungfu-red",
    },
    {
      id: 2,
      type: "image",
      src_placeholder: "kung-fu-coding",
      alt: "Clase de Kung Fu Coding",
      caption: "Alumnos practicando la postura de la Función Recursiva",
      bgColor: "tech-neon-green",
    },
    {
      id: 3,
      type: "image",
      src_placeholder: "meditation-session",
      alt: "Sesión de Meditación Neural",
      caption: "Encontrando la paz interior mientras los modelos entrenan",
      bgColor: "kungfu-red",
    },
    {
      id: 4,
      type: "image",
      src_placeholder: "debugging-kata",
      alt: "Kata de Depuración",
      caption: "La antigua técnica de debugging con los ojos vendados",
      bgColor: "tech-neon-green",
    },
    {
      id: 5,
      type: "image",
      src_placeholder: "meme-training",
      alt: "Entrenamiento de Memes",
      caption: "Aprendizaje reforzado con memes de programación",
      bgColor: "kungfu-red",
    },
    {
      id: 6,
      type: "image",
      src_placeholder: "graduation-ceremony",
      alt: "Ceremonia de Graduación",
      caption: "Entrega del cinturón negro en Machine Learning",
      bgColor: "tech-neon-green",
    },
  ],
}) => {
  return (
    <section id="gallery" className="w-full py-24 px-4 bg-dark-bg">
      <div className="container max-w-container mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-light-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      className="relative overflow-hidden rounded-lg aspect-video group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className={`w-full h-full bg-${item.bgColor || 'subtle-gray'} bg-opacity-30 flex items-center justify-center`}>
        <div className="text-center p-6">
          <div className="text-5xl mb-4">🥋</div>
          <p className="text-light-text text-lg font-medium">{item.alt}</p>
        </div>
      </div>
      
      {item.caption && (
        <motion.div 
          className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity"
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
