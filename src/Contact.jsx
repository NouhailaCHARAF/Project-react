export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">

      
      <div className="py-10 flex justify-center items-center bg-black">
        <h2 className="text-white font-bold text-3xl">
          OUR NEW COLLECTION
        </h2>
      </div>

     
      <div className="flex justify-center items-center py-16 px-4">

        <form className="w-full max-w-md space-y-5 rounded-xl border border-gray-200 bg-white p-6 shadow-md">

        
          <div>
            <label className="block text-sm font-medium text-gray-900" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none"
            />
          </div>

          
          <div>
            <label className="block text-sm font-medium text-gray-900" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Your email"
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none"
            />
          </div>

      
          <fieldset>
            <legend className="text-sm font-medium text-gray-900">
              Inquiry
            </legend>

            <div className="mt-3 space-y-2">
              {["General Inquiry", "Support", "Feedback", "Other"].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <input
                    id={item}
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  />
                  <label htmlFor={item} className="text-sm text-gray-700">
                    {item}
                  </label>
                </div>
              ))}
            </div>
          </fieldset>

          
          <div>
            <label className="block text-sm font-medium text-gray-900" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="Your message"
              className="mt-1 w-full resize-none rounded-lg border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none"
            />
          </div>

          
          <button
            type="submit"
            className="w-full rounded-lg bg-indigo-600 px-4 py-3 text-sm font-medium text-white hover:bg-indigo-700 transition"
          >
            Send Message
          </button>

        </form>
      </div>
    </div>
  );
}