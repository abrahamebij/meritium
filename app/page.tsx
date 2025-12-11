"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Wallet, Shield, Vote, ChevronRight, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Home = () => {
   const [isConnecting, setIsConnecting] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);
  const router = useRouter()

  const handleConnectWallet = async () => {
    setIsConnecting(true);
    // Mock wallet connection
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setWalletConnected(true);
    setIsConnecting(false);
    
    // Navigate after a brief moment
    setTimeout(() => {
      // router.push("/dashboard");
    }, 800);
  };


  return  <div className="min-h-screen relative overflow-hidden bg-background">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-secondary/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '-1.5s' }} />
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="w-full p-6 md:p-8">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary shadow-lg">
                <Award className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-foreground">Meritium</span>
                <span className="hidden md:inline text-xs ml-2 px-2 py-0.5 rounded-full bg-secondary/20 text-secondary font-medium">
                  for CorpNova
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="h-4 w-4" />
              <span className="hidden sm:inline">Secure & Anonymous</span>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center px-4 py-12">
          <div className="w-full max-w-7xl grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Hero Content */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-secondary/10 border border-secondary/20 px-4 py-1.5 text-sm font-medium text-secondary">
                  <Sparkles className="h-4 w-4" />
                  CorpNova Internal Platform
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
                  Your Merit,
                  <br />
                  <span className="text-secondary">Your Voice</span>
                </h1>
                
                <p className="text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0">
                  A fair, transparent promotion platform where your achievements speak louder than titles. 
                  Connect your wallet to participate in anonymous voting.
                </p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 p-4 rounded-xl bg-card/60 border border-border/50">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium text-sm text-foreground">Anonymous</p>
                    <p className="text-xs text-muted-foreground">Encrypted votes</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-card/60 border border-border/50">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/20">
                    <Vote className="h-5 w-5 text-secondary" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium text-sm text-foreground">Merit-Based</p>
                    <p className="text-xs text-muted-foreground">Fair selection</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-card/60 border border-border/50">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-success/10">
                    <Award className="h-5 w-5 text-success" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium text-sm text-foreground">Transparent</p>
                    <p className="text-xs text-muted-foreground">Verified results</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Wallet Connection Card */}
            <div className="flex justify-center lg:justify-end">
              <Card className="w-full max-w-md border-border/50 shadow-2xl shadow-primary/5 bg-card">
                <CardContent className="p-8 space-y-8">
                  <div className="text-center space-y-2">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-primary to-primary/80 shadow-lg">
                      <Wallet className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground mt-4">Connect Wallet</h2>
                    <p className="text-muted-foreground text-sm">
                      Link your CorpNova employee wallet to access the voting platform
                    </p>
                  </div>

                  <div className="space-y-3">
                    <Button 
                      onClick={handleConnectWallet} 
                      disabled={isConnecting || walletConnected}
                      className="w-full h-14 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                      size="lg"
                    >
                      {walletConnected ? (
                        <>
                          <span className="flex h-2 w-2 rounded-full bg-success mr-2 animate-pulse" />
                          Connected Successfully
                        </>
                      ) : isConnecting ? (
                        <>
                          <span className="flex h-5 w-5 mr-2 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                          Connecting...
                        </>
                      ) : (
                        <>
                          <Wallet className="mr-2 h-5 w-5" />
                          Connect CorpNova Wallet
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>

                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-border" />
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-card px-3 text-muted-foreground">Or</span>
                      </div>
                    </div>

                    <Button 
                      variant="outline" 
                      className="w-full h-12 text-sm border-2"
                      onClick={() => router.push("/dashboard")}
                    >
                      Continue as Guest (Demo)
                    </Button>
                  </div>

                  <div className="pt-4 border-t border-border/50">
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                      <Shield className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                      <div className="text-xs text-muted-foreground">
                        <p className="font-medium text-foreground mb-1">Secure Connection</p>
                        Your identity is verified through CorpNova&apos;s enterprise wallet system. 
                        All votes remain anonymous and encrypted.
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="w-full p-6 md:p-8">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© 2024 CorpNova. Internal use only.</p>
            <div className="flex items-center gap-6">
              <span className="hover:text-foreground transition-colors cursor-pointer">Privacy Policy</span>
              <span className="hover:text-foreground transition-colors cursor-pointer">Terms of Use</span>
              <span className="hover:text-foreground transition-colors cursor-pointer">Help</span>
            </div>
          </div>
        </footer>
      </div>
    </div>;
};

export default Home;
