import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const skills = [
  "HTML & CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Tailwind CSS",
  "Git & GitHub",
  "UI/UX Design",
];

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-primary font-medium mb-4 block"
            >
              About Me
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6"
            >
              Passionate about creating
              <span className="text-gradient"> meaningful experiences</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              I'm a designer and developer based in the digital realm, focused
              on creating elegant solutions that solve real problems. With a
              keen eye for detail and a passion for clean code, I bring ideas to
              life through thoughtful design and robust development.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                My Journey
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  My journey into web development started with a simple
                  curiosity about how websites work. What began as experimenting
                  with HTML in a text editor has evolved into a full-fledged
                  passion for creating digital experiences.
                </p>
                <p>
                  Over the years, I've had the privilege of working on diverse
                  projects, from small business websites to complex web
                  applications. Each project has taught me something new and
                  helped me grow as a developer.
                </p>
                <p>
                  Today, I focus on building accessible, performant, and
                  beautiful web experiences that make a real difference for
                  users and businesses alike.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-background p-8 rounded-2xl border border-border"
            >
              <h3 className="text-xl font-display font-semibold text-foreground mb-6">
                Skills & Technologies
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle size={18} className="text-primary flex-shrink-0" />
                    <span className="text-foreground">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              What I Value
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              These principles guide my work and help me deliver the best
              possible results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality First",
                description:
                  "I believe in taking the time to do things right, ensuring every detail is polished and every line of code is clean.",
              },
              {
                title: "User-Centered",
                description:
                  "Every decision I make is guided by the end user's needs, creating experiences that are intuitive and enjoyable.",
              },
              {
                title: "Continuous Learning",
                description:
                  "The tech world evolves rapidly, and I'm committed to staying current with the latest tools and best practices.",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
