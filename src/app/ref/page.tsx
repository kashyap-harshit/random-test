"use client";
import React, { useRef, useState } from "react";

function Ref() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const startTimeRef = useRef<number>(null);
  const [timeTaken, setTimeTaken] = useState<number | null | string>(null);
  const targetText = "hello world";
  const handleFocus = () => {
    if (!startTimeRef.current) {
      startTimeRef.current = Date.now();
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === targetText) {
      const endTime = Date.now();
      setTimeTaken(((endTime - startTimeRef.current!) / 1000).toFixed(2));
      startTimeRef.current = null;
      e.target.value = "";
    }
  };
  const reset = () => {
    setTimeTaken(null);
    startTimeRef.current = null;
    inputRef.current!.focus();
  };

  return (
    <div className="p-4 max-w-sm mx-auto text-center">
      <h2 className="text-xl font-semibold mb-2">Typing Speed Tracker</h2>
      <p className="text-gray-600 mb-3">
        Type this: <b>{targetText}</b>
      </p>
      <input
        ref={inputRef}
        type="text"
        placeholder="Start typing..."
        onFocus={handleFocus}
        onChange={handleChange}
        className="border rounded p-2 w-full"
      />
      {timeTaken && (
        <div className="mt-4">
          <p>You took {timeTaken} seconds!</p>
          <button
            onClick={reset}
            className="mt-2 px-3 py-1 bg-blue-500 text-white rounded"
          >
            Try Again
          </button>
        </div>
      )}
    </div>
  );
}

export default Ref;
