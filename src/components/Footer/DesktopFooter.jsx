import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate =useNavigate()
  return (
    <footer className="bg-gray-50 text-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-12 gap-6 items-start">
          <div className="col-span-12 sm:col-span-6 md:col-span-2">
            <div className="mb-6">
              <div className="text-2xl font-extrabold text-green-600">
                <img
                  src="https://thekanaa.com/media/logo/stores/1/Client_logo.svg"
                  alt="logo"
                  className="h-4"
                  onClick={() => navigate("/")}
                />
              </div>
            </div>
          </div>

          <div className="col-span-12 sm:col-span-6 md:col-span-2">
            <h4 className="text-sm font-medium mb-3">Policy Info</h4>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>Terms &amp; Conditions</li>
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
              <li>Disclaimer</li>
            </ul>
          </div>

          <div className="col-span-12 sm:col-span-6 md:col-span-2">
            <h4 className="text-sm font-medium mb-3">About Kanaa</h4>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>About Us</li>
              <li>Referrals</li>
              <li>Careers</li>
              <li>Testimonials</li>
              <li>News Room</li>
            </ul>
          </div>

          <div className="col-span-12 sm:col-span-6 md:col-span-2">
            <h4 className="text-sm font-medium mb-3">Explore</h4>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>Our Brands</li>
              <li>New in</li>
              <li>Trending</li>
              <li>Kanaa Rewards</li>
            </ul>
          </div>

          <div className="col-span-12 md:col-span-4">
            <h4 className="text-sm font-medium mb-3">Join our newsletter</h4>
            <p className="text-sm text-gray-600 mb-4">
              Sign up to be the first to know about any updates!
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="mb-4 w-3/4">
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </span>

                <input
                  className="w-full pl-12 pr-12 py-3 rounded-lg border border-gray-200 bg-white text-sm placeholder-gray-400 shadow-sm"
                  placeholder="Enter Email address"
                />

                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white border border-gray-200 rounded-md p-2 shadow-sm"
                  aria-label="subscribe"
                >
                  <svg
                    className="h-5 w-5 text-gray-700"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </form>

            <div className="flex items-center gap-4 ">
              <a
                href="#"
                className="flex items-center px-4 py-1 bg-black text-white rounded-lg shadow-md"
              >
                <img
                  src="https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg"
                  alt="logo"
                  className="h-8 md:h-11"
                />
                <div className="text-left">
                  <div className="text-[8px] leading-1.1">Download app</div>
                  <div className="text-[10px] font-semibold">on App store</div>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center px-4 py-1 bg-white border border-gray-200 rounded-lg shadow-sm"
              >
                <img
                  src="https://img.freepik.com/premium-vector/play-store-logo-vector-clip-art-icon-graphics-design-free-download_1302809-544.jpg?semt=ais_incoming&w=740&q=80"
                  alt="logo"
                  className="h-8 md:h-11"
                />

                <div className="text-left">
                  <div className="text-[8px]">Download app</div>
                  <div className="text-[10px] font-semibold">on Play store</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10  pt-6">
          <div className="text-center text-xs text-gray-600">
            <span className="mx-4">CR Number: 4030576132</span>
            <span className="mx-4">
              Vat Registeration Number: 312499543900003
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
