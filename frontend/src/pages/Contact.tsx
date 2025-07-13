import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Ready to join our robotics revolution? We'd love to hear from you.
            </p>
          </motion.section>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.section
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:shadow-xl hover:scale-[1.01] transition-all duration-300">
                <h2 className="text-3xl font-bold mb-8 text-blue-400">Send us a Message</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Subject</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="membership">Membership Inquiry</option>
                      <option value="sponsorship">Sponsorship Opportunity</option>
                      <option value="collaboration">Collaboration</option>
                      <option value="general">General Question</option>
                      <option value="media">Media/Press</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:border-blue-500 focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your interest in Yantrika..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              </div>
            </motion.section>

            {/* Contact Info */}
            <motion.section
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Contact Details */}
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:shadow-xl hover:scale-[1.01] transition-all duration-300">
                <h2 className="text-3xl font-bold mb-8 text-blue-400">Contact Information</h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-500/20 rounded-lg">
                      <Mail className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Email</h3>
                      <p className="text-gray-300">yantrika@college.edu</p>
                      <p className="text-gray-400 text-sm">We'll respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-green-500/20 rounded-lg">
                      <Phone className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Phone</h3>
                      <p className="text-gray-300">+1 (555) 123-4567</p>
                      <p className="text-gray-400 text-sm">Mon-Fri, 9AM-6PM</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-purple-500/20 rounded-lg">
                      <MapPin className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Location</h3>
                      <p className="text-gray-300">Robotics Lab, Room 234</p>
                      <p className="text-gray-300">Engineering Building</p>
                      <p className="text-gray-300">University Campus</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:shadow-xl hover:scale-[1.01] transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6 text-cyan-400">Office Hours</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Monday - Friday</span>
                    <span className="text-white font-semibold">4:00 PM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Saturday</span>
                    <span className="text-white font-semibold">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Sunday</span>
                    <span className="text-gray-400">Closed</span>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:shadow-xl hover:scale-[1.01] transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6 text-purple-400">Join Our Community</h3>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-blue-400 mb-1">50+</div>
                    <div className="text-sm text-gray-300">Active Members</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-cyan-400 mb-1">15+</div>
                    <div className="text-sm text-gray-300">Projects</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-400 mb-1">5+</div>
                    <div className="text-sm text-gray-300">Competitions</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-400 mb-1">3</div>
                    <div className="text-sm text-gray-300">Years Active</div>
                  </div>
                </div>
              </div>
            </motion.section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
