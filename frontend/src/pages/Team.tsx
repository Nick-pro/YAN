import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import { useEffect, useState } from "react";
import axios from "axios";

const Team = () => {
  const [coreTeam, setCoreTeam] = useState([]);
  const [alumni, setAlumni] = useState([]);

  // Dynamic API Base URL from Vercel .env
  const API_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    axios
      .get(`${API_URL}/api/members`)
      .then((res) => setCoreTeam(res.data))
      .catch((err) => console.error("Error fetching core team:", err));

    axios
      .get(`${API_URL}/api/alumni`)
      .then((res) => setAlumni(res.data))
      .catch((err) => console.error("Error fetching alumni:", err));
  }, [API_URL]);

  return (
    <div className="relative z-10 min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      <AnimatedBackground />
      <Navbar />

      <div className="pt-20 pb-12 z-10 relative">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center py-20"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Our Team
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Meet the brilliant minds behind Yantrika's innovations and achievements.
            </p>
          </motion.section>

          {/* Core Team */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="py-20"
          >
            <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">Core Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreTeam.map((member, index) => (
                <motion.div
                  key={member._id || index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 
                             transform transition-all duration-300 ease-in-out 
                             hover:scale-105 hover:shadow-xl hover:border-blue-500/60 hover:bg-white/10 
                             text-center group"
                >
                  <div
                    className={`w-24 h-24 bg-gradient-to-r ${
                      member.color || "from-blue-500 to-cyan-400"
                    } rounded-full mx-auto mb-6 flex items-center justify-center text-white text-xl font-bold`}
                  >
                    {member.avatar ||
                      member.name?.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-white">
                    {member.name}
                  </h3>
                  <p className="text-blue-400 font-semibold mb-4 group-hover:text-blue-200">
                    {member.role}
                  </p>
                  <p className="text-gray-300 group-hover:text-gray-100 mb-6">{member.bio}</p>
                  <div className="flex justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={member.github || "#"}
                      className="p-2 bg-white/10 rounded-lg hover:bg-blue-500/40 hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={member.linkedin || "#"}
                      className="p-2 bg-white/10 rounded-lg hover:bg-blue-500/40 hover:text-white transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={`mailto:${member.email || ""}`}
                      className="p-2 bg-white/10 rounded-lg hover:bg-blue-500/40 hover:text-white transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Alumni */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="py-20"
          >
            <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">Alumni Spotlight</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {alumni.map((alum, index) => (
                <motion.div
                  key={alum._id || index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 
                             transform transition-all duration-300 ease-in-out 
                             hover:scale-105 hover:shadow-xl hover:border-blue-500/60 hover:bg-white/10"
                >
                  <h3 className="text-xl font-bold mb-2 hover:text-white">{alum.name}</h3>
                  <p className="text-blue-400 font-semibold mb-2 hover:text-blue-200">{alum.currentRole}</p>
                  <p className="text-gray-400 text-sm mb-4">{alum.year}</p>
                  <p className="text-gray-300">{alum.achievement}</p>
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

export default Team;
