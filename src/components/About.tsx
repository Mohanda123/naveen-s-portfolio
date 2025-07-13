import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, MapPin, Calendar, GraduationCap } from "lucide-react";

const About = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5">
            About Me
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Meet <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Naveen Kumar V</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1" id="contact">
            <Card className="sticky top-8 border-0 bg-card/80 backdrop-blur-sm">
              <CardHeader className="text-center space-y-4">
                <div className="gradient-primary w-24 h-24 rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold">
                  NK
                </div>
                <div>
                  <CardTitle className="text-2xl">Naveen Kumar V</CardTitle>
                  <CardDescription className="text-lg text-primary font-medium">
                    Digital Marketing Executive
                  </CardDescription>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <Phone className="w-4 h-4 text-primary" />
                    <span>+91 97897 71036</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="w-4 h-4 text-primary" />
                    <span>jeghunaveen@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Linkedin className="w-4 h-4 text-primary" />
                    <a href="https://www.linkedin.com/in/naveen-kumar-063786352/" 
                       target="_blank" 
                       className="text-primary hover:underline">
                      LinkedIn Profile
                    </a>
                  </div>
                </div>
                
                <Button className="w-full gradient-primary text-white border-0">
                  <Mail className="w-4 h-4 mr-2" />
                  <a href="mailto:jeghunaveen@gmail.com">Get In Touch</a>

                  
                </Button>
              </CardContent>
            </Card>
          </div>
          
          {/* About Content */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="border-0 bg-card/80 backdrop-blur-sm animate-slide-up">
              <CardHeader>
                <CardTitle className="text-xl">Professional Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Results-driven Digital Marketing Executive with 1 year of experience in SEO, social media 
                  marketing, PPC campaigns, and content marketing. Adept at developing and executing data-driven 
                  strategies to enhance brand visibility, increase engagement, and drive conversions. Skilled 
                  in using Google Analytics, Meta Ads, and email marketing tools to optimize performance and 
                  maximize ROI. Seeking to leverage my expertise to contribute to a dynamic marketing team and 
                  drive measurable business growth.
                </p>
              </CardContent>
            </Card>
            
            
          {/* <Card className="border-0 bg-card/80 backdrop-blur-sm animate-slide-up">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-l-2 border-primary/20 pl-4 space-y-4">
                  <div>
                    <h4 className="font-semibold">BE Computer Science Engineering</h4>
                    <p className="text-sm text-muted-foreground">Pollachi Institute of Engineering and Technology</p>
                    <div className="flex items-center gap-4 mt-1">
                      <Badge variant="secondary">2020 - 2024</Badge>
                      <Badge className="bg-success text-success-foreground">7.6 CGPA</Badge>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold">HSC</h4>
                    <p className="text-sm text-muted-foreground">Government Higher Secondary School Seripalayam</p>
                    <div className="flex items-center gap-4 mt-1">
                      <Badge variant="secondary">2019 - 2020</Badge>
                      <Badge className="bg-success text-success-foreground">60%</Badge>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold">SSLC</h4>
                    <p className="text-sm text-muted-foreground">Government Higher Secondary School Andipalayam</p>
                    <div className="flex items-center gap-4 mt-1">
                      <Badge variant="secondary">2017 - 2018</Badge>
                      <Badge className="bg-success text-success-foreground">80%</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>*/}
            
            {/*
            <Card className="border-0 bg-card/80 backdrop-blur-sm animate-slide-up">
              <CardHeader>
                <CardTitle className="text-xl">Certifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/20">
                    <div className="gradient-primary w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      D
                    </div>
                    <div>
                      <p className="font-medium">Digital Marketing</p>
                      <p className="text-sm text-muted-foreground">TADHCO</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/20">
                    <div className="gradient-secondary w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      U
                    </div>
                    <div>
                      <p className="font-medium">UI/UX Design</p>
                      <p className="text-sm text-muted-foreground">Dementee Academy</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>*/}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;