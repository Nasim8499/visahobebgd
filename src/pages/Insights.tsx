import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, ChevronRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import servicesVisa from "@/assets/services-visa.jpg";
import servicesManpower from "@/assets/services-manpower.jpg";
import aboutTeam from "@/assets/about-team.jpg";

const articles = [
  { date: "Apr 10, 2026", tag: "Policy", title: "Apr 2026 DOL PERM & Prevailing Wage Processing Updates", desc: "The DOL has released updated processing times for PERM labor certifications and prevailing wage determinations. Key changes affect construction and IT sectors.", image: servicesVisa },
  { date: "Apr 5, 2026", tag: "Europe", title: "The EU Entry-Exit System: What Travelers Should Know", desc: "The EU's EES will collect biometric data from third-country nationals. Learn about the implications and preparations for your workforce.", image: aboutTeam },
  { date: "Mar 28, 2026", tag: "Analysis", title: "The Post-H-1B Lottery Playbook: Exploring Visa Alternatives", desc: "The H-1B visa lottery results are in. For those not selected, discover alternative pathways including O-1, L-1, and E-2 visa categories.", image: servicesManpower },
  { date: "Mar 20, 2026", tag: "Singapore", title: "Singapore MOM Updates Work Permit Requirements for Foreign Workers", desc: "New medical examination requirements and salary thresholds take effect this quarter.", image: servicesVisa },
  { date: "Mar 15, 2026", tag: "Australia", title: "Australia Subclass 482 Visa Changes: What Employers Need to Know", desc: "The Department of Home Affairs announces changes to skilled occupation lists and processing times.", image: aboutTeam },
  { date: "Mar 10, 2026", tag: "Strategy", title: "Building a Resilient Global Talent Strategy in 2026", desc: "Key trends and strategies for organizations looking to optimize their international workforce mobility programs.", image: servicesManpower },
];

const Insights = () => {
  return (
    <div className="pt-20 pb-16 lg:pb-0">
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-section-alt overflow-hidden">
        <div className="relative z-10 container-main px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">Insights</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-muted-foreground max-w-2xl mx-auto">
            Stay informed with the latest immigration news, policy updates, and industry analysis.
          </motion.p>
        </div>
      </section>

      {/* Articles */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((a, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <motion.div whileHover={{ y: -6 }} className="glass-card rounded-2xl overflow-hidden group h-full flex flex-col">
                  <div className="h-48 overflow-hidden">
                    <img src={a.image} alt={a.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2.5 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full">{a.tag}</span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar size={12} /> {a.date}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-foreground mb-2 leading-snug">{a.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">{a.desc}</p>
                    <button className="mt-4 inline-flex items-center gap-1 text-primary text-sm font-semibold hover:gap-2 transition-all self-start">
                      Read More <ChevronRight size={14} />
                    </button>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary hover:text-primary-foreground transition-all">
              All Insights
            </button>
          </div>
        </div>
      </section>

      {/* Toolkit */}
      <section className="section-padding bg-section-alt">
        <div className="container-main grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">Global Talent Strategy Toolkit</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">For organizations navigating complex immigration landscapes, our toolkit provides comprehensive guidance on alternative visa pathways, compliance strategies, and workforce planning frameworks.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-highlight-hover transition-all shadow-lg hover:shadow-xl hover:shadow-primary/25">
              Get the Toolkit <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <img src={aboutTeam} alt="Strategy toolkit" className="rounded-2xl shadow-2xl w-full" loading="lazy" />
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Insights;
