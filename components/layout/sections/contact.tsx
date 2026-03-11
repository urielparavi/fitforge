"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  Dumbbell,
} from "lucide-react";

const formSchema = z.object({
  firstName: z.string().min(2, "שם פרטי חייב להכיל לפחות 2 תווים"),
  lastName: z.string().min(2, "שם משפחה חייב להכיל לפחות 2 תווים"),
  email: z.string().email("כתובת אימייל לא תקינה"),
  phone: z.string().min(9, "מספר טלפון לא תקין"),
  goal: z.string().min(1, "בחר מטרת אימון"),
});

const contactInfo = [
  {
    icon: Phone,
    label: "טלפון",
    value: "050-123-4567",
  },
  {
    icon: Mail,
    label: "אימייל",
    value: "info@fitforge.co.il",
  },
  {
    icon: MapPin,
    label: "מיקום",
    value: "תל אביב, ישראל",
  },
  {
    icon: Clock,
    label: "שעות פעילות",
    value: "א׳-ה׳ 06:00-22:00 | ו׳ 06:00-14:00",
  },
];

export const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      goal: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Form submitted:", values);
    setSubmitted(true);
  }

  return (
    <section id="contact" className="container py-24 sm:py-32">
      <ScrollReveal className="text-center mb-8">
        <div>
          <div className="flex items-center justify-center gap-4 mb-2">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/40" />
            <span className="text-base font-semibold tracking-widest uppercase shimmer-text">התחל היום</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/40" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            קבל אימון ניסיון חינם
          </h2>
          <h3 className="text-xl text-muted-foreground">
            השאר פרטים ונחזור אליך תוך 24 שעות לתיאום האימון הראשון שלך.
          </h3>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Form — RIGHT column in RTL (first in DOM = rightmost in RTL grid) */}
        <Card className="bg-muted/60 dark:bg-card border-primary/20 shadow-[0_0_30px_hsl(var(--primary)/0.08)]">
          <CardHeader>
            <CardTitle className="text-right">פרטים ליצירת קשר</CardTitle>
          </CardHeader>
          <CardContent>
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 gap-4 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center animate-pulse-glow">
                  <CheckCircle2 className="size-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">תודה רבה!</h3>
                <p className="text-muted-foreground">
                  קיבלנו את הפרטים שלך. ניצור איתך קשר תוך 24 שעות לתיאום
                  אימון הניסיון החינמי.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSubmitted(false);
                    form.reset();
                  }}
                >
                  שלח טופס נוסף
                </Button>
              </div>
            ) : (
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="block text-right">
                            שם פרטי
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="ישראל" className="text-right" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="block text-right">
                            שם משפחה
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="ישראלי" className="text-right" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="block text-right">
                          אימייל
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            dir="ltr"
                            placeholder="israel@example.com"
                            className="text-left"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="block text-right">
                          טלפון
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            dir="ltr"
                            placeholder="050-000-0000"
                            className="text-left"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="goal"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="block text-right">
                          מה המטרה שלך?
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="text-right">
                              <SelectValue placeholder="בחר מטרת אימון" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="weight-loss">
                              ירידה במשקל
                            </SelectItem>
                            <SelectItem value="muscle-gain">
                              בניית שריר
                            </SelectItem>
                            <SelectItem value="strength">הגברת כוח</SelectItem>
                            <SelectItem value="fitness">שיפור כושר</SelectItem>
                            <SelectItem value="athletic">
                              יכולות אתלטיות
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full glow-btn" size="lg">
                    שלח פרטים וקבל אימון חינם
                  </Button>
                </form>
              </Form>
            )}
          </CardContent>
        </Card>

        {/* Contact Info — LEFT column in RTL (second in DOM = leftmost in RTL grid) */}
        <div className="flex flex-col gap-6 justify-between">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Dumbbell className="size-8 text-primary" />
              <h3 className="text-2xl font-bold">FitForge</h3>
            </div>
            <p className="text-muted-foreground mb-8">
              שילוב ייחודי של חדר כושר וקליסטניקס לתוצאות מקסימליות. המקום
              שבו אתה בונה את הגרסה הטובה ביותר של עצמך.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {contactInfo.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-3">
                <div
                  className={`w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0${
                    label === "טלפון" ? " animate-pulse-glow" : ""
                  }`}
                >
                  <Icon className="size-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{label}</p>
                  <p className="font-medium">{value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-2 flex-wrap">
            <Badge variant="secondary" className="text-xs">
              ✓ ללא התחייבות
            </Badge>
            <Badge variant="secondary" className="text-xs">
              ✓ מענה תוך 24 שעות
            </Badge>
            <Badge variant="secondary" className="text-xs">
              ✓ חינם לחלוטין
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};
