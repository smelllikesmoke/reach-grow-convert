import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import CountUpStat from "@/components/CountUpStat";
import ToolLogos from "@/components/ToolLogos";
import { ArrowRight, CheckCircle, Users, TrendingUp, Award, Zap, Target, BarChart3, Download } from "lucide-react";
import introVideo from "@/assets/intro-video.mp4";

const stats = [
  { value: "10,000+", label: "Students Enrolled" },
  { value: "95%", label: "Success Rate" },
  { value: "4.9/5", label: "Course Rating" },
  { value: "50+", label: "Hours of Content" },
];

const benefits = [
  {
    icon: TrendingUp,
    title: "Land High-Paying Jobs",
    description: "Our graduates earn an average of $65,000+ in their first digital marketing role.",
  },
  {
    icon: Target,
    title: "Start Your Agency",
    description: "Learn the exact skills to launch your own marketing agency and acquire clients.",
  },
  {
    icon: BarChart3,
    title: "Grow Any Business",
    description: "Master the strategies that scale businesses from $0 to $1M+ in revenue.",
  },
];

const features = [
  "Complete SEO & Content Marketing",
  "Facebook & Google Ads Mastery",
  "Social Media Growth Strategies",
  "Email Marketing Automation",
  "Analytics & Conversion Optimization",
  "Real Client Projects & Portfolio",
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-primary overflow-hidden">
        {/* Solid Background - No ghost text */}
        <div className="absolute inset-0 bg-primary" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30 mb-6 animate-fade-in">
                <Zap className="w-4 h-4 text-secondary" />
                <span className="text-secondary text-sm font-medium">Limited Time: 40% Off Enrollment</span>
              </div>
              
              {/* Headline - Swapped for stronger benefit */}
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-4 sm:mb-6 animate-fade-in">
                Get Job-Ready in{" "}
                <span className="text-gradient-gold">12 Weeks</span>
              </h1>
              
              {/* Subheadline */}
              <p className="text-base sm:text-lg lg:text-xl text-primary-foreground/80 mb-6 sm:mb-8 leading-relaxed animate-fade-in">
                Master Digital Marketing & 10x Your Career. Join 10,000+ students who transformed 
                their careers with our comprehensive, project-based program.
              </p>
              
              {/* Dual CTA */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 animate-slide-up">
                <Link to="/pricing">
                  <Button variant="hero" size="lg" className="group w-full sm:w-auto text-sm sm:text-base">
                    Enroll Now — Save 40%
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/course">
                  <Button variant="heroOutline" size="lg" className="w-full sm:w-auto text-sm sm:text-base">
                    View Curriculum
                  </Button>
                </Link>
              </div>
              
              {/* Social Proof */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 animate-fade-in">
                <div className="flex -space-x-2 sm:-space-x-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-primary bg-gradient-to-br from-secondary/80 to-secondary flex items-center justify-center"
                    >
                      <Users className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-primary-foreground font-semibold text-sm sm:text-base">1,200+ enrolled this month</p>
                  <p className="text-primary-foreground/60 text-xs sm:text-sm">Join the community today</p>
                </div>
              </div>
            </div>

            {/* Right - Video Box */}
            <div className="relative animate-fade-in">
              <div className="aspect-[3/4] max-w-sm mx-auto rounded-2xl bg-card/10 border border-white/10 overflow-hidden shadow-2xl">
                <video
                  src={introVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 bg-card rounded-xl p-4 shadow-lg border border-border animate-float">
                <div className="flex items-center gap-3">
                  <Award className="w-8 h-8 text-secondary" />
                  <div>
                    <p className="font-semibold text-foreground text-sm">Certificate Included</p>
                    <p className="text-muted-foreground text-xs">Industry recognized</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-card border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <CountUpStat key={index} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why Learn Digital Marketing?
            </h2>
            <p className="text-muted-foreground text-lg">
              Digital marketing is the #1 most in-demand skill. Here's how it will change your life.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-gold/50 hover:shadow-card transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold to-gold-light flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-7 h-7 text-navy-dark" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="section-padding bg-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
              Everything You Need to{" "}
              <span className="text-gradient-gold">Succeed</span>
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-10 leading-relaxed">
              Our comprehensive curriculum covers every aspect of digital marketing. 
              No prior experience needed — we'll take you from beginner to expert.
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 bg-navy-light/30 rounded-lg px-4 py-3">
                  <CheckCircle className="w-5 h-5 text-gold shrink-0" />
                  <span className="text-primary-foreground/90 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            {/* Tool Logos */}
            <div className="mb-10 pt-8 border-t border-navy-light/30">
              <ToolLogos variant="dark" />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/course">
                <Button variant="gold" size="lg" className="group">
                  View Full Curriculum
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button variant="heroOutline" size="lg" className="group">
                <Download className="w-5 h-5" />
                Download Free Syllabus
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-gold via-gold-light to-gold">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-dark mb-4">
            Ready to Transform Your Career?
          </h2>
          <p className="text-navy/80 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of students who are already building successful careers in digital marketing. 
            Limited seats available for the next cohort.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/pricing">
              <Button variant="default" size="xl" className="bg-navy hover:bg-navy-light text-primary-foreground">
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="navyOutline" size="xl">
                Have Questions? Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
