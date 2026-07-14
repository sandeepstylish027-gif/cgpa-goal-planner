function CTASection() {
  return (
    <section className="bg-slate-950 py-28">

      <div className="max-w-7xl mx-auto px-8">

        <div className="rounded-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 p-10 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-[0_0_80px_rgba(99,102,241,0.35)]">

          {/* Left */}

          <div className="flex items-center gap-8">

            <div className="w-28 h-28 rounded-3xl bg-white/10 flex items-center justify-center text-6xl backdrop-blur-md">

              🎓

            </div>

            <div>

              <h2 className="text-4xl font-bold text-white">

                Ready to Achieve Your Goal?

              </h2>

              <p className="text-blue-100 mt-4 text-lg leading-8 max-w-xl">

                Start planning today and take the first step
                towards your dream CGPA with our smart academic planner.

              </p>

            </div>

          </div>

          {/* Button */}

          <button className="bg-white text-slate-900 px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl">

            Start Planning Now →

          </button>

        </div>

      </div>

    </section>
  );
}

export default CTASection;