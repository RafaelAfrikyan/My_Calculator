import React, { useState, useEffect } from "react";

function Time() {
  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 1000);
  }, []);
  return (
    <div>
      <p className="time">
        {dateState.toLocaleString("ru-Ru", {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour24: true,
        })}
      </p>
    </div>
  );
}

export default Time;
