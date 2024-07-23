import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { footerLinks } from "../utils/data";
import { Link } from "react-router-dom";
import TextInput from "./TextInput";
import CustomButton from "./CustomButton";

const Footer = () => {
  return (
    <footer className="text-white mp-20">
      <div className="overflow-x-hidden -mb-0.5">
        <svg
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            fill: "#6db5b5",
            width: "125%",
            height: 112,
            transform: "rotate(180deg)",
          }}
        >
          <path d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z" />
        </svg>
      </div>

      <div className="bg-[#6db5b5] ">
        <div className="container px-5 py-20 mx-auto ">
          <div className="w-full flex flex-wrap gap-10 justify-between -mb-10 -px-4">
            {footerLinks.map(({ id, title, links }) => (
              <div className="w-auto px-4 " key={id + title}>
                <h2
                  className="font-medium tracking-widest  mb-3"
                  style={{ fontSize: "20px", color: "blue" }}
                >
                  {title}
                </h2>

                <div className="mb-10 flex flex-col gap-3 ">
                  {links.map((link, indexedDB) => (
                    <Link
                      key={link}
                      to="/"
                      className="text-gray-200 text-sm hover:text-white "
                      style={{ fontSize: "20px" }}
                    >
                      {link}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="">
          <p
            className="container px-5 mx-auto text-white mt-2 "
            style={{ fontSize: "20px" }}
          >
            Subscribe to our Newsletter
          </p>

          <div className="container mx-auto px-5 pt-6 pb-8 flex flex-wrap items-center justify-between ">
            <div className="w-full md:w-2/4 lg:w-1/3 h-16 flex items-center justify-center md:justify-start ">
              <TextInput
                styles="w-full flex-grow md:w-40 2xl:w-64 bg-gray-100 sm:mr-4 md-2 text-black"
                type="email"
                placeholder="Email Address"
              />

              <CustomButton
                onClick={() =>
                  (window.location.href = "mailto:sunnysunny968667@gmail.com")
                }
                title="Subscribe"
                containerStyles={
                  "block bg-[#001a36] text-white px-5 py-2.5 text-md rounded hover:bg-blue-800 focus:potline-none flex-col items-center mt-2"
                }
              />
            </div>

            <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
              <a href="https://www.facebook.com/profile.php?id=100025448063447&mibextid=JRoKGi" className="text-white text-xl  hover:scale-125 ease-in-out duration-300">
                <FaFacebookF />
              </a>
              <a href="'https://github.com/sunny-star'" className="ml-3 text-white text-xl  hover:scale-125 ease-in-out duration-300">
                <FaGithub />
              </a>
              <a href="https://www.instagram.com/sunny_chiluka07?igsh=eGVjZDA2enF1bXo4" className="ml-3 text-white text-xl  hover:scale-125 ease-in-out duration-300">
                <FiInstagram />
              </a>

              <a href="https://www.linkedin.com/in/sunnychiluka/" className="ml-3 text-white text-xl  hover:scale-125 ease-in-out duration-300">
                <FaLinkedinIn />
              </a>
            </span>
          </div>
        </div>

        <div className="bg-[#001a36]">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-300 text-sm text-center sm:text-left">
              &copy; 2024 Job Quest
              {/* <a
                href="https:"
                className="text-[#1199e7] ml-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                @Shanthi
              </a> */}
            </p>

            <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-300 text-sm">
              Built &nbsp; with 💖 by SUNNY
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
