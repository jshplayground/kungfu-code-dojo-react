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
  title = "Metodología Anti-Negacionista",
  items = [{
    id: 1,
    type: "image",
    src_placeholder: "dialectica-defensiva",
    alt: "Dialéctica Defensiva",
    caption: "Técnicas de argumentación basadas en datos para defender la realidad de la IA",
    bgColor: "kungfu-red"
  }, {
    id: 2,
    type: "image",
    src_placeholder: "demostracion-practica",
    alt: "Demostración Práctica",
    caption: "Ejemplos reales que desmitifican temores comunes sobre la inteligencia artificial",
    bgColor: "tech-neon-green"
  }, {
    id: 3,
    type: "image",
    src_placeholder: "entrenamiento-simulado",
    alt: "Entrenamiento Simulado",
    caption: "Simulaciones de debates con negacionistas para perfeccionar tus respuestas",
    bgColor: "kungfu-red"
  }, {
    id: 4,
    type: "image",
    src_placeholder: "comunidad-defensores",
    alt: "Comunidad de Defensores",
    caption: "Red de apoyo para compartir estrategias y éxitos en la lucha contra la desinformación",
    bgColor: "tech-neon-green"
  }, {
    id: 5,
    type: "image",
    src_placeholder: "arsenal-cientifico",
    alt: "Arsenal Científico",
    caption: "Repositorio de estudios y evidencias para respaldar tus argumentos pro-IA",
    bgColor: "kungfu-red"
  }, {
    id: 6,
    type: "image",
    src_placeholder: "certificacion-combate",
    alt: "Certificación de Combate",
    caption: "Reconocimiento oficial como Defensor Digital contra el negacionismo de la IA",
    bgColor: "tech-neon-green"
  }]
}) => {
  return;
};
const GalleryImage: React.FC<{
  item: GalleryItem;
  index: number;
}> = ({
  item,
  index
}) => {
  return <motion.div className="relative overflow-hidden rounded-lg aspect-video group shadow-lg" initial={{
    opacity: 0,
    y: 20
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true
  }} transition={{
    duration: 0.5,
    delay: index * 0.1
  }}>
      <div className={`w-full h-full bg-card bg-opacity-80 flex items-center justify-center border border-${item.bgColor} border-opacity-30`}>
        <div className="text-center p-6">
          <div className="text-5xl mb-4">📊</div>
          <p className="text-light-text text-lg font-medium">{item.alt}</p>
        </div>
      </div>
      
      {item.caption && <motion.div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" initial={{
      opacity: 0
    }} whileHover={{
      opacity: 1
    }}>
          <p className="text-light-text text-center">{item.caption}</p>
        </motion.div>}
    </motion.div>;
};
export default DojoGallery;