function Footer() {
  return (
    <footer className="text-gray-300 py-6"
  style={
    {
    backgroundImage: `
      linear-gradient(140deg, rgba(28, 37, 41, 0.93), rgba(19, 22, 22, 0.73), rgba(23, 32, 26, 0.04)),
      linear-gradient(72deg, transparent, rgba(17, 22, 20, 0.64))
    `,
    backgroundColor: '#8c5ef3',
  }
  }
>
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Section 1: About */}
        <div>
          <h3 className="text-xl font-semibold mb-4 ">About</h3>
          <p className=" italic text-lg">
            We are dedicated to designing innovative, sustainable, and beautiful spaces.
            Our approach combines creativity with visions into reality. 
            By blending technology with environmentally conscious practices, we create environments that are both responsible .
          </p>
        </div>

        {/* Section 2: Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/about" className="hover:text-white transition">About</a></li>
            <li><a href="/services" className="hover:text-white transition">Services</a></li>
            <li><a href="/projects" className="hover:text-white transition">Projects</a></li>
            <li><a href="/blog" className="hover:text-white transition">Blog</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Section 3: Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Contact Us</h3>
          <p>Gokulpura kalakh Jobner (Jaipur)</p>
          <p>Email :- <a href="mailto:ktarachand@gmail.com" className="text-blue-400 hover:underline">ktarachand@gmail.com</a></p>
          <p>Phone:- <a href="tel:+919782468792" className="text-blue-400 hover:underline">+91 9782468792</a></p>

          {/* Icons */}
          <div className="flex space-x-4 mt-4">
            {/* Facebook */}
            <a href="#" aria-label="Facebook" className="text-blue-600 hover:text-white transition">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 10-11.63 9.86v-6.97h-2.7v-2.9h2.7V9.41c0-2.67 1.6-4.14 4.05-4.14 1.17 0 2.4.21 2.4.21v2.65h-1.34c-1.32 0-1.73.82-1.73 1.66v2h2.94l-.47 2.9h-2.47v6.97A10 10 0 0022 12z" />
              </svg>
            </a>

            {/* Twitter */}
            <a href="#" aria-label="Twitter" className="text-sky-400 hover:text-white transition">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14.86 4.48 4.48 0 001.98-2.48 9.08 9.08 0 01-2.88 1.1A4.52 4.52 0 0016.2 2a4.48 4.48 0 00-4.43 5.52 12.78 12.78 0 01-9.29-4.71 4.49 4.49 0 001.39 6 4.4 4.4 0 01-2.05-.57v.06a4.49 4.49 0 003.6 4.4 4.5 4.5 0 01-2.03.07 4.49 4.49 0 004.19 3.13A9 9 0 012 19.54a12.6 12.6 0 006.88 2" />
              </svg>
            </a>

            {/* Instagram */}
            <a href="#" aria-label="Instagram" className="text-pink-500 hover:text-white transition">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 2A3.75 3.75 0 004 7.75v8.5A3.75 3.75 0 007.75 20h8.5a3.75 3.75 0 003.75-3.75v-8.5A3.75 3.75 0 0016.25 4h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6zm4.5-1a1 1 0 110 2 1 1 0 010-2z" />
              </svg>
            </a>

            {/* WhatsApp */}
            <a href="#" aria-label="WhatsApp" className="text-green-500 hover:text-white transition">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 32 32">
                <path d="M16.003 3.2a12.8 12.8 0 00-12.78 12.781c0 2.255.613 4.457 1.77 6.38l-1.875 6.625 6.8-1.781a12.757 12.757 0 006.084 1.547h.001a12.8 12.8 0 000-25.552zm0 23.2a10.96 10.96 0 01-5.566-1.514l-.4-.24-4.034 1.056 1.075-3.944-.26-.406a10.927 10.927 0 01-1.69-5.85c0-6.048 4.918-10.966 10.966-10.966 2.93 0 5.687 1.14 7.757 3.21a10.899 10.899 0 013.21 7.757c-.002 6.047-4.92 10.965-10.968 10.965zm6.005-8.26c-.328-.164-1.941-.957-2.243-1.063s-.52-.164-.738.164-.848 1.063-1.04 1.283c-.191.219-.382.246-.71.082-.328-.164-1.381-.509-2.63-1.62-.972-.867-1.63-1.937-1.821-2.265-.191-.328-.02-.504.144-.668.148-.147.328-.383.492-.574.164-.191.219-.328.328-.547.109-.219.055-.41-.027-.574-.082-.164-.738-1.782-1.01-2.449-.266-.64-.536-.551-.738-.562l-.629-.01c-.218 0-.574.082-.875.41s-1.148 1.121-1.148 2.735 1.176 3.174 1.34 3.392c.164.219 2.319 3.543 5.625 4.968.787.34 1.4.543 1.878.695.788.25 1.504.215 2.07.131.631-.094 1.941-.793 2.215-1.56.27-.765.27-1.418.188-1.559-.08-.14-.3-.218-.628-.383z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
