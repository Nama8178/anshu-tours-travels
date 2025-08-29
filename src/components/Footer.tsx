import { Link } from "react-router-dom"; // Assuming you are using react-router-dom
import { Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/40 text-muted-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">Anshu Tours & Travels</h3>
            <p className="text-sm">
              Your trusted partner for exploring India's incredible destinations. We offer
              comfortable, safe, and memorable travel experiences.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="w-5 h-5 hover:text-primary transition-colors" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="w-5 h-5 hover:text-primary transition-colors" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="w-5 h-5 hover:text-primary transition-colors" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5 hover:text-primary transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/destinations" className="hover:text-primary transition-colors">Destinations</Link></li>
              <li><Link to="/book-taxi" className="hover:text-primary transition-colors">Book a Taxi</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">One-Way Trip</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Round Trip</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Local Taxi</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Sightseeing Tours</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Custom Packages</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span><a href="tel:+918506940925" className="hover:text-primary transition-colors"> +91 85069 40925</a></span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span><a href="mailto:anshutoursandtravels03@gmail.com" className="hover:text-primary transition-colors">anshutoursandtravels03@gmail.com</a></span>
              </li>
              <li className="space-y-1">
                <p><strong>Office Address:</strong></p>
                <p>S/o Mr. Bhagwat Singh, H.No: 157, Gali No-2, Indraprastha Ext, Nangloi, Delhi - 110041</p>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Copyright */}
        <div className="text-center text-sm">
          &copy; {currentYear} Anshu Tours & Travels. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;