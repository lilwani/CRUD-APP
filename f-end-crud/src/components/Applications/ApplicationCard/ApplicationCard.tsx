import FullCard from "./FullCard";

function ApplicationCard() {
  return (
    <div className="flex min-h-screen w-[85%] flex-col gap-4 mb-2">
      <label>Showing 3 of 3 applications </label>
      {[1, 2, 3, 4].map((item) => (
        <FullCard />
      ))}
    </div>
  );
}

export default ApplicationCard;
