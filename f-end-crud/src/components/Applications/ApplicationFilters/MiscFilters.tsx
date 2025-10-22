function MiscFilter() {
  return (
    <div className="flex w-[15%] justify-between p-2 box-border">
      <select className="border rounded-2xl border-black py-1 bg-gray-100 text-sm text-center">
        <option>Date Applied</option>
        <option>Status</option>
        <option>Company</option>
        <option>Title</option>
      </select>
      <button className="border rounded-4xl p-2">
        <span>⬆️</span>
      </button>
    </div>
  );
}

export default MiscFilter;
