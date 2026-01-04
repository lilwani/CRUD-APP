import { Link } from "react-router-dom";
import {
  PlusIcon,
  UserCircleIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { MapPinIcon } from "@heroicons/react/24/solid";
import styles from "./DisplayProfile.module.css";

const OverviewProfile = () => {
  return (
    <div className="w-[80%] border-black border-1 m-4 h-[25%] rounded-2xl flex flex-col">
      <div className="w-full h-[70%] justify-between flex flex-row">
        <div className=" w-[80%] flex h-full">
          <span>
            <UserCircleIcon className="size-26 text-gray-400" />
          </span>
          <div className="flex flex-col box-border pt-4 pl-3">
            <p className="text-2xl tracking-widest">Yash Lilwani</p>
            <p className="text-xs pt-2">
              <ChevronRightIcon className="size-5 inline-block" />
              <span
                className={`align-middle ${styles.subdata} tracking-widest`}
              >
                {" "}
                yashlilwani18@gmail.com
              </span>
            </p>
            <p className="text-xs "></p>
            <p className="text-xs pt-2">
              <MapPinIcon className="size-5 inline-block" />
              <span
                className={`align-middle ${styles.subdata} tracking-widest`}
              >
                {" "}
                Maharashtra, India
              </span>
            </p>
          </div>
        </div>
        <div className="grow flex items-center justify-center ">
          <Link
            to="/addCard"
            className="bg-black text-white rounded-2xl text-center text-xl h-10 w-45 flex items-center justify-center "
          >
            <PlusIcon className="size-7 text-purple-700" /> Edit Profile
          </Link>
        </div>
      </div>
      <div
        className={`text-gray-800 w-full box-border line-clamp-2 text-sm pl-4 tracking-widest`}
      >
        Experienced software engineer with over 7 years of experience adept in
        technologies such as React, Node showcasing potential in complete full
        stack development role. Also expertise in microservices and REST API
        development. Experience in performing lead role activities and
        participating in internal interviews for hiring potential competent
        candidates.
      </div>
    </div>
  );
};

export default OverviewProfile;
