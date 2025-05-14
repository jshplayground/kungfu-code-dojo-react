
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
      question: "¿Necesito conocimientos previos para unirme a los cursos?",
      answer: "Para sacar el máximo provecho de nuestros cursos, recomendamos tener conocimientos básicos de programación. Sin embargo, ofrecemos cursos para todos los niveles, desde principiantes hasta avanzados."
    },
    {
      id: 2,
      question: "¿Las clases son presenciales o virtuales?",
      answer: "Todos nuestros cursos son completamente virtuales, lo que te permite aprender desde cualquier parte del mundo a tu propio ritmo. Contamos con contenido pregrabado de alta calidad y sesiones en vivo para resolver dudas."
    },
    {
      id: 3,
      question: "¿Cuánto tiempo necesito dedicarle al curso?",
      answer: "Recomendamos dedicar al menos 5-10 horas semanales para obtener los mejores resultados. La duración total del curso varía según el programa específico, pero suele ser de 3 a 6 meses."
    },
    {
      id: 4,
      question: "¿Qué equipamiento necesito para las clases?",
      answer: "Necesitarás una computadora con conexión estable a internet. Recomendamos un procesador reciente (i5/Ryzen 5 o superior) y al menos 8GB de RAM para los ejercicios prácticos de machine learning."
    },
    {
      id: 5,
      question: "¿Se obtiene algún certificado al finalizar?",
      answer: "Sí, al completar satisfactoriamente el curso recibirás un certificado digital que valida tus conocimientos y habilidades adquiridas. Nuestros certificados son reconocidos en la industria."
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
