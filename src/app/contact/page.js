export default function Contact() {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg">
          <h1 className="text-3xl font-bold mb-6">Contact Me</h1>
          <form>
            <label className="block mb-4">
              <span className="text-gray-700">Name</span>
              <input
                type="text"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              />
            </label>
            <label className="block mb-4">
              <span className="text-gray-700">Email</span>
              <input
                type="email"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              />
            </label>
            <label className="block mb-4">
              <span className="text-gray-700">Message</span>
              <textarea
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              />
            </label>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    );
  }
  