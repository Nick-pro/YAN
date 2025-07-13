import { motion } from "framer-motion";
import { Download, Heart, Handshake } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";

const Sponsors = () => {
  const sponsors = [
    { name: "TechCorp Industries", tier: "Platinum", logo: "TC" },
    { name: "RoboTech Solutions", tier: "Gold", logo: "RT" },
    { name: "Innovation Labs", tier: "Gold", logo: "IL" },
    { name: "Future Systems", tier: "Silver", logo: "FS" },
    { name: "Smart Automation", tier: "Silver", logo: "SA" },
    { name: "Digital Dynamics", tier: "Bronze", logo: "DD" },
    { name: "Precision Engineering", tier: "Bronze", logo: "PE" },
    { name: "Advanced Robotics", tier: "Bronze", logo: "AR" }
  ];

  const sponsorshipTiers = [
    {
      tier: "Platinum",
      amount: "$5000+",
      color: "from-purple-500 to-pink-400",
      benefits: [
        "Logo on all club materials and website",
        "Dedicated booth at all events",
        "Access to recruitment events",
        "Quarterly progress reports",
        "Named project sponsorship"
      ]
    },
    {
      tier: "Gold",
      amount: "$2500+",
      color: "from-yellow-500 to-orange-400",
      benefits: [
        "Logo on website and major materials",
        "Booth at annual showcase",
        "Recruitment event participation",
        "Bi-annual progress reports"
      ]
    },
    {
      tier: "Silver",
      amount: "$1000+",
      color: "from-gray-400 to-gray-600",
      benefits: [
        "Logo on website",
        "Recognition at events",
        "Annual progress report",
        "Networking opportunities"
      ]
    },
    {
      tier: "Bronze",
      amount: "$500+",
      color: "from-orange-600 to-red-500",
      benefits: [
        "Website recognition",
        "Thank you at events",
        "Annual newsletter"
      ]
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-x-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <AnimatedBackground />
      </div>

      <Navbar />

      <div className="pt-20 pb-12 relative z-10">
        <div className="container mx-auto px-4">

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center py-20 relative z-10"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Our Sponsors
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed bg-black/30 p-4 rounded-xl backdrop-blur-sm">
              Thank you to our amazing sponsors who make our innovations possible.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="py-20 relative z-10"
          >
            <div className="flex items-center gap-4 justify-center mb-12">
              <Heart className="w-8 h-8 text-red-400" />
              <h2 className="text-4xl font-bold text-blue-400">Our Partners</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {sponsors.map((sponsor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 transition-all duration-300 text-center group transform hover:scale-105 hover:shadow-xl hover:border-blue-400/50"
                >
                  <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r ${
                    sponsor.tier === "Platinum" ? "from-purple-500 to-pink-400" :
                    sponsor.tier === "Gold" ? "from-yellow-500 to-orange-400" :
                    sponsor.tier === "Silver" ? "from-gray-400 to-gray-600" :
                    "from-orange-600 to-red-500"
                  } flex items-center justify-center text-white text-lg font-bold`}>
                    {sponsor.logo}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{sponsor.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    sponsor.tier === "Platinum" ? "bg-purple-500/20 text-purple-300" :
                    sponsor.tier === "Gold" ? "bg-yellow-500/20 text-yellow-300" :
                    sponsor.tier === "Silver" ? "bg-gray-500/20 text-gray-300" :
                    "bg-orange-500/20 text-orange-300"
                  }`}>
                    {sponsor.tier}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="py-20 relative z-10"
          >
            <div className="flex items-center gap-4 justify-center mb-12">
              <Handshake className="w-8 h-8 text-blue-400" />
              <h2 className="text-4xl font-bold text-blue-400">Sponsorship Opportunities</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {sponsorshipTiers.map((tier, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:border-blue-400/50"
                >
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${tier.color} flex items-center justify-center`}>
                    <Handshake className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-2">{tier.tier}</h3>
                  <p className="text-3xl font-bold text-center mb-6 text-blue-400">{tier.amount}</p>
                  <ul className="space-y-3">
                    {tier.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start gap-2 text-sm text-gray-300">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="py-20 relative z-10"
          >
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-8 text-blue-400">Partner With Us</h2>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed bg-black/20 backdrop-blur-sm p-4 rounded-lg">
                Join us in shaping the future of robotics and automation. Your support helps us build 
                innovative solutions, educate the next generation of engineers, and compete at the highest levels.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 transform transition-all hover:scale-105 hover:shadow-xl">
                  <h3 className="text-2xl font-bold mb-4">Why Sponsor Yantrika?</h3>
                  <ul className="text-left space-y-3 text-gray-300">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      Access to top engineering talent
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      Brand visibility at competitions and events
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      Partnership with cutting-edge research
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      Support STEM education initiatives
                    </li>
                  </ul>
                </div>

                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 transform transition-all hover:scale-105 hover:shadow-xl">
                  <h3 className="text-2xl font-bold mb-4">Get Started</h3>
                  <p className="text-gray-300 mb-6">
                    Ready to partner with us? Download our sponsorship package or get in touch directly.
                  </p>
                  <div className="space-y-4">
                    <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center gap-2">
                      <Download className="w-5 h-5" />
                      Download Sponsorship Package
                    </button>
                    <button className="w-full px-6 py-3 border-2 border-blue-500 rounded-xl font-semibold hover:bg-blue-500/10 transition-all duration-300">
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Sponsors;
