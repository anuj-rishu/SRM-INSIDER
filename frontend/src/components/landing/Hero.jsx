import { useState } from "react";
import SignInModal from "../model/SignInModel";

function Hero() {
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);

  return (
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
            <button 
              onClick={() => setIsSignInModalOpen(true)}
              className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-3 rounded-full hover:shadow-lg transition transform hover:-translate-y-1 duration-300"
            >
              Sign in Now
            </button>
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

      {/* Sign In Modal */}
      <SignInModal 
        isOpen={isSignInModalOpen} 
        onClose={() => setIsSignInModalOpen(false)} 
      />
    </section>
  );
}

export default Hero;