import styles from "./ContactInfo.module.css";

const ContactInfo = () => {
  return (
    <div className="w-[40%] border-black border-1 rounded-2xl flex flex-col p-6 gap-3">
      <p className="tracking-widest text-xl pb-12">Personal Details</p>
      <div className="flex flex-row justify-between items-baseline">
        <label className="text-2xl w-40 ">
          <b>Phone Number</b>
        </label>
        <p className="tracking-widest text-sm text-left flex-2 border-1 border-gray-400 box-border pl-2 rounded-xl">
          +91 9130617666
        </p>
      </div>
      <div className="flex flex-row justify-between items-baseline">
        <label className="text-2xl w-40 ">
          <b>Email</b>
        </label>
        <p className="tracking-widest text-sm text-left flex-2 border-1 border-gray-400 box-border pl-2 rounded-xl ">
          yashlilwani18@gmail.com
        </p>
      </div>
      <div className="flex flex-row justify-between items-baseline">
        <label className="text-2xl w-40 ">
          <b>Address</b>
        </label>
        <p className="tracking-widest text-sm text-left flex-2 border-1 border-gray-400 box-border pl-2 rounded-xl">
          Pune
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
