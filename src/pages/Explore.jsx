import React from 'react';
import { Link } from 'react-router-dom';

// Helper function to get today's date in YYYY-MM-DD format
const getTodayDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const Explore = () => {
  const todayDate = getTodayDate();

  // Sections with added date property
  const sections = [
    {
      title: 'For virgo szn',
      description: 'Quotes with all the virgo energy',
      imgUrl: 'https://via.placeholder.com/600x400?text=Virgo+Szn',
      date: '2024-09-05'
    },
    {
      title: 'Coffee shots',
      description: 'Capturing a moment with your cuppa',
      imgUrl: 'https://via.placeholder.com/600x400?text=Coffee+Shots',
      date: '2024-09-05'
    },
    {
      title: 'Puffed perfection',
      description: 'Inflated wallpapers',
      imgUrl: 'https://via.placeholder.com/600x400?text=Puffed+Perfection',
      date: '2024-09-04'
    },
    {
      title: 'Styling 101',
      description: 'How to pull off stripes',
      imgUrl: 'https://via.placeholder.com/600x400?text=Styling+101',
      date: '2024-09-05'
    },
    {
      title: 'Find your calm',
      description: 'What\'s your bedside table aesthetic',
      imgUrl: 'https://via.placeholder.com/600x400?text=Find+Your+Calm',
      date: '2024-09-03'
    },
    {
      title: 'Beach, big cities, mountains...',
      description: 'Discover your travel vibe',
      imgUrl: 'https://via.placeholder.com/600x400?text=Travel+Vibe',
      date: '2024-09-05'
    },
    {
      title: 'Express your creativity',
      description: 'Easy anime art prompts',
      imgUrl: 'https://via.placeholder.com/600x400?text=Creative+Prompts',
      date: '2024-09-02'
    }
  ];

  // Filter sections to only show those from today
  const filteredSections = sections.filter(section => section.date === todayDate);

  return (
    <div className="p-4 my-16">
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">Stay Inspired</h1>
        <p className="text-center text-lg mb-6 text-gray-600">Showing pins for {todayDate}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSections.length > 0 ? (
            filteredSections.map((section, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img src={section.imgUrl} alt={section.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">{section.title}</h2>
                  <p className="text-gray-600 mb-4">{section.description}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">No pins available for today.</p>
          )}
        </div>
        <div className="text-center mt-8">
          <Link to="/Home" className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Go to home feed
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Explore;
