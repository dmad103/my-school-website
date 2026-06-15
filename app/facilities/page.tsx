export default function FacilitiesPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-blue-900 text-white py-24 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Facilities
          </h1>

          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-8">
            Divine Shepherd College of Lipa City, Inc. provides secure,
            practical, and supportive learning spaces designed for academic,
            creative, and personal growth.
          </p>
        </div>
      </section>

      <section className="bg-white py-10 px-6 border-b">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 text-center gap-6">
          <div>
            <p className="text-2xl font-bold text-blue-900">Classrooms</p>
            <p className="text-slate-600">Conducive Learning Spaces</p>
          </div>

          <div>
            <p className="text-2xl font-bold text-blue-900">Laboratories</p>
            <p className="text-slate-600">Computer & Science</p>
          </div>

          <div>
            <p className="text-2xl font-bold text-blue-900">Library</p>
            <p className="text-slate-600">Study & Research Area</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm tracking-widest text-blue-600 font-semibold mb-4">
            CAMPUS FACILITIES
          </p>

          <h2 className="text-4xl font-bold text-blue-900 mb-10">
            Learning Spaces and Resources
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100 shadow-sm transition hover:shadow-lg hover:-translate-y-1">
              <p className="text-4xl mb-4">🏫</p>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Air-Conditioned Classrooms
              </h3>
              <p className="text-slate-700 leading-8">
                Well-ventilated and conducive classrooms with air-conditioning
                help create a comfortable environment for focused learning.
              </p>
            </div>

            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100 shadow-sm transition hover:shadow-lg hover:-translate-y-1">
              <p className="text-4xl mb-4">💻</p>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Computer Laboratory
              </h3>
              <p className="text-slate-700 leading-8">
                A functional computer laboratory supports digital literacy,
                technology-based learning, and hands-on academic activities.
              </p>
            </div>

            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100 shadow-sm transition hover:shadow-lg hover:-translate-y-1">
              <p className="text-4xl mb-4">🔬</p>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Science Laboratory
              </h3>
              <p className="text-slate-700 leading-8">
                The science laboratory provides students with a practical space
                for experiments, observation, discovery, and scientific learning.
              </p>
            </div>

            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100 shadow-sm transition hover:shadow-lg hover:-translate-y-1">
              <p className="text-4xl mb-4">📚</p>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Library and Study Area
              </h3>
              <p className="text-slate-700 leading-8">
                A resourceful library and study area helps students build
                research skills, reading habits, and independent learning.
              </p>
            </div>

            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100 shadow-sm transition hover:shadow-lg hover:-translate-y-1">
              <p className="text-4xl mb-4">🎭</p>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Performing Arts and Music Spaces
              </h3>
              <p className="text-slate-700 leading-8">
                Dedicated spaces for performing arts and music support student
                creativity, expression, confidence, and school activities.
              </p>
            </div>

            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100 shadow-sm transition hover:shadow-lg hover:-translate-y-1">
              <p className="text-4xl mb-4">🎯</p>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Multi-Purpose and Indoor Recreation Areas
              </h3>
              <p className="text-slate-700 leading-8">
                Multi-purpose spaces provide areas for indoor recreation,
                student activities, collaboration, and school programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 text-white py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm tracking-widest text-blue-300 font-semibold mb-4">
            SUPPORTIVE ENVIRONMENT
          </p>

          <h2 className="text-4xl font-bold mb-8">
            Spaces Designed for Student Growth
          </h2>

          <p className="text-lg leading-8 text-slate-300 max-w-3xl mx-auto">
            The school’s facilities support academic excellence, creativity,
            student engagement, and values-centered learning.
          </p>
        </div>
      </section>
    </main>
  );
}