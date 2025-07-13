import { motion } from "framer-motion";
import { ArrowRight, Users, Cog } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import Spline from "@splinetool/react-spline";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050517] via-[#0a0a23] to-[#0f0f3a] text-white overflow-hidden relative">
      <AnimatedBackground />
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center z-10">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-2xl leading-tight">
                YANTRIKA
              </h1>
              <p className="text-3xl md:text-4xl font-bold text-cyan-300 mb-8 drop-shadow-lg">
                Innovate – Build – Automate
              </p>
              <p className="text-xl md:text-2xl text-gray-200 max-w-2xl leading-relaxed drop-shadow-md">
                We are a passionate community of innovators, engineers, and dreamers dedicated to pushing the boundaries of robotics and automation. Join us as we build the future, one robot at a time.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-6 pt-8"
            >
              <Link to="/about" className="group">
                <button className="relative px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl font-bold text-xl overflow-hidden group-hover:shadow-2xl group-hover:shadow-cyan-500/50 transition-all duration-500 transform group-hover:scale-105 flex items-center gap-3">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <span className="relative z-10">Learn More</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
                </button>
              </Link>
              <Link to="/contact" className="group">
                <button className="relative px-10 py-5 border-2 border-cyan-400 rounded-2xl font-bold text-xl hover:bg-cyan-400/10 overflow-hidden group-hover:shadow-2xl group-hover:shadow-cyan-400/50 transition-all duration-500 transform group-hover:scale-105 flex items-center gap-3">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <span className="relative z-10">Join Us</span>
                  <Users className="w-6 h-6 relative z-10" />
                </button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side - 3D Spline Robot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-3xl"></div>
            <div className="relative rounded-3xl overflow-hidden border border-cyan-400/20 shadow-2xl shadow-blue-500/20 backdrop-blur-sm w-full h-[400px] md:h-[500px] lg:h-[600px]">
              <Spline scene="https://prod.spline.design/fM054KtuJL7dJN-o/scene.splinecode" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlight Cards Section */}
      <section className="py-32 px-4 relative z-10">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { icon: Cog, title: "Latest Achievement", desc: "Winner of Regional Robotics Championship 2024", color: "from-yellow-400/20 to-orange-500/20" },
              { icon: Cog, title: "Current Project", desc: "Autonomous Navigation Robot for Indoor Environments", color: "from-blue-400/20 to-cyan-500/20" },
              { icon: Users, title: "Upcoming Event", desc: "Tech Workshop: AI in Robotics - March 15, 2024", color: "from-purple-400/20 to-pink-500/20" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500`}></div>
                <div className="relative bg-black/40 backdrop-blur-2xl rounded-3xl p-8 border border-white/10 group-hover:border-cyan-400/30 transition-all duration-500 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-2xl border border-cyan-400/30">
                      <item.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
