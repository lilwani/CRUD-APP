import SkillBadge from "../misc/SkillBadge";
import "./SkillSet.module.css";

const skills =
  "Node.js|React.js|Express.js|Redux Toolkit|Microsoft SQL Server|Apache Kafka|AKS|Jest|React Testing Library|Typescript|Microservices|FullStack DevelopementNode.js|React.js|Express.js|Redux Toolkit|Microsoft SQL Server|Apache Kafka|AKS|Jest|React Testing Library|Typescript|Microservices|FullStack DevelopementNode.js|React.js|Express.js|Redux Toolkit|Microsoft SQL Server|Apache Kafka|AKS|Jest|React Testing Library|Typescript|Microservices|FullStack DevelopementNode.js|React.js|Express.js|Redux Toolkit|Microsoft SQL Server|Apache Kafka|AKS|Jest|React Testing Library|Typescript|Microservices|FullStack Developement";
const skillsetArray = skills.split("|");

const SkillSet = () => {
  return (
    <div className="w-[60%] border-black border-1 rounded-2xl flex flex-row flex-wrap p-6 box-border gap-3 text-ellipsis overflow-y-auto">
      {skillsetArray.map((item, index) => (
        <SkillBadge label={item} key={index} />
      ))}
    </div>
  );
};

export default SkillSet;
