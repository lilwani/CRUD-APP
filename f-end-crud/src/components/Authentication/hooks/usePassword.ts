import { useState } from "react";

export const usePassword = () => {
  const [strength, setStrength] = useState(0);

  console.log("IN Password");

  const evaluateStrength = (pwd: string) => {
    let totalStrength = 0;
    console.log("In evaluation ");

    pwd.match(/[A-Z]/)?.length && totalStrength++;
    pwd.match(/[a-z]/)?.length && totalStrength++;
    pwd.match(/[0-9]/)?.length && totalStrength++;
    pwd.match(/[+=-@_*$]/)?.length && totalStrength++;

    setStrength(totalStrength);
  };

  const getLabel = () => {
    console.log("IN getLabel");
    return ["Ice Cold", "Colder", "Hot", "Hotter", "RED HOT"][strength];
  };

  return { evaluateStrength, getLabel, strength };
};
