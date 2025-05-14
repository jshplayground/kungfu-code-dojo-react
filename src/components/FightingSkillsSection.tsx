
import React from "react";
import { motion } from "framer-motion";
import { Sword, Shield, Zap, Award, Star, Brain, Circle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

type SkillItem = {
  id: number;
  icon: React.ElementType;
  title: string;
  description: string;
  color: "kungfu-red" | "tech-neon-green";
};

const skills: SkillItem[] = [
  {
    id: 1,
    icon: Sword,
    title: "Precisión Técnica",
    description: "Domina la implementación de algoritmos con la precisión de un maestro de kung fu, minimizando errores y maximizando eficiencia.",
    color: "kungfu-red"
  },
  {
    id: 2,
    icon: Shield,
    title: "Defensa Resiliente",
    description: "Aprende técnicas para crear código resistente y sistemas seguros contra vulnerabilidades, como un escudo impenetrable.",
    color: "tech-neon-green"
  },
  {
    id: 3,
    icon: Zap,
    title: "Flujo de Energía",
    description: "Optimiza el flujo de datos y recursos computacionales, canalizando la energía de tus algoritmos como un maestro de chi.",
    color: "kungfu-red"
  },
  {
    id: 4,
    icon: Brain,
    title: "Mente Estratégica",
    description: "Desarrolla un enfoque estratégico para resolver problemas complejos, anticipando desafíos como un gran estratega de combate.",
    color: "tech-neon-green"
  },
  {
    id: 5,
    icon: Award,
    title: "Disciplina y Práctica",
    description: "Cultiva hábitos de aprendizaje continuo y práctica consistente, forjando la disciplina de un verdadero artista marcial del código.",
    color: "kungfu-red"
  },
  {
    id: 6,
    icon: Star,
    title: "Maestría Integral",
    description: "Integra todos los aspectos de la programación y la IA, alcanzando un dominio completo como los grandes maestros de kung fu.",
    color: "tech-neon-green"
  }
];

const FightingSkillsSection: React.FC = () => {
  return (
    <section className="w-full py-24 px-4 bg-subtle-gray">
      <div className="container max-w-container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Habilidades de Combate Digital</h2>
          <p className="text-light-text max-w-3xl mx-auto mt-6 text-lg">
            En el Dojo DotCSV, no solo aprenderás a programar – dominarás el arte del combate digital.
            Estas son las habilidades que desarrollarás durante tu entrenamiento, combinando la disciplina
            del kung fu con la precisión de la programación.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={skill.id} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillCard: React.FC<{ skill: SkillItem; index: number }> = ({ skill, index }) => {
  const IconComponent = skill.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="relative overflow-hidden h-full bg-dark-bg border-border hover:shadow-lg transition-shadow">
        <div className={`absolute top-0 left-0 right-0 h-1 bg-${skill.color}`}></div>
        <CardContent className="p-6 flex flex-col items-center text-center">
          <div className={`relative mb-6 mt-4 p-4 rounded-full bg-${skill.color} bg-opacity-10`}>
            <motion.div 
              className="absolute inset-0 rounded-full"
              initial={{ scale: 0.8, opacity: 0.5 }}
              animate={{ scale: 1.2, opacity: 0 }}
              transition={{ 
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut" 
              }}
              style={{ 
                background: skill.color === "kungfu-red" 
                  ? "radial-gradient(circle, rgba(229,9,20,0.3) 0%, rgba(229,9,20,0) 70%)" 
                  : "radial-gradient(circle, rgba(12,242,160,0.3) 0%, rgba(12,242,160,0) 70%)" 
              }}
            />
            <IconComponent 
              className={`w-12 h-12 text-${skill.color}`} 
            />
          </div>
          
          <h3 className="text-xl font-bold mb-3 text-light-text">{skill.title}</h3>
          <p className="text-muted-foreground">{skill.description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default FightingSkillsSection;
