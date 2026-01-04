import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";

import bgVideo from "@/assets/website-bg.mp4";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com",
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: "https://twitter.com",
  },
];

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50 relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 pointer-events-none">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            opacity: 0.3,
            filter: "brightness(2.0) contrast(1)",
          }}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-background/40" />
      </div>

      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#home")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="font-display text-4xl text-gradient-ember cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            SAHIL
          </motion.a>

          {/* Social links */}
          <motion.div
            className="flex items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card border border-border/50 rounded-xl text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {/* Copyright */}
          <motion.p
            className="font-body text-sm text-muted-foreground text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            All rights are reserved by -{" "}
            <span className="text-foreground font-medium">SAHIL</span> &copy; 2026
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
