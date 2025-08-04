import { useLocation } from "react-router-dom";

const BlogDetails = () => {
  const location = useLocation();
  const blog = location.state;

  if (!blog) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12 font-exo">
        <h1 className="text-2xl font-bold">Blog not found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 font-exo">
      <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
        <div className="relative">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-72 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
            <h1 className="text-2xl md:text-4xl text-white font-bold drop-shadow-lg">
              {blog.title}
            </h1>
          </div>
        </div>
        <div className="p-6">
          <div className="text-xs md:text-sm text-gray-500 mb-4">
            {blog.date} &middot; by {blog.author}
          </div>
          <p className="text-gray-700 text-base leading-relaxed md:leading-loose">
            {blog.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
