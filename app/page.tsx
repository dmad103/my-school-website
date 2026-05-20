import Link from "next/link";

import Section from "@/components/Section";
import Card from "@/components/Card";
import Button from "@/components/Button";

import { BookOpen, MessageCircle, BarChart3 } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-100 to-white px-6">

      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto text-center py-24">

        <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 font-montserrat">
          Divine Shepherd College of Lipa City
        </h1>

        <p className="mt-4 text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
          A Christ-centered institution forming disciplined, responsible, and globally prepared learners.
        </p>

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
      </section>

      {/* QUICK NAVIGATION */}
      <section className="max-w-6xl mx-auto pb-20">

        <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">
          Quick Navigation
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">

          <Link href="/about" className="p-4 bg-white border rounded-lg hover:shadow-sm">
            About
          </Link>

          <Link href="/academics" className="p-4 bg-white border rounded-lg hover:shadow-sm">
            Academics
          </Link>

          <Link href="/admissions" className="p-4 bg-white border rounded-lg hover:shadow-sm">
            Admissions
          </Link>

          <Link href="/requirements" className="p-4 bg-white border rounded-lg hover:shadow-sm">
            Requirements
          </Link>

          <Link href="/student-life" className="p-4 bg-white border rounded-lg hover:shadow-sm">
            Student Life
          </Link>

          <Link href="/facilities" className="p-4 bg-white border rounded-lg hover:shadow-sm">
            Facilities
          </Link>

          <Link href="/faculty" className="p-4 bg-white border rounded-lg hover:shadow-sm">
            Faculty
          </Link>

          <Link href="/care-program" className="p-4 bg-white border rounded-lg hover:shadow-sm">
            CARE Program
          </Link>

          <Link href="/contact" className="p-4 bg-white border rounded-lg hover:shadow-sm">
            Contact
          </Link>

          <Link href="/faq" className="p-4 bg-white border rounded-lg hover:shadow-sm">
            FAQ
          </Link>

        </div>
      </section>

      {/* CARE PROGRAM SECTION */}
      <Section title="DSSLCI CARE Program">

        <p className="text-gray-600 max-w-3xl mx-auto text-center mb-10">
          A structured learning system designed to develop student competence,
          engagement, and meaningful assessment for lifelong learning success.
        </p>

        <div className="grid md:grid-cols-3 gap-6">

          {/* Guided Competency */}
          <Card>
            <div className="flex items-center gap-2 mb-3">
              <BookOpen className="text-blue-600" />
              <h3 className="font-semibold">Guided Competency</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Students engage in closely supervised reading and learning activities
              designed to strengthen comprehension and mastery of subject matter.
            </p>
          </Card>

          {/* Active Engagement */}
          <Card>
            <div className="flex items-center gap-2 mb-3">
              <MessageCircle className="text-blue-600" />
              <h3 className="font-semibold">Active Engagement</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Teacher-guided discussions and interactive classroom activities that
              encourage deeper understanding and collaboration.
            </p>
          </Card>

          {/* Meaningful Assessment */}
          <Card>
            <div className="flex items-center gap-2 mb-3">
              <BarChart3 className="text-blue-600" />
              <h3 className="font-semibold">Meaningful Assessment</h3>
            </div>
            <p className="text-gray-600 text-sm">
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

    </main>
  );
}