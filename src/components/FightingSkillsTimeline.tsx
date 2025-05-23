
import { Sword, Shield, Zap, Award, Star, Brain } from "lucide-react";
import { motion } from "framer-motion";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const timelineData = [{
  id: 1,
  title: "Detección de Falacias",
  date: "Fase 1",
  content: "Aprende a identificar argumentos falaces contra la IA con la precisión de un maestro de kung fu, minimizando las falsas creencias.",
  category: "Técnica",
  icon: Sword,
  relatedIds: [2, 3],
  status: "completed" as const,
  energy: 100
}, {
  id: 2,
  title: "Escudo de Hechos",
  date: "Fase 1",
  content: "Construye un escudo impenetrable de datos verificados y evidencia científica para protegerte contra la desinformación sobre IA.",
  category: "Defensa",
  icon: Shield,
  relatedIds: [1, 4],
  status: "completed" as const,
  energy: 85
}, {
  id: 3,
  title: "Flujo de Contraargumentos",
  date: "Fase 2",
  content: "Canaliza la energía de tus conocimientos para formular contraargumentos efectivos y fluidos que desmonten la retórica negacionista.",
  category: "Optimización",
  icon: Zap,
  relatedIds: [1, 5],
  status: "in-progress" as const,
  energy: 60
}, {
  id: 4,
  title: "Mente Estratégica",
  date: "Fase 2",
  content: "Desarrolla estrategias para enfrentar a los negacionistas anticipando sus argumentos como un gran estratega de combate.",
  category: "Estrategia",
  icon: Brain,
  relatedIds: [2, 6],
  status: "in-progress" as const,
  energy: 55
}, {
  id: 5,
  title: "Disciplina Pedagógica",
  date: "Fase 3",
  content: "Cultiva la paciencia y disciplina para educar a otros sobre IA, convirtiendo la frustración en oportunidades de enseñanza.",
  category: "Disciplina",
  icon: Award,
  relatedIds: [3, 6],
  status: "pending" as const,
  energy: 30
}, {
  id: 6,
  title: "Maestría del Debate",
  date: "Fase 3",
  content: "Integra todas las habilidades para convertirte en un maestro del debate sobre IA, capaz de enfrentar cualquier argumento negacionista.",
  category: "Maestría",
  icon: Star,
  relatedIds: [4, 5],
  status: "pending" as const,
  energy: 15
}];

const FightingSkillsTimeline: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-16 text-center text-light-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Ruta de Aprendizaje del Kung Fu Digital
        </motion.h2>
        
        <div className="h-[600px] md:h-[700px] lg:h-[800px]">
          <RadialOrbitalTimeline timelineData={timelineData} />
        </div>
      </div>
    </section>
  );
};

export default FightingSkillsTimeline;
