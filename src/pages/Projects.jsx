function Projects() {
  const projects = [
    {
      title: "Interior design",
      image:
        "https://img.freepik.com/free-photo/maximalist-interior-design_23-2151898548.jpg?ga=GA1.1.138747273.1745584070&semt=ais_items_boosted&w=740",
      description: "A luxury modern villa with open-plan spaces and sustainable materials.",
    },
    {
      title: "Corporate Tower",
      image:
        "https://images.unsplash.com/photo-1501183638710-841dd1904471",
      description: "High-rise commercial office building with energy-efficient design.",
    },
    {
      title: "Eco Resort",
      image:
        "https://img.freepik.com/free-photo/cozy-lively-home-interior-design_23-2151118943.jpg?ga=GA1.1.138747273.1745584070&semt=ais_items_boosted&w=740",
      description: "An eco-friendly resort surrounded by nature, designed for relaxation.",
    },
    {
      title: "Urban Housing",
      image:
        "https://img.freepik.com/free-photo/neon-robot-vacuum-cleaner_23-2151349283.jpg?ga=GA1.1.138747273.1745584070&semt=ais_items_boosted&w=740",
      description: "Affordable housing with modern aesthetics in an urban setup.",
    },
    {
      title: "Cultural Center",
      image:
        "https://img.freepik.com/free-photo/cozy-lively-home-interior-design_23-2151119042.jpg?ga=GA1.1.138747273.1745584070&semt=ais_items_boosted&w=740",
      description: "A public center that celebrates art, community, and local culture.",
    },
    {
      title: "Glass Pavilion",
      image:
        "https://img.freepik.com/free-photo/modern-styled-entryway_23-2150695965.jpg?ga=GA1.1.138747273.1745584070&semt=ais_items_boosted&w=740",
      description: "A transparent  marvel combining nature with structure.",
    },
  ];

  return (
    <div className="py-7 px-4 max-w-7xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold mb-10 text-pink-600 text-center">My Projects</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <div
            key={i}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
              <p className="text-gray-900 italic text-xl">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
