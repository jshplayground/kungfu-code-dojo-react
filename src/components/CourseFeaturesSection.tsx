
import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Search, Brain, Network, Shield } from "lucide-react";

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
  title = "Áreas de Estudio",
  features = [
    {
      id: 1,
      icon: Code,
      title: "Programación Avanzada",
      description: "Domina las técnicas de programación más avanzadas aplicadas a la inteligencia artificial y machine learning.",
      color: "kungfu-red",
    },
    {
      id: 2,
      icon: Brain,
      title: "Deep Learning",
      description: "Comprende y diseña arquitecturas de redes neuronales profundas para resolver problemas complejos.",
      color: "tech-neon-green",
    },
    {
      id: 3,
      icon: Shield,
      title: "Ética en IA",
      description: "Aprende a desarrollar sistemas de IA responsables, justos y seguros que beneficien a la sociedad.",
      color: "kungfu-red",
    },
    {
      id: 4,
      icon: Network,
      title: "Procesamiento del Lenguaje Natural",
      description: "Explora las técnicas más avanzadas para que las máquinas entiendan y procesen el lenguaje humano.",
      color: "tech-neon-green",
    },
    {
      id: 5,
      icon: Database,
      title: "Gestión de Datos",
      description: "Aprende a recopilar, limpiar y preparar datos para entrenar modelos de machine learning efectivos.",
      color: "kungfu-red",
    },
    {
      id: 6,
      icon: Search,
      title: "Visión Artificial",
      description: "Desarrolla sistemas que puedan interpretar y comprender información visual como lo hacen los humanos.",
      color: "tech-neon-green",
    },
  ],
}) => {
  return (
    <section id="features" className="w-full py-24 px-4 bg-dark-bg">
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
      className="relative p-6 rounded-lg bg-card hover:bg-opacity-70 transition-all border border-border shadow-lg"
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
