
import React from "react";
import { motion } from "framer-motion";

type SiteFooterProps = {
  siteName?: string;
  year?: number;
};

export const SiteFooter: React.FC<SiteFooterProps> = ({
  siteName = "DotCSV Dojo",
  year = new Date().getFullYear(),
}) => {
  return (
    <footer className="w-full py-12 px-4 bg-dark-bg/40 backdrop-blur-md border-t border-gray-800/30 z-10 relative">
      <div className="container max-w-container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <motion.h3
              className="text-xl font-bold mb-4 text-light-text"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {siteName}
            </motion.h3>
            <motion.p
              className="text-muted-foreground"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Donde la IA tiembla y los programadores se vuelven guerreros del código.
            </motion.p>
          </div>

          <div>
            <motion.h4
              className="text-lg font-bold mb-4 text-light-text"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Enlaces Rápidos
            </motion.h4>
            <motion.ul
              className="space-y-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <li>
                <a href="#features" className="text-muted-foreground hover:text-tech-neon-green transition-colors">
                  Nuestro Entrenamiento
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-muted-foreground hover:text-tech-neon-green transition-colors">
                  Galería del Dojo
                </a>
              </li>
              <li>
                <a href="#faq" className="text-muted-foreground hover:text-tech-neon-green transition-colors">
                  Preguntas Frecuentes
                </a>
              </li>
              <li>
                <a href="#enrollment" className="text-muted-foreground hover:text-tech-neon-green transition-colors">
                  Inscríbete
                </a>
              </li>
            </motion.ul>
          </div>

          <div>
            <motion.h4
              className="text-lg font-bold mb-4 text-light-text"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Síguenos
            </motion.h4>
            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-light-text hover:bg-kungfu-red transition-colors"
              >
                YT
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-light-text hover:bg-kungfu-red transition-colors"
              >
                TW
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-light-text hover:bg-kungfu-red transition-colors"
              >
                IG
              </a>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="mt-12 pt-6 border-t border-gray-800 text-center text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p>© {year} {siteName}. Todos los derechos reservados.</p>
          <p className="mt-2">Disclaimer: Ninguna IA fue dañada durante la creación de este sitio.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default SiteFooter;
