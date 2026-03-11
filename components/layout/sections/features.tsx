import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import {
  Dumbbell,
  Flame,
  Salad,
  BarChart3,
  Users,
  Clock,
  type LucideIcon,
} from "lucide-react";

interface FeaturesProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: Dumbbell,
    title: "אימוני כוח",
    description:
      "תכניות אימון מותאמות לבניית מסת שריר והגברת כוח מקסימלית עם ציוד מקצועי.",
  },
  {
    icon: Flame,
    title: "קליסטניקס",
    description:
      "אימון משקל גוף לשליטה מוחלטת, יכולות אתלטיות, וגמישות — בכל מקום, ללא ציוד.",
  },
  {
    icon: Salad,
    title: "הנחיית תזונה",
    description:
      "תפריטים מותאמים אישית לתמיכה בכל מטרת כושר — ירידה במשקל, בניית שריר, ביצועים.",
  },
  {
    icon: BarChart3,
    title: "מעקב התקדמות",
    description:
      "ניטור מדויק של ביצועים, משקל ומדדי גוף עם דוחות שבועיים ומשוב אישי.",
  },
  {
    icon: Users,
    title: "אימוני קבוצה",
    description:
      "אנרגיה קבוצתית עם תשומת לב אישית — קבוצות קטנות, אווירה תומכת ומחיר נגיש.",
  },
  {
    icon: Clock,
    title: "גמישות בשעות",
    description:
      "אימונים בשעות מותאמות לסדר היום שלך — בוקר, ערב, או סוף שבוע.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <div className="flex items-center justify-center gap-4 mb-2">
        <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/40" />
        <span className="text-base font-semibold tracking-widest uppercase shimmer-text">תכונות</span>
        <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/40" />
      </div>
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4 relative inline-block">
          מה מייחד את FitForge?
          <span className="absolute bottom-0 right-0 left-0 h-[3px] bg-gradient-to-r from-primary to-orange-300 rounded-full" />
        </h2>
      </div>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8 mt-2">
        שישה עמודים מרכזיים שהופכים את האימון שלך ליעיל, מהנה ומשתלם.
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon: Icon, title, description }, index) => (
          <ScrollReveal key={title} delay={(index % 4) as 0 | 1 | 2 | 3 | 4}>
            <div className="group h-full">
              <Card className="h-full bg-background border-0 shadow-none hover:border hover:border-primary/20 card-lift transition-all">
                <CardHeader className="flex justify-center items-center">
                  <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4 group-hover:bg-primary/30 group-hover:ring-primary/25 group-hover:scale-110 transition-all duration-300">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-center">{title}</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground text-center">
                  {description}
                </CardContent>
              </Card>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};
