import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/layout/Layout";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, CheckCircle, ChevronDown, ChevronUp } from "lucide-react";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    value: "hello@digitalmastery.com",
    href: "mailto:hello@digitalmastery.com",
    description: "We'll respond within 24 hours",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
    description: "Mon-Fri, 9am-6pm EST",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: "123 Marketing Street",
    href: "https://www.google.com/maps/search/?api=1&query=123+Marketing+Street+San+Francisco+CA",
    description: "San Francisco, CA 94102",
  },
];

const faqs = [
  {
    question: "Is this course suitable for beginners?",
    answer: "Absolutely! Our course is designed for complete beginners. We start from the fundamentals and gradually build up to advanced concepts. No prior marketing experience is required.",
  },
  {
    question: "How long do I have access to the course?",
    answer: "You get lifetime access to all course materials, including any future updates. Learn at your own pace without any time restrictions.",
  },
  {
    question: "Is there a money-back guarantee?",
    answer: "Yes! We offer a 30-day no-questions-asked money-back guarantee. If you're not satisfied with the course for any reason, we'll refund your payment in full.",
  },
  {
    question: "Will I receive a certificate?",
    answer: "Yes, upon successful completion of the course, you'll receive an industry-recognized certificate that you can add to your LinkedIn profile and resume.",
  },
  {
    question: "Can I get help if I'm stuck on a concept?",
    answer: "Of course! Professional and Enterprise plan members get access to 1-on-1 mentor support. All students can ask questions in our private community where instructors and peers can help.",
  },
  {
    question: "Are there any prerequisites?",
    answer: "No prerequisites! Just bring your enthusiasm to learn. A computer with internet access is all you need to get started.",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 mb-6">
            <MessageSquare className="w-4 h-4 text-gold" />
            <span className="text-gold text-sm font-medium">We're Here to Help</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-6">
            Get in Touch
          </h1>
          
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Have questions about the course? Want to learn more before enrolling? 
            Our team is ready to help you take the next step in your career.
          </p>

          <div className="flex items-center justify-center gap-2 text-primary-foreground/80 text-sm">
            <Clock className="w-4 h-4" />
            <span>Average response time: under 24 hours</span>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-card rounded-2xl p-8 border border-border shadow-card">
              <h2 className="text-2xl font-bold text-foreground mb-2">Send Us a Message</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number (Optional)
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    value={formData.phone}
                    onChange={handleChange}
                    className="h-12"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us how we can help you..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="gold"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Other Ways to Reach Us</h2>
              <p className="text-muted-foreground mb-8">
                Prefer a different method? Here are more ways to get in touch.
              </p>

              <div className="space-y-6 mb-12">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-4 p-6 rounded-xl bg-muted border border-border hover:border-gold/50 hover:shadow-card transition-all duration-300 block"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold to-gold-light flex items-center justify-center shrink-0">
                      <info.icon className="w-6 h-6 text-navy-dark" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{info.title}</h3>
                      <p className="text-foreground font-medium">{info.value}</p>
                      <p className="text-muted-foreground text-sm">{info.description}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Quick Benefits */}
              <div className="bg-navy rounded-2xl p-6">
                <h3 className="text-lg font-bold text-primary-foreground mb-4">Why Contact Us?</h3>
                <ul className="space-y-3">
                  {[
                    "Get personalized course recommendations",
                    "Learn about group discounts for teams",
                    "Ask questions about the curriculum",
                    "Request a free consultation call",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-gold shrink-0" />
                      <span className="text-primary-foreground/90 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-lg">
              Quick answers to common questions about our course.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-card rounded-xl border border-border overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-gold shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
