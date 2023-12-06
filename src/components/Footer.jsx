import React from "react";

const Footer = () => {
  return (
    <>
      <div className="news flex items-center justify-center mt-20">
        <div className="news-text text-center bg-accent p-12 rounded w-full h-60">
          <h2 className="text-white text-3xl font-semibold">Newsletter</h2>
          <form className="mt-10">
            <input
              type="email"
              placeholder="your@email.com"
              className="border p-2 mr-2"
            />
            <button
              type="submit"
              className="bg-secondary text-white px-4 py-2 rounded "
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <footer className="bg-secondary text-white p-12 ">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          {/* Column 1 */}
          <div>
            <p className="text-lg font-semibold mb-4 text-accent uppercase">
              About Us
            </p>
            <p className="text-sm">
              Welcome to Your News Hub — your trusted source for the latest news
              and headlines. We're committed to delivering accurate, timely, and
              diverse content across breaking news, business updates, sports,
              and entertainment. Our app is tailored to your interests, offering
              a curated selection from reputable sources worldwide. Join us on
              this journey of staying informed and making sense of the world.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <p className="text-lg font-semibold mb-4 text-accent uppercase">
              Stay Connected
            </p>
            <div className="flex flex-col space-y-2">
              <a href="#" className="text-primary hover:text-accent">
                Twitter
              </a>
              <a href="#" className="text-primary hover:text-accent">
                Facebook
              </a>
              <a href="#" className="text-primary hover:text-accent">
                Instagram
              </a>
            </div>
          </div>

          {/* Column 3 */}
          <div>
            <p className="text-lg font-semibold mb-4 text-accent uppercase">
              Contact Us
            </p>
            <p className="text-sm">Email: info@example.com</p>
            <p className="text-sm">Phone: +1 (123) 456-7890</p>
          </div>
        </div>

        <hr className="my-8 border-t border-gray-600" />

        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} News App. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
