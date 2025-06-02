const blogPosts = [
  {
    id: 1,
    title: "Modern Architecture Trends",
    date: "May 10, 2025",
    Discripton:
      "Explore the latest trends in modern architecture that are shaping the future of building design.",
    photo:
      "https://media.istockphoto.com/id/1352603244/photo/shot-of-an-unrecognizable-businessman-working-on-his-laptop-in-the-office.jpg?s=612x612&w=0&k=20&c=upiDYeAZEsxbUBdhX35MXm79drIXA-5Q-FcfmZk71lM=",
  },
  {
    id: 2,
    title: "Sustainable Construction",
    date: "April 22, 2025",
    Discripton:
      "Learn about eco-friendly materials and how they reduce the environmental impact of your construction projects.",
    photo:
      "https://media.istockphoto.com/id/1134616891/photo/a-rear-view-of-businessman-commuter-with-electric-bicycle-traveling-to-work-in-city.jpg?s=612x612&w=0&k=20&c=RQhT36UzcLzA9AVZZvOCvQ6AiaX8RZT7sNAsAvV287M=",
  },
  {
    id: 3,
    title: "Architectural Legends",
    date: "March 15, 2025",
    Discripton:
      "A deep dive into the life and masterpieces of some of the world's most influential architects.",
    photo:
      "https://media.istockphoto.com/id/1922116393/photo/dynamic-collaboration-diverse-professionals-in-a-productive-business-meeting.jpg?s=612x612&w=0&k=20&c=9ROv0IAx40Kh1fPzemdCBgX0PZas3I3ceEzwSTXTqFA=",
  },
  
];

function Blog() {
  return (
    <div className="py-7 px-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-12 text-center text-pink-600">
        Our Blog
      </h1>

      <div className="grid md:grid-cols-3 gap-10">
        {blogPosts.map(({ id, title, date, Discripton, photo }) => (
          <div
            key={id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
          >
            {/* Blog photo */}
            <img
              src={photo}
              alt={title}
              className="w-full h-48 object-cover"
            />

            <div className="p-6">
              {/* Title and date */}
              <div className="mb-2">
                <h2 className="text-2xl font-semibold text-gray-800">
                  {title}
                </h2>
                <p className="text-sm p-2 text-gray-500">{date}</p>
              </div>

              {/* Description */}
              <p className="text-gray-900 italic text-xl">{Discripton}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
