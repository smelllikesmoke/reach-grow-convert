import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { ArrowRight, CheckCircle, Play, Users, TrendingUp, Award, Zap, Target, BarChart3 } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

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
      <section className="relative min-h-[90vh] flex items-center bg-gradient-hero overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/90 via-navy/80 to-navy-dark/70" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 mb-6 animate-fade-in">
              <Zap className="w-4 h-4 text-gold" />
              <span className="text-gold text-sm font-medium">Limited Time: 40% Off Enrollment</span>
            </div>
            
            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in">
              Master Digital Marketing &{" "}
              <span className="text-gradient-gold">10x Your Career</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-primary-foreground/80 mb-8 leading-relaxed max-w-2xl animate-fade-in">
              Join 10,000+ students who transformed their careers with our comprehensive, 
              project-based digital marketing program. Get job-ready in just 12 weeks.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-slide-up">
              <Link to="/pricing">
                <Button variant="hero" size="xl" className="group">
                  Enroll Now — Save 40%
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/course">
                <Button variant="heroOutline" size="xl" className="group">
                  <Play className="w-5 h-5" />
                  Watch Free Demo
                </Button>
              </Link>
            </div>
            
            {/* Social Proof */}
            <div className="flex items-center gap-4 animate-fade-in">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-navy-dark bg-gradient-to-br from-gold/80 to-gold-dark flex items-center justify-center"
                  >
                    <Users className="w-4 h-4 text-navy-dark" />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-primary-foreground font-semibold">1,200+ enrolled this month</p>
                <p className="text-primary-foreground/60 text-sm">Join the community today</p>
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
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-navy mb-1">{stat.value}</p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
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
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
                Everything You Need to{" "}
                <span className="text-gradient-gold">Succeed</span>
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
                Our comprehensive curriculum covers every aspect of digital marketing. 
                No prior experience needed — we'll take you from beginner to expert.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-gold shrink-0" />
                    <span className="text-primary-foreground/90">{feature}</span>
                  </div>
                ))}
              </div>

              <Link to="/course">
                <Button variant="gold" size="lg" className="group">
                  View Full Curriculum
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-video rounded-2xl bg-navy-light/50 border border-navy-light flex items-center justify-center group cursor-pointer hover:border-gold/50 transition-colors">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center group-hover:scale-110 transition-transform shadow-gold">
                  <Play className="w-8 h-8 text-navy-dark ml-1" />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-card rounded-xl p-4 shadow-card border border-border">
                <div className="flex items-center gap-3">
                  <Award className="w-8 h-8 text-gold" />
                  <div>
                    <p className="font-semibold text-foreground">Certificate Included</p>
                    <p className="text-muted-foreground text-sm">Industry recognized</p>
                  </div>
                </div>
              </div>
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
