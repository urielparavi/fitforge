import { Dumbbell, Instagram, Facebook, MessageCircle, Phone, Mail, MapPin, Clock } from "lucide-react";
import Link from "next/link";

const quickLinks = [
  { label: "אודות", href: "#benefits" },
  { label: "שירותים", href: "#services" },
  { label: "מחירים", href: "#pricing" },
  { label: "המלצות", href: "#testimonials" },
  { label: "שאלות נפוצות", href: "#faq" },
  { label: "צור קשר", href: "#contact" },
];

const services = [
  "אימוני כוח",
  "קליסטניקס",
  "הרזיה ועיצוב",
  "אימוני קבוצה",
];

export const FooterSection = () => {
  return (
    <footer id="footer" className="container py-24 sm:py-32">
      <div className="p-10 bg-card border border-secondary rounded-2xl shadow-[0_0_40px_hsl(var(--primary)/0.06)] hover:shadow-[0_0_60px_hsl(var(--primary)/0.10)] transition-shadow duration-500">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
          {/* Brand Column */}
          <div className="col-span-full xl:col-span-2 text-right">
            <Link href="/" className="flex items-center gap-2 justify-end mb-4">
              <span className="text-xl font-black bg-gradient-to-r from-primary to-orange-300 bg-clip-text text-transparent">
                FitForge
              </span>
              <Dumbbell className="size-8 text-primary animate-[float_6s_ease-in-out_infinite]" />
            </Link>
            <p className="text-muted-foreground text-sm leading-6">
              שילוב ייחודי של חדר כושר וקליסטניקס לתוצאות מקסימליות. המקום
              שבו אתה בונה את הגרסה הטובה ביותר של עצמך.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 text-right">
            <h3 className="font-bold mb-4">קישורים מהירים</h3>
            <ul className="space-y-2">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1 text-right">
            <h3 className="font-bold mb-4">שירותים</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-muted-foreground">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 text-right">
            <h3 className="font-bold mb-4">צור קשר</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="size-4 text-primary shrink-0" />
                <span>050-123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="size-4 text-primary shrink-0" />
                <span>info@fitforge.co.il</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="size-4 text-primary shrink-0" />
                <span>תל אביב, ישראל</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="size-4 text-primary shrink-0" />
                <span>א׳-ה׳ 06:00-22:00 | ו׳ 06:00-14:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="gradient-divider my-6" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* RIGHT in RTL: social icons + copyright */}
          <div className="flex items-center gap-4">
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 hover:drop-shadow-[0_0_8px_hsl(var(--primary)/0.7)] transition-all"
              >
                <Instagram className="size-4" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 hover:drop-shadow-[0_0_8px_hsl(var(--primary)/0.7)] transition-all"
              >
                <Facebook className="size-4" />
              </a>
              <a
                href="https://wa.me/972501234567"
                aria-label="WhatsApp"
                className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 hover:drop-shadow-[0_0_8px_hsl(var(--primary)/0.7)] transition-all"
              >
                <MessageCircle className="size-4" />
              </a>
            </div>
            <span className="hidden md:block w-px h-4 bg-border" />
            <p className="text-sm text-muted-foreground">
              © 2025 FitForge. כל הזכויות שמורות.
            </p>
          </div>
          {/* LEFT in RTL: legal links */}
          <div className="flex gap-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              תנאי שימוש
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              מדיניות פרטיות
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              נגישות
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
