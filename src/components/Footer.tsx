import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="glass-dark text-footer-foreground pb-20 lg:pb-0">
      <div className="container-main section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="VisaHOBe" className="w-10 h-10 rounded-xl object-contain" />
              <div>
                <h3 className="font-display font-bold text-white text-sm">VisaHOBe Pte. Ltd.</h3>
                <p className="text-xs text-footer-foreground/60">Global Manpower Recruiter</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-footer-foreground/80">
              Your trusted global mobility partner. Registered in Singapore (UEN: 202524173E). Delivering seamless immigration and recruitment solutions worldwide.
            </p>
            <div className="flex gap-3 mt-5">
              {[Facebook, Linkedin, Twitter, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all">
                  <Icon size={16} className="text-footer-foreground" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Services", path: "/services" },
                { label: "Destinations", path: "/destinations" },
                { label: "Insights", path: "/insights" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2.5">
              {["Manpower Recruitment", "Visa & Travel Services", "Global Work Authorizations", "Strategic Program Management", "Consular Services"].map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-sm hover:text-primary transition-colors">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <MapPin size={16} className="mt-0.5 text-primary flex-shrink-0" />
                68 Circular Road, #02-01, Singapore 049422
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail size={16} className="text-primary flex-shrink-0" />
                info@visahobe.com
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone size={16} className="text-primary flex-shrink-0" />
                +65 8000 0000
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-footer-foreground/50">
            © {new Date().getFullYear()} VisaHOBe Pte. Ltd. All rights reserved. UEN: 202524173E
          </p>
          <p className="text-xs text-footer-foreground/50">
            Registered under ACRA — Business Activity Code: 70201 (Management Consultancy Services)
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
