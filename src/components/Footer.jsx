import React from 'react'
// Footer background moved to public/assets
const back = '/assets/Footer.png'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer
      style={{
        minHeight: 350,
        backgroundImage: `url(${back})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="footer-class"
    >
      <div className="mx-auto w-full">
        <div className="mx-auto w-full max-w-screen-xl p-3 py-6 lg:py-8">
          <div className="flex flex-col lg:flex-row justify-between gap-8">
            <div className="mb-6 md:mb-0 flex-1">
              <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mt-5">
                <i>IETE THAPAR</i>
              </p>
              <p className="font-ABeeZee text-base sm:text-lg lg:text-xl text-white mt-5 leading-relaxed">
                Companies that can help you in
                <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>developing your company for
                the
                <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>future
              </p>
            </div>
            <div className="grid gap-8 sm:gap-12 grid-cols-1 sm:grid-cols-2 flex-1">
              <div>
                <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mt-5">
                  <i>PROJECTS</i>
                </p>
                <ul className="text-gray-500 font-medium mt-4 space-y-2">
                  <li>
                    <Link
                      to="/web-development"
                      className="text-white text-base sm:text-lg transition-colors duration-300 hover:text-purple-700"
                    >
                      Web Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/ui-ux"
                      className="text-white text-base sm:text-lg transition-colors duration-300 hover:text-purple-700"
                    >
                      UI/UX Designer
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/branding"
                      className="text-white text-base sm:text-lg transition-colors duration-300 hover:text-purple-700"
                    >
                      Branding
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/shopify"
                      className="text-white text-base sm:text-lg transition-colors duration-300 hover:text-purple-700"
                    >
                      Shopify
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mt-5">
                  <i>BOOTCAMPS</i>
                </p>
                <ul className="text-gray-500 font-medium mt-4 space-y-2">
                  <li>
                    <Link
                      to="/chatbot-training"
                      className="text-white text-base sm:text-lg transition-colors duration-300 hover:text-purple-700"
                    >
                      Data-Based Chatbot Training
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/model-fine-tuning"
                      className="text-white text-base sm:text-lg transition-colors duration-300 hover:text-purple-700"
                    >
                      Model Fine-Tuning
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/sales-customer-service"
                      className="text-white text-base sm:text-lg transition-colors duration-300 hover:text-purple-700"
                    >
                      Sales & Customer Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <span className="text-base sm:text-lg text-white text-center sm:text-left">
              IETE THAPAR © 2024
            </span>
            <div className="flex justify-center sm:justify-end space-x-5">
              <Link
                to="https://www.instagram.com/iete_thapar?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                className="text-white hover:text-purple-500 text-xl"
                aria-label="Instagram page"
              >
                <i className="fa-brands fa-instagram"></i>
              </Link>
              <Link
                to="#"
                className="text-white hover:text-purple-500 text-xl"
                aria-label="Whatsapp group"
              >
                <i className="fa-brands fa-whatsapp"></i>
              </Link>
              <Link
                to="https://www.linkedin.com/company/iete-thapar/mycompany/"
                className="text-white hover:text-purple-500 text-xl"
                aria-label="LinkedIn page"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </Link>
              <Link
                to="#"
                className="text-white hover:text-purple-500 text-xl"
                aria-label="Twitter page"
              >
                <i className="fa-brands fa-twitter"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
