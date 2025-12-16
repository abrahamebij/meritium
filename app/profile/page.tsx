"use client"
import { Navbar } from "@/components/Navbar";
import { useAuthGuard } from "@/hooks/useAuthGuard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  User, 
  Mail, 
  Building2, 
  Calendar, 
  Vote,
  Settings
} from "lucide-react";

const Profile = () => {
  const isAuthenticated = useAuthGuard();

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container py-8 space-y-8 mx-auto">
        {/* Profile Header */}
        <Card>
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="h-28 w-28 rounded-full bg-linear-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-4xl font-bold text-primary-foreground">JD</span>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-2xl font-bold">John Doe</h1>
                <p className="text-muted-foreground">Senior Software Engineer</p>
                
                <div className="flex flex-wrap gap-4 mt-4 justify-center md:justify-start">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Mail className="h-4 w-4" />
                    <span>john.doe@company.com</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Building2 className="h-4 w-4" />
                    <span>Engineering</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Joined Jan 2021</span>
                  </div>
                </div>
              </div>

              <Button variant="outline" size="icon">
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Vote className="h-5 w-5 text-primary" />
                Voting Statistics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 rounded-lg bg-muted/50">
                  <p className="text-3xl font-bold">12</p>
                  <p className="text-xs text-muted-foreground">Votes Cast</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-muted/50">
                  <p className="text-3xl font-bold">94%</p>
                  <p className="text-xs text-muted-foreground">Participation</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-primary" />
                Account Settings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full justify-start">
                <Settings className="mr-2 h-4 w-4" />
                Update Profile
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Profile;
