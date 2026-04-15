import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Globe, Headphones } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll get back to you shortly.");
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const contactMethods = [
    { icon: MapPin, label: "Registered Office", value: "68 Circular Road, #02-01, Singapore 049422", color: "from-primary/15 to-primary/5" },
    { icon: Mail, label: "Email", value: "info@visahobe.com", color: "from-primary/15 to-primary/5" },
    { icon: Phone, label: "Phone", value: "+65 8000 0000", color: "from-primary/15 to-primary/5" },
    { icon: Clock, label: "Business Hours", value: "Mon-Fri: 9:00 AM - 6:00 PM (SGT)", color: "from-primary/15 to-primary/5" },
  ];

  return (
    <div className="pt-20 pb-16 lg:pb-0">
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-muted via-background to-muted overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.08),transparent_60%)]" />
        <div className="relative z-10 container-main px-4 text-center">
          <motion.div initial={{ width: 0 }} animate={{ width: "3rem" }} transition={{ duration: 0.6 }} className="h-1 bg-accent rounded-full mx-auto mb-6" />
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Contact Us</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-muted-foreground max-w-2xl mx-auto">
            Ready to simplify your global immigration needs? Get in touch with our team today.
          </motion.p>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-16">
            {contactMethods.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-card rounded-2xl p-4 sm:p-5 border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all text-center"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-3`}>
                    <item.icon size={22} className="text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground text-sm mb-1">{item.label}</h4>
                  <p className="text-xs text-muted-foreground">{item.value}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          {/* Form + WhatsApp */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">Send us a Message</h2>
              <p className="text-muted-foreground leading-relaxed mb-8 text-sm sm:text-base">
                Whether you have questions about our services, need visa guidance, or want to discuss a recruitment partnership — we're here to help.
              </p>
              <div className="bg-card rounded-3xl p-6 sm:p-8 border border-border">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input type="text" placeholder="Full Name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="px-4 py-3 rounded-xl bg-background text-foreground border border-border focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder:text-muted-foreground/60 transition-all text-sm" />
                    <input type="email" placeholder="Email Address" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="px-4 py-3 rounded-xl bg-background text-foreground border border-border focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder:text-muted-foreground/60 transition-all text-sm" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input type="tel" placeholder="Phone Number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="px-4 py-3 rounded-xl bg-background text-foreground border border-border focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder:text-muted-foreground/60 transition-all text-sm" />
                    <select value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="px-4 py-3 rounded-xl bg-background text-foreground border border-border focus:outline-none focus:border-primary transition-all text-sm">
                      <option value="">Select Subject</option>
                      <option>Manpower Recruitment</option>
                      <option>Visa & Travel Services</option>
                      <option>Work Permit Inquiry</option>
                      <option>Partnership Inquiry</option>
                      <option>Career Inquiry</option>
                      <option>General Question</option>
                    </select>
                  </div>
                  <textarea placeholder="Your Message" rows={5} required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-background text-foreground border border-border focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none placeholder:text-muted-foreground/60 transition-all text-sm" />
                  <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit"
                    className="w-full px-8 py-3.5 bg-gradient-to-r from-primary to-[hsl(202,79%,41%)] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-primary/25 transition-all flex items-center justify-center gap-2">
                    <Send size={18} /> Send Message
                  </motion.button>
                </form>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">Other Ways to Reach Us</h2>
              <div className="space-y-4">
                {/* WhatsApp */}
                <motion.a
                  href="https://wa.me/6580000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="flex items-center gap-4 bg-card rounded-2xl p-5 border border-border hover:border-green-500/30 hover:shadow-lg hover:shadow-green-500/10 transition-all group cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/20 transition-colors">
                    <MessageCircle size={28} className="text-green-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Chat on WhatsApp</h4>
                    <p className="text-sm text-muted-foreground">Get instant responses for quick inquiries</p>
                  </div>
                </motion.a>

                {/* Consultation */}
                <motion.div
                  whileHover={{ y: -3 }}
                  className="flex items-center gap-4 bg-card rounded-2xl p-5 border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all group cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Headphones size={28} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Book a Consultation</h4>
                    <p className="text-sm text-muted-foreground">Schedule a 30-min free consultation call</p>
                  </div>
                </motion.div>

                {/* Global offices */}
                <motion.div
                  whileHover={{ y: -3 }}
                  className="flex items-center gap-4 bg-card rounded-2xl p-5 border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all group cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Globe size={28} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Dhaka Operations Office</h4>
                    <p className="text-sm text-muted-foreground">Our operational hub for South Asian corridors</p>
                  </div>
                </motion.div>
              </div>

              {/* Map */}
              <div className="mt-6 rounded-3xl overflow-hidden shadow-lg border border-border">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8!2d103.849!3d1.286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTcnMTAuMCJOIDEwM8KwNTAnNTYuMCJF!5e0!3m2!1sen!2ssg!4v1" width="100%" height="220" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Office location" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
