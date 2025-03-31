function Clubs() {
  const clubsList = [
    { name: "Coding Club", members: "850+", icon: "💻" },
    { name: "Robotics Club", members: "420+", icon: "🤖" },
    { name: "Design Club", members: "380+", icon: "🎨" },
    { name: "Literary Club", members: "290+", icon: "📚" },
    { name: "Music Club", members: "510+", icon: "🎵" },
    { name: "Dance Club", members: "480+", icon: "💃" },
    { name: "Sports Club", members: "720+", icon: "🏀" },
    { name: "Photography Club", members: "350+", icon: "📷" },
  ];

  return (
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
          {clubsList.map((club, index) => (
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
  );
}

export default Clubs;