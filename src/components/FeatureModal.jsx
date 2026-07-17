import { useEffect } from "react";
import { FiX } from "react-icons/fi";

function FeatureModal({ feature, onClose }) {

  useEffect(() => {
    // Only disable scrolling when the modal is open
    if (!feature) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [feature, onClose]);

  // Don't render anything if no feature is selected
  if (!feature) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-md flex items-center justify-center px-5 py-8 overflow-y-auto"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl rounded-3xl bg-slate-900 border border-slate-700 shadow-2xl p-6 sm:p-8 animate-[fadeIn_.3s_ease]"
      >
        {/* Close Button */}

        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-white transition"
        >
          <FiX size={28} />
        </button>

        {/* Icon */}

        <div
          className={`w-20 h-20 rounded-2xl flex items-center justify-center text-4xl ${feature.iconBg}`}
        >
          {feature.icon}
        </div>

        {/* Title */}

        <h2 className="mt-6 text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          {feature.title}
        </h2>

        {/* Description */}

        <p className="mt-6 text-gray-300 leading-8 text-base sm:text-lg">
          {feature.description}
        </p>

        {/* Highlights */}

        <h3 className="mt-8 text-white text-xl font-semibold">
          Key Highlights
        </h3>

        <ul className="mt-4 space-y-3">
          {feature.highlights.map((item, index) => (
            <li
              key={index}
              className="text-gray-400 flex items-start gap-3"
            >
              <span className="text-green-400">✔</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Example */}

        <div className="mt-8 bg-slate-800 rounded-2xl p-5 border border-slate-700">

          <h4 className="text-blue-400 font-semibold mb-3">
            Example
          </h4>

          <p className="text-gray-300 leading-7">
            {feature.example}
          </p>

        </div>

        {/* Button */}

        <button
          onClick={onClose}
          className="mt-8 w-full py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 font-semibold hover:scale-[1.02] transition duration-300"
        >
          Got it 🚀
        </button>

      </div>
    </div>
  );
}

export default FeatureModal;