import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Sparkles, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-64 h-64 gradient-primary rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 gradient-secondary rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 gradient-accent rounded-full opacity-30 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 text-center space-y-8 animate-fade-in">
        <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5">
          <Sparkles className="w-4 h-4 mr-2" />
          Digital Marketing Expert
        </Badge>
        
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Driving <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Digital Growth</span>
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-muted-foreground">
            Through Data-Driven Marketing
          </h2>
        </div>
        
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Transforming businesses with strategic digital marketing, performance optimization, 
          and measurable results that drive real growth.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="gradient-primary text-white border-0 hover:scale-105 transition-transform">
            <TrendingUp className="w-5 h-5 mr-2" />
           <a href="#portfolio">View My Work</a>

            
          </Button>
          <Button variant="outline" size="lg" className="hover:scale-105 transition-transform">
           <a href="#contact">Contact </a> 
          </Button>
        </div>
        
        <div className="pt-8 animate-bounce">
          <ArrowDown className="w-6 h-6 mx-auto text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;