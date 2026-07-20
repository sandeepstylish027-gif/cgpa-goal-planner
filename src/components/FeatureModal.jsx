import { useEffect } from "react";
import { FiX } from "react-icons/fi";

function FeatureModal({ feature, onClose }) {
  useEffect(() => {
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

  if (!feature) return null;

  return (
    <div
      className="
        fixed inset-0 z-[9999]
        bg-black/70 backdrop-blur-md
        overflow-y-auto
        px-4 sm:px-6
        py-6 sm:py-10
      "
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          relative
          mx-auto
          w-full
          max-w-2xl
          rounded-3xl
          border border-slate-700
          bg-slate-900
          shadow-2xl
          p-6 sm:p-8 lg:p-10
          animate-[fadeIn_.3s_ease]
        "
      >
        {/* Close Button */}

        <button
          onClick={onClose}
          className="
            absolute
            right-4
            top-4
            sm:right-6
            sm:top-6
            rounded-full
            p-2
            text-gray-400
            transition
            hover:bg-slate-800
            hover:text-white
          "
        >
          <FiX size={26} />
        </button>

        {/* Icon */}

        <div
          className={`
            flex items-center justify-center
            w-16 h-16
            sm:w-20 sm:h-20
            rounded-2xl
            text-3xl sm:text-4xl
            ${feature.iconBg}
          `}
        >
          {feature.icon}
        </div>

        {/* Title */}

        <h2
          className="
            mt-6
            text-3xl
            sm:text-4xl
            font-bold
            leading-tight
            bg-gradient-to-r
            from-blue-400
            to-purple-500
            bg-clip-text
            text-transparent
          "
        >
          {feature.title}
        </h2>

        {/* Description */}

        <p
          className="
            mt-5
            text-gray-300
            text-base
            sm:text-lg
            leading-8
          "
        >
          {feature.description}
        </p>

        {/* Highlights */}

        <h3
          className="
            mt-8
            text-xl
            sm:text-2xl
            font-semibold
            text-white
          "
        >
          Key Highlights
        </h3>

        <ul className="mt-5 space-y-4">

          {feature.highlights.map((item, index) => (

            <li
              key={index}
              className="flex items-start gap-3 text-gray-300"
            >

              <span className="mt-1 text-green-400 font-bold">
                ✔
              </span>

              <span className="leading-7">
                {item}
              </span>

            </li>

          ))}

        </ul>

        {/* Example */}

        <div
          className="
            mt-8
            rounded-2xl
            border border-slate-700
            bg-slate-800
            p-5
            sm:p-6
          "
        >

          <h4 className="text-lg font-semibold text-blue-400">
            Example
          </h4>

          <p className="mt-3 text-gray-300 leading-8">
            {feature.example}
          </p>

        </div>

        {/* Button */}

        <button
          onClick={onClose}
          className="
            mt-8
            w-full
            rounded-xl
            bg-gradient-to-r
            from-blue-500
            to-purple-600
            py-4
            font-semibold
            text-white
            transition-all
            duration-300
            hover:scale-[1.02]
            hover:shadow-lg
          "
        >
          Got it 🚀
        </button>

      </div>
    </div>
  );
}

export default FeatureModal;