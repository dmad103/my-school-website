const faqs = [
  {
    question: "What is the full name of the school?",
    answer:
      "The official name of the school is Divine Shepherd College of Lipa City, Inc., formerly known as Divine Shepherd School of Lipa City, Inc.",
  },
  {
    question: "Where is the school located?",
    answer:
      "The school is located in Lipa City, Batangas, Philippines.",
  },
  {
    question: "When was the school founded?",
    answer:
      "Divine Shepherd College of Lipa City, Inc. was officially founded on February 8, 1997.",
  },
  {
    question: "What programs does the school offer?",
    answer:
      "The school offers Kindergarten, Elementary Grades 1–6, Junior High School Grades 7–10, Senior High School Grades 11–12, and College with Bachelor of Science in Criminology.",
  },
  {
    question: "What is the CARE Program?",
    answer:
      "The DSSLCI CARE Program is a student-centered learning approach aligned with MATATAG educational objectives. It focuses on Guided Competency, Active Engagement & Discussion, and Meaningful Assessment.",
  },
  {
    question: "What is the enrollment process?",
    answer:
      "The enrollment process includes filling up the enrollment contract, parent or guardian interview, submission of admission documents, assessment of fees, and payment of entrance fee and books.",
  },
  {
    question: "What documents are required for new students?",
    answer:
      "New students must submit a PSA Birth Certificate, Official Report Card or Form 138, and Certificate of Good Moral Character.",
  },
  {
    question: "What clubs and activities are available?",
    answer:
      "The school offers activities such as Nutrition Month, Buwan ng Wika, Scouting Activities, Intramurals, Educational Field Trips, and clubs including Journalism, Arts, Music, Dance, and DSSLCI Drum & Lyre Corps.",
  },
  {
    question: "How can parents or students contact the school?",
    answer:
      "The school can be contacted through Facebook Messenger, the official Facebook Page Divine Shepherd College, email at divineshepherd97@gmail.com, telephone at (043) 233-2019, and class or parent-teacher group chats.",
  },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen">

      {/* HERO SECTION */}
      <section className="bg-blue-900 text-white py-24 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Frequently Asked Questions
          </h1>

          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-8">
            Find answers to common questions about Divine Shepherd College of
            Lipa City, Inc., including programs, admissions, requirements,
            student life, and contact information.
          </p>
        </div>
      </section>

      {/* FAQ OVERVIEW */}
      <section className="bg-white py-10 px-6 border-b">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 text-center gap-6">
          <div>
            <p className="text-2xl font-bold text-blue-900">Programs</p>
            <p className="text-slate-600">Academic Offerings</p>
          </div>

          <div>
            <p className="text-2xl font-bold text-blue-900">Admissions</p>
            <p className="text-slate-600">Enrollment Guide</p>
          </div>

          <div>
            <p className="text-2xl font-bold text-blue-900">Contact</p>
            <p className="text-slate-600">School Information</p>
          </div>
        </div>
      </section>

      {/* FAQ LIST */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto">

          <p className="text-sm tracking-widest text-blue-600 font-semibold mb-4">
            COMMON QUESTIONS
          </p>

          <h2 className="text-4xl font-bold text-blue-900 mb-10">
            Helpful Information for Families
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-blue-50 rounded-2xl p-8 border border-blue-100 shadow-sm transition hover:shadow-lg"
              >
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  {faq.question}
                </h3>

                <p className="text-slate-700 leading-8">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CLOSING SECTION */}
      <section className="bg-slate-900 text-white py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">

          <p className="text-sm tracking-widest text-blue-300 font-semibold mb-4">
            STILL HAVE QUESTIONS?
          </p>

          <h2 className="text-4xl font-bold mb-8">
            Contact the School for Assistance
          </h2>

          <p className="text-lg leading-8 text-slate-300 max-w-3xl mx-auto">
            For additional questions, families may contact Divine Shepherd
            College through email, telephone, Facebook Messenger, or official
            parent-teacher communication channels.
          </p>

        </div>
      </section>

    </main>
  );
}