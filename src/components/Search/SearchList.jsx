import { useState } from "react";

const names = ["Karthik", "Gowtham", "Jeevan", "Bharath","venu","Mahesh","Ramesh"];

const highlight = (text, query) => {
  if (!query) return text;
  return text.split(new RegExp(`(${query})`, "gi")).map((p, i) =>
    p.toLowerCase() === query.toLowerCase()
      ? <b key={i} className="text-blue-500">{p}</b>
      : p
  );
};

const SearchList = () => {
  const [q, setQ] = useState("");

  const filtered = names.filter(n =>
    n.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <div className="p-4 border mt-4">
      <h2 className="font-bold">Live Search</h2>
      <input
        className="border p-1"
        value={q}
        onChange={e => setQ(e.target.value)}
      />
      <p>Results: {filtered.length}</p>

      {filtered.length === 0 && <p>No matches found</p>}

      {filtered.map((n, i) => (
        <div key={i}>{highlight(n, q)}</div>
      ))}
    </div>
  );
};

export default SearchList;
