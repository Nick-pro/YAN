import { motion } from "framer-motion";
import { Play, Image as ImageIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";

const photos = [
  {
    id: 1,
    title: "Robot Competition 2024",
    category: "Competitions",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop"
  },
  {
    id: 2,
    title: "Team Workshop",
    category: "Workshops",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop"
  },
  {
    id: 3,
    title: "Circuit Design Session",
    category: "Development",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop"
  },
  {
    id: 4,
    title: "Autonomous Robot Demo",
    category: "Demos",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop"
  },
  {
    id: 5,
    title: "Programming Marathon",
    category: "Events",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop"
  },
  {
    id: 6,
    title: "Exhibition Display",
    category: "Exhibitions",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop"
  }
];

const videos = [
  {
    id: 1,
    title: "Autonomous Navigation Demo",
    duration: "3:24",
    thumbnail: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop"
  },
  {
    id: 2,
    title: "Robotic Arm Precision Test",
    duration: "2:15",
    thumbnail: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop"
  },
  {
    id: 3,
    title: "Competition Highlights 2024",
    duration: "5:43",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop"
  }
];

const stats = [
  { label: "Photos Captured", value: "500+", color: "text-blue-400" },
  { label: "Video Demos", value: "50+", color: "text-cyan-400" },
  { label: "Events Documented", value: "25+", color: "text-purple-400" },
  { label: "Views Generated", value: "100K+", color: "text-green-400" }
];

const Gallery = () => (
  <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-x-hidden">
    {/* Background animation should stay at the bottom */}
    <div className="absolute inset-0 z-0 pointer-events-none">
      <AnimatedBackground />
    </div>

    <Navbar />

    <main className="pt-24 pb-12 relative z-10">
      <div className="container mx-auto px-4">

        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center py-20 relative z-10"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent drop-shadow-lg">
            Gallery
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-medium bg-black/30 p-4 rounded-xl backdrop-blur-sm">
            Capturing moments of <span className="text-blue-300 font-semibold">innovation</span>, <span className="text-cyan-300 font-semibold">collaboration</span>, and <span className="text-purple-300 font-semibold">achievement</span>.
          </p>
        </motion.section>

        {/* Photo Gallery */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="py-20"
        >
          <div className="flex items-center gap-4 mb-12">
            <ImageIcon className="w-8 h-8 text-blue-400" />
            <h2 className="text-4xl font-bold text-blue-400 tracking-tight">Photo Gallery</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {photos.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-blue-500/50 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col min-w-0"
              >
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-56 object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-5 min-w-0">
                  <h3 className="text-lg font-bold mb-1 drop-shadow break-words">{photo.title}</h3>
                  <span className="inline-block px-3 py-1 bg-blue-500/40 rounded-full text-xs font-semibold backdrop-blur-md shadow">
                    {photo.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Video Showcase */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="py-20"
        >
          <div className="flex items-center gap-4 mb-12">
            <Play className="w-8 h-8 text-blue-400" />
            <h2 className="text-4xl font-bold text-blue-400 tracking-tight">Video Showcase</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-blue-500/50 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col min-w-0"
                tabIndex={0}
                aria-label={`Play video: ${video.title}`}
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full aspect-video object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Play className="w-16 h-16 text-white/80 group-hover:text-blue-400 group-hover:scale-110 transition-all duration-300 drop-shadow-lg" />
                </div>
                <div className="absolute top-4 right-4 bg-black/70 px-3 py-1 rounded text-sm font-semibold text-white shadow">
                  {video.duration}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 via-transparent to-transparent min-w-0">
                  <h3 className="text-lg font-bold mb-0 group-hover:text-blue-300 transition-colors drop-shadow break-words">{video.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Stats Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="py-20"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-md hover:shadow-lg transition-all"
              >
                <div className={`text-4xl font-extrabold mb-2 ${stat.color}`}>{stat.value}</div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </main>

    <Footer />
  </div>
);

export default Gallery;
