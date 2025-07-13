const express = require('express');
const router = express.Router();
const Member = require('../models/member');
const Alumni = require('../models/Alumni');

router.post('/seed', async (req, res) => {
  try {
    await Member.deleteMany(); // Clear old data (optional)
    await Alumni.deleteMany();

    const coreTeam = [
      {
        name: "Jainam Jain",
        role: "Captain",
        bio: "Leading the club with vision and passion for robotics innovation.",
        avatar: "JJ",
        color: "from-blue-500 to-cyan-400"
      },
      {
        name: "Jay Kore",
        role: "Vice President",
        bio: "Coordinating and fostering collaboration across teams.",
        avatar: "JK",
        color: "from-purple-500 to-pink-400"
      },
      {
        name: "Bhaskar Mulik",
        role: "Manager",
        bio: "Developing intelligent algorithms and control systems.",
        avatar: "BM",
        color: "from-green-500 to-teal-400"
      },
      {
        name: "Vedant Mhatre",
        role: "Design Head",
        bio: "Designing and manufacturing robust mechanical systems.",
        avatar: "VM",
        color: "from-orange-500 to-red-400"
      },
      {
        name: "Soham Sawant",
        role: "Development Lead",
        bio: "Overseeing software development and integration.",
        avatar: "SS",
        color: "from-yellow-500 to-orange-400"
      },
      {
        name: "Nikhil Solanke",
        role: "Research Head",
        bio: "Conducting cutting-edge research in robotics and AI.",
        avatar: "NS",
        color: "from-pink-500 to-purple-400"
      },
      {
        name: "Bhavya Damani",
        role: "Public Relations",
        bio: "Managing external communications and partnerships.",
        avatar: "BD",
        color: "from-indigo-500 to-blue-400"
      },
      {
        name: "Eshika Agrawal",
        role: "Sponsorship Manager",
        bio: "Securing funding and resources for club activities.",
        avatar: "EA",
        color: "from-teal-500 to-green-400"
      },
      {
        name: "Tanishka Desale",
        role: "Documentation Lead",
        bio: "Maintaining documentation and reports",
        avatar: "TD",
        color: "from-gray-500 to-blue-400"
      }
    ];

    const alumni = [
      {
        name: "Pritesh Mehair",
        currentRole: "developer",
        year: "idk Graduate",
        achievement: "idk Achievement"
      },
      {
        name: "Jatin Vira",
        currentRole: "idk",
        year: "idk Graduate",
        achievement: "idk Achievement"
      },
      {
        name: "Devansh Jaiswal",
        currentRole: "idk",
        year: "idk Graduate",
        achievement: "idk Achievement"
      }
    ];

    await Member.insertMany(coreTeam);
    await Alumni.insertMany(alumni);

    res.status(200).json({ message: 'Database seeded successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
