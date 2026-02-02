import { useEffect, useRef, useState } from "react";

const CountdownTimer = () => {
  const [input, setInput] = useState(10);
  const [time, setTime] = useState(10000);
  const [status, setStatus] = useState("Stopped");
  const ref = useRef(null);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("timer"));
    if (saved) {
      const passed = Date.now() - saved.last;
      setTime(Math.max(0, saved.time - passed));
      setStatus(saved.status);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("timer", JSON.stringify({
      time, status, last: Date.now()
    }));
  }, [time, status]);

  const start = () => {
    setStatus("Running");
    ref.current = setInterval(() => {
      setTime(t => {
        if (t <= 10) {
          clearInterval(ref.current);
          setStatus("Completed");
          return 0;
        }
        return t - 10;
      });
    }, 10);
  };

  return (
    <div className="p-4 border mt-4">
      <h2 className="font-bold">Timer</h2>
      <input
        type="number"
        disabled={status === "Running"}
        value={input}
        onChange={e => {
          setInput(e.target.value);
          setTime(e.target.value * 1000);
        }}
      />

      <div className="text-xl mt-2">{(time / 1000).toFixed(2)}</div>
      <p>Status: {status}</p>

      {status === "Stopped" && <button onClick={start}>Start</button>}
      {status === "Running" && <button onClick={() => {
        clearInterval(ref.current);
        setStatus("Paused");
      }}>Pause</button>}
      {status === "Paused" && <button onClick={start}>Resume</button>}
      <button onClick={() => {
        clearInterval(ref.current);
        setStatus("Stopped");
        setTime(input * 1000);
      }}>Reset</button>
    </div>
  );
};

export default CountdownTimer;
