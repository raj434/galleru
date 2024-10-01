import React, { useEffect, useState } from "react";
import { FaLink, FaDownload, FaShareAlt } from "react-icons/fa";

const dummyData = [
  { id: 1, img: "https://yt3.googleusercontent.com/ytc/AL5GRJVmtMsPb7II-phw9rC1g9ypUMKN64kBlL4mRAKSAA=s900-c-k-c0x00ffffff-no-rj", uri: "https://www.pexels.com/photo/cheerful-smiling-barman-20206757/" },
  { id: 2, img: "https://i1.sndcdn.com/artworks-mYo7M8cDp9zNrwwd-BHppwg-t500x500.jpg", uri: "https://example.com" },
  { id: 3, img: "https://i.pinimg.com/736x/a7/66/92/a766923c29305a16ce461b2ae54f4c68.jpg", uri: "https://example.com" },
  { id: 4, img: "https://via.placeholder.com/400x500", uri: "https://example.com" },
  { id: 5, img: "https://via.placeholder.com/350x450", uri: "https://example.com" },
  { id: 6, img: "https://via.placeholder.com/300x400", uri: "https://example.com" },
  { id: 7, img: "https://via.placeholder.com/250x300", uri: "https://example.com" },
  { id: 8, img: "https://via.placeholder.com/350x500", uri: "https://example.com" },
  { id: 9, img: "https://via.placeholder.com/300x350", uri: "https://example.com" },
  { id: 10, img: "https://via.placeholder.com/400x600", uri: "https://example.com" },
  { id: 11, img: "https://via.placeholder.com/300x400", uri: "https://example.com" },
  { id: 12, img: "https://via.placeholder.com/250x350", uri: "https://example.com" },
  { id: 13, img: "https://via.placeholder.com/200x300", uri: "https://example.com" },
  { id: 14, img: "https://via.placeholder.com/400x500", uri: "https://example.com" },
  { id: 15, img: "https://via.placeholder.com/350x450", uri: "https://example.com" },
  { id: 16, img: "https://via.placeholder.com/300x400", uri: "https://example.com" },
  { id: 17, img: "https://via.placeholder.com/250x300", uri: "https://example.com" },
  { id: 18, img: "https://via.placeholder.com/350x500", uri: "https://example.com" },
  { id: 19, img: "https://via.placeholder.com/300x350", uri: "https://example.com" },
  { id: 20, img: "https://via.placeholder.com/400x600", uri: "https://example.com" },
  // Add more images as needed
];

const Home = () => {
  const [loadedImages, setLoadedImages] = useState([]);

  useEffect(() => {
    // Adjust image heights based on random values
    const adjustImageHeights = () => {
      loadedImages.forEach((item) => {
        const img = document.getElementById(`image-${item.id}`);
        if (img) {
          const height = img.naturalHeight;
          img.style.height = height + "px";
        }
      });
    };

    if (loadedImages.length === dummyData.length) {
      adjustImageHeights();
    }
  }, [loadedImages]);

  const handleImageLoad = (item) => {
    setLoadedImages((prev) => [...prev, item]);
  };

  return (
    <div className="p-4 my-16">
    <div className="bg-gray-100 flex justify-center items-center min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-5xl m-4">
        {dummyData.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden rounded-lg shadow-lg transform transition-transform duration-500 hover:rotate-y-15 hover:rotate-x-15"
            style={{ height: 'auto' }}
          >
            <img
              id={`image-${item.id}`}
              src={item.img}
              alt={`Post ${item.id}`}
              className="w-full object-cover transition-transform duration-300 hover:scale-110"
              onLoad={() => handleImageLoad(item)}
            />

            {/* Hover Buttons */}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
              <div className="text-white flex space-x-4">
                <a href={item.uri} target="_blank" rel="noopener noreferrer">
                  <FaLink size={24} className="hover:text-blue-400" />
                </a>
                <a href={item.img} download>
                  <FaDownload size={24} className="hover:text-green-400" />
                </a>
                <button onClick={() => alert(`Sharing ${item.id}`)}>
                  <FaShareAlt size={24} className="hover:text-red-400" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
      </div>
  );
};

export default Home;
