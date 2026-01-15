import SkillBadge from "../misc/SkillBadge";
import styles from "../User.module.css";

const skills = [
  "Node.js",
  "React.js",
  "Apache Kafka",
  "MSSQL",
  "Microservices",
];

const WorkExp = () => {
  return (
    <div className="w-[80%] border-black border-1 m-4 h-[30%] rounded-2xl flex flex-col box-border p-6 overflow-y-auto max-h-[30%]">
      <p className="tracking-widest text-xl pb-12">Work Experience</p>
      <div className="flex flex-row border-1 border-gray-400 rounded-2xl h-12 justify-evenly items-center ">
        <p
          className={`${styles.greyTextDetails} text-xs sm:text-xs md:text-sm lg:text-md `}
        >
          Cognizant Technology Solutions
        </p>
        <p
          className={`${styles.greyTextDetails} text-xs sm:text-xs md:text-sm lg:text-md`}
        >
          March 2022 - Present
        </p>
        <p
          className={`${styles.greyTextDetails} text-xs sm:text-xs md:text-sm lg:text-md`}
        >
          Service History{" "}
          <span>
            <SkillBadge label="..." />
          </span>
        </p>
        <div>
          <label className={styles.greyTextDetails}>Top 5 skills</label>
          {skills.map((item) => (
            <SkillBadge label={item} key={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkExp;
