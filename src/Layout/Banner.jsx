import { Link } from "react-router-dom";
import bannerImg from "../assets/banner/banner.jpg";
const Banner = () => {
  return (
    <div className="p-2 md:p-5 bg-white">
      <div className="flex max-w-screen-2xl mx-auto items-center justify-evenly">
        <div>
          <h1 className="text-4xl font-rubik font-bold mb-2">
            Task Management
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />{" "}
            Autem recusandae quos amet, similique labore rem.Autem recusandae
            quos amet, similique labore rem.
          </p>
          <Link to='dashboard'>
            <button className="px-4 py-2 rounded bg-blue-600 font-rubik font-light text-white shadow-lg mt-4">
              Let's Explore
            </button>
          </Link>
        </div>
        <div>
          <img className="w-[800px]" src={bannerImg} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Banner;
