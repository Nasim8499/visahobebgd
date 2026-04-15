import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Building, Users, Globe, Shield, ArrowRight, Award, Linkedin, Mail } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import aboutTeam from "@/assets/about-team.jpg";
import globalNetwork from "@/assets/global-network.jpg";
import teamNasim from "@/assets/team-nasim.jpg";
import teamRashid from "@/assets/team-rashid.jpg";
import teamOperations from "@/assets/team-operations.jpg";
import teamVisa from "@/assets/team-visa.jpg";

const teamMembers = [
  {
    name: "Nasim Shariyar",
    role: "Director & CEO",
    desc: "Majority shareholder directing core strategy with deep expertise in South Asian recruitment markets.",
    image: teamNasim,
  },
  {
    name: "Dr. Abdul Rashid Bin Mohamed Ali",
    role: "Local Director (Singapore)",
    desc: "Brings extensive experience from education and administration sectors, ensuring Singapore compliance.",
    image: teamRashid,
  },
  {
    name: "Fatima Rahman",
    role: "Head of Operations",
    desc: "Oversees daily operations, employer coordination, and workforce deployment across all corridors.",
    image: teamOperations,
  },
  {
    name: "Arif Hossain",
    role: "Lead Visa Consultant",
    desc: "Expert in embassy-ready documentation with 10+ years handling complex multi-country visa cases.",
    image: teamVisa,
  },
];

const About = () => {
  return (
    <div className="pt-20 pb-16 lg:pb-0">
      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img src={globalNetwork} alt="Global network" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--hero-overlay))]/70 via-[hsl(var(--primary))]/20 to-background/95" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <motion.div initial={{ width: 0 }} animate={{ width: "3rem" }} transition={{ duration: 0.6 }} className="h-1 bg-accent rounded-full mb-6" />
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-display text-3xl md:text-5xl font-bold text-white mb-4">
            About VisaHOBe Pte. Ltd.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-white/60 max-w-2xl text-sm md:text-base">
            Your Trusted Global Mobility Partner — Registered in Singapore, operating worldwide.
          </motion.p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding bg-background">
        <div className="container-main grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-primary/15 to-accent/15 text-primary text-xs font-semibold mb-4 uppercase tracking-wider">Who We Are</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">Guided by compliance, driven by <span className="text-gradient">expertise.</span></h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Our company is guided by a structure that ensures compliance with Singapore's legal framework and deep market expertise. We are a Private Company Limited by Shares, registered in Singapore.</p>
            <div className="space-y-4">
              {[
                { icon: Building, label: "Legal Identity", value: "Private Company Limited by Shares, UEN 202524173E" },
                { icon: Globe, label: "Registered Office", value: "68 Circular Road, #02-01, Singapore 049422" },
                { icon: Users, label: "Operational Focus", value: "Fully foreign-owned, operational hub in Dhaka, Bangladesh" },
              ].map((item, i) => (
                <motion.div key={i} whileHover={{ x: 4 }} className="flex gap-3 items-start group">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/15 to-accent/10 flex items-center justify-center flex-shrink-0 group-hover:from-primary/25 group-hover:to-accent/20 transition-colors">
                    <item.icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-foreground">{item.label}</h4>
                    <p className="text-sm text-muted-foreground">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="relative">
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-primary/20 via-transparent to-accent/20 blur-xl" />
              <img src={aboutTeam} alt="VisaHOBe team" className="rounded-3xl shadow-2xl w-full relative" loading="lazy" width={800} height={600} />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Team Members */}
      <section className="section-padding bg-muted/50">
        <div className="container-main">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">Our Team</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Meet the Leadership</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mt-3 text-sm sm:text-base">
                Experienced professionals committed to making global mobility seamless and compliant.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {teamMembers.map((member, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-card rounded-3xl overflow-hidden group border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all"
                >
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" width={512} height={512} />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                    {/* Social overlay */}
                    <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-8 h-8 rounded-lg bg-primary/90 flex items-center justify-center cursor-pointer hover:bg-primary transition-colors">
                        <Linkedin size={14} className="text-primary-foreground" />
                      </div>
                      <div className="w-8 h-8 rounded-lg bg-primary/90 flex items-center justify-center cursor-pointer hover:bg-primary transition-colors">
                        <Mail size={14} className="text-primary-foreground" />
                      </div>
                    </div>
                  </div>
                  <div className="p-4 sm:p-5">
                    <h3 className="font-display font-bold text-sm sm:text-base text-foreground group-hover:text-primary transition-colors">{member.name}</h3>
                    <p className="text-xs text-primary font-semibold mt-1">{member.role}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed mt-2">{member.desc}</p>
                  </div>
                  <div className="h-0.5 bg-gradient-to-r from-primary via-accent to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Service Portfolio Table */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-12">Our Comprehensive Service Portfolio</h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="overflow-x-auto">
              <motion.table className="w-full border-collapse bg-card rounded-3xl overflow-hidden border border-border" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                <thead>
                  <tr className="bg-gradient-to-r from-primary to-[hsl(202,79%,41%)] text-white">
                    <th className="px-6 py-4 text-left font-display font-bold text-sm">Service Category</th>
                    <th className="px-6 py-4 text-left font-display font-bold text-sm">Description</th>
                    <th className="px-6 py-4 text-left font-display font-bold text-sm">Target Destinations</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { cat: "Manpower Recruitment", desc: "Placement of skilled and semi-skilled workers, including overseas employer coordination, worker screening, and professional employment contract preparation.", dest: "Singapore (WP, S Pass, EP), Australia (Subclass 482), Russia, Saudi Arabia, Cambodia, and Belarus." },
                    { cat: "Visa & Travel Services", desc: 'Processing assistance for all visa types (Work, Tourist, Business, Student). We specialize in preparing "Embassy-Ready" documentation to minimize errors.', dest: "Australia and emerging European Gateways like Serbia and Moldova." },
                  ].map((row, i) => (
                    <motion.tr key={i} className="border-t border-border hover:bg-primary/5 transition-colors" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.15 + 0.3 }}>
                      <td className="px-6 py-5 font-semibold text-sm text-foreground align-top">{row.cat}</td>
                      <td className="px-6 py-5 text-sm text-muted-foreground leading-relaxed">{row.desc}</td>
                      <td className="px-6 py-5 text-sm text-muted-foreground leading-relaxed">{row.dest}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </motion.table>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Digital Transparency */}
      <section className="section-padding bg-muted/50">
        <div className="container-main max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/15 flex items-center justify-center mx-auto mb-4">
              <Award className="text-primary" size={32} />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">Commitment to Digital Transparency</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We are committed to modernizing the migration process. We are actively developing a cutting-edge digital platform featuring a <span className="text-gradient font-semibold">"Liquid Interface"</span> designed to simplify complex information.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Compliance Note */}
      <section className="section-padding bg-background">
        <div className="container-main max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="bg-card rounded-3xl p-8 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 to-accent/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-2">Important Note on Compliance</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    VisaHOBe is legally registered with ACRA under the business activity code <span className="font-semibold text-foreground">70201: Management Consultancy Services</span>.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    The company does not currently hold an Employment Agency (EA) license from Singapore's Ministry of Manpower (MOM) for manpower placement. Our services are focused on consultancy, file preparation, and travel assistance.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary via-[hsl(202,79%,41%)] to-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(202,79%,50%,0.3),transparent_50%)]" />
        <div className="container-main text-center relative z-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">Contact us today to discuss your global mobility needs.</p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-primary font-bold rounded-full hover:shadow-xl transition-all">
              Contact Us <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
