import React from 'react';

const Landingpage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center p-24">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text animate-gradient">
          Welcome to Pintrate!
        </h1>
        <p className="text-lg">Your personalized Pinterest-like experience.</p>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default Landingpage;
