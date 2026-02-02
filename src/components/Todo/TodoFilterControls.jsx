const FilterControls = ({ filter, setFilter }) => {
  const filters = ["all", "active", "completed"];

  return (
    <div className="flex gap-2 mb-3">
      {filters.map(f => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className={`px-3 py-1 border rounded ${
            filter === f ? "bg-blue-500 text-white" : ""
          }`}
        >
          {f}
        </button>
      ))}
    </div>
  );
};

export default FilterControls;
