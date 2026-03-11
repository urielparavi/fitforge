import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Check } from "lucide-react";

enum PopularPlan {
  NO = 0,
  YES = 1,
}

interface PlanProps {
  title: string;
  popular: PopularPlan;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const plans: PlanProps[] = [
  {
    title: "Basis",
    popular: 0,
    price: 399,
    description: "מתאים למי שמתחיל ורוצה תכנית בסיסית עם ליווי אישי.",
    buttonText: "בחר תוכנית",
    benefitList: [
      "2 אימונים אישיים בשבוע",
      "תכנית אימונים מותאמת",
      "תמיכה בוואטסאפ",
      "מעקב התקדמות",
    ],
  },
  {
    title: "Pro",
    popular: 1,
    price: 649,
    description: "הפופולרי ביותר — ליווי מקיף עם תזונה ותמיכה 24/7.",
    buttonText: "בחר תוכנית",
    benefitList: [
      "3 אימונים אישיים בשבוע",
      "תכנית אימונים ותזונה",
      "תמיכה 24/7",
      "מעקב התקדמות מתקדם",
      "ייעוץ תזונה",
      "גישה לאפליקציה",
    ],
  },
  {
    title: "Elite",
    popular: 0,
    price: 899,
    description: "החבילה המקיפה ביותר — כל מה שצריך לתוצאות מקסימליות.",
    buttonText: "בחר תוכנית",
    benefitList: [
      "4 אימונים אישיים בשבוע",
      "תכנית מקיפה ומותאמת",
      "תמיכה VIP 24/7",
      "מעקב מתקדם עם AI",
      "תפריט תזונה שבועי",
      "עיסוי ספורט חודשי",
      "גישה למתקן 24/7",
    ],
  },
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="container py-24 sm:py-32">
      <div className="flex items-center justify-center gap-4 mb-2">
        <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/40" />
        <span className="text-base font-semibold tracking-widest uppercase shimmer-text">מחירים</span>
        <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/40" />
      </div>
      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        בחר את החבילה שלך
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        תכניות גמישות שמתאימות לכל תקציב ומטרה. ניתן לשנות בכל עת.
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
        {plans.map(
          ({ title, popular, price, description, buttonText, benefitList }, index) => (
            <ScrollReveal
              key={title}
              delay={(index % 3) as 0 | 1 | 2 | 3 | 4}
              className={popular === PopularPlan.YES ? "relative z-20" : "relative z-0"}
            >
              <Card
                className={
                  popular === PopularPlan.YES
                    ? "ring-2 ring-primary lg:scale-[1.1] shadow-[0_0_32px_hsl(var(--primary)/0.45)] bg-card h-full"
                    : "card-lift h-full"
                }
              >
                <CardHeader>
                  <CardTitle className="pb-2 text-right">{title}</CardTitle>

                  <CardDescription className="pb-4 text-right">
                    {description}
                  </CardDescription>

                  {popular === PopularPlan.YES ? (
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-3xl font-bold text-primary drop-shadow-[0_0_10px_hsl(var(--primary)/0.6)]">
                          ₪{price}
                        </span>
                        <span className="text-muted-foreground">/לחודש</span>
                      </div>
                      <Badge
                        variant="default"
                        className="text-sm text-primary-foreground animate-pulse"
                      >
                        הכי פופולרי
                      </Badge>
                    </div>
                  ) : (
                    <div className="text-right">
                      <span className="text-3xl font-bold">₪{price}</span>
                      <span className="text-muted-foreground">/לחודש</span>
                    </div>
                  )}
                </CardHeader>

                <CardContent className="flex">
                  <div className="space-y-4 text-right w-full">
                    {benefitList.map((benefit) => (
                      <span key={benefit} className="flex items-center gap-2">
                        <Check className="text-primary size-4 shrink-0" />
                        <h3 className="text-sm">{benefit}</h3>
                      </span>
                    ))}
                  </div>
                </CardContent>

                <CardFooter>
                  <Button
                    asChild
                    variant={popular === PopularPlan.YES ? "default" : "secondary"}
                    className={`w-full${popular === PopularPlan.YES ? " glow-btn" : ""}`}
                  >
                    <a href="#contact">{buttonText}</a>
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
