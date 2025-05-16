
"use client";

import { motion } from "motion/react";

export default function CarlosSantanaHero() {
    return (
        <div className="min-h-screen bg-dark-bg">
            <div className="container mx-auto px-4 py-12 md:py-24">
                <div className="grid md:grid-cols-2 gap-8 relative overflow-x-hidden">
                    <div className="md:order-2 relative">
                        <div className="absolute -z-10 w-72 h-72 rounded-full bg-kungfu-red blur-3xl opacity-20 -top-10 -left-10"></div>
                        <img
                            src="/lovable-uploads/a9d00a49-7de5-45af-a409-ee86810c598c.png"
                            alt="Carlos Santana"
                            className="rounded-2xl shadow-2xl w-full object-cover filter brightness-105"
                        />
                    </div>
                    <div className="md:order-1 flex flex-col justify-between">
                        <div className="flex flex-col h-full justify-between">
                            <h1 className="text-6xl font-bold text-light-text leading-tight tracking-tighter">
                                Domina el Arte Digital del Kung Fu
                            </h1>
                            <ul className="space-y-2 tracking-tighter text-lg text-light-text/90">
                                {[
                                    "Defensa contra negacionistas",
                                    "Técnicas de argumentación",
                                    "Uso estratégico de datos",
                                    "Respuesta a falacias lógicas",
                                    "Comunicación efectiva",
                                ].map((item, index) => (
                                    <motion.li
                                        key={item}
                                        initial={{ opacity: 0.8 }}
                                        whileHover={{
                                            opacity: 1,
                                            y: -3,
                                            transition: {
                                                duration: 0.4,
                                                ease: "easeOut",
                                            },
                                        }}
                                        transition={{
                                            delay: index * 0.1,
                                        }}
                                    >
                                        <a href="#" className="cursor-pointer">
                                            {item}
                                        </a>
                                    </motion.li>
                                ))}
                            </ul>
                            <div>
                                <h2 className="text-2xl font-medium text-tech-neon-green mt-auto pt-8">
                                    MAESTRO CARLOS SANTANA
                                </h2>
                                <p className="text-lg text-light-text/95 max-w-md pt-4 tracking-tight">
                                    <a
                                        href="#enrollment"
                                        className="underline text-kungfu-red"
                                    >
                                        "El Arte del Kung Fu Digital"
                                    </a>{" "}
                                    está liderado por el Maestro Carlos Santana, experto en combatir la desinformación con técnicas avanzadas de argumentación y datos. Sus métodos combinan la sabiduría milenaria del kung fu con estrategias digitales modernas, permitiendo a sus estudiantes defender la verdad sobre la inteligencia artificial contra todo tipo de negacionistas.
                                </p>
                                <motion.a 
                                    href="#enrollment" 
                                    className="mt-8 inline-block bg-kungfu-red hover:bg-kungfu-red-darker text-white font-bold py-3 px-8 rounded-md transition-all shadow-lg hover:shadow-xl" 
                                    whileHover={{
                                        y: -5
                                    }} 
                                    whileTap={{
                                        y: 0
                                    }}
                                >
                                    Únete a la Resistencia
                                </motion.a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
