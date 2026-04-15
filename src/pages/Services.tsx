import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Plane, Building2, FileCheck, Globe, Users, ArrowRight, CheckCircle, Zap, ChevronDown, HelpCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import servicesVisa from "@/assets/services-visa.jpg";
import servicesManpower from "@/assets/services-manpower.jpg";
import globalNetwork from "@/assets/global-network.jpg";

const faqItems = [
  { q: "What types of visas can VisaHOBe help with?", a: "We assist with Work Permits, S Passes, Employment Passes (Singapore), Subclass 482 (Australia), tourist, business, and student visas across 180+ countries. Our team prepares embassy-ready documentation for all visa types." },
  { q: "How long does the visa processing typically take?", a: "Processing times vary by destination and visa type. Singapore work permits typically take 1-3 weeks, while Australian skilled worker visas may take 2-4 months. We provide detailed timelines during your initial consultation." },
  { q: "Do you provide post-placement support?", a: "Yes, we offer comprehensive post-placement support including relocation guidance, worker orientation, employer compliance monitoring, and ongoing assistance throughout the employment period." },
  { q: "What countries do you recruit workers for?", a: "Our primary corridors include Singapore, Australia, Russia, Saudi Arabia, Cambodia, Belarus, Serbia, and Moldova. We're continuously expanding to new destinations based on employer demand." },
  { q: "Is VisaHOBe licensed as an Employment Agency?", a: "VisaHOBe is registered under ACRA with business activity code 70201 (Management Consultancy Services). We do not currently hold an EA license from Singapore's MOM. Our services focus on consultancy, file preparation, and travel assistance." },
  { q: "What documents are needed for a work visa application?", a: "Required documents vary by destination but typically include a valid passport, educational certificates, employment contract, medical reports, and police clearance. We provide a detailed checklist tailored to your specific visa type." },
];

const FAQItem = ({ item, isOpen, onClick }: { item: typeof faqItems[0]; isOpen: boolean; onClick: () => void }) => (
  <motion.div
    className={`bg-card rounded-2xl border transition-all duration-300 ${isOpen ? "border-primary/30 shadow-lg shadow-primary/5" : "border-border hover:border-primary/15"}`}
  >
    <button onClick={onClick} className="w-full flex items-center justify-between p-5 text-left group">
      <span className="font-semibold text-sm sm:text-base text-foreground pr-4 group-hover:text-primary transition-colors">{item.q}</span>
      <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }} className="flex-shrink-0">
        <ChevronDown size={18} className={`transition-colors ${isOpen ? "text-primary" : "text-muted-foreground"}`} />
      </motion.div>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{item.a}</p>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

const Services = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const mainServices = [
    {
      icon: Briefcase, title: "Manpower Recruitment",
      desc: "Placement of skilled and semi-skilled workers, including overseas employer coordination, worker screening, and professional employment contract preparation.",
      features: ["Overseas employer coordination", "Worker screening & selection", "Employment contract preparation", "Pre-departure orientation", "Post-placement follow-up"],
      destinations: "Singapore (WP, S Pass, EP), Australia (Subclass 482), Russia, Saudi Arabia, Cambodia, Belarus",
      image: servicesManpower,
    },
    {
      icon: Plane, title: "Visa & Travel Services",
      desc: 'Processing assistance for all visa types (Work, Tourist, Business, Student). We specialize in preparing "Embassy-Ready" documentation to minimize errors.',
      features: ['"Embassy-Ready" documentation', "Work, Tourist, Business, Student visas", "Post-approval travel guidance", "Relocation assistance", "Document verification"],
      destinations: "Australia, Serbia, Moldova, and other European Gateways",
      image: servicesVisa,
    },
  ];

  const additionalServices = [
    { icon: Globe, title: "Global Work Authorizations", desc: "End-to-end management of work authorization processes across multiple jurisdictions." },
    { icon: Building2, title: "Strategic Program Management", desc: "Comprehensive program management for organizations with complex, multi-country needs." },
    { icon: FileCheck, title: "Consular Services & Business Travel", desc: "Expert handling of consular appointments, business travel visas, and corporate travel programs." },
    { icon: Users, title: "Employer Compliance Support", desc: "Guidance on employer obligations, audit preparation, and regulatory compliance." },
  ];

  return (
    <div className="pt-14 pb-16 lg:pb-0">
      {/* Hero */}
      <section className="relative h-[45vh] sm:h-[50vh] md:h-[60vh] overflow-hidden">
        <motion.img src={globalNetwork} alt="Services" className="absolute inset-0 w-full h-full object-cover" initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 1.5 }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(207,100%,8%)]/60 via-[hsl(207,80%,15%)]/40 to-background/90" />
        <motion.div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-[hsl(202,79%,41%)] to-primary" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1, delay: 0.5 }} />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <motion.div initial={{ width: 0 }} animate={{ width: "3rem" }} transition={{ duration: 0.6 }} className="h-1 bg-accent rounded-full mb-6" />
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-display text-3xl md:text-5xl font-bold text-white mb-4">Our Services</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-white/60 max-w-2xl text-sm md:text-base">
            Comprehensive immigration and recruitment solutions tailored to your needs.
          </motion.p>
        </div>
      </section>

      {/* Main Services */}
      {mainServices.map((service, i) => (
        <section key={i} className={`section-padding ${i % 2 === 0 ? "bg-background" : "bg-section-alt"}`}>
          <div className="container-main">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className={`flex flex-col ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} glass-card rounded-2xl overflow-hidden`}>
              <div className="lg:w-5/12 h-56 sm:h-64 lg:h-auto relative overflow-hidden group">
                <motion.img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-6 left-6">
                  <motion.div whileHover={{ rotate: 10 }} className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/90 to-[hsl(202,79%,41%)]/70 flex items-center justify-center backdrop-blur-sm shadow-lg">
                    <service.icon size={28} className="text-primary-foreground" />
                  </motion.div>
                </div>
              </div>
              <div className="lg:w-7/12 p-6 sm:p-8 lg:p-10">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">{service.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6 text-sm sm:text-base">{service.desc}</p>
                <ul className="space-y-2.5 mb-6">
                  {service.features.map((f, j) => (
                    <motion.li key={j} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: j * 0.08 }}
                      className="flex items-center gap-2.5 text-sm text-foreground">
                      <CheckCircle size={16} className="text-primary flex-shrink-0" /> {f}
                    </motion.li>
                  ))}
                </ul>
                <div className="bg-gradient-to-r from-primary/5 to-primary/[0.02] border border-primary/15 rounded-xl p-4">
                  <p className="text-sm"><span className="font-semibold text-foreground">Target Destinations:</span> <span className="text-muted-foreground">{service.destinations}</span></p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* Additional Services */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <AnimatedSection>
            <div className="text-center mb-12">
              <motion.span initial={{ width: 0 }} whileInView={{ width: "3rem" }} viewport={{ once: true }} className="block h-1 bg-accent rounded-full mx-auto mb-4" />
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">Additional Services</h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {additionalServices.map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <motion.div whileHover={{ y: -8 }} className="glass-card rounded-2xl p-5 sm:p-6 text-center h-full group cursor-pointer hover:border-primary/20 transition-all">
                  <motion.div whileHover={{ rotate: 10, scale: 1.1 }} className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center mx-auto mb-4">
                    <s.icon size={22} className="text-primary" />
                  </motion.div>
                  <h3 className="font-display font-bold text-foreground mb-2 text-sm sm:text-base">{s.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-primary to-[hsl(202,79%,41%)] rounded-full mt-4 mx-auto transition-all duration-500" />
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-muted/50">
        <div className="container-main max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-10">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto mb-4">
                <HelpCircle className="text-primary" size={28} />
              </div>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">Frequently Asked Questions</h2>
              <p className="text-muted-foreground mt-3 text-sm sm:text-base">Common questions about our immigration and recruitment services.</p>
            </div>
          </AnimatedSection>
          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <FAQItem item={item} isOpen={openFaq === i} onClick={() => setOpenFaq(openFaq === i ? null : i)} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary via-[hsl(202,79%,41%)] to-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(202,79%,50%,0.3),transparent_50%)]" />
        <div className="container-main text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Zap className="mx-auto mb-4 text-white" size={36} />
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Need Help with Your Immigration Needs?</h2>
            <p className="text-white/80 max-w-xl mx-auto mb-8 text-sm sm:text-base">Get in touch with our team to find the best solution.</p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-primary font-bold rounded-xl hover:shadow-xl transition-all">
                Get Started <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
