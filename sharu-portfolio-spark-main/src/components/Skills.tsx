
import { Card } from "./ui/card";
import { motion } from "framer-motion";

const skillsData = {
  Languages: ["C++", "JavaScript", "Java"],
  Frameworks: ["HTML", "Tailwind CSS", "Spring Boot", "NodeJS", "React"],
  Tools: ["MySQL", "Postman API", "Tableau"],
  "Soft Skills": ["Problem Solving", "Time Management", "Project Management", "Adaptability"]
};

const SkillCard = ({ category, skills }: { category: string; skills: string[] }) => (
  <Card className="p-6 hover:shadow-lg transition-shadow">
    <h3 className="text-lg font-semibold mb-4">{category}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span
          key={skill}
          className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm"
        >
          {skill}
        </span>
      ))}
    </div>
  </Card>
);

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Skills & Expertise
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skillsData).map(([category, skills], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <SkillCard category={category} skills={skills} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
