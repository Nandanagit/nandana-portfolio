'use client';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  name: string;
  description: string;
  link?: string;
}

export default function ProjectCard({ name, description, link }: ProjectCardProps) {
  return (
    <motion.div
      className="bg-black border border-gray-800 rounded-lg p-6 mb-6 shadow-md hover:shadow-xl transition-shadow"
      whileHover={{ y: -6, scale: 1.03 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 mt-2 text-sm font-medium text-black bg-white rounded-md hover:bg-gray-200 transition-colors"
        >
          View Website
        </a>
      )}
    </motion.div>
  );
}
