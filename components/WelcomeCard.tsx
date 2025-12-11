"use client"
import { Building2, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

interface WelcomeCardProps {
  onGetStarted: () => void;
}

export default function WelcomeCard({ onGetStarted }: WelcomeCardProps) {
  return (
    <Card className="max-w-lg mx-auto bg-linear-to-br from-blue-50 to-indigo-100 border-blue-200">
      <CardHeader className="text-center space-y-4">
        <div className="mx-auto w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
          <Building2 className="w-8 h-8 text-white" />
        </div>
        <CardTitle className="text-2xl text-gray-900 flex items-center justify-center gap-2">
          Welcome to CorpNova
          <Sparkles className="w-5 h-5 text-yellow-500" />
        </CardTitle>
      </CardHeader>
      
      <CardContent className="text-center space-y-6">
        <div className="space-y-3">
          <p className="text-gray-700 font-medium">
            You&apos;re now pretending to work at <span className="text-blue-600 font-semibold">CorpNova</span>
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            Explore our internal prediction markets platform, Certus. Create and participate in 
            crypto and weather predictions with automated outcomes powered by verified real-world data.
          </p>
        </div>
        
        <div className="bg-white/70 rounded-lg p-4 border border-blue-200">
          <p className="text-xs text-gray-500 mb-2">Your Role:</p>
          <p className="text-sm font-medium text-gray-700">Market Research Analyst</p>
        </div>
        
        <Button 
          onClick={onGetStarted}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white"
          size="lg"
        >
          Enter Certus Platform
        </Button>
      </CardContent>
    </Card>
  );
}