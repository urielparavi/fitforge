import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Dumbbell, Zap, Target, TrendingUp, type LucideIcon } from "lucide-react";

interface BenefitProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const benefitList: BenefitProps[] = [
  {
    icon: Dumbbell,
    title: "אימוני כוח בחדר כושר",
    description:
      "בניית מסת שריר, הגברת כוח ועיצוב הגוף עם ציוד מקצועי ותכנית מבנה מדויקת.",
  },
  {
    icon: Zap,
    title: "קליסטניקס מתקדם",
    description:
      "שליטה מוחלטת בגוף, גמישות, איזון ויכולות אתלטיות — ללא ציוד, בכל מקום.",
  },
  {
    icon: Target,
    title: "תכנית מותאמת אישית",
    description:
      "כל אימון מותאם לרמה, למטרות ולצרכים האישיים שלך. אין פורמולות קופי-פייסט.",
  },
  {
    icon: TrendingUp,
    title: "תוצאות מוכחות",
    description:
      "500+ לקוחות עם שינויים אמיתיים ומדידים. תוצאות ממוצעות של -8.5 ק\"ג ב-8 שבועות.",
  },
];

export const BenefitsSection = () => {
  return (
    <section
      id="benefits"
      className="relative py-24 sm:py-32 bg-cover bg-center mx-4 sm:mx-6 rounded-[2.5rem] overflow-hidden"
      style={{ backgroundImage: "url('/images/bg-benefits.webp')" }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="container relative z-10">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <ScrollReveal>
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="h-px w-10 bg-gradient-to-r from-transparent to-primary/40" />
              <span className="text-base font-semibold tracking-widest uppercase shimmer-text">יתרונות</span>
              <div className="h-px w-10 bg-gradient-to-l from-transparent to-primary/40" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              למה לבחור ב-FitForge?
            </h2>
            <p className="text-xl text-white/75 mb-8">
              שילוב ייחודי של אימוני כוח מסורתיים בחדר הכושר עם אימוני קליסטניקס
              מתקדמים. זו לא סתם אימון — זו יצירת הגוף שלך מחדש.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ icon: Icon, title, description }, index) => (
            <ScrollReveal key={title} delay={(index % 4) as 0 | 1 | 2 | 3 | 4}>
              <Card className="bg-card hover:bg-background transition-all delay-75 group/number card-lift h-full">
                <CardHeader>
                  <div className="flex justify-between">
                    <Icon
                      size={32}
                      className="mb-6 text-primary transition-all group-hover/number:drop-shadow-[0_0_8px_hsl(var(--primary)/0.7)]"
                    />
                    <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                      0{index + 1}
                    </span>
                  </div>
                  <CardTitle className="text-right">{title}</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground text-right">
                  {description}
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};
