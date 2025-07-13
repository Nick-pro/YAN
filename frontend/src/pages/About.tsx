import { motion } from "framer-motion";
import { Award, Target, Users, Lightbulb } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import Spline from "@splinetool/react-spline";

const achievements = [
  {
    icon: <Award className="w-8 h-8" />,
    title: "Regional Robotics Championship 2024",
    description: "First place in autonomous navigation category"
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Innovation Award 2023",
    description: "Best technical innovation for AI-powered robotic arm"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Community Impact Award",
    description: "Outstanding contribution to STEM education"
  }
];

const facultyMentors = [
  {
    name: "Dr. Sarah Johnson",
    title: "Professor of Mechanical Engineering",
    description: "Leading expert in autonomous systems with 15+ years of experience in robotics research and education.",
    gradient: "from-blue-500/20 to-cyan-400/20"
  },
  {
    name: "Prof. Michael Chen",
    title: "Associate Professor of Computer Science",
    description: "Specialist in artificial intelligence and machine learning applications in robotics.",
    gradient: "from-purple-500/20 to-pink-400/20"
  }
];

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050517] via-[#0a0a23] to-[#0f0f3a] text-white relative overflow-hidden">
      <AnimatedBackground />
      <Navbar />

      <main className="pt-20 pb-12 z-10 relative container mx-auto px-4">
        {/* Hero Section */}
        <section className="grid lg:grid-cols-2 gap-16 py-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight">
              About Yantrika
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              We are a community of innovators, engineers, and dreamers dedicated to pushing the boundaries of robotics and automation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden"
          >
            <Spline scene="https://prod.spline.design/qIk8ufDQh-gDj3MZ/scene.splinecode" />
          </motion.div>
        </section>

        {/* Mission Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="py-32 grid md:grid-cols-2 gap-16"
        >
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold text-cyan-400">Our Mission</h2>
            <p className="text-xl text-gray-200 leading-relaxed">
              To foster innovation in robotics and automation while building a community of passionate engineers. We believe in learning by doing and collaborating to solve real-world problems.
            </p>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-2xl blur-xl"></div>
              <div className="relative p-8 bg-black/40 backdrop-blur-2xl rounded-2xl border border-yellow-400/30 flex gap-6 items-center">
                <div className="p-4 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-xl border border-yellow-400/30">
                  <Lightbulb className="w-12 h-12 text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Innovation First</h3>
                  <p className="text-gray-300 text-lg">Creative problem-solving is our foundation.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-3xl blur-xl"></div>
            <div className="relative bg-black/40 backdrop-blur-2xl p-10 rounded-3xl border border-cyan-400/30">
              <h3 className="text-3xl font-bold text-cyan-400 mb-8">What We Do</h3>
              <ul className="space-y-5 text-gray-200 text-lg">
                {[
                  "Build autonomous robots",
                  "Participate in competitions",
                  "Host workshops & seminars",
                  "Collaborate with industry",
                  "Mentor and grow talent"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <span className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full shadow-md shadow-cyan-400/50"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Faculty Mentors */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="py-32"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-cyan-400">Faculty Mentors</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {facultyMentors.map((mentor, i) => (
              <div key={i} className="relative group">
                <div className={`absolute inset-0 bg-gradient-to-r ${mentor.gradient} rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500`} />
                <div className="relative p-10 rounded-3xl bg-black/40 backdrop-blur-2xl border border-white/10 text-center group-hover:border-cyan-400/30 transition">
                  <div className="w-40 h-40 bg-gradient-to-r from-cyan-500 to-blue-400 rounded-full mx-auto mb-8 flex items-center justify-center shadow-2xl shadow-cyan-500/50 border border-cyan-400/30">
                    <Users className="w-20 h-20 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{mentor.name}</h3>
                  <p className="text-xl font-semibold text-cyan-400 mb-4">{mentor.title}</p>
                  <p className="text-lg text-gray-300">{mentor.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Achievements Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="py-32"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-cyan-400">Our Achievements</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition" />
                <div className="relative bg-black/40 backdrop-blur-2xl p-10 rounded-3xl border border-white/10 group-hover:border-yellow-400/30 text-center h-full">
                  <div className="text-yellow-400 mb-6 flex justify-center p-4 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-2xl border border-yellow-400/30 w-fit mx-auto">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-lg text-gray-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
