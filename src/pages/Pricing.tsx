import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { ArrowRight, Check, Zap, Crown, Star, Clock, Shield, Users, Award } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: 299,
    originalPrice: 499,
    description: "Perfect for getting started with digital marketing fundamentals.",
    features: [
      "Access to all 6 course modules",
      "50+ hours of HD video content",
      "Downloadable resources",
      "Course completion certificate",
      "30-day money-back guarantee",
    ],
    notIncluded: [
      "1-on-1 mentor support",
      "Private community access",
      "Job placement assistance",
      "Lifetime updates",
    ],
    icon: Star,
    popular: false,
  },
  {
    name: "Professional",
    price: 499,
    originalPrice: 799,
    description: "Most popular choice for serious learners who want full support.",
    features: [
      "Everything in Basic, plus:",
      "1-on-1 mentor support (5 sessions)",
      "Private community access",
      "Real client projects for portfolio",
      "Job placement assistance",
      "Lifetime access to updates",
      "Priority email support",
    ],
    notIncluded: [],
    icon: Crown,
    popular: true,
  },
  {
    name: "Enterprise",
    price: 999,
    originalPrice: 1499,
    description: "For teams and businesses looking to upskill their marketing team.",
    features: [
      "Everything in Professional, plus:",
      "Up to 5 team members",
      "Unlimited mentor sessions",
      "Custom learning path",
      "Team analytics dashboard",
      "Dedicated account manager",
      "White-label certificates",
    ],
    notIncluded: [],
    icon: Zap,
    popular: false,
  },
];

const guarantees = [
  {
    icon: Shield,
    title: "30-Day Money-Back Guarantee",
    description: "Not satisfied? Get a full refund within 30 days, no questions asked.",
  },
  {
    icon: Clock,
    title: "Learn at Your Own Pace",
    description: "Lifetime access means you can learn whenever and wherever you want.",
  },
  {
    icon: Users,
    title: "Join a Community",
    description: "Connect with 10,000+ students and grow your professional network.",
  },
  {
    icon: Award,
    title: "Industry Recognition",
    description: "Our certificates are recognized by top employers worldwide.",
  },
];

const Pricing = () => {
  const [isAnnual] = useState(true);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 mb-6">
            <Zap className="w-4 h-4 text-gold" />
            <span className="text-gold text-sm font-medium">Limited Time: 40% Off All Plans</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-6">
            Invest in Your Future
          </h1>
          
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Choose the plan that's right for you. All plans include our comprehensive curriculum 
            and money-back guarantee.
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy-light/30 text-primary-foreground/80 text-sm">
            <Clock className="w-4 h-4" />
            <span>Offer expires in 48 hours — Only 23 seats left</span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding bg-background -mt-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl p-8 ${
                  plan.popular
                    ? "bg-navy text-primary-foreground border-2 border-gold shadow-gold scale-105"
                    : "bg-card border border-border"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-gold to-gold-light rounded-full text-navy-dark text-sm font-bold">
                    Most Popular
                  </div>
                )}

                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    plan.popular 
                      ? "bg-gradient-to-br from-gold to-gold-light" 
                      : "bg-gradient-to-br from-gold to-gold-light"
                  }`}>
                    <plan.icon className="w-6 h-6 text-navy-dark" />
                  </div>
                  <h3 className={`text-xl font-bold ${plan.popular ? "text-primary-foreground" : "text-foreground"}`}>
                    {plan.name}
                  </h3>
                </div>

                <p className={`text-sm mb-6 ${plan.popular ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                  {plan.description}
                </p>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className={`text-4xl font-bold ${plan.popular ? "text-gold" : "text-foreground"}`}>
                      ${plan.price}
                    </span>
                    <span className={`text-lg line-through ${plan.popular ? "text-primary-foreground/50" : "text-muted-foreground"}`}>
                      ${plan.originalPrice}
                    </span>
                  </div>
                  <p className={`text-sm mt-1 ${plan.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                    One-time payment • Lifetime access
                  </p>
                </div>

                <Link to="/contact">
                  <Button
                    variant={plan.popular ? "gold" : "outline"}
                    size="lg"
                    className="w-full mb-6"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>

                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 shrink-0 mt-0.5 ${plan.popular ? "text-gold" : "text-gold"}`} />
                      <span className={`text-sm ${plan.popular ? "text-primary-foreground/90" : "text-foreground"}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                  {plan.notIncluded.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 opacity-50">
                      <div className={`w-5 h-5 shrink-0 mt-0.5 rounded border ${
                        plan.popular ? "border-primary-foreground/30" : "border-muted-foreground/30"
                      }`} />
                      <span className={`text-sm line-through ${plan.popular ? "text-primary-foreground/50" : "text-muted-foreground"}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Risk-Free Investment
            </h2>
            <p className="text-muted-foreground text-lg">
              We're so confident you'll love the course, we offer a 30-day money-back guarantee.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {guarantees.map((guarantee, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-card border border-border"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold to-gold-light flex items-center justify-center mx-auto mb-4">
                  <guarantee.icon className="w-7 h-7 text-navy-dark" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{guarantee.title}</h3>
                <p className="text-muted-foreground text-sm">{guarantee.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ-style CTA */}
      <section className="section-padding bg-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
            Still Have Questions?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            We're here to help! Reach out to our team and we'll get back to you within 24 hours.
          </p>
          <Link to="/contact">
            <Button variant="gold" size="xl" className="group">
              Contact Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
