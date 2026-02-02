import { useState } from "react";

const MultiProgressBar = () => {
  const [values, setValues] = useState([30, 50, 80]);

  const update = (i, val) => {
    val = Math.max(0, Math.min(100, Number(val)));
    const copy = [...values];
    copy[i] = val;
    setValues(copy);
  };

  const avg = values.reduce((a, b) => a + b, 0) / values.length;

  return (
    <div className="p-4 border mt-4">
      <h2 className="font-bold">Progress Bar</h2>

      {values.map((v, i) => (
        <input
          key={i}
          type="number"
          value={v}
          onChange={(e) => update(i, e.target.value)}
          className="border w-full mt-2"
        />
      ))}

      <div className="h-4 bg-gray-300 mt-3">
        <div
          className={`h-4 ${avg < 40 ? "bg-red-500" : avg > 70 ? "bg-green-500" : "bg-yellow-500"}`}
          style={{ width: `${avg}%` }}
        />
      </div>

      {values.map((v, i) => (
        <div key={i} className="h-2 bg-gray-200 mt-1">
          <div className="h-2 bg-blue-500" style={{ width: `${v}%` }} />
        </div>
      ))}
    </div>
  );
};

export default MultiProgressBar;
