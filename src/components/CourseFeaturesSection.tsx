import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Search, Brain, Shield, Target } from "lucide-react";
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
  title = "Áreas de Entrenamiento",
  features = [{
    id: 1,
    icon: Code,
    title: "Fundamentos Técnicos de IA",
    description: "Comprende los aspectos técnicos de la IA que los negacionistas suelen malinterpretar, preparándote para desmentir mitos con precisión.",
    color: "kungfu-red"
  }, {
    id: 2,
    icon: Brain,
    title: "Psicología del Negacionismo",
    description: "Analiza los patrones mentales detrás del rechazo a la IA y desarrolla técnicas para abordar las resistencias cognitivas.",
    color: "tech-neon-green"
  }, {
    id: 3,
    icon: Shield,
    title: "Defensa del Progreso Ético",
    description: "Aprende a defender los avances en IA mientras reconoces la importancia de la ética y la regulación responsable.",
    color: "kungfu-red"
  }, {
    id: 4,
    icon: Target,
    title: "Comunicación Efectiva",
    description: "Domina técnicas de comunicación que convierten argumentos complejos en explicaciones claras y convincentes para audiencias escépticas.",
    color: "tech-neon-green"
  }, {
    id: 5,
    icon: Database,
    title: "Arsenal de Evidencias",
    description: "Construye un repertorio de casos de éxito, estudios científicos y demostraciones prácticas para respaldar tus argumentos.",
    color: "kungfu-red"
  }, {
    id: 6,
    icon: Search,
    title: "Detección de Desinformación",
    description: "Desarrolla un ojo crítico para identificar noticias falsas y mitos sobre IA que circulan en medios y redes sociales.",
    color: "tech-neon-green"
  }]
}) => {
  return;
};
const FeatureCard: React.FC<{
  feature: FeatureItem;
  index: number;
}> = ({
  feature,
  index
}) => {
  const IconComponent = feature.icon;
  return <motion.div className="relative p-6 rounded-lg bg-card hover:bg-opacity-70 transition-all border border-border shadow-lg" initial={{
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
  }} whileHover={{
    y: -5,
    transition: {
      duration: 0.2
    }
  }}>
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
    </motion.div>;
};
export default CourseFeaturesSection;