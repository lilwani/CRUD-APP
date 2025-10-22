function StatusFilter() {
  return (
    <div className="text-sm w-[45%]">
      <select className="border w-full text-center py-1 bg-gray-100 rounded-2xl shadow-sm shadow-blue-200 transition-shadow duration-300 ease-in-out hover:shadow-lg focus:outline-none focus:ring-1 focus:ring-blue-500">
        <option>Offered</option>
        <option>Rejected</option>
        <option>Applied</option>
        <option>Referred</option>
        <option>Interview</option>
        <option>Withdrawn</option>
      </select>
    </div>
  );
}

export default StatusFilter;
