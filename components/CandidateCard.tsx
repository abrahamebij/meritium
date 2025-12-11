import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Target, 
  CheckCircle2, 
  TrendingUp, 
  Users, 
  Lightbulb, 
  MessageSquare,
  User
} from "lucide-react";

interface CandidateCardProps {
  candidateId: string;
  metrics: {
    projectsCompleted: number;
    deliverablesMet: number;
    performanceScore: number;
    teamContributions: number;
    leadershipInitiatives: number;
    peerFeedbackScore: number;
  };
  endorsements: string[];
  onVote: (candidateId: string) => void;
  hasVoted?: boolean;
  isSelected?: boolean;
}

const metricIcons = {
  projectsCompleted: Target,
  deliverablesMet: CheckCircle2,
  performanceScore: TrendingUp,
  teamContributions: Users,
  leadershipInitiatives: Lightbulb,
  peerFeedbackScore: MessageSquare,
};

const metricLabels = {
  projectsCompleted: "Projects Completed",
  deliverablesMet: "Deliverables Met",
  performanceScore: "Performance Score",
  teamContributions: "Team Contributions",
  leadershipInitiatives: "Leadership Initiatives",
  peerFeedbackScore: "Peer Feedback",
};

export function CandidateCard({
  candidateId,
  metrics,
  endorsements,
  onVote,
  hasVoted = false,
  isSelected = false,
}: CandidateCardProps) {
  return (
    <Card className={`card-hover ${isSelected ? "ring-2 ring-primary" : ""}`}>
      <CardHeader>
        <div className="flex items-center gap-4">
          <div className="h-14 w-14 rounded-full bg-muted flex items-center justify-center">
            <User className="h-7 w-7 text-muted-foreground" />
          </div>
          <div>
            <CardTitle>{candidateId}</CardTitle>
            <p className="text-sm text-muted-foreground">Anonymized Profile</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          {Object.entries(metrics).map(([key, value]) => {
            const Icon = metricIcons[key as keyof typeof metricIcons];
            const label = metricLabels[key as keyof typeof metricLabels];
            const isPercentage = key.includes("Score");
            
            return (
              <div key={key} className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon className="h-4 w-4" />
                  <span>{label}</span>
                </div>
                {isPercentage ? (
                  <div className="space-y-1">
                    <Progress value={value} className="h-2" />
                    <span className="text-sm font-semibold">{value}%</span>
                  </div>
                ) : (
                  <span className="text-2xl font-bold">{value}</span>
                )}
              </div>
            );
          })}
        </div>

        {endorsements.length > 0 && (
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-muted-foreground">Blind Highlights</h4>
            <div className="flex flex-wrap gap-2">
              {endorsements.map((endorsement, index) => (
                <Badge key={index} variant="gold" className="text-xs">
                  {endorsement}
                </Badge>
              ))}
            </div>
          </div>
        )}

        <Button
          onClick={() => onVote(candidateId)}
          className="w-full"
          variant={isSelected ? "outline" : "default"}
          disabled={hasVoted && !isSelected}
        >
          {isSelected ? "Selected" : hasVoted ? "Vote Submitted" : "Vote for this Candidate"}
        </Button>
      </CardContent>
    </Card>
  );
}
