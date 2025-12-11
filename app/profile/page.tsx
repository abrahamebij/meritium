import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { AchievementBadge } from "@/components/AchievementBadge";
import { 
  User, 
  Mail, 
  Building2, 
  Calendar, 
  Award, 
  TrendingUp,
  Vote,
  Star,
  Settings,
  Bell
} from "lucide-react";

const Profile = () => {
  const reputationScore = 847;
  const maxScore = 1000;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container py-8 space-y-8 mx-auto">
        {/* Profile Header */}
        <Card>
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="relative">
                <div className="h-28 w-28 rounded-full bg-linear-to-br from-primary to-accent flex items-center justify-center">
                  <span className="text-4xl font-bold text-primary-foreground">JD</span>
                </div>
                <div className="absolute -bottom-1 -right-1 h-8 w-8 rounded-full bg-success flex items-center justify-center border-4 border-card">
                  <Star className="h-4 w-4 text-success-foreground" />
                </div>
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

              <div className="flex gap-2">
                <Button variant="outline" size="icon">
                  <Bell className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Settings className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Reputation Score */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Reputation Score
              </CardTitle>
              <CardDescription>Your standing in the organization</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <span className="text-5xl font-bold gradient-text">{reputationScore}</span>
                <span className="text-2xl text-muted-foreground">/{maxScore}</span>
              </div>
              <Progress value={(reputationScore / maxScore) * 100} className="h-3" />
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Level</span>
                <Badge variant="gold">Gold Member</Badge>
              </div>
              <p className="text-xs text-muted-foreground text-center">
                Top 15% in your department
              </p>
            </CardContent>
          </Card>

          {/* Voting Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Vote className="h-5 w-5 text-primary" />
                Voting Activity
              </CardTitle>
              <CardDescription>Your participation statistics</CardDescription>
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
                <div className="text-center p-4 rounded-lg bg-muted/50">
                  <p className="text-3xl font-bold">3</p>
                  <p className="text-xs text-muted-foreground">Rounds Won</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-muted/50">
                  <p className="text-3xl font-bold">8</p>
                  <p className="text-xs text-muted-foreground">Nominations</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-primary" />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <Settings className="mr-2 h-4 w-4" />
                Account Settings
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Bell className="mr-2 h-4 w-4" />
                Notification Preferences
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Award className="mr-2 h-4 w-4" />
                View All Achievements
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Achievements */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-accent" />
              Achievements & Badges
            </CardTitle>
            <CardDescription>Recognition for your participation and contributions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
              <div className="text-center space-y-2">
                <AchievementBadge type="first-voter" size="lg" />
                <p className="text-xs text-muted-foreground">Earned Mar 2024</p>
              </div>
              <div className="text-center space-y-2">
                <AchievementBadge type="consistent" size="lg" />
                <p className="text-xs text-muted-foreground">Earned Apr 2024</p>
              </div>
              <div className="text-center space-y-2">
                <AchievementBadge type="engaged" size="lg" />
                <p className="text-xs text-muted-foreground">Earned Jun 2024</p>
              </div>
              <div className="text-center space-y-2">
                <AchievementBadge type="champion" size="lg" />
                <p className="text-xs text-muted-foreground">Earned Aug 2024</p>
              </div>
              <div className="text-center space-y-2">
                <AchievementBadge type="achiever" size="lg" />
                <p className="text-xs text-muted-foreground">Earned Oct 2024</p>
              </div>
              <div className="text-center space-y-2 opacity-40">
                <AchievementBadge type="leader" size="lg" />
                <p className="text-xs text-muted-foreground">Locked</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest actions on the platform</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { action: "Voted in Q4 2024 Promotion Cycle", time: "2 hours ago", icon: Vote },
                { action: "Earned 'Consistent Voter' badge", time: "1 day ago", icon: Award },
                { action: "Participated in Engineering Excellence Award", time: "3 days ago", icon: Star },
                { action: "Updated profile settings", time: "1 week ago", icon: Settings },
              ].map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <activity.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{activity.action}</p>
                    <p className="text-sm text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Profile;
