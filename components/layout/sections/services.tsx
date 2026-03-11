import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

interface ServiceProps {
  title: string;
  description: string;
  pro: boolean;
}

const serviceList: ServiceProps[] = [
  {
    title: "אימוני כוח",
    description:
      "תכנית מותאמת אישית לבניית מסת שריר והגברת כוח עם מעקב התקדמות מפורט.",
    pro: false,
  },
  {
    title: "קליסטניקס",
    description:
      "אימון משקל גוף לשליטה מוחלטת בגוף, יכולות אתלטיות וגמישות מרבית.",
    pro: false,
  },
  {
    title: "הרזיה ועיצוב",
    description:
      "תכנית מקיפה לירידה במשקל ועיצוב הגוף — תזונה, קרדיו ואימוני כוח משולבים.",
    pro: true,
  },
  {
    title: "אימוני קבוצה",
    description:
      "אנרגיה של קבוצה עם תשומת לב אישית. קבוצות קטנות, אווירה תומכת ומחיר משתלם.",
    pro: false,
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="container py-24 sm:py-32">
      <div className="flex items-center justify-center gap-4 mb-2">
        <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/40" />
        <span className="text-base font-semibold tracking-widest uppercase shimmer-text">שירותים</span>
        <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/40" />
      </div>
      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        בחר את הדרך שלך
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        ארבעה נתיבים להשגת המטרה — כולם עם ליווי אישי מקצועי.
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:w-[60%] mx-auto">
        {serviceList.map(({ title, description, pro }, index) => (
          <ScrollReveal key={title} delay={(index % 4) as 0 | 1 | 2 | 3 | 4}>
            <Card className="bg-muted/60 dark:bg-card h-full relative card-lift group overflow-hidden">
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
              <CardHeader>
                <CardTitle className="text-right">{title}</CardTitle>
                <CardDescription className="text-right text-md mt-4">
                  {description}
                </CardDescription>
              </CardHeader>
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
        ))}
      </div>
    </section>
  );
};
