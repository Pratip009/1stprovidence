/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

const BlogCard = ({ id, image, title, description, date, author }) => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate(`/blog/${id}`, {
      state: { id, image, title, description, date, author }
    });
  };

  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col">
      <img src={image} alt={title} className="w-full h-56 object-cover" />
      <div className="p-4 flex-1 flex flex-col">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 text-sm mb-4">
          {description.split(" ").slice(0, 10).join(" ")}...
        </p>
        <div className="text-xs text-gray-500 mb-2">
          {date} &middot; by {author}
        </div>
        <button
          onClick={handleReadMore}
          className="mt-auto bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl transition"
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
