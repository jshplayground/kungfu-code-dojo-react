
import React, { forwardRef } from "react";
import { TimelineItem } from "./types";
import TimelineItemCard from "./timeline-item-card";

interface TimelineNodeProps {
  item: TimelineItem;
  position: {
    x: number;
    y: number;
    angle: number;
    zIndex: number;
    opacity: number;
  };
  isExpanded: boolean;
  isRelated: boolean;
  isPulsing: boolean;
  toggleItem: (id: number) => void;
  timelineData: TimelineItem[];
}

const TimelineNode = forwardRef<HTMLDivElement, TimelineNodeProps>(({ 
  item, 
  position, 
  isExpanded, 
  isRelated, 
  isPulsing,
  toggleItem,
  timelineData
}, ref) => {
  const Icon = item.icon;
  
  const nodeStyle = {
    transform: `translate(${position.x}px, ${position.y}px)`,
    zIndex: isExpanded ? 200 : position.zIndex,
    opacity: isExpanded ? 1 : position.opacity,
  };

  return (
    <div
      ref={ref}
      className="absolute transition-all duration-700 cursor-pointer"
      style={nodeStyle}
      onClick={(e) => {
        e.stopPropagation();
        toggleItem(item.id);
      }}
    >
      <div
        className={`absolute rounded-full ${
          isPulsing ? "animate-pulse duration-1000" : ""
        }`}
        style={{
          background: `radial-gradient(circle, rgba(229,9,20,0.2) 0%, rgba(12,242,160,0) 70%)`,
          width: `${item.energy * 0.8 + 50}px`,
          height: `${item.energy * 0.8 + 50}px`,
          left: `-${(item.energy * 0.8 + 50 - 56) / 2}px`,
          top: `-${(item.energy * 0.8 + 50 - 56) / 2}px`,
        }}
      ></div>

      <div
        className={`
          w-14 h-14 rounded-full flex items-center justify-center
          ${
            isExpanded
              ? "bg-tech-neon-green text-dark-bg"
              : isRelated
              ? "bg-kungfu-red/50 text-white"
              : "bg-black/60 text-white backdrop-blur-sm"
          }
          border-2 
          ${
            isExpanded
              ? "border-tech-neon-green shadow-lg shadow-tech-neon-green/30"
              : isRelated
              ? "border-kungfu-red animate-pulse"
              : "border-white/40"
          }
          transition-all duration-300 transform
          ${isExpanded ? "scale-150" : ""}
        `}
      >
        <Icon size={24} />
      </div>

      <div
        className={`
          absolute top-16 whitespace-nowrap
          text-sm font-semibold tracking-wider
          transition-all duration-300
          ${isExpanded ? "text-light-text scale-125" : "text-white/70"}
        `}
      >
        {item.title}
      </div>

      {isExpanded && (
        <TimelineItemCard 
          item={item} 
          toggleItem={toggleItem}
          timelineData={timelineData}
        />
      )}
    </div>
  );
});

TimelineNode.displayName = "TimelineNode";

export default TimelineNode;
