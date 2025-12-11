import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Calendar, Users, Clock } from "lucide-react";
import Link from "next/link";

interface VotingRoundCardProps {
  title: string;
  description: string;
  status: "active" | "upcoming" | "completed";
  participants: number;
  totalEligible: number;
  endDate: string;
  daysLeft?: number;
}

export function VotingRoundCard({
  title,
  description,
  status,
  participants,
  totalEligible,
  endDate,
  daysLeft,
}: VotingRoundCardProps) {
  const participation = Math.round((participants / totalEligible) * 100);

  return (
    <Card className="card-hover">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <CardTitle className="text-lg">{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
          <Badge
            variant={
              status === "active" ? "default" : status === "upcoming" ? "gold" : "muted"
            }
          >
            {status === "active" ? "Active" : status === "upcoming" ? "Upcoming" : "Completed"}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4" />
            <span>{endDate}</span>
          </div>
          {daysLeft !== undefined && status === "active" && (
            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              <span>{daysLeft} days left</span>
            </div>
          )}
          <div className="flex items-center gap-1.5">
            <Users className="h-4 w-4" />
            <span>{participants}/{totalEligible}</span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Participation</span>
            <span className="font-medium">{participation}%</span>
          </div>
          <Progress value={participation} className="h-2" />
        </div>
      </CardContent>
      <CardFooter>
        <Link href="/vote" className="w-full">
          <Button
            className="w-full"
            variant={status === "active" ? "default" : "outline"}
            disabled={status !== "active"}
          >
            {status === "active" ? "Cast Your Vote" : status === "upcoming" ? "Coming Soon" : "View Results"}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
