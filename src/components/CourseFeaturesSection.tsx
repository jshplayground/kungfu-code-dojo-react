
import React from "react";
import { motion } from "framer-motion";
import { Code, Search, Bug, Cpu, Database, Shield } from "lucide-react";

type FeatureItem = {
  id: number;
  icon: React.ElementType;
  title: string;
  description: string;
  color?: string;
};

type CourseFeaturesProps = {
  title?: string;
  features?: FeatureItem[];
};

export const CourseFeaturesSection: React.FC<CourseFeaturesProps> = ({
  title = "¿Qué Aprenderás en el DotCSV Dojo?",
  features = [
    {
      id: 1,
      icon: Code,
      title: "Kung Fu Code",
      description: "Aprende a codificar como si tus manos fueran armas. Transforma tus algoritmos en movimientos letales de combate virtual.",
      color: "kungfu-red",
    },
    {
      id: 2,
      icon: Bug,
      title: "Debug-Fu Avanzado",
      description: "Técnicas ancestrales para detectar y eliminar bugs con la precisión de un maestro de artes marciales.",
      color: "tech-neon-green",
    },
    {
      id: 3,
      icon: Shield,
      title: "Defensa Contra Negacionistas IA",
      description: "Protégete de aquellos que niegan el potencial de la IA con argumentos sólidos y movimientos dialécticos certeros.",
      color: "kungfu-red",
    },
    {
      id: 4,
      icon: Cpu,
      title: "Meditación Neural",
      description: "Encuentra la paz interior mientras tus modelos de machine learning entrenan. Aumenta tu concentración y reduce la tasa de error.",
      color: "tech-neon-green",
    },
    {
      id: 5,
      icon: Database,
      title: "El Camino del Data",
      description: "Sigue el sendero de los datos como un verdadero guerrero, desde la limpieza hasta la visualización con elegancia marcial.",
      color: "kungfu-red",
    },
    {
      id: 6,
      icon: Search,
      title: "Visión de IA Interior",
      description: "Desbloquea la capacidad de ver patrones ocultos en tus datos como un verdadero maestro Kung Fu de la inteligencia artificial.",
      color: "tech-neon-green",
    },
  ],
}) => {
  return (
    <section id="features" className="w-full py-24 px-4 bg-dark-bg">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard: React.FC<{ feature: FeatureItem; index: number }> = ({
  feature,
  index,
}) => {
  const IconComponent = feature.icon;
  
  return (
    <motion.div
      className="relative p-6 rounded-lg bg-subtle-gray hover:bg-opacity-70 transition-all"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className={`absolute top-0 left-0 w-full h-1 bg-${feature.color}`} />
      
      <div className="mb-4 text-center">
        <div className={`inline-flex justify-center items-center w-14 h-14 rounded-full bg-${feature.color} bg-opacity-20 text-${feature.color}`}>
          <IconComponent className="w-7 h-7" />
        </div>
      </div>

      <h3 className="text-xl font-bold mb-3 text-light-text text-center">
        {feature.title}
      </h3>
      
      <p className="text-muted-foreground text-center">
        {feature.description}
      </p>
    </motion.div>
  );
};

export default CourseFeaturesSection;
