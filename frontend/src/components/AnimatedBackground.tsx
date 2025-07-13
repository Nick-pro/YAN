import { motion } from "framer-motion";

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Deep space gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#050517] via-[#0a0a23] to-[#0f0f3a]"></div>
      
      {/* Animated mesh gradient */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(circle at 20% 20%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 60%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        />
      </div>

      {/* Enhanced network connections */}
      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-40">
          <defs>
            <linearGradient id="networkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.8" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Main network lines with glow */}
          <motion.path
            d="M50,50 L200,150 L350,80 L500,200 L650,120 L800,180"
            stroke="url(#networkGradient)"
            strokeWidth="2"
            fill="none"
            filter="url(#glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.path
            d="M100,300 L250,250 L400,350 L550,280 L700,320 L850,280"
            stroke="url(#networkGradient)"
            strokeWidth="2"
            fill="none"
            filter="url(#glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", delay: 1 }}
          />
          <motion.path
            d="M0,200 L150,100 L300,220 L450,120 L600,240 L750,140"
            stroke="url(#networkGradient)"
            strokeWidth="1.5"
            fill="none"
            filter="url(#glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", delay: 2 }}
          />
          
          {/* Pulsing network nodes */}
          {[
            { cx: 50, cy: 50, delay: 0 },
            { cx: 200, cy: 150, delay: 0.5 },
            { cx: 350, cy: 80, delay: 1 },
            { cx: 500, cy: 200, delay: 1.5 },
            { cx: 650, cy: 120, delay: 2 },
            { cx: 250, cy: 250, delay: 0.3 },
            { cx: 400, cy: 350, delay: 0.8 },
            { cx: 550, cy: 280, delay: 1.3 }
          ].map((node, index) => (
            <motion.circle
              key={index}
              cx={node.cx}
              cy={node.cy}
              r={4}
              initial={{ r: 4, opacity: 0.4, scale: 1 }}
              fill="#06b6d4"
              filter="url(#glow)"
              animate={{ 
                scale: [1, 2, 1],
                opacity: [0.4, 1, 0.4],
                r: [4, 8, 4]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                delay: node.delay 
              }}
            />
          ))}
        </svg>
      </div>

      {/* Enhanced geometric patterns */}
      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-20">
          <defs>
            <pattern id="circuitPattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <rect width="200" height="200" fill="none" />
              <path d="M 0 100 L 70 100 L 70 30 L 140 30" stroke="#06b6d4" strokeWidth="2" fill="none" opacity="0.6" />
              <path d="M 100 0 L 100 70 L 170 70 L 170 140" stroke="#3b82f6" strokeWidth="2" fill="none" opacity="0.6" />
              <path d="M 30 140 L 100 140 L 100 200" stroke="#8b5cf6" strokeWidth="2" fill="none" opacity="0.6" />
              <circle cx="70" cy="100" r="4" fill="#06b6d4" opacity="0.8" />
              <circle cx="100" cy="70" r="4" fill="#3b82f6" opacity="0.8" />
              <rect x="135" y="25" width="10" height="10" fill="#8b5cf6" opacity="0.8" />
              <polygon points="160,60 170,80 150,80" fill="#06b6d4" opacity="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuitPattern)" />
        </svg>
      </div>

      {/* Floating geometric shapes with enhanced glow */}
      {[
        { size: "w-6 h-6", pos: "top-20 left-10", color: "bg-cyan-400/30", delay: 0 },
        { size: "w-4 h-4", pos: "top-40 right-20", color: "bg-blue-500/30", delay: 1 },
        { size: "w-8 h-8", pos: "bottom-40 left-1/4", color: "bg-purple-500/30", delay: 2 },
        { size: "w-3 h-3", pos: "top-1/3 left-3/4", color: "bg-cyan-300/40", delay: 0.5 },
        { size: "w-5 h-5", pos: "bottom-60 right-1/3", color: "bg-blue-400/30", delay: 1.5 },
        { size: "w-7 h-7", pos: "top-60 left-1/2", color: "bg-purple-400/30", delay: 2.5 }
      ].map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute ${shape.pos} ${shape.size} ${shape.color} rounded-full shadow-2xl`}
          style={{
            boxShadow: `0 0 20px ${
              shape.color.includes("cyan")
                ? "#06b6d4"
                : shape.color.includes("blue")
                ? "#3b82f6"
                : "#8b5cf6"
            }40`
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 6 + index,
            repeat: Infinity,
            repeatType: "reverse",
            delay: shape.delay
          }}
        />
      ))}

      {/* Polygon network with enhanced effects */}
      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-30">
          <defs>
            <linearGradient id="polygonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          
          {/* Rotating polygons */}
          <motion.polygon
            points="150,80 200,200 100,200"
            stroke="url(#polygonGradient)"
            strokeWidth="2"
            fill="none"
            filter="url(#glow)"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />
          <motion.polygon
            points="400,120 500,250 300,250"
            stroke="url(#polygonGradient)"
            strokeWidth="2"
            fill="none"
            filter="url(#glow)"
            animate={{ rotate: [360, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.polygon
            points="650,100 720,180 580,180"
            stroke="url(#polygonGradient)"
            strokeWidth="1.5"
            fill="none"
            filter="url(#glow)"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Connection lines between polygons */}
          <motion.line
            x1="150" y1="130" x2="400" y2="170"
            stroke="url(#polygonGradient)"
            strokeWidth="1"
            filter="url(#glow)"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.8, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.line
            x1="450" y1="185" x2="650" y2="140"
            stroke="url(#polygonGradient)"
            strokeWidth="1"
            filter="url(#glow)"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.8, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          />
        </svg>
      </div>
    </div>
  );
};

export default AnimatedBackground;
