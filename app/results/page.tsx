"use client"
import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { AchievementBadge } from "@/components/AchievementBadge";
import { Trophy, Medal, Users, TrendingUp, Award, Star } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const voteDistribution = [
  { name: "Candidate A", votes: 85, fill: "hsl(20, 91%, 48%)" },
  { name: "Candidate B", votes: 112, fill: "hsl(42, 95%, 61%)" },
  { name: "Candidate C", votes: 67, fill: "hsl(210, 100%, 50%)" },
  { name: "Candidate D", votes: 45, fill: "hsl(142, 76%, 36%)" },
];

const participationData = [
  { name: "Week 1", participation: 25 },
  { name: "Week 2", participation: 48 },
  { name: "Week 3", participation: 67 },
  { name: "Current", participation: 88 },
];

const topVoters = [
  { name: "Engineering", participation: 94 },
  { name: "Product", participation: 89 },
  { name: "Design", participation: 87 },
  { name: "Marketing", participation: 82 },
  { name: "Sales", participation: 78 },
];

const Results = () => {
  const winner = voteDistribution.reduce((prev, current) =>
    prev.votes > current.votes ? prev : current
  );
  const totalVotes = voteDistribution.reduce((sum, c) => sum + c.votes, 0);

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

        {/* Stats Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Vote Distribution Chart */}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Vote Distribution
              </CardTitle>
              <CardDescription>Breakdown of votes per candidate</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={voteDistribution} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" width={100} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px",
                      }}
                    />
                    <Bar dataKey="votes" radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Participation Pie Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Vote Share
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={voteDistribution}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="votes"
                    >
                      {voteDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px",
                      }}
                    />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Participation Over Time */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Participation Over Time
              </CardTitle>
              <CardDescription>How participation grew during the voting period</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={participationData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px",
                      }}
                    />
                    <Bar dataKey="participation" fill="hsl(20, 91%, 48%)" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Department Participation */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Medal className="h-5 w-5 text-accent" />
                Department Participation
              </CardTitle>
              <CardDescription>Participation rate by department</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {topVoters.map((dept, index) => (
                <div key={dept.name} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      {index === 0 && <Star className="h-4 w-4 text-accent" />}
                      <span className="font-medium">{dept.name}</span>
                    </div>
                    <span className="text-muted-foreground">{dept.participation}%</span>
                  </div>
                  <Progress value={dept.participation} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Top Engaged Voters */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-accent" />
              Engagement Awards
            </CardTitle>
            <CardDescription>Badges awarded to highly engaged participants</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-8 justify-center py-4">
              <div className="text-center space-y-2">
                <AchievementBadge type="first-voter" size="lg" />
                <p className="text-sm text-muted-foreground">15 Early Birds</p>
              </div>
              <div className="text-center space-y-2">
                <AchievementBadge type="consistent" size="lg" />
                <p className="text-sm text-muted-foreground">42 Consistent Voters</p>
              </div>
              <div className="text-center space-y-2">
                <AchievementBadge type="engaged" size="lg" />
                <p className="text-sm text-muted-foreground">28 Highly Engaged</p>
              </div>
              <div className="text-center space-y-2">
                <AchievementBadge type="champion" size="lg" />
                <p className="text-sm text-muted-foreground">8 Champions</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Results;
