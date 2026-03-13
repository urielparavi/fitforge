"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Star } from "lucide-react";

interface ReviewProps {
  image: string;
  name: string;
  result: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    image: "https://i.pravatar.cc/150?img=11",
    name: "דני כהן",
    result: "-15 ק\"ג בשלושה חודשים",
    comment:
      "FitForge שינה את החיים שלי! ירדתי 15 ק\"ג ב-3 חודשים והרגשתי חזק יותר מתמיד. השילוב של חדר כושר וקליסטניקס פשוט מושלם!",
    rating: 5,
  },
  {
    image: "https://i.pravatar.cc/150?img=5",
    name: "שרה לוי",
    result: "שיא כושר אישי",
    comment:
      "המאמן הכי מקצועי שפגשתי! תוכנית מותאמת אישית, תמיכה מלאה, ותוצאות מדהימות. מרגישה בטוחה ועצמאית בכל אימון.",
    rating: 5,
  },
  {
    image: "https://i.pravatar.cc/150?img=15",
    name: "מיכאל אברהם",
    result: "+8 ק\"ג מסת שריר",
    comment:
      "אחרי שנים של ניסיונות כושלים, FitForge עזר לי לבנות שגרת אימונים שאני ממש נהנה ממנה. התוצאות מדברות בעד עצמן!",
    rating: 5,
  },
  {
    image: "https://i.pravatar.cc/150?img=9",
    name: "רונית גולן",
    result: "-10 ק\"ג ב-8 שבועות",
    comment:
      "הגעתי ספקנית ויצאתי מאמינה! השינוי לא רק בגוף אלא גם במנטליות. המאמן תמיד זמין ותומך. ממליצה בחום!",
    rating: 5,
  },
  {
    image: "https://i.pravatar.cc/150?img=3",
    name: "אבי ישראלי",
    result: "שינוי חיים מוחלט",
    comment:
      "בגיל 45 חשבתי שזה מאוחר מדי. FitForge הוכיח לי שלא. בתוך 4 חודשים הרגשתי כמו גרסה צעירה ובריאה יותר של עצמי.",
    rating: 5,
  },
  {
    image: "https://i.pravatar.cc/150?img=23",
    name: "טל בן-דוד",
    result: "כושר ובריאות לאורך זמן",
    comment:
      "הדבר הכי טוב שעשיתי לעצמי. לא רק ירדתי במשקל — בניתי הרגלים שיישארו איתי לכל החיים. תודה FitForge!",
    rating: 5,
  },
];

const ReviewCard = ({ review }: { review: ReviewProps }) => (
  <div dir="rtl" className="w-[320px] shrink-0">
    <Card className="bg-card h-full card-lift">
      <CardContent className="pt-6 pb-0">
        <div className="flex gap-1 pb-6 justify-end">
          {Array.from({ length: review.rating }).map((_, i) => (
            <Star
              key={i}
              className={`size-4 fill-primary text-primary${i === 0 ? " animate-pulse" : ""}`}
            />
          ))}
        </div>
        <div className="relative">
          <span
            aria-hidden
            className="absolute -top-4 -right-2 text-7xl text-primary/10 font-serif leading-none select-none"
          >
            &ldquo;
          </span>
          <p className="text-right leading-7 text-muted-foreground relative z-10">
            &ldquo;{review.comment}&rdquo;
          </p>
        </div>
      </CardContent>
      <CardHeader>
        <div className="flex flex-row items-center gap-4">
          <Avatar className="ring-2 ring-primary/40 ring-offset-2 ring-offset-background">
            <AvatarImage src={review.image} alt={review.name} />
            <AvatarFallback>{review.name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col text-right">
            <CardTitle className="text-base">{review.name}</CardTitle>
            <CardDescription className="text-primary font-medium">
              {review.result}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
    </Card>
  </div>
);

export const TestimonialSection = () => {
  return (
    <section
      id="testimonials"
      className="relative py-24 sm:py-32 bg-cover bg-center mx-4 sm:mx-6 rounded-[2.5rem] overflow-hidden"
      style={{ backgroundImage: "url('/images/bg-testimonials.webp')" }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="container relative z-10">
        <ScrollReveal className="text-center mb-8">
          <div>
            <div className="flex items-center justify-center gap-4 mb-2">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/40" />
              <span className="text-base font-semibold tracking-widest uppercase shimmer-text">המלצות</span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/40" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              מה הלקוחות אומרים
            </h2>
            <h3 className="md:w-1/2 mx-auto text-xl text-white/75">
              מאות לקוחות מרוצים שינו את חייהם עם FitForge
            </h3>
          </div>
        </ScrollReveal>

        <div
          dir="ltr"
          className="relative overflow-hidden w-full"
          style={{
            "--gap": "1.5rem",
            "--duration": "35s",
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          } as React.CSSProperties}
        >
          <div className="group flex" style={{ gap: "var(--gap)" }}>
            {[0, 1].map((set) => (
              <div
                key={set}
                aria-hidden={set === 1}
                className="flex shrink-0 animate-marquee group-hover:[animation-play-state:paused]"
                style={{ gap: "var(--gap)" }}
              >
                {reviewList.map((review) => (
                  <ReviewCard key={review.name} review={review} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
