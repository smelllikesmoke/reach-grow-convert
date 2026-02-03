import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

interface CountdownTimerProps {
  targetDate: Date;
  label?: string;
  className?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = ({ targetDate, label = "Offer ends in:", className = "" }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = (): TimeLeft => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-navy-light/50 rounded-lg px-3 py-2 min-w-[48px] text-center border border-gold/20">
        <span className="text-xl sm:text-2xl font-bold text-gold tabular-nums">
          {value.toString().padStart(2, "0")}
        </span>
      </div>
      <span className="text-[10px] sm:text-xs text-primary-foreground/60 mt-1 uppercase tracking-wide">
        {label}
      </span>
    </div>
  );

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="flex items-center gap-2 mb-3">
        <Clock className="w-4 h-4 text-gold" />
        <span className="text-primary-foreground/80 text-sm font-medium">{label}</span>
      </div>
      <div className="flex items-center gap-2 sm:gap-3">
        <TimeBlock value={timeLeft.days} label="Days" />
        <span className="text-gold text-xl font-bold">:</span>
        <TimeBlock value={timeLeft.hours} label="Hours" />
        <span className="text-gold text-xl font-bold">:</span>
        <TimeBlock value={timeLeft.minutes} label="Mins" />
        <span className="text-gold text-xl font-bold">:</span>
        <TimeBlock value={timeLeft.seconds} label="Secs" />
      </div>
    </div>
  );
};

export default CountdownTimer;
