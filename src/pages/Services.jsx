function Services() {
  const services = [
    
    {
      title: "Graphic Design",
      description:
        "Graphic designer with a strong passion for visual I craft logos, posters, social media banners,materials.",
      image: "https://images.unsplash.com/photo-1586455122341-927f2dec0691?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdyYXBoaWN8ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "Website Development",
      description:
        "Creative website developer experience in responsive and websites using HTML, CSS, JavaScript, React, Node.js.",
      image: "https://media.istockphoto.com/id/1439552196/photo/young-serious-software-developer-working-in-front-of-computer-monitors.jpg?s=612x612&w=0&k=20&c=cWoiOaNUnaVGcAafAmOeT64KryVfqyO0O2n2778d3l8=",
    },
    {
      title: "Project Management",
      description:
        "project manager with a strong ability to plan, execute, deliver projects on time and within budget.",
      image: "https://media.istockphoto.com/id/1475085792/photo/co-workers-gathered-around-a-desk-in-a-office-cubicle-working-and-discussing-together-using-a.jpg?s=612x612&w=0&k=20&c=50dQWuoCa7d87CP_OZpMCiRx5sPyN7uxpT2F6AEpcxU=",
    },
    {
      title: "Digital Marketing",
      description:
        "Skilled digital marketer with expertise in SEO, social media, content marketing, and online advertising.",
      image: "https://media.istockphoto.com/id/1366312960/photo/digital-marketing-manager-working-on-social-media-network-advertising-online-ad-on-internet.jpg?s=612x612&w=0&k=20&c=7tOvh68BrGKQ5qEYBIKiO232GxYG7iy3N8k63gXrUaI=",
    },
    {
      title: "Data Management",
      description:
        "data management professional with experience in organizing, maintaining, and analyzing large datasets.",
      image: "https://media.istockphoto.com/id/864488472/photo/data.jpg?s=612x612&w=0&k=20&c=XgAVIigBirszBuyBue5HVDblwhsiUeudO1nC4Gd0CAo=",
    },
    {
      title: "Video Editing",
      description:
        "Creative video editor with a passion for storytelling. I specialize in editing promotional videos, YouTube content .",
      image: "https://media.istockphoto.com/id/1310442977/photo/professional-cutting-room-for-video-editing-and-video-producing-monitors-camera-and-sound.jpg?s=612x612&w=0&k=20&c=OHKJAIXAkIaensFr2zFGlohTZuDXTipvF1PyN06DGZw=",
    },
  ];

  return (
    <div className="py-10 px-4 max-w-7xl mx-auto text-gray-800">
      {/* Page Heading */}
      <h1 className="text-3xl font-bold mb-6 text-pink-600 text-center">
        Our Services
      </h1>
      <p className="text-xl italic text-gray-800 text-center mb-12 max-w-3xl mx-auto">
        We provide a wide range of services that combine design excellence,
        sustainable practices  vision to life.
      </p>

      {/* Services Grid */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-10">
        {services.map((service, i) => (
          <div
            key={i}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-300"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2 text-gray-900">
                {service.title}
              </h2>
              <p className="text-gray-900 italic text-xl">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
