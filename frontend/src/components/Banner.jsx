// eslint-disable-next-line react/prop-types
const Banner = ({ image, title, height = "h-40 sm:h-56 md:h-[500px]" }) => {
  return (
    <div
      className={`relative w-full ${height} bg-cover bg-center flex items-center justify-center`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <h1
        className="
          relative z-10
          text-white
          text-2xl sm:text-4xl md:text-6xl
          font-exo
          tracking-wide
          drop-shadow-xl
          select-none
          px-4
        "
      >
        {title}
      </h1>
    </div>
  );
};
export default Banner;
