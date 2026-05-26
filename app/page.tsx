import Link from "next/link";

import Section from "@/components/Section";
import Card from "@/components/Card";
import Button from "@/components/Button";

import { BookOpen, MessageCircle, BarChart3 } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-100 to-white">

      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto text-center py-32 px-6">

        <p className="text-blue-600 font-semibold tracking-wide uppercase mb-4">
          Welcome to Divine Shepherd College
        </p>

        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight font-montserrat">
          Divine Shepherd College of Lipa City
        </h1>

        <p className="mt-6 text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          A Christ-centered institution forming disciplined,
          responsible, and globally prepared learners through
          academic excellence and holistic development.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

          <Link
            href="/academics"
            className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 hover:scale-105 transition duration-200 shadow-md"
          >
            Explore Academics
          </Link>

          <Link
            href="/admissions"
            className="border border-gray-400 text-gray-700 px-8 py-4 rounded-xl hover:bg-gray-100 hover:scale-105 transition duration-200"
          >
            Admissions
          </Link>

        </div>
      </section>

      {/* QUICK NAVIGATION */}
      <section className="max-w-6xl mx-auto bg-white py-24 px-6">

        <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
          Quick Navigation
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          {[
            "/about",
            "/academics",
            "/admissions",
            "/requirements",
            "/student-life",
            "/facilities",
            "/faculty",
            "/care-program",
            "/contact",
          ].map((href) => (
            <Link
              key={href}
              href={href}
              className="p-6 bg-gray-50 border rounded-2xl hover:shadow-xl hover:-translate-y-1 transition duration-200 text-center font-medium"
            >
              {href.replace("/", "").replace("-", " ").toUpperCase()}
            </Link>
          ))}

        </div>
      </section>

      {/* WHY CHOOSE DSC */}
      <section className="bg-white py-24">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose DSC?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border">
              <h3 className="text-xl font-semibold mb-3">
                Academic Excellence
              </h3>
              <p className="text-gray-600">
                Providing quality education that prepares students
                for higher learning and future careers.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border">
              <h3 className="text-xl font-semibold mb-3">
                Christian Values
              </h3>
              <p className="text-gray-600">
                Developing disciplined and responsible learners
                grounded in faith and integrity.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border">
              <h3 className="text-xl font-semibold mb-3">
                Student Development
              </h3>
              <p className="text-gray-600">
                Encouraging leadership, engagement, and lifelong
                growth inside and outside the classroom.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CARE PROGRAM SECTION */}
      <section className="bg-gray-50 py-24">

        <div className="max-w-6xl mx-auto px-6">

          <Section title="DSSLCI CARE Program">

            <p className="text-gray-600 max-w-3xl mx-auto text-center mb-10 text-lg">
              A structured learning system designed to develop student competence,
              engagement, and meaningful assessment for lifelong learning success.
            </p>

            <div className="grid md:grid-cols-3 gap-6">

              <Card>
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="text-blue-600" />
                  <h3 className="font-semibold text-lg">
                    Guided Competency
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Students engage in closely supervised reading and learning activities
                  designed to strengthen comprehension and mastery of subject matter.
                </p>
              </Card>

              <Card>
                <div className="flex items-center gap-2 mb-3">
                  <MessageCircle className="text-blue-600" />
                  <h3 className="font-semibold text-lg">
                    Active Engagement
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Teacher-guided discussions and interactive classroom activities that
                  encourage deeper understanding and collaboration.
                </p>
              </Card>

              <Card>
                <div className="flex items-center gap-2 mb-3">
                  <BarChart3 className="text-blue-600" />
                  <h3 className="font-semibold text-lg">
                    Meaningful Assessment
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Evaluations designed to help students understand what they learned,
                  how they learned it, and why it matters.
                </p>
              </Card>

            </div>

            <div className="text-center mt-10">
              <Button href="/care-program">
                Learn More About CARE Program
              </Button>
            </div>

          </Section>

        </div>
      </section>

    </main>
  );
}