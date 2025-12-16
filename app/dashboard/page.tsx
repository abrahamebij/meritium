"use client"
import { Navbar } from "@/components/Navbar";
import { VotingRoundCard } from "@/components/VotingRoundCard";
import { StatCard } from "@/components/StatCard";
import { Button } from "@/components/ui/button";
import { Vote, Users, BarChart3, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useAuthGuard } from "@/hooks/useAuthGuard";
import { useFhevm } from "@/hooks/useFhevm";

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

const Dashboard = () => {
  const isAuthenticated = useAuthGuard();
  const { instance } = useFhevm();
  console.log("instance: ", instance);

  if (!isAuthenticated) {
    return null; // Will redirect to home
  }

  return (
    <div className="min-h-screen bg-background">
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
        <div className="grid gap-4 md:grid-cols-3">
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
          />
          <StatCard
            title="Participation Rate"
            value="94%"
            description="Above company average"
            icon={BarChart3}
          />
        </div>

        {/* Voting Rounds */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Active Voting Rounds</h2>
            <Link
              href="/vote"
              className="text-sm text-primary hover:underline flex items-center gap-1"
            >
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {votingRounds.map((round, index) => (
              <VotingRoundCard key={index} {...round} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard