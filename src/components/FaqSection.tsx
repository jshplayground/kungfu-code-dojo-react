
import React from "react";
import { motion } from "framer-motion";

type FaqItemData = {
  id: number;
  question: string;
  answer: string;
};

type FaqSectionProps = {
  title?: string;
  faqs?: FaqItemData[];
};

export const FaqSection: React.FC<FaqSectionProps> = ({
  title = "Preguntas Frecuentes",
  faqs = [
    {
      id: 1,
      question: "¿Necesito conocimientos técnicos para combatir a los negacionistas de la IA?",
      answer: "No es imprescindible, pero te recomendamos algunos conocimientos básicos sobre IA. Nuestro curso cubre desde conceptos fundamentales hasta técnicas avanzadas de argumentación, adaptándonos a todos los niveles."
    },
    {
      id: 2,
      question: "¿Las clases son presenciales o virtuales?",
      answer: "Nuestro dojo es completamente digital. Las clases son virtuales para que puedas enfrentarte a los negacionistas desde cualquier lugar del mundo. Combinamos contenido pregrabado con sesiones en vivo para practicar tus técnicas de contraargumentación."
    },
    {
      id: 3,
      question: "¿Cuánto tiempo necesito para dominar las técnicas anti-negacionistas?",
      answer: "Recomendamos dedicar 5-10 horas semanales. En 3-6 meses, la mayoría de estudiantes logran vencer al 90% de los argumentos negacionistas que encuentran en redes sociales y conversaciones cotidianas."
    },
    {
      id: 4,
      question: "¿Qué técnicas específicas enseñan para combatir la desinformación sobre IA?",
      answer: "Enseñamos el método D.A.T.O.S. (Detectar falacias, Analizar fuentes, Técnicas de persuasión, Ofrecer evidencias, Simplificar conceptos complejos) junto con ejercicios prácticos de debate y simulaciones de encuentros con negacionistas."
    },
    {
      id: 5,
      question: "¿El curso me ayudará a convencer a familiares que temen a la IA?",
      answer: "¡Absolutamente! Una de nuestras especialidades es la técnica 'Puente de Empatía', diseñada específicamente para reconectar con personas cercanas que tienen temores o ideas erróneas sobre la IA, transformando la resistencia en curiosidad."
    }
  ],
}) => {
  return (
    <section id="faq" className="w-full py-24 px-4 bg-transparent backdrop-blur-sm">
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

        <div className="max-w-3xl mx-auto divide-y divide-gray-700 bg-dark-bg/40 backdrop-blur-md rounded-lg shadow-lg p-6">
          {faqs.map((faq, index) => (
            <FaqItem key={faq.id} faq={faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FaqItem: React.FC<{ faq: FaqItemData; index: number }> = ({ faq, index }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <motion.div
      className="py-5"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left focus:outline-none"
      >
        <span className="text-xl font-medium text-light-text">{faq.question}</span>
        <span className={`ml-6 flex-shrink-0 text-2xl transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          ↓
        </span>
      </button>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
          className="mt-3"
        >
          <p className="text-muted-foreground">{faq.answer}</p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default FaqSection;
