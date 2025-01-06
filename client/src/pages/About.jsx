
import { JobImg } from "../assets";

const About = () => {
  return (
    <div className="container mx-auto flex flex-col gap-8 2xl:gap-14 py-6 m-13 ">
      <div className="w-full flex flex-col-reverse md:flex-row gap-10 items-center p-5">
        <div className="w-full md:2/3 2xl:w-2/4">
          <h1 className="text-3xl text-blue-600 font-bold mb-5">About Us</h1>
          <p className="text-justify leading-7">
            Welcome to Job Portal, where our mission is to bridge the gap
            between talented job seekers and employers looking for the perfect
            fit. Founded by Sunny, our platform offers a seamless and
            efficient job search experience, leveraging cutting-edge technology
            and an intuitive design. We understand that finding the right job or
            the ideal candidate can be challenging, and thats why weve
            dedicated ourselves to creating a user-friendly environment that
            simplifies the process for both parties. Whether youre looking to
            advance your career or seeking top talent for your organization, Job
            Portal is here to support you every step of the way.
          </p>
        </div>
        <img src={JobImg} alt="About" className="w-auto h-[300px]" />
      </div>

      <div className="leading-8 px-5 text-justify">
        <p>
          At Job Portal, our values of transparency, integrity, and inclusivity
          drive everything we do. Our team, led by experienced professionals in
          the recruitment and tech industries, is committed to providing the
          best possible service. With a diverse range of job listings, advanced
          search filters, and personalized recommendations, we aim to match job
          seekers with opportunities that align with their skills and
          aspirations. For employers, we offer innovative recruitment solutions
          that streamline the hiring process and help identify the best
          candidates quickly and efficiently. Join us at Job Portal and take the
          next step towards achieving your career or hiring goals.
        </p>
      </div>
    </div>
  );
};

export default About;
