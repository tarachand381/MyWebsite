function About() {
  return (
    <div className="py-5 px-4 max-w-7xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold mb-12 text-pink-600 text-center">About Us</h1>

      {/* Intro Section */}
      <section className="py-8 bg-gray-100 px-4 rounded-lg shadow-md mb-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Text Box */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            <p className="text-xl mb-6 text-gray-900">
              <span className="font-semibold italic text-gray-900">WEBSITE</span > At our firm, we are passionate about transforming ideas into iconic spaces. Backed by a legacy of creative excellence, our team of dedicated designers is committed to delivering timeless designs that are not only visually stunning but also sustainable and highly functional.
            </p>
            <a
              href="/about"
              className="inline-block bg-red-600 text-white font-semibold py-2 px-6 rounded hover:bg-red-700 transition"
            >
              Read More
            </a>
          </div>

          {/* Right Side Image */}
          <div className="w-full">
            <img
              src="https://img.freepik.com/free-photo/one-person-hand-painting-colorful-abstract-design-generated-by-ai_188544-39056.jpg?ga=GA1.1.138747273.1745584070&semt=ais_items_boosted&w=740"
              alt=""
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">Our Team</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <img
              src="https://img.freepik.com/free-photo/close-up-image-programer-working-his-desk-office_1098-18707.jpg?ga=GA1.1.138747273.1745584070&semt=ais_items_boosted&w=740"
              alt=""
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-bold  text-gray-800">Tarachand</h3>
            <p className="text-gray-800 italic text-xl">Web Developer</p>
          </div>

          {/* Team Member 2 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <img
              src="https://img.freepik.com/premium-photo/word-design-written-top-colorful-geometric-3d-shapes_2227-1663.jpg?ga=GA1.1.138747273.1745584070&semt=ais_items_boosted&w=740"
              alt=""
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-bold text-gray-800">Vikash</h3>
            <p className="text-gray-800 italic text-xl">Graphic Designer</p>
          </div>

          {/* Team Member 3 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <img
              src="https://img.freepik.com/free-photo/millennial-asia-businessmen-businesswomen-meeting-brainstorming-ideas-about-new-paperwork-project-colleagues-working-together-planning-success-strategy-enjoy-teamwork-small-modern-night-office_7861-2386.jpg?ga=GA1.1.138747273.1745584070&semt=ais_items_boosted&w=740"
              alt=""
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-bold text-gray-800">Mr. Pawan</h3>
            <p className="text-gray-800 italic  text-xl">Project Manager</p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <div className="grid md:grid-cols-2 gap-10">
        <div className="bg-gray-100 p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-3 text-gray-900">Our Mission</h2>
          <p className="text-gray-900 text-xl">
            Our mission is to shape inspiring skylines through innovative, sustainable, and functional design solutions. We strive to exceed client expectations by blending creativity with practicality, ensuring every project reflects their unique vision, values, and purpose.
          </p>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-3 text-gray-900">Our Vision</h2>
          <p className="text-gray-900 text-xl">
            To be a globally recognized leader in design innovation, shaping the future of cities  We strive to exceed client and communities through creations that design innovation, shaping  inspire, engage, and stand the test of time for generations to come.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
