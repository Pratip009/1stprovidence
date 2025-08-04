/* eslint-disable react/no-unknown-property */
const CustomLoader = () => {
  return (
    <div className="flex justify-center items-center fixed inset-0 bg-white z-50">
      {/* Inline SVG */}
      <svg
        version="1.1"
        id="cog9_1_"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="-13 -13 45 45"
        className="w-16 h-16 text-blue-500"
      >
        <g>
          <circle className="box5631" cx="13" cy="1" r="5" />
          <circle className="box5631" cx="13" cy="1" r="5" />
          <circle className="box5631" cx="25" cy="25" r="5" />
          <circle className="box5631" cx="13" cy="13" r="5" />
          <circle className="box5631" cx="13" cy="13" r="5" />
          <circle className="box5631" cx="25" cy="13" r="5" />
          <circle className="box5631" cx="1" cy="25" r="5" />
          <circle className="box5631" cx="13" cy="25" r="5" />
          <circle className="box5631" cx="25" cy="25" r="5" />
        </g>
      </svg>

      {/* CSS keyframes */}
      <style jsx>{`
        .box5631 {
          transform-origin: 50% 50%;
          fill: currentColor;
        }
        @keyframes moveBox5631-1 {
          9% { transform: translate(-12px, 0); }
          18% { transform: translate(0, 0); }
          27% { transform: translate(0, 0); }
          36% { transform: translate(12px, 0); }
          45% { transform: translate(12px, 12px); }
          54% { transform: translate(12px, 12px); }
          63% { transform: translate(12px, 12px); }
          72% { transform: translate(12px, 0); }
          81% { transform: translate(0, 0); }
          90% { transform: translate(-12px, 0); }
          100% { transform: translate(0, 0); }
        }
        .box5631:nth-child(1) { animation: moveBox5631-1 4s infinite; }
        /* Add other nth-child animations if needed */
      `}</style>
    </div>
  );
};

export default CustomLoader;
