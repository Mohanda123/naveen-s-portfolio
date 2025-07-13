import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Code, Palette, BarChart3, Users, Target, Lightbulb, Clock } from "lucide-react";

const softSkills = [
  { name: "Strategic Planning & Campaign Management", icon: Target },
  { name: "Creativity & Content Ideation", icon: Lightbulb },
  { name: "Market Research & Competitive Analysis", icon: BarChart3 },
  { name: "Communication & Collaboration", icon: Users },
  { name: "Time Management & Multitasking", icon: Clock },
  { name: "Problem-Solving & Decision-Making", icon: Brain }
];

const technicalSkills = [
  "Search Engine Optimization (SEO)",
  "Pay-Per-Click (PPC) Advertising",
  "Google Ads & Meta Ads",
  "Social Media Marketing",
  "Content Marketing & Copywriting",
  "Email Marketing & Automation",
  "Influencer & Affiliate Marketing",
  "Video Marketing (YouTube)",
  "Designing Skills (Canva, Photoshop)",
  "Video Editing (CapCut Pro)",
  "Google Analytics",
  "Data Analytics & ROI Tracking"
];

const platforms = [
  "Facebook", "Instagram", "LinkedIn", "Twitter", "YouTube", 
  "Google Ads", "Meta Ads", "Canva", "Photoshop", "CapCut Pro",
  "Google Analytics", "Looker Studio", "Email Marketing Tools"
];

const Skills = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5">
            Skills & Expertise
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Technical <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Arsenal</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for driving digital marketing success across all channels
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Soft Skills */}
          <Card className="border-0 bg-card/80 backdrop-blur-sm animate-slide-up">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <Brain className="w-5 h-5 text-primary" />
                Soft Skills
              </CardTitle>
              <CardDescription>
                Core competencies that drive team success and project excellence
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {softSkills.map((skill, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/20 hover:bg-primary/10 transition-colors"
                  >
                    <div className="gradient-primary w-8 h-8 rounded-full flex items-center justify-center text-white">
                      <skill.icon className="w-4 h-4" />
                    </div>
                    <span className="font-medium text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          {/* Technical Skills */}
          <Card className="border-0 bg-card/80 backdrop-blur-sm animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <Code className="w-5 h-5 text-primary" />
                Technical Skills
              </CardTitle>
              <CardDescription>
                Specialized tools and techniques for digital marketing excellence
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-2">
                {technicalSkills.map((skill, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Platforms & Tools */}
        <Card className="border-0 bg-card/80 backdrop-blur-sm animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <Palette className="w-5 h-5 text-primary" />
              Platforms & Tools
            </CardTitle>
            <CardDescription>
              Proficient across all major digital marketing platforms and creative tools
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {platforms.map((platform, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                >
                  {platform}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
        
        {/* Skills Summary */}
        <div className="mt-12 text-center">
          <Card className="inline-block p-6 border-primary/20 bg-primary/5 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="gradient-primary w-16 h-16 rounded-full flex items-center justify-center text-white">
                <BarChart3 className="w-8 h-8" />
              </div>
              <div className="text-center md:text-left">
                <p className="font-semibold text-xl mb-2">1+ Years of Digital Marketing Excellence</p>
                <p className="text-muted-foreground">
                  Proven track record with measurable results across diverse industries and platforms
                </p>
                <div className="flex flex-wrap gap-2 mt-3 justify-center md:justify-start">
                  <Badge className="bg-success text-success-foreground">SEO Expert</Badge>
                  <Badge className="bg-success text-success-foreground">PPC Specialist</Badge>
                  <Badge className="bg-success text-success-foreground">Social Media Pro</Badge>
                  <Badge className="bg-success text-success-foreground">Content Creator</Badge>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;