import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-semibold font-montserrat text-gray-900">
          Divine Shepherd College of Lipa City
        </h1>

        {/* Tagline */}
        <p className="mt-4 text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
          A Christ-centered institution forming disciplined, responsible, and globally prepared learners.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">

          <Link
            href="/academics"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Explore Academics
          </Link>

          <Link
            href="/admissions"
            className="border border-gray-400 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Admissions
          </Link>

        </div>

      </div>
    </section>
  );
}