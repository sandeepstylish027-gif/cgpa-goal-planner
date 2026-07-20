import { useNavigate } from "react-router-dom";

function CTASection() {
  const navigate = useNavigate();

  const handleStartPlanning = () => {
    navigate("/planner");
  };

  return (
    <section className="bg-slate-950 py-20 sm:py-24 lg:py-28">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 shadow-[0_0_80px_rgba(99,102,241,0.35)]">

          {/* Background Glow */}

          <div className="absolute -top-24 -right-24 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-10 p-8 sm:p-10 lg:p-14">

            {/* Left */}

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">

              <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-3xl bg-white/10 backdrop-blur-md flex items-center justify-center text-4xl sm:text-5xl lg:text-6xl flex-shrink-0">
                🎓
              </div>

              <div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Ready to Achieve
                  <br className="hidden sm:block" />
                  Your Goal?
                </h2>

                <p className="mt-4 text-sm sm:text-base lg:text-lg leading-7 text-blue-100 max-w-xl">
                  Start planning today and take the first step towards your
                  dream CGPA with our smart academic planner built for
                  VIT-AP students.
                </p>

              </div>

            </div>

            {/* Right */}

            <button
              onClick={handleStartPlanning}
              className="
                w-full
                sm:w-auto
                whitespace-nowrap
                rounded-2xl
                bg-white
                px-8
                py-4
                text-base
                sm:text-lg
                font-bold
                text-slate-900
                shadow-xl
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-2xl
              "
            >
              🚀 Start Planning
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default CTASection;