function Events() {
  const eventsList = [
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
  ];

  return (
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
          {eventsList.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition border border-gray-100 duration-300 hover:border-blue-700"
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
  );
}

export default Events;