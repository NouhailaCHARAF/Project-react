

import { Link } from "react-router-dom"
export default function TextImage(){



    return(
<section className="min-h-[70vh] flex items-center bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">

        
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            Build modern websites
            <span className="text-indigo-600"> with elegance</span>
          </h1>

          <p className="mt-5 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            Create fast, responsive and beautiful interfaces using Tailwind CSS.
            Improve your user experience and boost conversions easily.
          </p>

          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-block px-6 py-3 rounded-xl bg-indigo-600 text-white font-medium shadow-md hover:bg-indigo-700 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>

        
        <div className="flex justify-center md:justify-end">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="Hero"
            className="w-full max-w-md rounded-2xl shadow-lg object-cover"
          />
        </div>

      </div>
    </section>

    )
}