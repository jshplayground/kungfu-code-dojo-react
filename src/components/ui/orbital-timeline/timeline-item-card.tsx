
import React from "react";
import { ArrowRight, Link, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TimelineItem } from "./types";

interface TimelineItemCardProps {
  item: TimelineItem;
  toggleItem: (id: number) => void;
  timelineData: TimelineItem[];
}

export const getStatusStyles = (status: TimelineItem["status"]): string => {
  switch (status) {
    case "completed":
      return "text-white bg-kungfu-red border-white";
    case "in-progress":
      return "text-black bg-white border-kungfu-red";
    case "pending":
      return "text-white bg-dark-bg border-white/50";
    default:
      return "text-white bg-dark-bg border-white/50";
  }
};

const TimelineItemCard = ({ item, toggleItem, timelineData }: TimelineItemCardProps) => {
  return (
    <Card className="absolute top-24 left-1/2 -translate-x-1/2 w-80 bg-dark-bg/90 backdrop-blur-lg border-kungfu-red/30 shadow-xl shadow-kungfu-red/10 overflow-visible">
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-kungfu-red/50"></div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <Badge
            className={`px-2 text-xs ${getStatusStyles(item.status)}`}
          >
            {item.status === "completed"
              ? "DOMINADO"
              : item.status === "in-progress"
              ? "APRENDIENDO"
              : "POR APRENDER"}
          </Badge>
          <span className="text-xs font-mono text-white/50">
            {item.date}
          </span>
        </div>
        <CardTitle className="text-base mt-2 text-light-text">
          {item.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-white/80">
        <p>{item.content}</p>

        <div className="mt-4 pt-3 border-t border-white/10">
          <div className="flex justify-between items-center text-xs mb-1">
            <span className="flex items-center">
              <Zap size={12} className="mr-1 text-tech-neon-green" />
              Nivel de Energía
            </span>
            <span className="font-mono">{item.energy}%</span>
          </div>
          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-tech-neon-green to-kungfu-red"
              style={{ width: `${item.energy}%` }}
            ></div>
          </div>
        </div>

        {item.relatedIds.length > 0 && (
          <div className="mt-4 pt-3 border-t border-white/10">
            <div className="flex items-center mb-2">
              <Link size={12} className="text-white/70 mr-1" />
              <h4 className="text-xs uppercase tracking-wider font-medium text-white/70">
                Habilidades Relacionadas
              </h4>
            </div>
            <div className="flex flex-wrap gap-1">
              {item.relatedIds.map((relatedId) => {
                const relatedItem = timelineData.find(
                  (i) => i.id === relatedId
                );
                return (
                  <Button
                    key={relatedId}
                    variant="outline"
                    size="sm"
                    className="flex items-center h-7 px-3 py-0 text-xs rounded-none border-kungfu-red/20 bg-transparent hover:bg-kungfu-red/10 text-white/80 hover:text-white transition-all"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleItem(relatedId);
                    }}
                  >
                    {relatedItem?.title}
                    <ArrowRight
                      size={10}
                      className="ml-1 text-white/60"
                    />
                  </Button>
                );
              })}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default TimelineItemCard;
