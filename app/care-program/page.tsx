export default function CareProgramPage() {
  return (
    <main className="min-h-screen">

      {/* HERO SECTION */}
      <section className="bg-blue-900 text-white py-24 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            CARE Program
          </h1>

          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-8">
            The DSSLCI CARE Program is designed to elevate the quality of
            education in alignment with the MATATAG educational objectives.
          </p>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="bg-white py-10 px-6 border-b">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 text-center gap-6">
          <div>
            <p className="text-2xl font-bold text-blue-900">Teach</p>
            <p className="text-slate-600">Knowledge</p>
          </div>

          <div>
            <p className="text-2xl font-bold text-blue-900">Train</p>
            <p className="text-slate-600">Skills</p>
          </div>

          <div>
            <p className="text-2xl font-bold text-blue-900">Develop</p>
            <p className="text-slate-600">Learners</p>
          </div>
        </div>
      </section>

      {/* PROGRAM OVERVIEW */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm tracking-widest text-blue-600 font-semibold mb-4">
            PROGRAM OVERVIEW
          </p>

          <h2 className="text-4xl font-bold text-blue-900 mb-8">
            The DSSLCI CARE Program
          </h2>

          <p className="text-lg leading-9 text-slate-700">
            The CARE Program aims to teach, train, and develop learners by
            equipping them with vital knowledge and skills needed to confidently
            pursue higher college education, secure employment, or successfully
            launch their own businesses after graduating from Senior High School.
          </p>

          <p className="text-lg leading-9 text-slate-700 mt-6">
            This program reflects a deeply student-centered approach. It
            intentionally manages time, space, and learning materials to
            optimize the teaching-learning process across three distinct
            learning segments.
          </p>
        </div>
      </section>

      {/* CARE SEGMENTS */}
      <section className="bg-blue-50 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm tracking-widest text-blue-600 font-semibold mb-4 text-center">
            THREE CORE SEGMENTS
          </p>

          <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">
            The CARE Learning Framework
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white rounded-2xl p-8 border border-blue-100 shadow-sm transition hover:shadow-lg hover:-translate-y-1">
              <p className="text-4xl mb-4">📘</p>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Guided Competency
              </h3>
              <p className="text-slate-700 leading-8">
                Students engage in closely supervised reading and learning
                activities designed to strengthen reading comprehension and
                mastery of the subject matter.
              </p>
              <p className="text-slate-700 leading-8 mt-4">
                Clear learning objectives are provided for every lesson to
                help students stay focused and understand what they are expected
                to learn.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-blue-100 shadow-sm transition hover:shadow-lg hover:-translate-y-1">
              <p className="text-4xl mb-4">💬</p>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Active Engagement & Discussion
              </h3>
              <p className="text-slate-700 leading-8">
                Learners participate in guided and focused class discussions
                where the teacher serves as an expert facilitator.
              </p>
              <p className="text-slate-700 leading-8 mt-4">
                At the end of each lesson, students strengthen their excitement
                for learning through interactive and enjoyable performance tasks
                conducted in the classroom.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-blue-100 shadow-sm transition hover:shadow-lg hover:-translate-y-1">
              <p className="text-4xl mb-4">✅</p>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Meaningful Assessment
              </h3>
              <p className="text-slate-700 leading-8">
                Assessments are carefully crafted to foster student success and
                give learners clear insight into their educational journey.
              </p>
              <p className="text-slate-700 leading-8 mt-4">
                Students are guided to understand what they have learned, how
                they learned it, and why it matters for their future.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* OUTCOME SECTION */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm tracking-widest text-blue-600 font-semibold mb-4">
            STUDENT OUTCOMES
          </p>

          <h2 className="text-4xl font-bold text-blue-900 mb-12">
            Preparing Learners for the Future
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
              <h3 className="text-xl font-bold text-blue-900 mb-3">
                College Readiness
              </h3>
              <p className="text-slate-700 leading-8">
                Students are prepared with the knowledge, habits, and discipline
                needed to pursue higher education with confidence.
              </p>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
              <h3 className="text-xl font-bold text-blue-900 mb-3">
                Employment Preparation
              </h3>
              <p className="text-slate-700 leading-8">
                Learners develop practical skills and confidence that support
                future career opportunities after graduation.
              </p>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
              <h3 className="text-xl font-bold text-blue-900 mb-3">
                Entrepreneurial Growth
              </h3>
              <p className="text-slate-700 leading-8">
                The program helps students build the mindset and skills needed
                to successfully launch their own businesses.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CLOSING SECTION */}
      <section className="bg-slate-900 text-white py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm tracking-widest text-blue-300 font-semibold mb-4">
            CARE IN ACTION
          </p>

          <h2 className="text-4xl font-bold mb-8">
            Student-Centered Learning with Purpose
          </h2>

          <p className="text-lg leading-8 text-slate-300 max-w-3xl mx-auto">
            Through the CARE Program, DSSLCI strengthens the teaching-learning
            process by guiding students through competency-building, active
            engagement, and meaningful assessment.
          </p>
        </div>
      </section>

    </main>
  )
}