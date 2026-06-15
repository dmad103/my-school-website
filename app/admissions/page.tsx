export default function AdmissionsPage() {
  return (
    <main className="min-h-screen">

      {/* HERO SECTION */}
      <section className="bg-blue-900 text-white py-24 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Admissions
          </h1>

          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-8">
            Begin your journey at Divine Shepherd College of Lipa City, Inc.
            through a simple enrollment process designed to support students
            and families every step of the way.
          </p>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="bg-white py-10 px-6 border-b">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 text-center gap-6">
          <div>
            <p className="text-2xl font-bold text-blue-900">5 Steps</p>
            <p className="text-slate-600">Enrollment Process</p>
          </div>

          <div>
            <p className="text-2xl font-bold text-blue-900">Documents</p>
            <p className="text-slate-600">Required for Admission</p>
          </div>

          <div>
            <p className="text-2xl font-bold text-blue-900">New Students</p>
            <p className="text-slate-600">Application Guide</p>
          </div>
        </div>
      </section>

      {/* ENROLLMENT PROCESS */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">

          <p className="text-sm tracking-widest text-blue-600 font-semibold mb-4">
            ENROLLMENT PROCESS
          </p>

          <h2 className="text-4xl font-bold text-blue-900 mb-10">
            How to Enroll
          </h2>

          <div className="space-y-6">

            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100 shadow-sm transition hover:shadow-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-3">
                Step 1 — Fill Up the Enrollment Contract
              </h3>

              <p className="text-slate-700 leading-8">
                Complete the enrollment contract and provide the required
                student and parent/guardian information.
              </p>
            </div>

            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100 shadow-sm transition hover:shadow-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-3">
                Step 2 — Parent/Guardian Interview
              </h3>

              <p className="text-slate-700 leading-8">
                Meet with school representatives for an interview with the
                student's parent or guardian.
              </p>
            </div>

            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100 shadow-sm transition hover:shadow-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-3">
                Step 3 — Submit Admission Documents
              </h3>

              <p className="text-slate-700 leading-8">
                Submit all required documents for verification and evaluation.
              </p>
            </div>

            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100 shadow-sm transition hover:shadow-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-3">
                Step 4 — Assessment of Fees
              </h3>

              <p className="text-slate-700 leading-8">
                Receive an assessment of fees based on the student's academic
                level and enrollment requirements.
              </p>
            </div>

            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100 shadow-sm transition hover:shadow-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-3">
                Step 5 — Payment of Entrance Fee and Books
              </h3>

              <p className="text-slate-700 leading-8">
                Complete payment of the entrance fee and books to officially
                finalize enrollment.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* REQUIREMENTS */}
      <section className="bg-blue-50 py-24 px-6">
        <div className="max-w-6xl mx-auto">

          <p className="text-sm tracking-widest text-blue-600 font-semibold mb-4">
            ADMISSION REQUIREMENTS
          </p>

          <h2 className="text-4xl font-bold text-blue-900 mb-10">
            Documents Needed to Enroll
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-white rounded-2xl p-8 border border-blue-100 shadow-sm transition hover:shadow-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">
                New Students
              </h3>

              <ul className="space-y-3 text-slate-700">
                <li>• PSA Birth Certificate</li>
                <li>• Official Report Card (Form 138)</li>
                <li>• Certificate of Good Moral Character</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-blue-100 shadow-sm transition hover:shadow-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">
                Grade 7 Students
              </h3>

              <ul className="space-y-3 text-slate-700">
                <li>• Proof of Income of Parent/Guardian</li>
                <li>• Certificate of Employment or Indigency</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-blue-100 shadow-sm transition hover:shadow-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">
                ESC Grantee Transferees
              </h3>

              <ul className="space-y-3 text-slate-700">
                <li>• ESC Transfer Out Certificate</li>
                <li>• 2x2 Photo</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-blue-100 shadow-sm transition hover:shadow-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">
                Grade 11 Non-ESC Grantees
              </h3>

              <ul className="space-y-3 text-slate-700">
                <li>• Senior High School Voucher Recipient Certificate</li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* CLOSING SECTION */}
      <section className="bg-slate-900 text-white py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">

          <p className="text-sm tracking-widest text-blue-300 font-semibold mb-4">
            START YOUR JOURNEY
          </p>

          <h2 className="text-4xl font-bold mb-8">
            We Look Forward to Welcoming You
          </h2>

          <p className="text-lg leading-8 text-slate-300 max-w-3xl mx-auto">
            Divine Shepherd College of Lipa City, Inc. is committed to
            providing a supportive and values-centered learning environment
            where every student can grow academically, personally, and
            spiritually.
          </p>

        </div>
      </section>

    </main>
  );
}