
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
  title = "¿Tienes Dudas Existenciales?",
  faqs = [
    {
      id: 1,
      question: "¿Necesito ser cinturón negro en Python para unirme?",
      answer: "¡Para nada! Aceptamos desde cinturones blancos (principiantes) hasta maestros Shaolin del código. Carlos adapta las enseñanzas a tu nivel actual. Lo importante es tu deseo de aprender y tu disposición a fallar muchas, muchas veces antes de compilar correctamente una patada voladora."
    },
    {
      id: 2,
      question: "¿Las clases son presenciales o virtuales?",
      answer: "Nuestro dojo existe en el plano astral de internet. Las clases son virtuales, permitiéndote entrenar desde cualquier lugar del mundo. Aunque las patadas no lastiman físicamente, tu ego de programador puede sufrir daños considerables."
    },
    {
      id: 3,
      question: "¿Cuánto tiempo me tomará dominar el Kung Fu de la IA?",
      answer: "Según un antiguo proverbio: 'El camino del código marcial no tiene fin'. Pero los alumnos reportan que después de 3 meses ya pueden defenderse de ataques básicos de JavaScript y realizar depuraciones sin consultar Stack Overflow (casi nunca)."
    },
    {
      id: 4,
      question: "¿Qué equipamiento necesito para las clases?",
      answer: "Un ordenador con conexión a internet, ropa cómoda para ejecutar movimientos de coding-kung-fu, y un espacio donde puedas gritar '¡La IA funciona!' sin alarmar a tus vecinos. Opcional: incienso para meditar mientras tus modelos entrenan."
    },
    {
      id: 5,
      question: "¿Carlos realmente sabe kung fu?",
      answer: "Si por 'kung fu' te refieres a conocimientos profundos sobre IA y una habilidad innata para explicar conceptos complejos con memes... entonces sí, es un verdadero maestro. Para artes marciales físicas, mejor consulta otro dojo. Aunque sus karate-chops al teclado son bastante impresionantes."
    }
  ],
}) => {
  return (
    <section id="faq" className="w-full py-24 px-4 bg-subtle-gray">
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

        <div className="max-w-3xl mx-auto divide-y divide-gray-700">
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
        <span className={`ml-6 flex-shrink-0 text-2xl transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
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
