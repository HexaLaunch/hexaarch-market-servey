const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <img
              src="/images/home/hexaarchLogo.svg"
              alt="HEXAARCH"
              className="h-15 w-auto invert mb-8"
            />
            <p className="text-sm leading-relaxed">
              Empowering investors with smarter real estate opportunities
              through REITs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-md font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#reit" className="hover:underline">
                  REIT vs Traditional
                </a>
              </li>
              <li>
                <a href="#roi" className="hover:underline">
                  Roi calculator
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:underline">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-md font-semibold text-white mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:+9148027344111">
                  General Enquiry : +91 480 27344 111
                </a>
              </li>
              <li>
                <a href="tel:+914804445555">Sales Enquiry : +91 480 444 555</a>
              </li>
              <li>
                <a href="mailto:info@hexaarch.com">Email : info@hexaarch.com</a>
              </li>
              <li>
                <a href="tel:+914802739999">HR Enquiry : +91 480 2739 999</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-sm text-center text-gray-400">
          &copy; {new Date().getFullYear()} hexaarch. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
