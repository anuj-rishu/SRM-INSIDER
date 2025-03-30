import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 200) {
          current = section.getAttribute("id");
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans text-gray-800">
      {/* Navigation */}
      <header className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="https://res.cloudinary.com/dsxpqhyrv/image/upload/v1743372839/Srmseal_m5owvy.png"
              alt="SRM INSIDER"
              className="h-12 mr-3"
            />
            <h1 className="text-primary text-2xl font-bold">SRM INSIDER</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className={`font-medium hover:text-primary transition ${
                activeSection === "home" ? "text-primary" : ""
              }`}
            >
              Home
            </a>
            <a
              href="#features"
              className={`font-medium hover:text-primary transition ${
                activeSection === "features" ? "text-primary" : ""
              }`}
            >
              Features
            </a>
            <a
              href="#clubs"
              className={`font-medium hover:text-primary transition ${
                activeSection === "clubs" ? "text-primary" : ""
              }`}
            >
              Clubs
            </a>
            <a
              href="#events"
              className={`font-medium hover:text-primary transition ${
                activeSection === "events" ? "text-primary" : ""
              }`}
            >
              Events
            </a>
            <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-5 py-2 rounded-full hover:shadow-md transition">
              Sign In
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="bg-white py-4 px-6 md:hidden flex flex-col space-y-4 animate-fade-in">
            <a
              href="#home"
              className="font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#features"
              className="font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#clubs"
              className="font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Clubs
            </a>
            <a
              href="#events"
              className="font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Events
            </a>
            <button className="bg-gradient-to-r from-primary to-indigo-600 text-white px-5 py-2 rounded-full hover:bg-opacity-90 w-full">
              Sign In
            </button>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-32 pb-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100"
      >
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
              One Platform for All{" "}
              <span className="text-primary bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
                SRM
              </span>{" "}
              Needs
            </h1>
            <p className="text-lg text-gray-600 mb-10">
              Access clubs, events, hackathons, and more - all in one unified
              platform designed for SRM University.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-3 rounded-full hover:shadow-lg transition transform hover:-translate-y-1 duration-300">
                Sign in Now
              </button>
              {/* <button className="bg-white border-2 border-primary text-primary px-8 py-3 rounded-full hover:bg-primary hover:text-white transition transform hover:-translate-y-1 duration-300">
                Learn More
              </button> */}
            </div>
          </div>

          {/* Statistics Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { value: "10,000+", label: "Active Users" },
              { value: "50+", label: "Campus Clubs" },
              { value: "200+", label: "Monthly Events" },
              { value: "95%", label: "Student Satisfaction" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm p-5 rounded-xl shadow-sm hover:shadow-md transition transform hover:-translate-y-1 duration-300 text-center"
              >
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4 inline-block">
              PLATFORM FEATURES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Everything in One Place
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              No more switching between different portals and websites. Access
              everything you need from a single dashboard.
            </p>
          </div>

          <div className="grid  grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎓",
                title: "Academic Portal",
                description:
                  "Access your courses, attendance, grades, and academic calendar with real-time updates.",
              },
              {
                icon: "🔔",
                title: "Notifications Hub",
                description:
                  "Get important announcements and updates from all departments in one place.",
              },
              {
                icon: "👥",
                title: "Club Management",
                description:
                  "Join clubs, participate in activities, and track club events seamlessly.",
              },
              {
                icon: "🏆",
                title: "Events & Competitions",
                description:
                  "Stay updated on hackathons, cultural events, and competitions across campus.",
              },
              {
                icon: "📚",
                title: "Resource Library",
                description:
                  "Access study materials, past papers, and academic resources for all courses.",
              },
              {
                icon: "📱",
                title: "Mobile Accessible",
                description:
                  "Access all features on the go with our responsive mobile-first design.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition transform hover:-translate-y-1 hover:text-blue-700 duration-300 hover:border-blue-700"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clubs Section */}
      <section
        id="clubs"
        className="py-24 bg-gradient-to-br from-indigo-50 to-purple-100"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4 inline-block">
              CAMPUS LIFE
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Discover SRM Clubs
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find your passion and connect with like-minded students through
              our diverse range of clubs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Coding Club", members: "850+", icon: "💻" },
              { name: "Robotics Club", members: "420+", icon: "🤖" },
              { name: "Design Club", members: "380+", icon: "🎨" },
              { name: "Literary Club", members: "290+", icon: "📚" },
              { name: "Music Club", members: "510+", icon: "🎵" },
              { name: "Dance Club", members: "480+", icon: "💃" },
              { name: "Sports Club", members: "720+", icon: "🏀" },
              { name: "Photography Club", members: "350+", icon: "📷" },
            ].map((club, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-purple-50 hover:shadow-md transition transform hover:-translate-y-1 duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{club.icon}</span>
                  <span className="text-sm bg-indigo-100 text-indigo-700 py-1 px-3 rounded-full font-medium">
                    {club.members} members
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{club.name}</h3>
                <button className="text-primary hover:underline text-sm font-medium mt-2 inline-flex items-center">
                  View Details
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-white border-2 border-primary text-primary px-8 py-3 rounded-full hover:bg-primary hover:text-blue-700 transition transform hover:-translate-y-1 duration-300 font-medium">
              Explore All Clubs
            </button>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-indigo-50 to-transparent opacity-70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4 inline-block">
              WHAT'S HAPPENING
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Upcoming Events
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay updated with all the latest happenings at SRM University.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Hackathon 2025",
                date: "April 15-16, 2025",
                image:
                  "https://res.cloudinary.com/dsxpqhyrv/image/upload/v1743372839/event1_lxrzvk.jpg",
                category: "Tech",
              },
              {
                title: "Cultural Fest",
                date: "May 5-8, 2025",
                image:
                  "https://res.cloudinary.com/dsxpqhyrv/image/upload/v1743372839/event2_j9pqxc.jpg",
                category: "Cultural",
              },
              {
                title: "Research Symposium",
                date: "April 25, 2025",
                image:
                  "https://res.cloudinary.com/dsxpqhyrv/image/upload/v1743372839/event3_bmz2gl.jpg",
                category: "Academic",
              },
            ].map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition border border-gray-100   duration-300 hover:border-blue-700"
              >
                <div className="h-48 overflow-hidden bg-gray-100">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition hover:scale-105 duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-medium bg-indigo-100 text-indigo-700 py-1 px-3 rounded-full">
                      {event.category}
                    </span>
                    <span className="text-sm text-gray-500">{event.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <button className="text-primary hover:underline text-sm font-medium mt-2 inline-flex items-center">
                    Register Now
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-white border-2 border-primary text-primary px-8 py-3 rounded-full hover:bg-primary hover:text-blue-700 transition transform hover:-translate-y-1 duration-300 font-medium">
              View All Events
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <div className="flex items-center mb-4">
                <img
                  src="https://res.cloudinary.com/dsxpqhyrv/image/upload/v1743372839/Srmseal_m5owvy.png"
                  alt="SRM INSIDER"
                  className="h-10 mr-3"
                />
                <h2 className="text-xl font-bold">SRM INSIDER</h2>
              </div>
              <p className="text-gray-400 mb-4">
                The one-stop platform for all SRM University needs, designed to
                streamline your campus experience.
              </p>
              <div className="flex space-x-4">
                {["facebook", "twitter", "instagram", "linkedin"].map(
                  (social) => (
                    <a
                      key={social}
                      href="#"
                      className="text-gray-400 hover:text-white transition"
                    >
                      <span className="sr-only">{social}</span>
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10zm-10 6a6 6 0 100-12 6 6 0 000 12z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  )
                )}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {[
                  "Home",
                  "Features",
                  "Clubs",
                  "Events",
                  "Help Center",
                  "Contact Us",
                ].map((link) => (
                  <li key={link}>
                    <a
                      href={
                        link === "Help Center" || link === "Contact Us"
                          ? "#"
                          : `#${link.toLowerCase()}`
                      }
                      className="text-gray-400 hover:text-white transition"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>
                    SRM University, Kattankulathur, Chennai, Tamil Nadu, India
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>contact@srminsider.com</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span>+91 1234567890</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>
              © {new Date().getFullYear()} SRM INSIDER. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
