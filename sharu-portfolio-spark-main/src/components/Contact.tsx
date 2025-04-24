
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Get in Touch
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          <Card className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <a href="mailto:sharumd208@gmail.com" className="flex items-center gap-3 text-gray-600 hover:text-purple-600">
                    <Mail className="h-5 w-5" />
                    sharumd208@gmail.com
                  </a>
                  <a href="tel:+919515183507" className="flex items-center gap-3 text-gray-600 hover:text-purple-600">
                    <Phone className="h-5 w-5" />
                    +91-9515183507
                  </a>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-4">Social Links</h3>
                <div className="space-y-4">
                  <Button asChild variant="outline" className="w-full justify-start gap-2">
                    <a href="https://github.com/sharumohammad" target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                      GitHub
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="w-full justify-start gap-2">
                    <a href="https://linkedin.com/in/sharu-mohammad" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5" />
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </motion.div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
