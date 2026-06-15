export default function FacultyPage() {
  return (
    <main className="min-h-screen">

      {/* HERO SECTION */}
      <section className="bg-blue-900 text-white py-24 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Faculty & Staff
          </h1>

          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-8">
            Divine Shepherd College of Lipa City, Inc. is supported by
            dedicated teaching and non-teaching staff committed to student
            growth, Christian values, and quality education.
          </p>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="bg-white py-10 px-6 border-b">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 text-center gap-6">
          <div>
            <p className="text-2xl font-bold text-blue-900">21</p>
            <p className="text-slate-600">Teaching & Non-Teaching Staff</p>
          </div>

          <div>
            <p className="text-2xl font-bold text-blue-900">Licensed</p>
            <p className="text-slate-600">Professional Teachers</p>
          </div>

          <div>
            <p className="text-2xl font-bold text-blue-900">Student-First</p>
            <p className="text-slate-600">Mentorship Approach</p>
          </div>
        </div>
      </section>

      {/* FACULTY INTRO */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto">

          <p className="text-sm tracking-widest text-blue-600 font-semibold mb-4">
            OUR EDUCATORS
          </p>

          <h2 className="text-4xl font-bold text-blue-900 mb-8">
            Dedicated Faculty and Staff
          </h2>

          <p className="text-lg leading-9 text-slate-700">
            The faculty and staff of Divine Shepherd College of Lipa City, Inc.
            are dedicated educators who are professionally qualified and
            committed to guiding students with care, patience, and purpose.
          </p>

          <p className="text-lg leading-9 text-slate-700 mt-6">
            Our teachers are Licensed Professional Teachers who support
            academic growth while modeling Christian values, discipline,
            respect, and responsibility.
          </p>

        </div>
      </section>

      {/* FACULTY VALUES */}
      <section className="bg-blue-50 py-24 px-6">
        <div className="max-w-6xl mx-auto">

          <p className="text-sm tracking-widest text-blue-600 font-semibold mb-4">
            FACULTY VALUES
          </p>

          <h2 className="text-4xl font-bold text-blue-900 mb-10">
            A Student-Centered Approach
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-white rounded-2xl p-8 border border-blue-100 shadow-sm transition hover:shadow-lg hover:-translate-y-1">
              <p className="text-4xl mb-4">🙏</p>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Christian Values
              </h3>
              <p className="text-slate-700 leading-8">
                Faculty and staff model values-centered behavior and help
                nurture students into respectful, responsible, and God-fearing
                individuals.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-blue-100 shadow-sm transition hover:shadow-lg hover:-translate-y-1">
              <p className="text-4xl mb-4">🎓</p>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Professional Teaching
              </h3>
              <p className="text-slate-700 leading-8">
                Licensed Professional Teachers bring preparation, knowledge,
                professionalism, and dedication into the classroom experience.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-blue-100 shadow-sm transition hover:shadow-lg hover:-translate-y-1">
              <p className="text-4xl mb-4">🤝</p>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Student-First Mentorship
              </h3>
              <p className="text-slate-700 leading-8">
                Teachers prioritize a nurturing approach that supports each
                learner’s academic progress, personal growth, and confidence.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-blue-100 shadow-sm transition hover:shadow-lg hover:-translate-y-1">
              <p className="text-4xl mb-4">🌱</p>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Character Formation
              </h3>
              <p className="text-slate-700 leading-8">
                The school community helps students develop discipline,
                reflective thinking, responsibility, respect, and lifelong
                learning habits.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SUPPORT SECTION */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto">

          <p className="text-sm tracking-widest text-blue-600 font-semibold mb-4">
            FOCUSED GUIDANCE
          </p>

          <h2 className="text-4xl font-bold text-blue-900 mb-8">
            Personalized Student Support
          </h2>

          <p className="text-lg leading-9 text-slate-700">
            With a dedicated team of 21 teaching and non-teaching staff, the
            school maintains a focused learning environment that allows
            students to receive personal attention, guidance, and support
            throughout their educational journey.
          </p>

        </div>
      </section>

      {/* CLOSING SECTION */}
      <section className="bg-slate-900 text-white py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">

          <p className="text-sm tracking-widest text-blue-300 font-semibold mb-4">
            COMMITTED TO STUDENTS
          </p>

          <h2 className="text-4xl font-bold mb-8">
            Teachers Who Guide with Purpose
          </h2>

          <p className="text-lg leading-8 text-slate-300 max-w-3xl mx-auto">
            Divine Shepherd faculty and staff work together to provide a
            nurturing, values-centered, and student-first learning environment.
          </p>

        </div>
      </section>

    </main>
  );
}