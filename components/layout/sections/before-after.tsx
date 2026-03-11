import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import Image from "next/image";

interface TransformationProps {
  name: string;
  duration: string;
  weightLoss: string;
  muscleMass: string;
  bodyFat: string;
  beforeImage: string;
  afterImage: string;
  afterPosition?: string;
  beforePosition?: string;
}

const transformations: TransformationProps[] = [
  {
    name: "אורי",
    duration: "3 חודשים",
    weightLoss: "-12 ק\"ג",
    muscleMass: "+5 ק\"ג שריר",
    bodyFat: "-8% שומן",
    beforeImage: "/transformations/ori-before.jpg",
    afterImage: "/transformations/ori-after.png",
    beforePosition: "top",
  },
  {
    name: "מיכל",
    duration: "6 חודשים",
    weightLoss: "-18 ק\"ג",
    muscleMass: "גוף חטוב",
    bodyFat: "-14% שומן",
    beforeImage: "/transformations/michal-before.png",
    afterImage: "/transformations/michal-after.png",
    beforePosition: "50% 40%",
  },
  {
    name: "דניאל",
    duration: "4 חודשים",
    weightLoss: "-9 ק\"ג",
    muscleMass: "+7 ק\"ג שריר",
    bodyFat: "-6% שומן",
    beforeImage: "/transformations/daniel-before.png",
    afterImage: "/transformations/daniel-after.jpg",
    afterPosition: "top",
  },
  {
    name: "נועה",
    duration: "5 חודשים",
    weightLoss: "-14 ק\"ג",
    muscleMass: "גוף חטוב ומוגדר",
    bodyFat: "-11% שומן",
    beforeImage: "/transformations/noa-before.jpg",
    afterImage: "/transformations/noa-after.jpg",
    afterPosition: "top",
    beforePosition: "top",
  },
];

export const BeforeAfterSection = () => {
  return (
    <section id="results" className="container py-24 sm:py-32">
      <div className="flex items-center justify-center gap-4 mb-2">
        <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/40" />
        <span className="text-base font-semibold tracking-widest uppercase shimmer-text">תוצאות אמיתיות</span>
        <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/40" />
      </div>
      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        השינוי האמיתי
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-12">
        הלקוחות שלנו משיגים תוצאות מדהימות עם תכניות מותאמות אישית.
      </h3>

      <div className="grid md:grid-cols-2 gap-8">
        {transformations.map((t, index) => (
          <ScrollReveal key={t.name} delay={(index % 2) as 0 | 1 | 2 | 3 | 4}>
            <Card className="bg-muted/50 dark:bg-card overflow-hidden card-lift group">
              <CardContent className="p-0">
                {/* Images */}
                <div className="grid grid-cols-2 relative">
                  {/* Center gradient divider */}
                  <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-transparent via-primary to-transparent z-10" />

                  {/* After (left in RTL layout) */}
                  <div className="relative overflow-hidden">
                    <Image
                      src={t.afterImage}
                      alt={`${t.name} אחרי`}
                      width={300}
                      height={300}
                      className="w-full h-64 object-cover"
                      style={{ objectPosition: t.afterPosition ?? "center" }}
                    />
                    {/* Overlay that fades on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-60 group-hover:opacity-0 transition-opacity duration-500" />
                    <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs">
                      אחרי
                    </Badge>
                  </div>
                  {/* Before (right in RTL layout) */}
                  <div className="relative overflow-hidden">
                    <Image
                      src={t.beforeImage}
                      alt={`${t.name} לפני`}
                      width={300}
                      height={300}
                      className="w-full h-64 object-cover grayscale group-hover:grayscale-[0.5] transition-all duration-700"
                      style={{ objectPosition: t.beforePosition ?? "center" }}
                    />
                    <Badge
                      variant="secondary"
                      className="absolute top-3 right-3 text-xs"
                    >
                      לפני
                    </Badge>
                  </div>
                </div>

                {/* Stats */}
                <div className="p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs bg-primary/10 text-primary font-medium px-2.5 py-1 rounded-full">
                      {t.duration}
                    </span>
                    <p className="font-bold text-lg">{t.name}</p>
                  </div>
                  <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                  <div className="grid grid-cols-3 text-center">
                    <div className="space-y-0.5">
                      <p className="font-bold text-primary text-base drop-shadow-[0_0_8px_hsl(var(--primary)/0.5)]">
                        {t.weightLoss}
                      </p>
                      <p className="text-xs text-muted-foreground">ירידה במשקל</p>
                    </div>
                    <div className="space-y-0.5 border border-primary/25 rounded-lg py-1" style={{ boxShadow: "0 0 8px hsl(var(--primary)/0.15)" }}>
                      <p className="font-bold text-primary text-base drop-shadow-[0_0_8px_hsl(var(--primary)/0.5)]">
                        {t.muscleMass}
                      </p>
                      <p className="text-xs text-muted-foreground">מסת שריר</p>
                    </div>
                    <div className="space-y-0.5">
                      <p className="font-bold text-primary text-base drop-shadow-[0_0_8px_hsl(var(--primary)/0.5)]">
                        {t.bodyFat}
                      </p>
                      <p className="text-xs text-muted-foreground">אחוז שומן</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};
