import { Award, Star, Trophy, Target, Zap, Crown } from "lucide-react";
import { cn } from "@/lib/utils";

const badgeTypes = {
  "first-voter": { icon: Zap, label: "Early Bird", color: "bg-info/10 text-info" },
  "consistent": { icon: Star, label: "Consistent Voter", color: "bg-accent/20 text-accent-foreground" },
  "engaged": { icon: Award, label: "Highly Engaged", color: "bg-primary/10 text-primary" },
  "champion": { icon: Trophy, label: "Champion", color: "bg-success/10 text-success" },
  "leader": { icon: Crown, label: "Team Leader", color: "bg-warning/10 text-warning-foreground" },
  "achiever": { icon: Target, label: "Goal Achiever", color: "bg-destructive/10 text-destructive" },
};

interface AchievementBadgeProps {
  type: keyof typeof badgeTypes;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
}

export function AchievementBadge({ type, size = "md", showLabel = true }: AchievementBadgeProps) {
  const badge = badgeTypes[type];
  const Icon = badge.icon;

  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-12 w-12",
    lg: "h-16 w-16",
  };

  const iconSizes = {
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-8 w-8",
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className={cn(
          "flex items-center justify-center rounded-full",
          badge.color,
          sizeClasses[size]
        )}
      >
        <Icon className={iconSizes[size]} />
      </div>
      {showLabel && (
        <span className="text-xs font-medium text-muted-foreground">{badge.label}</span>
      )}
    </div>
  );
}
