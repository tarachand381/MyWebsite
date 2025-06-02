function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white h-[80vh]  flex items-center justify-center text-center px-4">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/free-photo/abstract-backdrop-with-smooth-flowing-wave-pattern-vibrant-colors-generated-by-artificial-intelligence_188544-241128.jpg?ga=GA1.1.138747273.1745584070&semt=ais_items_boosted&w=740')",
          }}
        ></div>

        <div className="relative z-10 max-w-7xl">
          <h1 className="text-4xl italic font-bold mb-8">
            Designing the Future of Experiences
          </h1>
          <p className="text-lg mb-8  text-gray-200">
            We seamlessly blend innovation with tradition  create beautiful, sustainable spaces  stand  test of time.
          </p>
          <a
            href="/projects"
            className="bg-white text-blue-600 font-bold py-2 px-6 rounded hover:bg-gray-200 transition"
          >
            Explore Projects
          </a>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-9 bg-whitesmoke text-gray-800">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-center">

          {/* Box 1 */}
          <div className="bg-white shadow-lg rounded-xl p-6 border hover:shadow-2xl transition duration-300">
            <h3 className="text-2xl font-bold  text-blue-500">Innovative Designs</h3>
            <p className="text-gray-800 italic text-xl">
              Modern solutions crafted with cutting-edge technologies and striking aesthetics.
            </p>
          </div>

          {/* Box 2 */}
          <div className="bg-white shadow-lg rounded-xl p-6 border hover:shadow-2xl transition duration-300">
            <h3 className="text-2xl font-bold mb-2 text-blue-500">Sustainable Spaces</h3>
            <p className="text-gray-800 italic text-xl">
              Eco-friendly and energy-efficient architectural designs that prioritize the planet  people.
            </p>
          </div>

          {/* Box 3 */}
          <div className="bg-white shadow-lg rounded-xl p-6 border hover:shadow-2xl transition duration-300">
            <h3 className="text-2xl font-bold mb-2 text-blue-500">Client-Centric Process</h3>
            <p className="text-gray-800 italic text-xl">
              Collaborating closely with understand and bring your vision to life, exceeding at every step.
            </p>
          </div>

        </div>
      </section>


      {/* Call to Action */}
      <section className="relative bg-gray-800 text-white py-20 text-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1470&q=80')",
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10">
          <h2 className="text-4xl font-bold mb-4">Ready to Build with Us?</h2>
          <p className="text-gray-200 mb-6">
            Contact us today and let's bring your dream project to life.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 font-bold py-2 px-6 rounded hover:bg-gray-200 transition"
          >
            Get in Touch
          </a>
        </div>
      </section>

    </div>
  );
}

export default Home;
