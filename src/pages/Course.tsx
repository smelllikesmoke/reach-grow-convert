import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { ArrowRight, Clock, Users, Award, BookOpen, Target, BarChart3, Mail, Share2, Search, Megaphone, PenTool, CheckCircle } from "lucide-react";

const modules = [
  {
    icon: Search,
    title: "SEO Mastery",
    duration: "10 Hours",
    lessons: 24,
    topics: ["Keyword Research", "On-Page SEO", "Technical SEO", "Link Building", "Local SEO"],
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    duration: "12 Hours",
    lessons: 28,
    topics: ["Platform Strategy", "Content Creation", "Community Building", "Influencer Marketing", "Analytics"],
  },
  {
    icon: Megaphone,
    title: "Paid Advertising",
    duration: "14 Hours",
    lessons: 32,
    topics: ["Google Ads", "Facebook Ads", "Instagram Ads", "Retargeting", "Budget Optimization"],
  },
  {
    icon: PenTool,
    title: "Content Marketing",
    duration: "8 Hours",
    lessons: 20,
    topics: ["Content Strategy", "Copywriting", "Blog Writing", "Video Content", "Content Distribution"],
  },
  {
    icon: Mail,
    title: "Email Marketing",
    duration: "6 Hours",
    lessons: 16,
    topics: ["List Building", "Email Automation", "Newsletter Design", "A/B Testing", "Deliverability"],
  },
  {
    icon: BarChart3,
    title: "Analytics & Optimization",
    duration: "8 Hours",
    lessons: 18,
    topics: ["Google Analytics", "Conversion Tracking", "A/B Testing", "Data Analysis", "Reporting"],
  },
];

const outcomes = [
  "Create and execute comprehensive digital marketing strategies",
  "Run profitable Google and Facebook ad campaigns",
  "Rank websites on the first page of Google",
  "Build and monetize social media audiences",
  "Design high-converting email marketing funnels",
  "Analyze data and optimize for maximum ROI",
];

const targetAudience = [
  {
    icon: Users,
    title: "Students & Fresh Graduates",
    description: "Launch your career in one of the fastest-growing industries.",
  },
  {
    icon: Target,
    title: "Freelancers",
    description: "Add high-income skills to offer clients premium marketing services.",
  },
  {
    icon: BookOpen,
    title: "Business Owners",
    description: "Learn to market your own business without expensive agencies.",
  },
  {
    icon: BarChart3,
    title: "Career Changers",
    description: "Transition into digital marketing from any background.",
  },
];

const Course = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 mb-6">
              <BookOpen className="w-4 h-4 text-gold" />
              <span className="text-gold text-sm font-medium">Comprehensive Curriculum</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-6">
              Complete Digital Marketing{" "}
              <span className="text-gradient-gold">Masterclass</span>
            </h1>
            
            <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
              From SEO to paid ads, social media to email marketing — master every skill 
              you need to become a complete digital marketer in just 12 weeks.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-gold" />
                <span>50+ Hours</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-gold" />
                <span>138 Lessons</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-gold" />
                <span>Certificate</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-gold" />
                <span>Community Access</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Modules */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              What You'll Learn
            </h2>
            <p className="text-muted-foreground text-lg">
              Six comprehensive modules designed to give you real-world, job-ready skills.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-gold/50 hover:shadow-card transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold to-gold-light flex items-center justify-center group-hover:scale-110 transition-transform">
                    <module.icon className="w-6 h-6 text-navy-dark" />
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-foreground">{module.duration}</p>
                    <p className="text-xs text-muted-foreground">{module.lessons} lessons</p>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-4">{module.title}</h3>
                
                <ul className="space-y-2">
                  {module.topics.map((topic, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                By The End of This Course, You'll Be Able To...
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Walk away with practical, portfolio-ready skills that employers and clients are actively looking for.
              </p>

              <div className="space-y-4">
                {outcomes.map((outcome, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-gold shrink-0 mt-0.5" />
                    <span className="text-foreground">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border shadow-card">
              <h3 className="text-xl font-bold text-foreground mb-6">Course Includes</h3>
              <div className="space-y-4">
                {[
                  { label: "50+ hours of HD video content", value: "✓" },
                  { label: "Downloadable resources & templates", value: "✓" },
                  { label: "Real client projects for portfolio", value: "✓" },
                  { label: "Industry-recognized certificate", value: "✓" },
                  { label: "Lifetime access to updates", value: "✓" },
                  { label: "Private community access", value: "✓" },
                  { label: "1-on-1 mentor support", value: "✓" },
                  { label: "Job placement assistance", value: "✓" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                    <span className="text-foreground">{item.label}</span>
                    <span className="text-gold font-bold">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Who Is This Course For?
            </h2>
            <p className="text-muted-foreground text-lg">
              Whether you're starting fresh or looking to upskill, this course is designed for you.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {targetAudience.map((audience, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-card border border-border hover:border-gold/50 hover:shadow-card transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold to-gold-light flex items-center justify-center mx-auto mb-4">
                  <audience.icon className="w-7 h-7 text-navy-dark" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{audience.title}</h3>
                <p className="text-muted-foreground text-sm">{audience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Start Learning?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Join over 10,000 students who have already transformed their careers with our program.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/pricing">
              <Button variant="gold" size="xl" className="group">
                View Pricing & Enroll
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/instructor">
              <Button variant="heroOutline" size="xl">
                Meet Your Instructor
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Course;
