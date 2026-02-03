import { BarChart3, Search, Mail, Share2, Target, TrendingUp } from "lucide-react";

const tools = [
  { name: "Google Analytics", icon: BarChart3 },
  { name: "SEMrush", icon: Search },
  { name: "HubSpot", icon: Target },
  { name: "Mailchimp", icon: Mail },
  { name: "Meta Ads", icon: Share2 },
  { name: "Google Ads", icon: TrendingUp },
];

interface ToolLogosProps {
  title?: string;
  subtitle?: string;
  variant?: "light" | "dark";
  className?: string;
}

const ToolLogos = ({ 
  title = "Master Industry-Standard Tools", 
  subtitle = "Gain hands-on experience with the tools that top marketers use every day.",
  variant = "light",
  className = "" 
}: ToolLogosProps) => {
  const isDark = variant === "dark";
  
  return (
    <div className={`text-center ${className}`}>
      {title && (
        <h3 className={`text-xl sm:text-2xl font-bold mb-2 ${isDark ? "text-primary-foreground" : "text-foreground"}`}>
          {title}
        </h3>
      )}
      {subtitle && (
        <p className={`text-sm mb-8 max-w-xl mx-auto ${isDark ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
          {subtitle}
        </p>
      )}
      
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 sm:gap-6">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="group flex flex-col items-center gap-2"
          >
            <div 
              className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center transition-all duration-300 ${
                isDark 
                  ? "bg-navy-light/30 border border-navy-light/50 group-hover:bg-gold group-hover:border-gold" 
                  : "bg-muted border border-border group-hover:bg-gold group-hover:border-gold"
              }`}
            >
              <tool.icon 
                className={`w-6 h-6 sm:w-7 sm:h-7 transition-colors duration-300 ${
                  isDark 
                    ? "text-primary-foreground/50 group-hover:text-navy-dark" 
                    : "text-muted-foreground group-hover:text-navy-dark"
                }`}
              />
            </div>
            <span 
              className={`text-[10px] sm:text-xs font-medium transition-colors duration-300 ${
                isDark 
                  ? "text-primary-foreground/50 group-hover:text-gold" 
                  : "text-muted-foreground group-hover:text-foreground"
              }`}
            >
              {tool.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolLogos;
