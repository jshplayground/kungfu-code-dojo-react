
import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Search, Brain, Shield, Target } from "lucide-react";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";

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
  features = [
    {
      id: 1,
      icon: Code,
      title: "Fundamentos Técnicos de IA",
      description: "Comprende los aspectos técnicos de la IA que los negacionistas suelen malinterpretar, preparándote para desmentir mitos con precisión.",
      color: "kungfu-red",
    },
    {
      id: 2,
      icon: Brain,
      title: "Psicología del Negacionismo",
      description: "Analiza los patrones mentales detrás del rechazo a la IA y desarrolla técnicas para abordar las resistencias cognitivas.",
      color: "tech-neon-green",
    },
    {
      id: 3,
      icon: Shield,
      title: "Defensa del Progreso Ético",
      description: "Aprende a defender los avances en IA mientras reconoces la importancia de la ética y la regulación responsable.",
      color: "kungfu-red",
    },
    {
      id: 4,
      icon: Target,
      title: "Comunicación Efectiva",
      description: "Domina técnicas de comunicación que convierten argumentos complejos en explicaciones claras y convincentes para audiencias escépticas.",
      color: "tech-neon-green",
    },
    {
      id: 5,
      icon: Database,
      title: "Arsenal de Evidencias",
      description: "Construye un repertorio de casos de éxito, estudios científicos y demostraciones prácticas para respaldar tus argumentos.",
      color: "kungfu-red",
    },
    {
      id: 6,
      icon: Search,
      title: "Detección de Desinformación",
      description: "Desarrolla un ojo crítico para identificar noticias falsas y mitos sobre IA que circulan en medios y redes sociales.",
      color: "tech-neon-green",
    },
  ],
}) => {
  // Definir las clases para diferentes tamaños de tarjetas según su posición
  const getCardClassName = (index: number) => {
    switch (index) {
      case 0: // Fundamentos Técnicos
        return "md:col-span-2 lg:row-span-2";
      case 1: // Psicología del Negacionismo
        return "lg:col-span-1";
      case 2: // Defensa del Progreso Ético
        return "md:col-span-1";
      case 3: // Comunicación Efectiva
        return "md:col-span-1";
      case 4: // Arsenal de Evidencias
        return "md:col-span-1 lg:col-span-1";
      case 5: // Detección de Desinformación
        return "md:col-span-2 lg:col-span-2";
      default:
        return "";
    }
  };

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

        <BentoGrid className="lg:grid-rows-3">
          {features.map((feature, index) => (
            <BentoCard
              key={feature.id}
              name={feature.title}
              description={feature.description}
              Icon={feature.icon}
              color={feature.color}
              href="#enrollment"
              cta="Descubrir más"
              className={getCardClassName(index)}
              delay={index * 0.1}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};

export default CourseFeaturesSection;
