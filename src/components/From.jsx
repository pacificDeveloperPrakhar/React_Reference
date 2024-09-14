// SmoothTabsTailwind.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SmoothTabsTailwind = () => {
  const [activeTab, setActiveTab] = useState('login');

  return (
    <div className="w-full max-w-lg mx-auto mt-8">
      {/* Tab Navigation */}
      <div className="flex justify-around border-b border-gray-300 mb-4 relative">
        <span
          onClick={() => setActiveTab('login')}
          className={`cursor-pointer p-3 transition-colors duration-300
            ${activeTab === 'login' ? 'text-purple-500 font-bold' : 'text-gray-500 hover:text-purple-300'}
          `}
        >
          Login
        </span>
        <span
          onClick={() => setActiveTab('signup')}
          className={`cursor-pointer p-3 transition-colors duration-300
            ${activeTab === 'signup' ? 'text-purple-500 font-bold' : 'text-gray-500 hover:text-purple-300'}
          `}
        >
          Sign Up
        </span>

        {/* Animated Underline */}
        <motion.div
          className="absolute bottom-0 h-1 bg-purple-500"
          layoutId="underline"
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          initial={false}
          animate={{
            width: activeTab === 'login' ? '50px' : '60px',
            left: activeTab === 'login' ? '25%' : '60%',
          }}
        />
      </div>

      {/* Tab Content with Smooth Transition */}
      <div className="p-4">
        <AnimatePresence>
          {activeTab === 'login' && (
            <motion.div
              key="login"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3 }}
            >
              <form className="bg-white shadow-lg rounded-lg p-6">
                <div className="text-2xl font-bold text-center text-purple-600 mb-6">Login</div>
                <div className="flex items-center bg-gray-100 border border-purple-300 rounded p-3 mb-4">
                  <input
                    className="w-full bg-transparent border-none outline-none text-purple-600"
                    type="text"
                    placeholder="Username"
                  />
                </div>
                <div className="flex items-center bg-gray-100 border border-purple-300 rounded p-3 mb-4">
                  <input
                    className="w-full bg-transparent border-none outline-none text-purple-600"
                    type="password"
                    placeholder="Password"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Login
                </button>
              </form>
            </motion.div>
          )}
          {activeTab === 'signup' && (
            <motion.div
              key="signup"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <form className="bg-white shadow-lg rounded-lg p-6">
                <div className="text-2xl font-bold text-center text-purple-600 mb-6">Sign Up</div>
                <div className="flex items-center bg-gray-100 border border-purple-300 rounded p-3 mb-4">
                  <input
                    className="w-full bg-transparent border-none outline-none text-purple-600"
                    type="text"
                    placeholder="Username"
                  />
                </div>
                <div className="flex items-center bg-gray-100 border border-purple-300 rounded p-3 mb-4">
                  <input
                    className="w-full bg-transparent border-none outline-none text-purple-600"
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <div className="flex items-center bg-gray-100 border border-purple-300 rounded p-3 mb-4">
                  <input
                    className="w-full bg-transparent border-none outline-none text-purple-600"
                    type="password"
                    placeholder="Password"
                  />
                </div>
                <div className="flex items-center bg-gray-100 border border-purple-300 rounded p-3 mb-4">
                  <input
                    className="w-full bg-transparent border-none outline-none text-purple-600"
                    type="password"
                    placeholder="Confirm Password"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Sign Up
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SmoothTabsTailwind;
