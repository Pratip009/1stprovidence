import { useState } from "react";
import { AiOutlineClose, AiOutlineDownload } from "react-icons/ai";

const GalleryTabs = () => {
  const [activeTab, setActiveTab] = useState("images");
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "https://images.pexels.com/photos/8460158/pexels-photo-8460158.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
    "https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
    "https://images.pexels.com/photos/8460160/pexels-photo-8460160.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
    "https://images.pexels.com/photos/7580257/pexels-photo-7580257.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
    "https://images.pexels.com/photos/8460159/pexels-photo-8460159.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
    "https://images.pexels.com/photos/8460156/pexels-photo-8460156.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
  ];

  const videos = [
    "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "https://www.youtube.com/embed/tgbNymZ7vqY",
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 font-exo relative">
      {/* Tabs */}
      <div className="flex justify-center mb-8">
        <button
          onClick={() => setActiveTab("images")}
          className={`px-4 py-2 mx-2 rounded-full ${
            activeTab === "images"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          } transition`}
        >
          Images
        </button>
        <button
          onClick={() => setActiveTab("videos")}
          className={`px-4 py-2 mx-2 rounded-full ${
            activeTab === "videos"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          } transition`}
        >
          Videos
        </button>
      </div>

      {/* Content */}
      {activeTab === "images" ? (
        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-3 gap-4">
          {images.map((src, index) => (
            <div
              key={index}
              className={`overflow-hidden rounded-xl shadow-md ${
                index % 7 === 0 ? "row-span-2 col-span-2" : ""
              }`}
              onClick={() => setSelectedImage(src)}
            >
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover cursor-pointer"
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {videos.map((url, index) => (
            <div key={index} className="aspect-w-16 aspect-h-9">
              <iframe
                src={url}
                title={`Video ${index + 1}`}
                allowFullScreen
                className="rounded-xl shadow-md w-full h-full"
              ></iframe>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative max-w-3xl w-full mx-4">
            {/* Top-right buttons */}
            <div className="absolute top-3 right-3 flex space-x-3">
              <a
                href={selectedImage}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-gray-800 p-2 rounded-full shadow hover:bg-gray-100 transition"
              >
                <AiOutlineDownload size={20} />
              </a>
              <button
                onClick={() => setSelectedImage(null)}
                className="bg-white text-gray-800 p-2 rounded-full shadow hover:bg-gray-100 transition"
              >
                <AiOutlineClose size={20} />
              </button>
            </div>
            <img
              src={selectedImage}
              alt="Large view"
              className="w-full max-h-[80vh] object-contain rounded-xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryTabs;
