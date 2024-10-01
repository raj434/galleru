import React, { useState } from "react";

const Create = () => {
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [board, setBoard] = useState("");
  const [tags, setTags] = useState([]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const pinData = { file, imageUrl, title, description, link, board, tags };
    console.log("Pin submitted:", pinData);
    // You can add further submission logic here
  };

  return (
    <div className="p-4 my-16">
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Create a New Pin</h2>
        <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row">

          {/* Left Section: Image and URL */}
          <div className="flex flex-col lg:w-1/2 space-y-4 lg:pr-8">

            {/* File Upload */}
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700 font-medium mb-2">Choose a file or drag and drop it here</label>
              <input
                type="file"
                onChange={handleFileChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
              <p className="text-sm text-gray-500 mt-2">
                We recommend using high quality .jpg files less than 20MB or .mp4 files less than 200MB.
              </p>
              <p className="text-sm text-gray-500 mt-1">No file chosen</p>
            </div>

            {/* Save from URL */}
            <div className="mb-4">
              <label htmlFor="imageUrl" className="block text-gray-700 font-medium mb-2">Save from URL</label>
              <input
                type="url"
                id="imageUrl"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                placeholder="Enter image/video URL"
              />
            </div>

          </div>

          {/* Right Section: Title, Description, Link, Board, Tags */}
          <div className="lg:w-1/2 flex flex-col space-y-4">

            {/* Title */}
            <div className="mb-4">
              <label htmlFor="title" className="block text-gray-700 font-medium mb-2">Title</label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                placeholder="Add a title"
                required
              />
            </div>

            {/* Description */}
            <div className="mb-4">
              <label htmlFor="description" className="block text-gray-700 font-medium mb-2">Description</label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                placeholder="Add a detailed description"
                rows="4"
              ></textarea>
            </div>

            {/* Link */}
            <div className="mb-4">
              <label htmlFor="link" className="block text-gray-700 font-medium mb-2">Link</label>
              <input
                type="url"
                id="link"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                placeholder="Add a link"
              />
            </div>

            {/* Board */}
            <div className="mb-4">
              <label htmlFor="board" className="block text-gray-700 font-medium mb-2">Board</label>
              <select
                id="board"
                value={board}
                onChange={(e) => setBoard(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              >
                <option value="">Choose a board</option>
                <option value="board1">Board 1</option>
                <option value="board2">Board 2</option>
                <option value="board3">Board 3</option>
              </select>
            </div>

            {/* Tags */}
            <div className="mb-4">
              <label htmlFor="tags" className="block text-gray-700 font-medium mb-2">Tagged topics</label>
              <input
                type="text"
                id="tags"
                value={tags}
                onChange={(e) => setTags(e.target.value.split(','))}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                placeholder="Search for a tag"
              />
              <p className="text-sm text-gray-500 mt-1">Don't worry, people won't see your tags</p>
            </div>

            {/* More Options */}
            <div className="text-right">
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Create;
