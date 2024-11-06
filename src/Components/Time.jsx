import { useEffect, useRef } from "react";

function Time() {
  const timerRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (timerRef.current) {
        timerRef.current.innerHTML = new Date().toLocaleTimeString([], {
          hour12: true,
        });
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <h1 className="text-3xl w-1/3 datetime pl-16" ref={timerRef}>
      {new Date().toLocaleTimeString([], { hour12: true })}
    </h1>
  );
}

export default Time;
