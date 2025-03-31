import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function SignInModal({ isOpen, onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("student");

  // Close on escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-md z-50 mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-blue-100">
              {/* Modal Header with decorative gradient */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-90"></div>
                <div className="relative px-4 sm:px-6 py-6 sm:py-8 text-center">
                  <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    <img
                      src="https://res.cloudinary.com/dsxpqhyrv/image/upload/v1743372839/Srmseal_m5owvy.png"
                      alt="SRM"
                      className="h-12 sm:h-16 mx-auto mb-2 sm:mb-3"
                    />
                  </motion.div>
                  <motion.h2
                    className="text-xl sm:text-2xl font-bold text-white mb-1"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    Welcome to SRM Insider
                  </motion.h2>
                  <motion.p
                    className="text-sm sm:text-base text-blue-100"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    Sign in to access your academic portal
                  </motion.p>
                </div>
              </div>

              {/* Tab Selector */}
              <div className="flex border-b">
                <button
                  className={`flex-1 py-2 sm:py-3 font-medium text-xs sm:text-sm ${
                    activeTab === "student"
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-500 hover:text-blue-600"
                  }`}
                  onClick={() => setActiveTab("student")}
                >
                  Student Login
                </button>
                <button
                  className={`flex-1 py-2 sm:py-3 font-medium text-xs sm:text-sm ${
                    activeTab === "faculty"
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-500 hover:text-blue-600"
                  }`}
                  onClick={() => setActiveTab("faculty")}
                >
                  Faculty Login
                </button>
              </div>

              {/* Form */}
              <div className="p-4 sm:p-6">
                <form onSubmit={handleSubmit}>
                  <div className="space-y-3 sm:space-y-4">
                    <div>
                      <label
                        className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
                        htmlFor="email"
                      >
                        {activeTab === "student"
                          ? "Registration Number"
                          : "Employee ID"}
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 sm:h-5 sm:w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                            <path
                              fillRule="evenodd"
                              d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        <motion.input
                          whileFocus={{ scale: 1.01 }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 20,
                          }}
                          type="text"
                          id="email"
                          placeholder={
                            activeTab === "student"
                              ? "RA2011003010xxx"
                              : "EMP123456"
                          }
                          className="pl-9 sm:pl-10 w-full p-2 sm:p-3 text-sm bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
                        htmlFor="password"
                      >
                        Password
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 sm:h-5 sm:w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        <motion.input
                          whileFocus={{ scale: 1.01 }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 20,
                          }}
                          type="password"
                          id="password"
                          placeholder="Enter your password"
                          className="pl-9 sm:pl-10 w-full p-2 sm:p-3 text-sm bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <div className="flex items-center">
                        <input
                          id="remember-me"
                          name="remember-me"
                          type="checkbox"
                          className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label
                          htmlFor="remember-me"
                          className="ml-2 block text-gray-700"
                        >
                          Remember me
                        </label>
                      </div>

                      <a
                        href="#"
                        className="text-xs sm:text-sm text-blue-600 hover:text-blue-800"
                      >
                        Forgot password?
                      </a>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className={`w-full py-2.5 sm:py-3 px-4 text-white text-sm sm:text-base font-medium rounded-lg transition-all ${
                        isLoading
                          ? "bg-blue-400"
                          : "bg-gradient-to-r from-blue-500 to-blue-700 hover:shadow-lg"
                      }`}
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <div className="flex items-center justify-center">
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 sm:h-5 sm:w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Signing in...
                        </div>
                      ) : (
                        "Sign in"
                      )}
                    </motion.button>
                  </div>
                </form>

                <div className="mt-4 sm:mt-6 text-center text-xs sm:text-sm">
                  <span className="text-gray-600">New to SRM Insider? </span>
                  <a
                    href="#"
                    className="font-medium text-blue-600 hover:text-blue-800"
                  >
                    Contact admin for access
                  </a>
                </div>
              </div>

              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-2 sm:top-4 right-2 sm:right-4 text-white hover:text-blue-100 transition-colors"
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 sm:h-6 sm:w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default SignInModal;
