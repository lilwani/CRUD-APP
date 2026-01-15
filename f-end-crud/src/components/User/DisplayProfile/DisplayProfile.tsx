import { useSelector } from "react-redux";
import { userDetails } from "../userSlice";
import OverviewProfile from "./OverviewProfile";
import WorkExp from "./WorkExp";
import ContactInfo from "./ContactInfo";
import SkillSet from "./SkillSet";

const DisplayProfile = () => {
  const user = useSelector(userDetails);

  return (
    <div className="flex border-2 border-b-blue-800 rounded-2xl h-full w-full flex-col items-center">
      <OverviewProfile />
      <WorkExp />
      <div className="flex flex-row w-[80%] h-[30%] justify-between m-4 gap-8">
        <ContactInfo />
        <SkillSet />
      </div>
    </div>
  );
};

export default DisplayProfile;
