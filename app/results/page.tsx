"use client"
import { Navbar } from "@/components/Navbar";
import { useAuthGuard } from "@/hooks/useAuthGuard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Trophy, Users, Award } from "lucide-react";

const voteDistribution = [
  { name: "Candidate A", votes: 85, fill: "hsl(20, 91%, 48%)" },
  { name: "Candidate B", votes: 112, fill: "hsl(42, 95%, 61%)" },
  { name: "Candidate C", votes: 67, fill: "hsl(210, 100%, 50%)" },
  { name: "Candidate D", votes: 45, fill: "hsl(142, 76%, 36%)" },
];



const Results = () => {
  const isAuthenticated = useAuthGuard();
  const winner = voteDistribution.reduce((prev, current) =>
    prev.votes > current.votes ? prev : current
  );
  const totalVotes = voteDistribution.reduce((sum, c) => sum + c.votes, 0);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container py-8 space-y-8 mx-auto">
        {/* Header */}
        <div className="space-y-2">
          <Badge variant="success" className="mb-2">Completed</Badge>
          <h1 className="text-3xl font-bold">Q3 2024 Promotion Results</h1>
          <p className="text-muted-foreground">
            Final results for the quarterly promotion cycle
          </p>
        </div>

        {/* Winner Announcement */}
        <Card className="overflow-hidden">
          <div className="bg-linear-to-r from-primary to-primary/80 p-8 text-primary-foreground">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary-foreground/20 backdrop-blur">
                <Trophy className="h-12 w-12" />
              </div>
              <div className="text-center md:text-left">
                <p className="text-primary-foreground/80 text-sm font-medium mb-1">Winner</p>
                <h2 className="text-4xl font-bold mb-2">{winner.name}</h2>
                <p className="text-primary-foreground/90">
                  Received {winner.votes} votes ({Math.round((winner.votes / totalVotes) * 100)}% of total)
                </p>
              </div>
              <div className="md:ml-auto flex gap-3">
                <div className="text-center px-4 py-2 rounded-lg bg-primary-foreground/10">
                  <p className="text-2xl font-bold">{totalVotes}</p>
                  <p className="text-xs text-primary-foreground/80">Total Votes</p>
                </div>
                <div className="text-center px-4 py-2 rounded-lg bg-primary-foreground/10">
                  <p className="text-2xl font-bold">88%</p>
                  <p className="text-xs text-primary-foreground/80">Participation</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Vote Results */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              Final Results
            </CardTitle>
            <CardDescription>Vote breakdown by candidate</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {voteDistribution
                .sort((a, b) => b.votes - a.votes)
                .map((candidate, index) => (
                  <div key={candidate.name} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold">
                        {index + 1}
                      </div>
                      <span className="font-medium">{candidate.name}</span>
                      {index === 0 && <Trophy className="h-4 w-4 text-accent" />}
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">{candidate.votes} votes</p>
                      <p className="text-sm text-muted-foreground">
                        {Math.round((candidate.votes / totalVotes) * 100)}%
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>

        {/* Summary Stats */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold">{totalVotes}</div>
              <p className="text-sm text-muted-foreground">Total Votes</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold">88%</div>
              <p className="text-sm text-muted-foreground">Participation Rate</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold">4</div>
              <p className="text-sm text-muted-foreground">Candidates</p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Results;
