import { useCountUp } from "@/hooks/useCountUp";

interface CountUpStatProps {
  value: string;
  label: string;
}

// Parse the value to extract number and suffix
const parseStatValue = (value: string): { num: number; suffix: string; prefix: string; decimals: number } => {
  // Handle percentage (e.g., "95%")
  if (value.includes("%")) {
    const num = parseFloat(value.replace(/[^0-9.]/g, ""));
    return { num, suffix: "%", prefix: "", decimals: 0 };
  }
  
  // Handle rating (e.g., "4.9/5")
  if (value.includes("/")) {
    const num = parseFloat(value.split("/")[0]);
    return { num, suffix: "/5", prefix: "", decimals: 1 };
  }
  
  // Handle numbers with + (e.g., "10,000+", "50+")
  if (value.includes("+")) {
    const num = parseFloat(value.replace(/[^0-9]/g, ""));
    return { num, suffix: "+", prefix: "", decimals: 0 };
  }
  
  // Default: just a number
  const num = parseFloat(value.replace(/[^0-9.]/g, ""));
  return { num, suffix: "", prefix: "", decimals: 0 };
};

const CountUpStat = ({ value, label }: CountUpStatProps) => {
  const { num, suffix, prefix, decimals } = parseStatValue(value);
  const { count, ref } = useCountUp({
    end: num,
    duration: 2000,
    suffix,
    prefix,
    decimals,
  });

  return (
    <div ref={ref} className="text-center">
      <p className="text-3xl md:text-4xl font-bold text-primary mb-1">{count}</p>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};

export default CountUpStat;
