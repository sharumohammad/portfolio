
import { motion } from "framer-motion";
import { Award, BookOpen, BadgeCheck } from "lucide-react";
import { Card } from "./ui/card";

const achievementsData = {
  achievements: [
    {
      icon: Award,
      title: "Dean's Top 10% at University",
      description: "Academic excellence recognition"
    },
    {
      icon: BadgeCheck,
      title: "5-star C++ Coder on HackerRank",
      description: "Demonstrated proficiency in C++ programming"
    }
  ],
  certifications: [
    {
      icon: BookOpen,
      title: "Java Backend Development",
      issuer: "GeeksForGeeks",
      year: "2024"
    },
    {
      icon: BookOpen,
      title: "Object-Oriented Programming",
      issuer: "iamneo",
      year: "2023"
    },
    {
      icon: BookOpen,
      title: "DSA Certification",
      issuer: "Udemy",
      year: "2023"
    },
    {
      icon: BookOpen,
      title: "Cloud Computing",
      issuer: "NPTEL",
      year: "2023"
    },
    {
      icon: BookOpen,
      title: "Prompt Engineering",
      issuer: "Coursera",
      year: "2024"
    },
    {
      icon: BookOpen,
      title: "Excel Skills",
      issuer: "Coursera",
      year: "2023"
    }
  ]
};

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-4"
        >
          <Award className="w-10 h-10 text-purple-600" />
          Achievements & Certifications
        </motion.h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Achievements Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center">Achievements</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {achievementsData.achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 hover:shadow-lg transition-shadow flex items-center space-x-4">
                    <achievement.icon className="w-10 h-10 text-purple-500" />
                    <div>
                      <h4 className="text-lg font-semibold">{achievement.title}</h4>
                      <p className="text-gray-600">{achievement.description}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center">Certifications</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {achievementsData.certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-4 hover:shadow-lg transition-shadow">
                    <div className="flex items-center mb-2">
                      <cert.icon className="w-6 h-6 mr-3 text-purple-500" />
                      <h4 className="text-md font-semibold">{cert.title}</h4>
                    </div>
                    <p className="text-sm text-gray-600">{cert.issuer}</p>
                    <p className="text-xs text-gray-500">{cert.year}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
