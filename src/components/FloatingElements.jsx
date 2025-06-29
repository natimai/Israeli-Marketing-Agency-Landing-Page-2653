import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiTrendingUp, FiTarget, FiUsers, FiStar, FiZap, FiHeart } = FiIcons;

const FloatingElements = () => {
  const floatingItems = [
    { icon: FiTrendingUp, color: 'text-green-400', delay: 0, x: 100, y: 50 },
    { icon: FiTarget, color: 'text-blue-400', delay: 0.5, x: 200, y: 150 },
    { icon: FiUsers, color: 'text-purple-400', delay: 1, x: 300, y: 100 },
    { icon: FiStar, color: 'text-yellow-400', delay: 1.5, x: 150, y: 200 },
    { icon: FiZap, color: 'text-orange-400', delay: 2, x: 250, y: 50 },
    { icon: FiHeart, color: 'text-pink-400', delay: 2.5, x: 50, y: 120 }
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {floatingItems.map((item, index) => (
        <motion.div
          key={index}
          className={`absolute ${item.color} opacity-20`}
          initial={{ 
            x: item.x, 
            y: item.y, 
            scale: 0,
            rotate: 0
          }}
          animate={{ 
            x: [item.x, item.x + 20, item.x - 10, item.x],
            y: [item.y, item.y - 30, item.y + 15, item.y],
            scale: [0, 1, 0.8, 1],
            rotate: [0, 360, 180, 360]
          }}
          transition={{
            duration: 8,
            delay: item.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <SafeIcon icon={item.icon} className="text-4xl" />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElements;