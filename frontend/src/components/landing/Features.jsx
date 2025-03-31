function Features() {
  const featuresList = [
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
  ];

  return (
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuresList.map((feature, index) => (
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
  );
}

export default Features;