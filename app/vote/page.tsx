"use client"
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { useAuthGuard } from "@/hooks/useAuthGuard";
import { CandidateCard } from "@/components/CandidateCard";
import { VotingConfirmationModal } from "@/components/VotingConfirmationModal";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Clock, Users, Shield, Info } from "lucide-react";

const candidates = [
  {
    candidateId: "Candidate A",
    metrics: {
      projectsCompleted: 12,
      deliverablesMet: 45,
      performanceScore: 92,
      teamContributions: 28,
      leadershipInitiatives: 5,
      peerFeedbackScore: 88,
    },
    endorsements: ["Strategic Thinker", "Team Player", "Innovative"],
  },
  {
    candidateId: "Candidate B",
    metrics: {
      projectsCompleted: 15,
      deliverablesMet: 52,
      performanceScore: 89,
      teamContributions: 35,
      leadershipInitiatives: 8,
      peerFeedbackScore: 94,
    },
    endorsements: ["Mentor", "Problem Solver", "Reliable"],
  },
  {
    candidateId: "Candidate C",
    metrics: {
      projectsCompleted: 10,
      deliverablesMet: 38,
      performanceScore: 95,
      teamContributions: 22,
      leadershipInitiatives: 6,
      peerFeedbackScore: 91,
    },
    endorsements: ["Technical Expert", "Quick Learner", "Collaborative"],
  },
  {
    candidateId: "Candidate D",
    metrics: {
      projectsCompleted: 18,
      deliverablesMet: 60,
      performanceScore: 87,
      teamContributions: 42,
      leadershipInitiatives: 10,
      peerFeedbackScore: 86,
    },
    endorsements: ["Leader", "Visionary", "Dedicated"],
  },
];

const Vote = () => {
  const isAuthenticated = useAuthGuard();
  const [selectedCandidate, setSelectedCandidate] = useState<string | null>(null);
  const [hasVoted, setHasVoted] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleVote = (candidateId: string) => {
    setSelectedCandidate(candidateId);
  };

  const handleSubmitVote = () => {
    if (selectedCandidate) {
      setHasVoted(true);
      setShowConfirmation(true);
    }
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container py-8 space-y-8 mx-auto">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div>
              <Badge variant="default" className="mb-2">Active</Badge>
              <h1 className="text-3xl font-bold">Q4 2024 Promotion Cycle</h1>
              <p className="text-muted-foreground mt-1">
                Vote for candidates based on their merit and achievements
              </p>
            </div>
            <Card className="md:min-w-[280px]">
              <CardContent className="p-4 space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>Time Remaining</span>
                  </div>
                  <span className="font-semibold">11 days</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>Participation</span>
                  </div>
                  <span className="font-semibold">67%</span>
                </div>
                <Progress value={67} className="h-2" />
              </CardContent>
            </Card>
          </div>

          {/* Info Banner */}
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                  <Shield className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Anonymous & Secure Voting</h3>
                  <p className="text-sm text-muted-foreground">
                    All candidate profiles are anonymized. Your vote is encrypted and cannot be traced back to you.
                    Select a candidate below and click &quot;Submit Vote&quot; when ready.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Candidates Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Candidates</h2>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Info className="h-4 w-4" />
              <span>Click on a candidate to select</span>
            </div>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            {candidates.map((candidate) => (
              <CandidateCard
                key={candidate.candidateId}
                {...candidate}
                onVote={handleVote}
                hasVoted={hasVoted}
                isSelected={selectedCandidate === candidate.candidateId}
              />
            ))}
          </div>
        </div>

        {/* Submit Button */}
        {!hasVoted && (
          <div className="flex justify-center">
            <Button
              size="lg"
              onClick={handleSubmitVote}
              disabled={!selectedCandidate}
              className="min-w-[200px]"
            >
              {selectedCandidate ? `Submit Vote for ${selectedCandidate}` : "Select a Candidate"}
            </Button>
          </div>
        )}

        {hasVoted && (
          <Card className="bg-success/5 border-success/20">
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-semibold text-success">Thank you for voting!</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Your vote has been recorded securely and anonymously.
              </p>
            </CardContent>
          </Card>
        )}
      </main>

      <VotingConfirmationModal
        isOpen={showConfirmation}
        onClose={() => setShowConfirmation(false)}
        candidateId={selectedCandidate || undefined}
      />
    </div>
  );
};

export default Vote;
