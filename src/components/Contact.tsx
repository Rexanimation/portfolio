import { motion, useInView, type Easing } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as Easing },
    },
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@sahil.dev",
      link: "mailto:hello@sahil.dev",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 XXXXX XXXXX",
      link: "tel:+91XXXXXXXXXX",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "India",
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.span className="text-primary font-body uppercase tracking-[0.3em] text-sm">
              Get In Touch
            </motion.span>
            <motion.h2 className="font-display text-5xl md:text-6xl text-foreground mt-4 font-bold text-glow-white">
              Let's Work{" "}
              <span className="text-gradient-ember">Together</span>
            </motion.h2>
            <motion.p className="font-body text-muted-foreground mt-4 max-w-xl mx-auto">
              Have a project in mind or just want to chat? I'd love to hear from you.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact form */}
            <motion.div variants={itemVariants}>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div whileHover={{ scale: 1.02 }} className="group">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-6 py-4 bg-card border border-border rounded-xl font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors duration-300"
                    />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} className="group">
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-6 py-4 bg-card border border-border rounded-xl font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors duration-300"
                    />
                  </motion.div>
                </div>
                <motion.div whileHover={{ scale: 1.01 }}>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full px-6 py-4 bg-card border border-border rounded-xl font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors duration-300"
                  />
                </motion.div>
                <motion.div whileHover={{ scale: 1.01 }}>
                  <textarea
                    rows={5}
                    placeholder="Your Message"
                    className="w-full px-6 py-4 bg-card border border-border rounded-xl font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors duration-300 resize-none"
                  />
                </motion.div>
                <motion.button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-ember rounded-xl font-body font-semibold text-primary-foreground shadow-ember transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Contact info */}
            <motion.div
              variants={itemVariants}
              className="space-y-8"
            >
              <div className="bg-gradient-card p-8 rounded-2xl border border-border/50">
                <h3 className="font-display text-3xl text-foreground mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <motion.div
                      key={info.title}
                      className="flex items-center gap-4"
                      whileHover={{ x: 10 }}
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-body text-sm text-muted-foreground">
                          {info.title}
                        </p>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="font-body text-foreground hover:text-primary transition-colors duration-200"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="font-body text-foreground">
                            {info.value}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Call to action */}
              <motion.div
                className="bg-gradient-ember p-8 rounded-2xl text-center"
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="font-display text-2xl text-primary-foreground mb-2">
                  Ready to start?
                </h4>
                <p className="font-body text-primary-foreground/80 mb-4">
                  Let's bring your vision to life
                </p>
                <motion.a
                  href="mailto:hello@sahil.dev"
                  className="inline-block px-6 py-3 bg-background/20 backdrop-blur-sm rounded-full font-body font-medium text-primary-foreground hover:bg-background/30 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  hello@sahil.dev
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
