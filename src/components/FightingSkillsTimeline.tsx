
import { Sword, Shield, Zap, Award, Star, Brain, Circle } from "lucide-react";
import { motion } from "framer-motion";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const timelineData = [
  {
    id: 1,
    title: "Precisión Técnica",
    date: "Fase 1",
    content: "Domina la implementación de algoritmos con la precisión de un maestro de kung fu, minimizando errores y maximizando eficiencia.",
    category: "Técnica",
    icon: Sword,
    relatedIds: [2, 3],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "Defensa Resiliente",
    date: "Fase 1",
    content: "Aprende técnicas para crear código resistente y sistemas seguros contra vulnerabilidades, como un escudo impenetrable.",
    category: "Defensa",
    icon: Shield,
    relatedIds: [1, 4],
    status: "completed" as const,
    energy: 85,
  },
  {
    id: 3,
    title: "Flujo de Energía",
    date: "Fase 2",
    content: "Optimiza el flujo de datos y recursos computacionales, canalizando la energía de tus algoritmos como un maestro de chi.",
    category: "Optimización",
    icon: Zap,
    relatedIds: [1, 5],
    status: "in-progress" as const,
    energy: 60,
  },
  {
    id: 4,
    title: "Mente Estratégica",
    date: "Fase 2",
    content: "Desarrolla un enfoque estratégico para resolver problemas complejos, anticipando desafíos como un gran estratega de combate.",
    category: "Estrategia",
    icon: Brain,
    relatedIds: [2, 6],
    status: "in-progress" as const,
    energy: 55,
  },
  {
    id: 5,
    title: "Disciplina y Práctica",
    date: "Fase 3",
    content: "Cultiva hábitos de aprendizaje continuo y práctica consistente, forjando la disciplina de un verdadero artista marcial del código.",
    category: "Disciplina",
    icon: Award,
    relatedIds: [3, 6],
    status: "pending" as const,
    energy: 30,
  },
  {
    id: 6,
    title: "Maestría Integral",
    date: "Fase 3",
    content: "Integra todos los aspectos de la programación y la IA, alcanzando un dominio completo como los grandes maestros de kung fu.",
    category: "Maestría",
    icon: Star,
    relatedIds: [4, 5],
    status: "pending" as const,
    energy: 15,
  }
];

const FightingSkillsTimeline: React.FC = () => {
  return (
    <section className="w-full pt-40 pb-32 px-4 bg-dark-bg">
      <div className="container max-w-container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-24"
        >
          <h2 className="section-title text-4xl md:text-5xl font-bold">Habilidades de Combate Digital</h2>
          <p className="text-light-text max-w-4xl mx-auto mt-8 text-xl leading-relaxed">
            En el Dojo DotCSV, no solo aprenderás a programar – dominarás el arte del combate digital.
            Estas son las habilidades que desarrollarás durante tu entrenamiento, combinando la disciplina
            del kung fu con la precisión de la programación.
          </p>
        </motion.div>

        <RadialOrbitalTimeline timelineData={timelineData} />
      </div>
    </section>
  );
};

export default FightingSkillsTimeline;
