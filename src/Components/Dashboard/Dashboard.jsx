import {
  FaBars,
  FaEnvelope,
  FaShoppingCart,
  FaUser,
  FaUsers,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

import {
  MdHome,
  MdPayments,
  MdReportProblem,
  MdReviews,
  MdStars,
} from "react-icons/md";
import { AiFillAccountBook, AiFillHome } from "react-icons/ai";
import HelmetUse from "../Shared/HelmetUse";
import useAuth from "../../Hooks/useAuth";

const DashBoard = () => {
  const { user } = useAuth();

  return (
    <div>
      <HelmetUse helmet={"Dashboard"} />
      <div className=" w-full p-2 flex flex-col md:flex-row md:p-5 gap-10 justify-evenly    max-w-screen-2xl mx-auto">
        <div className="bg-gradient-to-bl to-yellow- from-rose-700 rounded-lg p-10 md:w-[500px]  h-max md:min-h-screen">
          <div>
            <div className="flex gap-3 items-center mb-5 ">
              <div className="border rounded-full p-2">
                <img className="rounded-full w-24" src={user.photoURL} alt="" />
              </div>
              <div>
                <p className=" text-rose-200  font-rubik text-2xl">{user.displayName}</p>
                <p className="text-rose-200">{user.email}</p>
              </div>
            </div>
          </div>

          <ul className="flex flex-col gap-4">
             
              <>
                <li>
                  <NavLink
                    className="flex font-roboto gap-2 items-center uppercase"
                    to="/DashBoard/adminHome"
                  >
                    <AiFillHome className="text-lg" />
                     User Home
                  </NavLink>
                </li>
                

                <li>
                  <NavLink
                    className="flex font-roboto  gap-2 items-center uppercase"
                    to="/DashBoard/manageCoupon"
                  >
                    <AiFillAccountBook className="text-xl" />
                    Manage Task
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className="flex  uppercase font-roboto gap-2 items-center"
                    to="/DashBoard/allusers"
                  >
                    <FaUsers className="text-lg" />
                    All User
                  </NavLink>
                </li>
              </>
          
           
              <>
                <li>
                  <NavLink
                    className="flex font-roboto   gap-2 items-center uppercase"
                    to="/DashBoard/myProfile"
                  >
                    <FaUser className="text-lg" />
                    My Profile
                  </NavLink>
                </li>
                

                <li>
                  <NavLink
                    className="flex font-roboto  gap-2 items-center uppercase"
                    to="/DashBoard/addProduct"
                  >
                    <FaShoppingCart className="text-lg" />
                    Add Product
                  </NavLink>
                </li>
                
              </>
         
          </ul>

          <div className="border-b mt-5"></div>

          <ul className="mt-4 flex flex-col gap-3">
            <NavLink
              className="flex font-roboto  gap-2 items-center uppercase"
              to="/"
            >
              <MdHome className="text-xl" />
              Home
            </NavLink>
            <NavLink
              className="flex font-roboto  gap-2 items-center uppercase"
              to="/DashBoard/cart"
            >
              <FaBars className="text-lg" />
              Menu
            </NavLink>
           
            <NavLink
              className="flex font-roboto  gap-2 items-center uppercase"
              to="/DashBoard/cart"
            >
              <FaEnvelope className="text-lg" />
              contact
            </NavLink>
          </ul>
        </div>

        <div className=" md:col-span-8   rounded-lg w-full bg-opacity-20 bg-gradient-to-tl from-sky-100  justify-center flex ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default DashBoard;
