import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';

const InteractiveCard = ({ service, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 300);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ 
        y: -10,
        scale: 1.02,
        rotateY: 5
      }}
      whileTap={{ scale: 0.98 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      className="relative bg-white p-8 rounded-3xl shadow-lg cursor-pointer overflow-hidden group"
      style={{ 
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
    >
      {/* Animated background */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
        animate={{
          scale: isHovered ? 1.1 : 1,
          rotate: isHovered ? 2 : 0
        }}
      />

      {/* Sparkle effect on click */}
      {isClicked && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.6 }}
        >
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-yellow-400 rounded-full"
              initial={{ 
                x: '50%', 
                y: '50%',
                scale: 0 
              }}
              animate={{ 
                x: `${50 + (Math.random() - 0.5) * 100}%`,
                y: `${50 + (Math.random() - 0.5) * 100}%`,
                scale: [0, 1, 0]
              }}
              transition={{ 
                duration: 0.6,
                delay: i * 0.1 
              }}
            />
          ))}
        </motion.div>
      )}

      {/* Icon with micro-interactions */}
      <motion.div
        className={`bg-gradient-to-r ${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 relative`}
        animate={{
          rotate: isHovered ? [0, -10, 10, 0] : 0,
          scale: isHovered ? 1.1 : 1
        }}
        transition={{ duration: 0.5 }}
      >
        <SafeIcon icon={service.icon} className="text-white text-2xl" />
        
        {/* Pulse effect */}
        <motion.div
          className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.color}`}
          animate={{
            scale: isHovered ? [1, 1.3, 1] : 1,
            opacity: isHovered ? [0.5, 0, 0.5] : 0
          }}
          transition={{ 
            duration: 1.5,
            repeat: isHovered ? Infinity : 0
          }}
        />
      </motion.div>

      {/* Content */}
      <motion.h3
        className="text-xl font-bold text-gray-900 mb-4 text-right"
        animate={{
          color: isHovered ? '#3B82F6' : '#111827'
        }}
      >
        {service.title}
      </motion.h3>

      <motion.p
        className="text-gray-600 leading-relaxed text-right"
        animate={{
          y: isHovered ? -2 : 0
        }}
      >
        {service.description}
      </motion.p>

      {/* Hover indicator */}
      <motion.div
        className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100"
        initial={{ x: -20 }}
        animate={{ x: isHovered ? 0 : -20 }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
          <span className="text-white text-sm">←</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default InteractiveCard;