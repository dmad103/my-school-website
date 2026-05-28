export default function AboutPage() {
  return (
    <main className="min-h-screen">

      {/* HERO SECTION */}
      <section className="bg-blue-900 text-white py-24 px-6 text-center">
        <div className="max-w-5xl mx-auto">

          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img
              src="/logo.png"
              alt="Divine Shepherd Logo"
              className="w-32 h-32 object-contain bg-white rounded-full p-2 shadow-lg"
            />
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About Divine Shepherd
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-8">
            Divine Shepherd College of Lipa City, Inc. is committed to
            forming God-fearing, disciplined, and globally competitive
            learners through quality education rooted in faith,
            character, and academic excellence.
          </p>

        </div>
      </section>

      {/* STATS STRIP */}
      <section className="bg-white py-10 px-6 border-b">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 text-center gap-6">

          <div>
            <p className="text-2xl font-bold text-blue-900">1997</p>
            <p className="text-slate-600">Founded</p>
          </div>

          <div>
            <p className="text-2xl font-bold text-blue-900">Lipa City</p>
            <p className="text-slate-600">Location</p>
          </div>

          <div>
            <p className="text-2xl font-bold text-blue-900">Values-Based</p>
            <p className="text-slate-600">Education</p>
          </div>

        </div>
      </section>

      {/* OUR FOUNDATION LABEL */}
      <div className="max-w-5xl mx-auto px-6 mt-16 mb-6">
        <p className="text-sm tracking-widest text-blue-600 font-semibold">
          OUR FOUNDATION
        </p>
      </div>

      {/* HISTORY SECTION */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-4xl font-bold text-blue-900 mb-8">
            Our History
          </h2>

          <p className="text-lg leading-9 text-slate-700">
            Divine Shepherd College of Lipa City, Inc.
            (formerly known as Divine Shepherd School of Lipa City, Inc.)
            was officially founded on February 8, 1997, in
            Lipa City, Batangas, Philippines.
          </p>

          <p className="text-lg leading-9 text-slate-700 mt-6">
            Since its establishment, the institution has remained
            dedicated to providing quality education grounded in
            Christian values, discipline, academic excellence,
            and holistic student development.
          </p>

          <p className="text-lg leading-9 text-slate-700 mt-6">
            Over the years, Divine Shepherd has continued to grow
            into a nurturing learning community that prepares students
            to become responsible, compassionate, and globally
            competitive individuals.
          </p>

        </div>
      </section>

      {/* CORE VALUES LABEL */}
      <div className="max-w-6xl mx-auto px-6 mt-10 mb-6 text-center">
        <p className="text-sm tracking-widest text-blue-600 font-semibold">
          CORE VALUES
        </p>
      </div>

      {/* MISSION & VISION */}
      <section className="bg-blue-50 py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

          {/* Mission Card */}
          <div className="bg-white rounded-2xl shadow-lg p-10 border border-blue-100">

            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Mission
            </h2>

            <p className="text-lg leading-8 text-slate-700">
              To sincerely form God-fearing students by fostering
              holistic character, reflective thinking, and a disciplined,
              respectful, and responsible approach to lifelong learning.
            </p>

          </div>

          {/* Vision Card */}
          <div className="bg-white rounded-2xl shadow-lg p-10 border border-blue-100">

            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Vision
            </h2>

            <p className="text-lg leading-8 text-slate-700">
              To develop persons of character and competence who
              excel in all areas of life while remaining aware of
              national, economic, and global citizenship responsibilities.
            </p>

          </div>

        </div>
      </section>

      {/* ACADEMIC LABEL */}
      <div className="max-w-5xl mx-auto px-6 mt-16 mb-6">
        <p className="text-sm tracking-widest text-blue-600 font-semibold">
          ACADEMIC EXCELLENCE
        </p>
      </div>

      {/* EDUCATIONAL COMMITMENT */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-4xl font-bold text-blue-900 mb-8">
            Our Educational Commitment
          </h2>

          <p className="text-lg leading-9 text-slate-700">
            At Divine Shepherd, we combine competitive academic
            standards with strong character formation in a supportive,
            family-oriented environment.
          </p>

          <p className="text-lg leading-9 text-slate-700 mt-6">
            With a focused student-to-staff ratio, every learner
            receives personalized attention, guidance, and encouragement
            throughout their educational journey.
          </p>

          <p className="text-lg leading-9 text-slate-700 mt-6">
            Our institution is committed to developing religion-centered,
            values-driven individuals who are fully prepared for higher
            education, employment, leadership, and lifelong success.
          </p>

        </div>
      </section>

      {/* LOCATION LABEL */}
      <div className="max-w-5xl mx-auto px-6 mt-16 mb-6">
        <p className="text-sm tracking-widest text-blue-300 font-semibold">
          LOCATION
        </p>
      </div>

      {/* LOCATION SECTION */}
      <section className="bg-slate-900 text-white py-24 px-6">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-4xl font-bold mb-6">
            Location
          </h2>

          <p className="text-lg leading-8 text-slate-300">
            Divine Shepherd College of Lipa City, Inc. is located
            in Lipa City, Batangas, Philippines, serving students
            and families across surrounding communities with accessible
            and quality education.
          </p>

        </div>
      </section>

    </main>
  )
}