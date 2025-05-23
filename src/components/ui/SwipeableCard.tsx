import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
interface SwipeableCardProps {
  imageUrl: string;
  title: string;
  description: string;
  tags: string[];
  onSwipe?: (direction: 'left' | 'right') => void;
}
export const SwipeableCard: React.FC<SwipeableCardProps> = ({
  imageUrl,
  title,
  description,
  tags,
  onSwipe
}) => {
  const [exitX, setExitX] = useState<number>(0);
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-25, 25]);
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0, 1, 1, 1, 0]);
  const handleDragEnd = (event: any, info: any) => {
    if (info.offset.x > 100) {
      setExitX(200);
      onSwipe && onSwipe('right');
    } else if (info.offset.x < -100) {
      setExitX(-200);
      onSwipe && onSwipe('left');
    }
  };
  return <motion.div style={{
    x,
    rotate,
    opacity
  }} drag="x" dragConstraints={{
    left: 0,
    right: 0
  }} onDragEnd={handleDragEnd} animate={{
    x: exitX
  }} className="absolute top-0 left-0 right-0 cursor-grab active:cursor-grabbing">
      <div className="relative rounded-2xl overflow-hidden bg-brand-gray-900 shadow-xl">
        <div className="aspect-[3/4] relative">
          <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/30 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-2xl font-medium mb-2 text-white">{title}</h3>
          <p className="text-gray-200 mb-4 font-light">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => <span key={index} className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-light">
                {tag}
              </span>)}
          </div>
        </div>
      </div>
    </motion.div>;
};