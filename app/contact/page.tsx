export default function ContactPage() {
  return (
    <main className="min-h-screen">

      {/* HERO SECTION */}
      <section className="bg-blue-900 text-white py-24 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Contact Us
          </h1>

          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-8">
            Reach Divine Shepherd College of Lipa City, Inc. through our
            official contact channels for inquiries, announcements, and school
            updates.
          </p>
        </div>
      </section>

      {/* CONTACT OVERVIEW */}
      <section className="bg-white py-10 px-6 border-b">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 text-center gap-6">
          <div>
            <p className="text-2xl font-bold text-blue-900">Email</p>
            <p className="text-slate-600">divineshepherd97@gmail.com</p>
          </div>

          <div>
            <p className="text-2xl font-bold text-blue-900">Phone</p>
            <p className="text-slate-600">(043) 233-2019</p>
          </div>

          <div>
            <p className="text-2xl font-bold text-blue-900">Facebook</p>
            <p className="text-slate-600">Divine Shepherd College</p>
          </div>
        </div>
      </section>

      {/* CONTACT DETAILS */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">

          <p className="text-sm tracking-widest text-blue-600 font-semibold mb-4">
            CONTACT INFORMATION
          </p>

          <h2 className="text-4xl font-bold text-blue-900 mb-10">
            Get in Touch
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100 shadow-sm transition hover:shadow-lg hover:-translate-y-1">
              <p className="text-4xl mb-4">📍</p>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                School Location
              </h3>
              <p className="text-slate-700 leading-8">
                Divine Shepherd College of Lipa City, Inc. is located in
                Lipa City, Batangas, Philippines.
              </p>
            </div>

            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100 shadow-sm transition hover:shadow-lg hover:-translate-y-1">
              <p className="text-4xl mb-4">📧</p>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Email Address
              </h3>
              <p className="text-slate-700 leading-8">
                divineshepherd97@gmail.com
              </p>
            </div>

            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100 shadow-sm transition hover:shadow-lg hover:-translate-y-1">
              <p className="text-4xl mb-4">☎️</p>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Telephone
              </h3>
              <p className="text-slate-700 leading-8">
                (043) 233-2019
              </p>
            </div>

            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100 shadow-sm transition hover:shadow-lg hover:-translate-y-1">
              <p className="text-4xl mb-4">💬</p>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Social Media
              </h3>
              <p className="text-slate-700 leading-8">
                Parents and students may reach the school through Facebook
                Messenger and the official Facebook Page: Divine Shepherd
                College.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* COMMUNICATION SECTION */}
      <section className="bg-blue-50 py-24 px-6">
        <div className="max-w-5xl mx-auto">

          <p className="text-sm tracking-widest text-blue-600 font-semibold mb-4">
            SCHOOL UPDATES
          </p>

          <h2 className="text-4xl font-bold text-blue-900 mb-8">
            Announcements and Parent Communication
          </h2>

          <p className="text-lg leading-9 text-slate-700">
            Divine Shepherd actively posts real-time updates, school
            announcements, and news highlights on its official Facebook Page.
          </p>

          <p className="text-lg leading-9 text-slate-700 mt-6">
            The school also uses class and parent-teacher group chats for
            real-time updates and direct communication with families.
          </p>

        </div>
      </section>

      {/* CLOSING SECTION */}
      <section className="bg-slate-900 text-white py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">

          <p className="text-sm tracking-widest text-blue-300 font-semibold mb-4">
            CONNECT WITH US
          </p>

          <h2 className="text-4xl font-bold mb-8">
            We Are Here to Help
          </h2>

          <p className="text-lg leading-8 text-slate-300 max-w-3xl mx-auto">
            For enrollment questions, school updates, and general inquiries,
            families may contact the school through email, telephone, Facebook,
            or official parent-teacher communication channels.
          </p>

        </div>
      </section>

    </main>
  );
}