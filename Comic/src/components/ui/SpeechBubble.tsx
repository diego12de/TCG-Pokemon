import React from 'react';
import { motion } from 'motion/react';

interface SpeechBubbleProps {
  type: 'speech' | 'thought' | 'shout';
  text: string;
  author: string;
  className?: string;
  delay?: number;
}

export function SpeechBubble({ type, text, author, className = '', delay = 0 }: SpeechBubbleProps) {
  const baseClasses = "bg-paper panel-border shadow-hard p-4 relative z-10";
  
  let shapeClasses = "";
  let tail = null;

  if (type === 'speech') {
    shapeClasses = "rounded-none";
    tail = (
      <div className="absolute -bottom-[14px] left-8 w-0 h-0 border-l-[14px] border-l-transparent border-t-[14px] border-t-ink border-r-[14px] border-r-transparent">
        <div className="absolute -top-[17px] -left-[10px] w-0 h-0 border-l-[10px] border-l-transparent border-t-[10px] border-t-paper border-r-[10px] border-r-transparent"></div>
      </div>
    );
  } else if (type === 'thought') {
    shapeClasses = "rounded-[40px]";
    tail = (
      <div className="absolute -bottom-6 left-8 flex flex-col gap-1 items-center">
        <div className="w-3 h-3 rounded-full bg-paper border-[2px] border-ink"></div>
        <div className="w-2 h-2 rounded-full bg-paper border-[2px] border-ink ml-4"></div>
        <div className="w-1 h-1 rounded-full bg-paper border-[2px] border-ink ml-6"></div>
      </div>
    );
  } else if (type === 'shout') {
    // A CSS polygon for a jagged shout bubble
    shapeClasses = "clip-path-shout p-8"; 
  }

  return (
    <motion.div 
      initial={{ scale: 0.8, opacity: 0, y: 20 }}
      whileInView={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ type: "spring", bounce: 0.4, delay }}
      viewport={{ once: true, margin: "-50px" }}
      className={`absolute ${className}`}
    >
      <div className={`${baseClasses} ${shapeClasses}`}>
        <p className="font-body text-sm text-ink font-medium leading-snug mb-2">
          "{text}"
        </p>
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs font-bold text-blood">— {author}</span>
          <span className="text-blood text-xs tracking-widest">★★★★★</span>
        </div>
        {tail}
      </div>
      {type === 'shout' && (
        <div className="absolute inset-0 bg-ink -z-10 translate-x-1 translate-y-1 clip-path-shout"></div>
      )}
    </motion.div>
  );
}
