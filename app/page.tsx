import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-blue-50 flex flex-col items-center justify-center px-6">
      <h1 className="text-5xl font-bold text-blue-900 text-center">
        Divine Shepherd College of Lipa City
      </h1>

      <p className="mt-4 text-gray-700 text-center text-lg">
        Official School Website
      </p>

      <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
        <Link href="/about" className="text-blue-700 underline">About</Link>
        <Link href="/academics" className="text-blue-700 underline">Academics</Link>
        <Link href="/admissions" className="text-blue-700 underline">Admissions</Link>
        <Link href="/requirements" className="text-blue-700 underline">Requirements</Link>
        <Link href="/student-life" className="text-blue-700 underline">Student Life</Link>
        <Link href="/facilities" className="text-blue-700 underline">Facilities</Link>
        <Link href="/faculty" className="text-blue-700 underline">Faculty</Link>
        <Link href="/care-program" className="text-blue-700 underline">CARE Program</Link>
        <Link href="/contact" className="text-blue-700 underline">Contact</Link>
        <Link href="/faq" className="text-blue-700 underline">FAQ</Link>
      </div>
    </main>
  );
}