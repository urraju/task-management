import { Link } from "react-router-dom";
import bannerImg from "../assets/banner/banner2.jpg";
import { TypeAnimation } from "react-type-animation";
const Banner = () => {
  return (
    <div className="p-2 md:p-5  ">
      <div className="flex max-w-screen-2xl mx-auto items-center justify-evenly">
        <div>
          <h1 className="text-5xl   font-bold ">
            Task Management
          </h1>
          <TypeAnimation
              className="text-rose-500 font-poppins text-sm  mb-4 mt-5"
              sequence={[
                "Create Your Favourite Task",
                1000,
                "Create Any Task",
                1000,
                "",
                1000,
                "Development Task Create",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            />

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />{" "}
            Autem recusandae quos amet Autem recusandae
            quos amet, similique labore rem.
          </p>
          <Link to='dashboard'>
            <button className="px-4 py-2 rounded bg-rose-500 font-rubik font-light text-white shadow-lg mt-4">
              Let's Explore
            </button>
          </Link>
        </div>
        <div>
          <img className="w-[700px]" src={bannerImg} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Banner;
