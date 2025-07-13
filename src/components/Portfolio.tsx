import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Target, Zap, BarChart3 } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Real Estate Lead Generation",
    company: "Pollachi Villas",
    goal: "Drive qualified leads for villa sales",
    tools: ["Google Ads", "Canva", "Meta Ads"],
    outcome: "₹3.2 CPL | 210+ leads in 25 days",
    icon: TrendingUp,
    gradient: "gradient-primary"
  },
  {
    id: 2,
    title: "Local Brand Growth",
    company: "Thattuvadai Kadai (Coimbatore)",
    goal: "Build Instagram presence for a local eatery",
    tools: ["Trend-based reels", "Geo hashtags", "Local influencers"],
    outcome: "+1750 followers in 45 days | 20k+ reel views",
    icon: Users,
    gradient: "gradient-secondary"
  },
  {
    id: 3,
    title: "Education Marketing",
    company: "RL Technologies",
    goal: "Promote digital services to schools & colleges",
    tools: ["SEO", "PPC", "Email Marketing"],
    outcome: "+70% increase in qualified leads",
    icon: Target,
    gradient: "gradient-accent"
  },
  {
    id: 4,
    title: "NFC Product Marketing",
    company: "Tap & Relax",
    goal: "Sell NFC cards, review stands, and digital menus",
    tools: ["Paid Ads", "Mini Site SEO", "Social Content"],
    outcome: "80% boost in lead conversions | 10+ mini sites built",
    icon: Zap,
    gradient: "gradient-primary"
  },
  {
    id: 5,
    title: "Reporting & Insights",
    company: "Performance Analytics",
    goal: "Create comprehensive performance dashboards",
    tools: ["Looker Studio", "ROI Tracking", "Strategy Planning"],
    outcome: "Improved monthly strategy with data-driven insights",
    icon: BarChart3,
    gradient: "gradient-secondary"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5">
            📈 Project Highlights
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Proven <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Results</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real campaigns, measurable outcomes, and exceptional ROI across diverse industries
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-card/80 backdrop-blur-sm animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="space-y-4">
                <div className={`w-12 h-12 rounded-lg ${project.gradient} flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                  <project.icon className="w-6 h-6" />
                </div>
                <div>
                  <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {project.company}
                  </CardDescription>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground mb-2">GOAL</h4>
                  <p className="text-sm">{project.goal}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground mb-2">TOOLS & STRATEGY</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, toolIndex) => (
                      <Badge key={toolIndex} variant="secondary" className="text-xs">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="pt-2 border-t border-border/50">
                  <h4 className="font-semibold text-sm text-success mb-2">OUTCOME</h4>
                  <p className="text-sm font-medium text-success">{project.outcome}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Card className="inline-block p-6 border-primary/20 bg-primary/5">
            <div className="flex items-center gap-4">
              <div className="gradient-primary w-12 h-12 rounded-full flex items-center justify-center text-white">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-lg">Ready to achieve similar results?</p>
                <p className="text-muted-foreground">Let's discuss your digital marketing goals</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;