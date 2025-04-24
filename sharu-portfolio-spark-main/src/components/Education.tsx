
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { Card } from "./ui/card";

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-4"
        >
          <GraduationCap className="w-10 h-10 text-purple-600" />
          Education
        </motion.h2>
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <GraduationCap className="w-8 h-8 mr-4 text-purple-500" />
                <h3 className="text-xl font-semibold">
                  B.Tech in Computer Science
                </h3>
              </div>
              <p className="text-gray-600 mb-2">
                Lovely Professional University
              </p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>2022 - Present</span>
                <span>CGPA: 7.38</span>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
