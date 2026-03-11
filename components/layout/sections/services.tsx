import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Dumbbell, Activity, TrendingDown, Users, type LucideIcon } from "lucide-react";

interface StatProps {
  value: string;
  label: string;
}

interface ServiceProps {
  title: string;
  description: string;
  pro: boolean;
  Icon: LucideIcon;
  stats: [StatProps, StatProps];
  chartPoints: string;
  chartLabel: string;
}

const serviceList: ServiceProps[] = [
  {
    title: "אימוני כוח",
    description:
      "תכנית מותאמת אישית לבניית מסת שריר והגברת כוח עם מעקב התקדמות מפורט.",
    pro: false,
    Icon: Dumbbell,
    stats: [
      { value: "+30%", label: "כוח ב-3 חודשים" },
      { value: "3–4x", label: "אימונים שבועיים" },
    ],
    chartPoints: "0,46 15,38 30,28 45,18 65,10 80,6 100,2",
    chartLabel: "עלייה בכוח לאורך זמן",
  },
  {
    title: "קליסטניקס",
    description:
      "אימון משקל גוף לשליטה מוחלטת בגוף, יכולות אתלטיות וגמישות מרבית.",
    pro: false,
    Icon: Activity,
    stats: [
      { value: "100%", label: "משקל גוף" },
      { value: "8+", label: "תרגילים מתקדמים" },
    ],
    chartPoints: "0,44 20,36 35,28 50,20 70,13 85,7 100,3",
    chartLabel: "שיפור יכולת אתלטית",
  },
  {
    title: "הרזיה ועיצוב",
    description:
      "תכנית מקיפה לירידה במשקל ועיצוב הגוף — תזונה, קרדיו ואימוני כוח משולבים.",
    pro: true,
    Icon: TrendingDown,
    stats: [
      { value: '–8 ק"ג', label: "ממוצע ב-3 חודשים" },
      { value: "3 ב-1", label: "תזונה+כוח+קרדיו" },
    ],
    chartPoints: "0,46 20,40 35,33 50,25 65,18 80,11 100,5",
    chartLabel: "שיפור כושר גופני",
  },
  {
    title: "אימוני קבוצה",
    description:
      "אנרגיה של קבוצה עם תשומת לב אישית. קבוצות קטנות, אווירה תומכת ומחיר משתלם.",
    pro: false,
    Icon: Users,
    stats: [
      { value: "עד 6", label: "משתתפים" },
      { value: "2x", label: "בשבוע" },
    ],
    chartPoints: "0,40 10,32 22,35 34,24 44,27 56,16 66,19 80,9 90,12 100,4",
    chartLabel: "שיפור ביצועי הקבוצה",
  },
];

const Sparkline = ({ points, gradId }: { points: string; gradId: string }) => {
  const pts = points
    .split(" ")
    .map((p) => p.split(",").map(Number) as [number, number]);
  const first = pts[0];
  const last = pts[pts.length - 1];
  const linePath = "M " + pts.map(([x, y]) => `${x} ${y}`).join(" L ");
  const areaPath = `${linePath} L ${last[0]} 50 L ${first[0]} 50 Z`;

  return (
    <svg
      viewBox="0 0 100 50"
      className="w-full h-14"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradId} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.25" />
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={areaPath} fill={`url(#${gradId})`} />
      <path
        d={linePath}
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ServicesSection = () => {
  return (
    <section id="services" className="container py-24 sm:py-32">
      <div className="flex items-center justify-center gap-4 mb-2">
        <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/40" />
        <span className="text-base font-semibold tracking-widest uppercase shimmer-text">
          שירותים
        </span>
        <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/40" />
      </div>
      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        בחר את הדרך שלך
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        ארבעה נתיבים להשגת המטרה — כולם עם ליווי אישי מקצועי.
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:w-[60%] mx-auto">
        {serviceList.map(
          ({ title, description, pro, Icon, stats, chartPoints, chartLabel }, index) => (
            <ScrollReveal key={title} delay={(index % 4) as 0 | 1 | 2 | 3 | 4}>
              <Card className="bg-muted/60 dark:bg-card h-full relative card-lift group overflow-hidden flex flex-col">
                {/* Top accent bar */}
                <div className="absolute top-0 right-0 left-0 h-[3px] bg-gradient-to-r from-primary to-orange-300 rounded-t-lg" />

                {pro && (
                  <Badge
                    variant="default"
                    className="absolute left-4 top-4 animate-pulse"
                  >
                    PRO
                  </Badge>
                )}

                <CardHeader className="pb-2 items-center text-center">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary mb-1">
                    <Icon className="size-5" />
                  </div>
                  <CardTitle className="text-lg leading-tight">
                    {title}
                  </CardTitle>
                  <CardDescription className="text-right text-sm mt-2 leading-relaxed">
                    {description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pb-3 flex-1 flex flex-col gap-3">
                  {/* Stats */}
                  <div className="flex justify-end gap-6">
                    {stats.map(({ value, label }) => (
                      <div key={label} className="text-right">
                        <div className="text-2xl font-black text-primary leading-none">
                          {value}
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          {label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Sparkline chart */}
                  <div className="rounded-md overflow-hidden border border-border/40 bg-background/30 mt-auto">
                    <Sparkline points={chartPoints} gradId={`grad-${index}`} />
                    <p className="text-[10px] text-muted-foreground text-center pb-1.5 -mt-1">
                      {chartLabel}
                    </p>
                  </div>
                </CardContent>

                <CardFooter>
                  <Button
                    asChild
                    variant="default"
                    className={`w-full${pro ? " glow-btn" : ""}`}
                  >
                    <a href="#contact">התחל עכשיו</a>
                  </Button>
                </CardFooter>
              </Card>
            </ScrollReveal>
          )
        )}
      </div>
    </section>
  );
};
