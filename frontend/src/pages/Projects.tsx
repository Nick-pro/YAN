import { motion } from "framer-motion";
import { Calendar, Users, ExternalLink, Github } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";

const Projects = () => {
  const currentProjects = [
    {
      title: "Autonomous Navigation Robot",
      description: "Developing an AI-powered robot capable of navigating complex indoor environments using computer vision and machine learning.",
      status: "In Progress",
      team: "AI Team",
      duration: "6 months",
      technologies: ["Python", "ROS", "OpenCV", "TensorFlow"],
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop"
    },
    {
      title: "Robotic Arm Manipulation",
      description: "Creating a precise robotic arm system for pick-and-place operations with force feedback and adaptive gripping.",
      status: "Testing Phase",
      team: "Mechanical Team",
      duration: "4 months",
      technologies: ["Arduino", "C++", "CAD", "Sensors"],
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop"
    },
    {
      title: "Swarm Robotics System",
      description: "Multi-robot coordination system for collaborative tasks using distributed algorithms and wireless communication.",
      status: "Design Phase",
      team: "Software Team",
      duration: "8 months",
      technologies: ["C++", "Networking", "Algorithms", "Embedded Systems"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop"
    }
  ];

  const pastProjects = [
    {
      title: "Fire Fighting Robot",
      year: "2023",
      achievement: "Winner - National Robotics Competition",
      description: "Autonomous robot capable of detecting and extinguishing fires in maze-like environments."
    },
    {
      title: "Line Following Bot",
      year: "2023",
      achievement: "2nd Place - Regional Championship",
      description: "High-speed line following robot with advanced sensor fusion and PID control."
    },
    {
      title: "Humanoid Robot Walker",
      year: "2022",
      achievement: "Best Innovation Award",
      description: "Bipedal walking robot with dynamic balance control and human-like gait patterns."
    },
    {
      title: "Agricultural Monitoring Drone",
      year: "2022",
      achievement: "Community Impact Award",
      description: "IoT-enabled drone for crop monitoring and precision agriculture applications."
    }
  ];

  return (
    <div className="relative z-10 min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      <AnimatedBackground />
      <Navbar />

      <div className="pt-20 pb-12 z-10 relative">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center py-20"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Our Projects
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Explore our innovative robotics projects and cutting-edge research initiatives.
            </p>
          </motion.section>

          {/* Current Projects */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="py-20"
          >
            <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">Current Projects</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {currentProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 
                             hover:border-blue-500/50 hover:scale-[1.02] hover:shadow-xl 
                             transition-all duration-300 group"
                >
                  <div className="h-48 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 flex items-center justify-center">
                    <div className="text-6xl opacity-50">🤖</div>
                  </div>
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        project.status === "In Progress"
                          ? "bg-blue-500/20 text-blue-300"
                          : project.status === "Testing Phase"
                          ? "bg-yellow-500/20 text-yellow-300"
                          : "bg-purple-500/20 text-purple-300"
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-6">{project.description}</p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Users className="w-4 h-4" />
                        {project.team}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Calendar className="w-4 h-4" />
                        {project.duration}
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="px-2 py-1 bg-white/10 rounded-lg text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 rounded-lg hover:bg-blue-500/30 transition-colors">
                        <ExternalLink className="w-4 h-4" />
                        Details
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                        <Github className="w-4 h-4" />
                        Code
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Past Projects */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="py-20"
          >
            <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">Past Projects & Achievements</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {pastProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 
                             hover:border-blue-500/50 hover:scale-[1.02] hover:shadow-xl 
                             transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <span className="text-sm text-gray-400">{project.year}</span>
                  </div>
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm font-semibold">
                      {project.achievement}
                    </span>
                  </div>
                  <p className="text-gray-300">{project.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Projects;
