import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Check } from "lucide-react";
import { toast } from "sonner";

type CalendarEvent = {
  id: number;
  date: string;
  dayOfWeek: string;
  dayOfMonth: number;
  month: string;
  title: string;
  time?: string;
  type: "class" | "workshop" | "special";
};

type EnrollmentSectionProps = {
  title?: string;
  formTitle?: string;
  calendarTitle?: string;
  events?: CalendarEvent[];
};

export const EnrollmentSection: React.FC<EnrollmentSectionProps> = ({
  title = "¡Únete a la Aventura!",
  formTitle = "Registra Tu Interés",
  calendarTitle = "Próximas Sesiones",
  events = [
    {
      id: 1,
      date: "2025-05-20",
      dayOfWeek: "Martes",
      dayOfMonth: 20,
      month: "Mayo",
      title: "Fundamentos de Kung-Fu Python",
      time: "19:00 - 21:00",
      type: "class",
    },
    {
      id: 2,
      date: "2025-05-22",
      dayOfWeek: "Jueves",
      dayOfMonth: 22,
      month: "Mayo",
      title: "Patadas Voladoras con JavaScript",
      time: "19:00 - 21:00",
      type: "class",
    },
    {
      id: 3,
      date: "2025-05-24",
      dayOfWeek: "Sábado",
      dayOfMonth: 24,
      month: "Mayo",
      title: "Seminario: El Puño de los Mil Compiladores",
      time: "11:00 - 14:00",
      type: "workshop",
    },
    {
      id: 4,
      date: "2025-05-27",
      dayOfWeek: "Martes",
      dayOfMonth: 27,
      month: "Mayo",
      title: "Fuerza Interior y Optimización de Código",
      time: "19:00 - 21:00",
      type: "class",
    },
    {
      id: 5,
      date: "2025-05-31",
      dayOfWeek: "Sábado",
      dayOfMonth: 31,
      month: "Mayo",
      title: "Combate: Humanos vs. IA (amistoso)",
      time: "17:00 - 19:00",
      type: "special",
    },
  ],
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    level: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("¡Solicitud enviada! Prepárate para la aventura.", {
      description: "Te contactaremos pronto con más información.",
    });
    setFormData({
      name: "",
      email: "",
      level: "",
    });
  };

  return (
    <section id="enrollment" className="w-full py-24 px-4 bg-transparent backdrop-blur-sm">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            className="bg-dark-bg/50 backdrop-blur-md p-8 rounded-lg border border-gray-800/30"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-light-text">{formTitle}</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-light-text mb-2">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-subtle-gray border border-gray-600 rounded-lg focus:ring-2 focus:ring-tech-neon-green focus:outline-none text-light-text"
                  placeholder="Tu nombre"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-light-text mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-subtle-gray border border-gray-600 rounded-lg focus:ring-2 focus:ring-tech-neon-green focus:outline-none text-light-text"
                  placeholder="tu@email.com"
                />
              </div>

              <div className="mb-8">
                <label htmlFor="level" className="block text-sm font-medium text-light-text mb-2">
                  Nivel de Experiencia
                </label>
                <select
                  id="level"
                  name="level"
                  value={formData.level}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-subtle-gray border border-gray-600 rounded-lg focus:ring-2 focus:ring-tech-neon-green focus:outline-none text-light-text"
                >
                  <option value="">Selecciona tu nivel</option>
                  <option value="beginner">Principiante (Hello World es mi técnica especial)</option>
                  <option value="intermediate">Intermedio (Ya compilé una patada voladora)</option>
                  <option value="advanced">Avanzado (Puedo debugear con los ojos cerrados)</option>
                  <option value="master">Maestro (La IA me tiene miedo)</option>
                </select>
              </div>

              <motion.button
                type="submit"
                className="w-full bg-kungfu-red hover:bg-kungfu-red-darker text-white font-bold py-3 px-8 rounded-lg transition-all shadow-lg hover:shadow-xl transform"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                ¡Quiero Unirme al Dojo!
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            className="bg-dark-bg/50 backdrop-blur-md p-8 rounded-lg border border-gray-800/30"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-light-text flex items-center">
              <Calendar className="mr-2" size={22} />
              {calendarTitle}
            </h3>
            
            <div className="space-y-4">
              {events.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const EventCard: React.FC<{ event: CalendarEvent }> = ({ event }) => {
  const getBgColor = () => {
    switch (event.type) {
      case "workshop":
        return "from-tech-neon-green/10 to-transparent";
      case "special":
        return "from-kungfu-red/10 to-transparent";
      default:
        return "from-gray-700/20 to-transparent";
    }
  };

  return (
    <motion.div 
      className={`p-4 rounded-lg bg-gradient-to-r ${getBgColor()} border border-gray-700/30 backdrop-blur-sm`}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-start">
        <div className="mr-4 text-center">
          <span className="block text-sm text-muted-foreground">{event.dayOfWeek}</span>
          <span className="block text-2xl font-bold text-light-text">{event.dayOfMonth}</span>
          <span className="block text-sm text-muted-foreground">{event.month}</span>
        </div>
        
        <div className="flex-1">
          <h4 className="font-bold text-light-text">{event.title}</h4>
          {event.time && <p className="text-sm text-muted-foreground">{event.time}</p>}
          <div className="flex items-center mt-2">
            <span 
              className={`text-xs px-2 py-1 rounded-full flex items-center gap-1 ${
                event.type === "workshop" 
                  ? "bg-tech-neon-green/20 text-tech-neon-green" 
                  : event.type === "special" 
                    ? "bg-kungfu-red/20 text-kungfu-red" 
                    : "bg-gray-700 text-light-text"
              }`}
            >
              <Check size={10} /> 
              {event.type === "workshop" ? "Taller" : event.type === "special" ? "Evento Especial" : "Clase Regular"}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EnrollmentSection;
