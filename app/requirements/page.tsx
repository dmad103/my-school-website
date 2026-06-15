export default function RequirementsPage() {
  return (
    <main className="min-h-screen">

      {/* HERO SECTION */}
      <section className="bg-blue-900 text-white py-24 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Requirements
          </h1>

          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-8">
            Review the required documents needed for enrollment at Divine
            Shepherd College of Lipa City, Inc.
          </p>
        </div>
      </section>

      {/* QUICK OVERVIEW */}
      <section className="bg-white py-10 px-6 border-b">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 text-center gap-6">
          <div>
            <p className="text-2xl font-bold text-blue-900">Checklist</p>
            <p className="text-slate-600">Document Guide</p>
          </div>

          <div>
            <p className="text-2xl font-bold text-blue-900">Prepare Early</p>
            <p className="text-slate-600">Smooth Enrollment</p>
          </div>

          <div>
            <p className="text-2xl font-bold text-blue-900">Submit</p>
            <p className="text-slate-600">Complete Requirements</p>
          </div>
        </div>
      </section>

      {/* CHECKLIST SECTION */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">

          <p className="text-sm tracking-widest text-blue-600 font-semibold mb-4">
            DOCUMENT CHECKLIST
          </p>

          <h2 className="text-4xl font-bold text-blue-900 mb-10">
            Enrollment Requirements
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100 shadow-sm transition hover:shadow-lg hover:-translate-y-1">
              <p className="text-4xl mb-4">📄</p>
              <h3 className="text-2xl font-bold text-blue-900 mb-6">
                General Requirements
              </h3>

              <ul className="space-y-4 text-slate-700">
                <li>✓ PSA Birth Certificate</li>
                <li>✓ Official Report Card / Form 138</li>
                <li>✓ Certificate of Good Moral Character</li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100 shadow-sm transition hover:shadow-lg hover:-translate-y-1">
              <p className="text-4xl mb-4">👨‍👩‍👧</p>
              <h3 className="text-2xl font-bold text-blue-900 mb-6">
                Grade 7 Students
              </h3>

              <ul className="space-y-4 text-slate-700">
                <li>✓ Proof of Income of Parent/Guardian</li>
                <li>✓ Certificate of Employment or Indigency</li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100 shadow-sm transition hover:shadow-lg hover:-translate-y-1">
              <p className="text-4xl mb-4">🎓</p>
              <h3 className="text-2xl font-bold text-blue-900 mb-6">
                ESC Grantee Transferees
              </h3>

              <ul className="space-y-4 text-slate-700">
                <li>✓ ESC Transfer Out Certificate</li>
                <li>✓ 2x2 Photo</li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100 shadow-sm transition hover:shadow-lg hover:-translate-y-1">
              <p className="text-4xl mb-4">🏫</p>
              <h3 className="text-2xl font-bold text-blue-900 mb-6">
                Grade 11 Non-ESC Grantees
              </h3>

              <ul className="space-y-4 text-slate-700">
                <li>✓ Senior High School Voucher Recipient Certificate</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* PREPARATION TIPS */}
      <section className="bg-blue-50 py-24 px-6">
        <div className="max-w-5xl mx-auto">

          <p className="text-sm tracking-widest text-blue-600 font-semibold mb-4">
            BEFORE SUBMISSION
          </p>

          <h2 className="text-4xl font-bold text-blue-900 mb-10">
            Helpful Reminders
          </h2>

          <div className="bg-white rounded-2xl p-8 border border-blue-100 shadow-sm">
            <ul className="space-y-5 text-lg text-slate-700">
              <li>✓ Prepare all required documents before enrollment.</li>
              <li>✓ Make sure student names match across records.</li>
              <li>✓ Bring original documents when available.</li>
              <li>✓ Prepare photocopies if requested by the school.</li>
              <li>✓ Submit complete requirements for faster processing.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* CLOSING SECTION */}
      <section className="bg-slate-900 text-white py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">

          <p className="text-sm tracking-widest text-blue-300 font-semibold mb-4">
            READY TO ENROLL?
          </p>

          <h2 className="text-4xl font-bold mb-8">
            Prepare Your Documents Early
          </h2>

          <p className="text-lg leading-8 text-slate-300 max-w-3xl mx-auto">
            Completing your requirements ahead of time helps make the
            enrollment process easier, faster, and more organized.
          </p>

        </div>
      </section>

    </main>
  );
}