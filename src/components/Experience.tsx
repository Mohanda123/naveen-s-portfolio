import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin, TrendingUp } from "lucide-react";

const experiences = [
  {
    id: 1,
    company: "Tap and Relax",
    position: "Digital Marketing Executive",
    duration: "October 17th 2024 - February 15th 2025",
    location: "Current Position",
    achievements: [
      "Developed and executed digital marketing campaigns to promote Tap and Relax's innovative NFC cards, Google review cards & standees, and mini websites",
      "Managed paid search and social media advertising (Google Ads, Facebook, Instagram) to drive traffic, generate leads, and increase product sales",
      "Designed and implemented SEO strategies for product landing pages and mini websites, resulting in improved organic search rankings",
      "Collaborated with design and sales teams to create effective promotional materials enhancing in-store visibility",
      "Achieved 80% increase in lead conversions and product sales using data analytics tools"
    ],
    current: true
  },
  {
    id: 2,
    company: "RL Technologies",
    position: "Digital Marketing Executive",
    duration: "March 12th - October 10th 2024",
    location: "Previous Role",
    achievements: [
      "Developed and executed targeted digital marketing strategies to promote RL Technologies' services to schools and colleges",
      "Managed and optimized PPC campaigns across Google Ads, Facebook, and Instagram, achieving significant increases in lead generation",
      "Enhanced SEO strategies to improve search engine rankings for education-related keywords",
      "Created and curated content for educational blogs, social media platforms, email newsletters, and digital ads",
      "Achieved 70% increase in qualified leads from educational institutions through lead nurturing campaigns"
    ],
    current: false
  }
];

const Experience = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5">
            Work Experience
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Professional <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building expertise through diverse digital marketing challenges and measurable successes
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div 
                  key={exp.id} 
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } animate-slide-up`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-background border-4 border-primary z-10">
                    {exp.current && (
                      <div className="absolute inset-1 rounded-full bg-primary animate-pulse"></div>
                    )}
                  </div>
                  
                  {/* Content card */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  }`}>
                    <Card className="border-0 bg-card/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                      <CardHeader className="space-y-4">
                        <div className="flex items-start justify-between">
                          <div className="space-y-2">
                            <CardTitle className="text-xl flex items-center gap-2">
                              <Building2 className="w-5 h-5 text-primary" />
                              {exp.company}
                            </CardTitle>
                            <CardDescription className="text-lg font-medium text-primary">
                              {exp.position}
                            </CardDescription>
                          </div>
                          {exp.current && (
                            <Badge className="bg-success text-success-foreground">
                              Current
                            </Badge>
                          )}
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent>
                        <h4 className="font-semibold text-sm text-muted-foreground mb-3 flex items-center gap-2">
                          <TrendingUp className="w-4 h-4" />
                          KEY ACHIEVEMENTS
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start gap-2 text-sm">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;