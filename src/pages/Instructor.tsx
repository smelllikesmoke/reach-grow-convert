import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { ArrowRight, Award, Briefcase, GraduationCap, Star, Users, Quote, Linkedin, Twitter } from "lucide-react";
import instructorImage from "@/assets/instructor.jpg";

const achievements = [
  { value: "15+", label: "Years Experience" },
  { value: "$50M+", label: "Revenue Generated" },
  { value: "200+", label: "Brands Worked With" },
  { value: "10,000+", label: "Students Taught" },
];

const credentials = [
  { icon: Briefcase, text: "Currently Managing $2M+/month in Ad Spend" },
  { icon: Award, text: "Google Certified Digital Marketing Professional" },
  { icon: Users, text: "Featured speaker at 50+ international conferences" },
  { icon: GraduationCap, text: "Former Head of Marketing at Fortune 500 Company" },
];

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Marketing Manager at Tech Corp",
    image: null,
    content: "This course completely transformed my career. I went from knowing nothing about digital marketing to landing a 6-figure job in just 4 months. The practical projects were invaluable.",
    rating: 5,
  },
  {
    name: "James Rodriguez",
    role: "Freelance Marketing Consultant",
    image: null,
    content: "Best investment I've ever made in my education. The instructor's real-world experience shows in every lesson. I now run my own agency making more than I ever did in my corporate job.",
    rating: 5,
  },
  {
    name: "Emily Chen",
    role: "E-commerce Business Owner",
    image: null,
    content: "I was spending thousands on agencies with mediocre results. After this course, I manage all my own marketing and my revenue has 3x'd. The ROI is incredible.",
    rating: 5,
  },
  {
    name: "Michael Thompson",
    role: "Career Changer, Former Accountant",
    image: null,
    content: "At 40, I thought it was too late to change careers. This course proved me wrong. The step-by-step approach made complex concepts easy to understand. Now I'm a Digital Marketing Lead.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Startup Founder",
    image: null,
    content: "The paid advertising module alone paid for the course 100x over. I learned how to run profitable ads that helped us acquire our first 10,000 customers.",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "Content Creator & Influencer",
    image: null,
    content: "Understanding marketing psychology changed everything for me. My audience grew from 5K to 500K in one year using the strategies taught in this course.",
    rating: 5,
  },
];

const Instructor = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 mb-6">
                <Award className="w-4 h-4 text-gold" />
                <span className="text-gold text-sm font-medium">Industry Expert</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">
                Meet Your Instructor
              </h1>
              
              <h2 className="text-2xl sm:text-3xl font-bold text-gradient-gold mb-6">
                Marcus Reynolds
              </h2>
              
              <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
                Marcus is a digital marketing veteran with 15+ years of experience scaling 
                brands from startups to Fortune 500 companies. <strong className="text-gold">Currently managing $2M+/month in ad spend</strong> for 
                clients across e-commerce, SaaS, and local businesses. He's generated over $50 million 
                in revenue and trained thousands of marketers worldwide.
              </p>

              <div className="flex gap-4 mb-8">
                <a href="https://www.linkedin.com/in/neilpatel" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-navy-light/50 flex items-center justify-center hover:bg-gold hover:text-navy-dark transition-colors text-primary-foreground">
                  <Linkedin size={20} />
                </a>
                <a href="https://twitter.com/neilpatel" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-navy-light/50 flex items-center justify-center hover:bg-gold hover:text-navy-dark transition-colors text-primary-foreground">
                  <Twitter size={20} />
                </a>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {achievements.map((stat, index) => (
                  <div key={index} className="bg-navy-light/30 rounded-xl p-4 border border-navy-light/50">
                    <p className="text-2xl font-bold text-gold">{stat.value}</p>
                    <p className="text-primary-foreground/70 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-2xl overflow-hidden border-4 border-gold/30 shadow-gold">
                  <img
                    src={instructorImage}
                    alt="Marcus Reynolds - Digital Marketing Instructor"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-card rounded-xl p-4 shadow-card border border-border">
                  <div className="flex items-center gap-1 mb-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-foreground font-semibold">4.9/5 Rating</p>
                  <p className="text-muted-foreground text-sm">10,000+ reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why Learn From Marcus?
            </h2>
            <p className="text-muted-foreground text-lg">
              Learn from someone who's actually done it, not just talked about it.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {credentials.map((credential, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-card border border-border hover:border-gold/50 hover:shadow-card transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold to-gold-light flex items-center justify-center mx-auto mb-4">
                  <credential.icon className="w-7 h-7 text-navy-dark" />
                </div>
                <p className="text-foreground font-medium">{credential.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              What Our Students Say
            </h2>
            <p className="text-muted-foreground text-lg">
              Real stories from real students who transformed their careers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-card border border-border hover:border-gold/50 hover:shadow-card transition-all duration-300"
              >
                <Quote className="w-8 h-8 text-gold/40 mb-4" />
                <p className="text-foreground mb-6 leading-relaxed">{testimonial.content}</p>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center">
                    <span className="text-navy-dark font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex gap-1 mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
            Learn From The Best
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Join Marcus and thousands of successful students. Start your journey to becoming 
            a digital marketing expert today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/pricing">
              <Button variant="gold" size="xl" className="group">
                Enroll Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/course">
              <Button variant="heroOutline" size="xl">
                View Course Details
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Instructor;
