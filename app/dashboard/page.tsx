"use client"
import { Navbar } from "@/components/Navbar";
import { VotingRoundCard } from "@/components/VotingRoundCard";
import { StatCard } from "@/components/StatCard";
import { AchievementBadge } from "@/components/AchievementBadge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Vote, Users, BarChart3, Bell, Trophy, ArrowRight, Clock } from "lucide-react";
import Link from "next/link";


const votingRounds = [
  {
    title: "Q4 2024 Promotion Cycle",
    description: "Annual promotion voting for senior positions",
    status: "active" as const,
    participants: 234,
    totalEligible: 350,
    endDate: "Dec 15, 2024",
    daysLeft: 11,
  },
  {
    title: "Engineering Excellence Award",
    description: "Vote for outstanding engineering contributions",
    status: "active" as const,
    participants: 156,
    totalEligible: 200,
    endDate: "Dec 20, 2024",
    daysLeft: 16,
  },
  {
    title: "Team Leadership Recognition",
    description: "Recognize exceptional team leaders",
    status: "upcoming" as const,
    participants: 0,
    totalEligible: 150,
    endDate: "Jan 5, 2025",
  },
];

const notifications = [
  {
    id: 1,
    title: "New voting round started",
    message: "Q4 2024 Promotion Cycle is now open for voting",
    time: "2 hours ago",
    type: "info",
  },
  {
    id: 2,
    title: "Badge earned!",
    message: "You've earned the 'Consistent Voter' badge",
    time: "1 day ago",
    type: "success",
  },
  {
    id: 3,
    title: "Reminder",
    message: "Engineering Excellence Award voting ends in 5 days",
    time: "2 days ago",
    type: "warning",
  },
];


const Dashboard = () => {
return   <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container py-8 space-y-8 mx-auto">
        {/* Welcome Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Welcome back, John!</h1>
            <p className="text-muted-foreground mt-1">
              Your participation makes our organization stronger.
            </p>
          </div>
          <div className="flex gap-3">
            <Link href="/vote">
              <Button size="lg">
                <Vote className="mr-2 h-5 w-5" />
                Cast Your Vote
              </Button>
            </Link>
            <Link href="/results">
              <Button variant="outline" size="lg">
                <BarChart3 className="mr-2 h-5 w-5" />
                View Results
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Active Rounds"
            value={2}
            description="Requiring your vote"
            icon={Vote}
          />
          <StatCard
            title="Your Votes Cast"
            value={12}
            description="This year"
            icon={Users}
            trend={{ value: 20, isPositive: true }}
          />
          <StatCard
            title="Participation Rate"
            value="94%"
            description="Above company average"
            icon={BarChart3}
          />
          <StatCard
            title="Badges Earned"
            value={5}
            description="Keep up the great work!"
            icon={Trophy}
          />
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Voting Rounds */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Active Voting Rounds</h2>
              <Link href="/vote" className="text-sm text-primary hover:underline flex items-center gap-1">
                View all <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {votingRounds.map((round, index) => (
                <VotingRoundCard key={index} {...round} />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Your Badges */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-accent" />
                  Your Badges
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4 justify-center">
                  <AchievementBadge type="first-voter" />
                  <AchievementBadge type="consistent" />
                  <AchievementBadge type="engaged" />
                  <AchievementBadge type="champion" />
                  <AchievementBadge type="achiever" />
                </div>
              </CardContent>
            </Card>

            {/* Notifications */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Notifications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className="flex gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium">{notification.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {notification.message}
                      </p>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {notification.time}
                      </div>
                    </div>
                    <Badge
                      variant={
                        notification.type === "success"
                          ? "success"
                          : notification.type === "warning"
                          ? "gold"
                          : "secondary"
                      }
                      className="h-fit"
                    >
                      {notification.type}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
}

export default Dashboard