export default function AcademicsPage() {
  return (
    <main className="min-h-screen">

      {/* HERO SECTION */}
      <section className="bg-blue-900 text-white py-24 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Academics & Programs
          </h1>

          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-8">
            Divine Shepherd College of Lipa City, Inc. offers quality
            education from Kindergarten to College, guiding learners through
            every stage of academic and personal development.
          </p>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="bg-white py-10 px-6 border-b">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 text-center gap-6">
          <div>
            <p className="text-2xl font-bold text-blue-900">Kindergarten–College</p>
            <p className="text-slate-600">Complete Academic Pathway</p>
          </div>

          <div>
            <p className="text-2xl font-bold text-blue-900">K–12</p>
            <p className="text-slate-600">Basic Education</p>
          </div>

          <div>
            <p className="text-2xl font-bold text-blue-900">BS Criminology</p>
            <p className="text-slate-600">College Degree Program</p>
          </div>
        </div>
      </section>

      {/* ACADEMIC LEVELS */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">

          <p className="text-sm tracking-widest text-blue-600 font-semibold mb-4">
            ACADEMIC OFFERINGS
          </p>

          <h2 className="text-4xl font-bold text-blue-900 mb-6">
            Basic Education Programs
          </h2>

          <p className="text-lg leading-8 text-slate-700 max-w-4xl mb-12">
            The school provides a complete basic education pathway designed to
            support learners from early childhood through senior high school.
          </p>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100 shadow-sm transition hover:shadow-lg hover:-translate-y-1">
              <p className="text-4xl mb-4">🎨</p>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Kindergarten
              </h3>
              <p className="text-slate-700 leading-8">
                Government Recognition No. K-010, s. 2010. The Kindergarten
                program helps young learners build early academic skills,
                confidence, discipline, and social development.
              </p>
            </div>

            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100 shadow-sm transition hover:shadow-lg hover:-translate-y-1">
              <p className="text-4xl mb-4">📚</p>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Elementary
              </h3>
              <p className="text-slate-700 leading-8">
                Grade 1 to Grade 6 students are guided in developing strong
                foundations in communication, mathematics, science, values,
                and lifelong learning habits.
              </p>
            </div>

            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100 shadow-sm transition hover:shadow-lg hover:-translate-y-1">
              <p className="text-4xl mb-4">🎓</p>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Junior High School
              </h3>
              <p className="text-slate-700 leading-8">
                Grades 7 to 10 focus on academic preparation, critical
                thinking, responsibility, discipline, and character formation
                for future success.
              </p>
            </div>

            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100 shadow-sm transition hover:shadow-lg hover:-translate-y-1">
              <p className="text-4xl mb-4">🏆</p>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Senior High School
              </h3>
              <p className="text-slate-700 leading-8">
                Grades 11 to 12 prepare students for college, employment,
                leadership, and career readiness through advanced academic
                learning and personal development.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* COLLEGE SECTION */}
      <section className="bg-blue-50 py-24 px-6">
        <div className="max-w-6xl mx-auto">

          <p className="text-sm tracking-widest text-blue-600 font-semibold mb-4">
            HIGHER EDUCATION
          </p>

          <h2 className="text-4xl font-bold text-blue-900 mb-8">
            College Program
          </h2>

          <p className="text-lg leading-9 text-slate-700 max-w-4xl mb-12">
            Divine Shepherd College of Lipa City, Inc. offers higher education
            designed to prepare students for professional careers, leadership
            opportunities, public service, and lifelong learning.
          </p>

          <div className="bg-white rounded-2xl shadow-lg p-10 border border-blue-100 transition hover:shadow-xl">
            <p className="text-4xl mb-4">⚖️</p>

            <h3 className="text-3xl font-bold text-blue-900 mb-6">
              Bachelor of Science in Criminology
            </h3>

            <p className="text-lg leading-8 text-slate-700 mb-8">
              The Bachelor of Science in Criminology program prepares students
              with knowledge, discipline, ethics, and practical understanding
              related to criminal justice, law enforcement, public safety, and
              community service.
            </p>

            <div className="grid md:grid-cols-2 gap-4 text-slate-700">
              <p className="bg-blue-50 rounded-xl p-4">Criminal justice foundations</p>
              <p className="bg-blue-50 rounded-xl p-4">Law enforcement preparation</p>
              <p className="bg-blue-50 rounded-xl p-4">Ethics and discipline</p>
              <p className="bg-blue-50 rounded-xl p-4">Public safety and service</p>
            </div>
          </div>

        </div>
      </section>

      {/* EDUCATIONAL APPROACH */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto">

          <p className="text-sm tracking-widest text-blue-600 font-semibold mb-4">
            OUR ACADEMIC APPROACH
          </p>

          <h2 className="text-4xl font-bold text-blue-900 mb-8">
            Learning with Character and Purpose
          </h2>

          <p className="text-lg leading-9 text-slate-700">
            Across all academic levels, Divine Shepherd combines academic
            instruction with values formation, discipline, responsibility,
            and personal guidance.
          </p>

          <p className="text-lg leading-9 text-slate-700 mt-6">
            The institution is committed to helping learners grow into
            competent, respectful, and service-oriented individuals prepared
            for future education, careers, and community involvement.
          </p>

        </div>
      </section>

    </main>
  )
}