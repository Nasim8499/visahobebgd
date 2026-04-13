import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll get back to you shortly.");
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="pt-20 pb-16 lg:pb-0">
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-section-alt via-background to-section-alt overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5" />
        <div className="relative z-10 container-main px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Contact Us</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-muted-foreground max-w-2xl mx-auto">
            Ready to simplify your global immigration needs? Get in touch with our team today.
          </motion.p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-main grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AnimatedSection>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">Get in Touch</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">Whether you have questions about our services, need visa guidance, or want to discuss a recruitment partnership — we're here to help.</p>
            <div className="space-y-6">
              {[
                { icon: MapPin, label: "Registered Office", value: "68 Circular Road, #02-01, Singapore 049422" },
                { icon: Mail, label: "Email", value: "info@visahobe.com" },
                { icon: Phone, label: "Phone", value: "+65 8000 0000" },
                { icon: Clock, label: "Business Hours", value: "Mon-Fri: 9:00 AM - 6:00 PM (SGT)" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 to-accent/10 flex items-center justify-center flex-shrink-0">
                    <item.icon size={22} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{item.label}</h4>
                    <p className="text-sm text-muted-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-2xl overflow-hidden shadow-lg border border-border">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8!2d103.849!3d1.286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTcnMTAuMCJOIDEwM8KwNTAnNTYuMCJF!5e0!3m2!1sen!2ssg!4v1" width="100%" height="250" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Office location" />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="glass-card rounded-2xl p-8">
              <h3 className="font-display font-bold text-xl text-foreground mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="Full Name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="px-4 py-3 rounded-xl bg-background text-foreground border border-border focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder:text-muted-foreground/60 transition-all" />
                  <input type="email" placeholder="Email Address" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="px-4 py-3 rounded-xl bg-background text-foreground border border-border focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder:text-muted-foreground/60 transition-all" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="tel" placeholder="Phone Number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="px-4 py-3 rounded-xl bg-background text-foreground border border-border focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder:text-muted-foreground/60 transition-all" />
                  <select value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="px-4 py-3 rounded-xl bg-background text-foreground border border-border focus:outline-none focus:border-primary transition-all">
                    <option value="">Select Subject</option>
                    <option>Manpower Recruitment</option>
                    <option>Visa & Travel Services</option>
                    <option>Work Permit Inquiry</option>
                    <option>Partnership Inquiry</option>
                    <option>General Question</option>
                  </select>
                </div>
                <textarea placeholder="Your Message" rows={5} required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-background text-foreground border border-border focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none placeholder:text-muted-foreground/60 transition-all" />
                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit"
                  className="w-full px-8 py-3.5 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/25 transition-all flex items-center justify-center gap-2">
                  <Send size={18} /> Send Message
                </motion.button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Contact;
