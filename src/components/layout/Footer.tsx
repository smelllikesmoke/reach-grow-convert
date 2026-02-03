import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="DigitalMastery" className="h-14 w-auto" />
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Transform your career with industry-leading digital marketing skills. 
              Join 10,000+ students who've launched successful careers.
            </p>
            <div className="flex gap-3">
              <a href="https://www.linkedin.com/company/google" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-navy-light/50 flex items-center justify-center hover:bg-gold hover:text-navy-dark transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="https://twitter.com/GoogleAds" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-navy-light/50 flex items-center justify-center hover:bg-gold hover:text-navy-dark transition-colors">
                <Twitter size={18} />
              </a>
              <a href="https://www.instagram.com/instagramforbusiness" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-navy-light/50 flex items-center justify-center hover:bg-gold hover:text-navy-dark transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://www.youtube.com/@GoogleMarketingPlatform" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-navy-light/50 flex items-center justify-center hover:bg-gold hover:text-navy-dark transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-primary-foreground/70 hover:text-gold transition-colors text-sm">Home</Link></li>
              <li><Link to="/course" className="text-primary-foreground/70 hover:text-gold transition-colors text-sm">Course Overview</Link></li>
              <li><Link to="/instructor" className="text-primary-foreground/70 hover:text-gold transition-colors text-sm">Instructor</Link></li>
              <li><Link to="/pricing" className="text-primary-foreground/70 hover:text-gold transition-colors text-sm">Pricing</Link></li>
              <li><Link to="/contact" className="text-primary-foreground/70 hover:text-gold transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Course Modules */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Learn</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-primary-foreground/70 hover:text-gold transition-colors text-sm">SEO Mastery</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-gold transition-colors text-sm">Social Media Marketing</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-gold transition-colors text-sm">Google & Meta Ads</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-gold transition-colors text-sm">Content Marketing</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-gold transition-colors text-sm">Email Marketing</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-gold mt-0.5 shrink-0" />
                <a href="mailto:hello@digitalmastery.com" className="text-primary-foreground/70 hover:text-gold transition-colors text-sm">hello@digitalmastery.com</a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-gold mt-0.5 shrink-0" />
                <a href="tel:+15551234567" className="text-primary-foreground/70 hover:text-gold transition-colors text-sm">+1 (555) 123-4567</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-gold mt-0.5 shrink-0" />
                <a href="https://www.google.com/maps/search/?api=1&query=123+Marketing+Street+San+Francisco+CA" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-gold transition-colors text-sm">123 Marketing Street,<br />San Francisco, CA 94102</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-light/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © 2024 DigitalMastery. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="https://www.privacypolicies.com/live/placeholder" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/50 hover:text-gold transition-colors text-sm">Privacy Policy</a>
            <a href="https://www.termsofservicegenerator.net/live/placeholder" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/50 hover:text-gold transition-colors text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
