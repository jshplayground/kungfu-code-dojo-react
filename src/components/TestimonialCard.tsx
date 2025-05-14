
import React from "react";
import { motion } from "framer-motion";

export type AuthorProps = {
  name: string;
  handle: string;
  avatar: string;
  avatarFallback?: string;
};

export type TestimonialCardProps = {
  author: AuthorProps;
  text: string;
  href?: string;
};

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  author,
  text,
  href,
}) => {
  const Content = () => (
    <div className="flex flex-col p-6 bg-subtle-gray rounded-lg hover:shadow-lg transition-shadow h-full">
      <div className="flex-1">
        <p className="text-light-text mb-4 italic">"{text}"</p>
      </div>

      <div className="flex items-center mt-4">
        <div className="w-10 h-10 rounded-full overflow-hidden mr-3 bg-gray-700 flex items-center justify-center">
          {author.avatar ? (
            <img
              src={author.avatar}
              alt={author.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="text-light-text font-bold">
              {author.avatarFallback || author.name.charAt(0)}
            </div>
          )}
        </div>
        <div>
          <p className="text-light-text font-semibold">{author.name}</p>
          <p className="text-sm text-muted-foreground">{author.handle}</p>
        </div>
      </div>
    </div>
  );

  return href ? (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block min-w-[300px] w-80 mx-3 h-full"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Content />
    </motion.a>
  ) : (
    <motion.div
      className="min-w-[300px] w-80 mx-3 h-full"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Content />
    </motion.div>
  );
};

export default TestimonialCard;
