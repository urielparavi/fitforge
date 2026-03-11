import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "מה זה אימון ניסיון חינם?",
    answer:
      "אימון ניסיון הוא מפגש ראשוני ללא עלות שבו נבין את המטרות שלך, נעריך את רמת הכושר הנוכחית ונבנה תכנית אישית מותאמת. אין התחייבות — פשוט בוא ותחווה את חווית FitForge.",
    value: "item-1",
  },
  {
    question: "כמה זמן לוקח לראות תוצאות?",
    answer:
      "רוב הלקוחות מתחילים לראות שינויים מורגשים כבר אחרי 4-6 שבועות של אימון עקבי. תוצאות מלאות ניכרות לאחר 3 חודשים. הממוצע שלנו הוא -8.5 ק\"ג ב-8 שבועות.",
    value: "item-2",
  },
  {
    question: "האם צריך ניסיון קודם בכושר?",
    answer:
      "ממש לא! התכניות שלנו מותאמות לכל רמת כושר — מתחילים מוחלטים ועד ספורטאים מנוסים. כל תכנית מתחילה בהערכת רמה ומתאימה את עצמה בדיוק אליך.",
    value: "item-3",
  },
  {
    question: "מה ההבדל בין חבילת Basis ל-Pro?",
    answer:
      "Basis כולל 2 אימונים שבועיים עם מעקב בסיסי. Pro מוסיף אימון נוסף, ייעוץ תזונה מקיף ותמיכה 24/7 — תוצאות מהירות ומקיפות יותר. Pro היא הבחירה הפופולרית ביותר.",
    value: "item-4",
  },
  {
    question: "האם אפשר לאמן מחוץ לחדר כושר?",
    answer:
      "כן! אימוני הקליסטניקס שלנו מתאימים לכל מקום — פארק, בית, או חדר כושר. נכין תכנית שמתאימה לציוד ולמקום הזמין עבורך.",
    value: "item-5",
  },
  {
    question: "איך מבטלים או משנים אימון?",
    answer:
      "ניתן לשנות או לבטל אימון עד 24 שעות מראש ללא עלות נוספת. פנה אלינו בוואטסאפ או בהודעה ישירה ונסדר הכל תוך דקות.",
    value: "item-6",
  },
  {
    question: "האם יש אחריות לתוצאות?",
    answer:
      "אנחנו מתחייבים למקצועיות ולנוכחות מלאה בכל אימון. אם לא ראית שינוי לאחר חודש עקבי, נחזור איתך על התכנית ללא עלות נוספת — כי ההצלחה שלך היא ההצלחה שלנו.",
    value: "item-7",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container py-24 sm:py-32 md:w-[700px]">
      <ScrollReveal className="text-center mb-8">
        <div>
          <div className="flex items-center justify-center gap-4 mb-2">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/40" />
            <span className="text-base font-semibold tracking-widest uppercase shimmer-text">שאלות נפוצות</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/40" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            יש לך שאלות?
          </h2>
          <h3 className="text-xl text-muted-foreground">
            ריכזנו את השאלות הנפוצות ביותר. לא מצאת תשובה? פנה אלינו ישירות.
          </h3>
        </div>
      </ScrollReveal>

      <Accordion type="single" collapsible className="space-y-1">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem
            key={value}
            value={value}
            className="hover:border-primary/40 hover:shadow-[0_0_20px_hsl(var(--primary)/0.07)] data-[state=open]:border-primary/50 data-[state=open]:shadow-[0_0_28px_hsl(var(--primary)/0.12)] data-[state=open]:bg-primary/[0.03]"
          >
            <AccordionTrigger className="hover:text-primary data-[state=open]:text-primary">
              {question}
            </AccordionTrigger>
            <AccordionContent className="text-right">
              {answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
