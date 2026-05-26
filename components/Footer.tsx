export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">

      <div className="max-w-6xl mx-auto px-6 py-10">

        <div className="grid md:grid-cols-3 gap-10">

          {/* School Info */}
          <div>
            <h2 className="text-xl font-semibold mb-3">
              Divine Shepherd College
            </h2>

            <p className="text-gray-400 text-sm leading-relaxed">
              A Christ-centered institution committed to academic excellence,
              student development, and lifelong learning.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-semibold mb-3">
              Quick Links
            </h2>

            <ul className="space-y-2 text-gray-400 text-sm">

              <li>
                <a href="/about" className="hover:text-white transition">
                  About
                </a>
              </li>

              <li>
                <a href="/academics" className="hover:text-white transition">
                  Academics
                </a>
              </li>

              <li>
                <a href="/admissions" className="hover:text-white transition">
                  Admissions
                </a>
              </li>

              <li>
                <a href="/contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>

            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-xl font-semibold mb-3">
              Contact
            </h2>

            <p className="text-gray-400 text-sm">
              Lipa City, Batangas
            </p>

            <p className="text-gray-400 text-sm mt-2">
              info@dsc.edu.ph
            </p>

            <p className="text-gray-400 text-sm mt-2">
              +63 900 000 0000
            </p>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">

          © 2026 Divine Shepherd College of Lipa City.
          All rights reserved.

        </div>

      </div>

    </footer>
  );
}