"use client";
import React, { useEffect, useRef, useState } from "react";

export default function Ref2() {
  const [count, setCount] = useState(0);
  const useRefWalaCount = useRef(0);
  let normalCount = 0;
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current += 1;
  });
  return (
    <div className="p-6 text-center max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-3">Render Counter</h2>
      <p className="mb-2">UseState Count: {count}</p>
      <p className="mb-2">UseRef Count: {useRefWalaCount.current}</p>
      <p className="mb-2">Normal Count: {normalCount}</p>
      <p className="text-gray-600 mb-4">
        Component re-rendered <b>{renderCount.current}</b> times.
      </p>
      <div className="flex flex-col  justify-center w-full items-center gap-3">
        <button
          onClick={() => {setCount(count + 1)
            console.log("usestate : ",count + 1)
          }}
          className="px-3 py-2 bg-blue-500 text-white rounded mr-2 max-w-[200px]"
        >
          Usestate Increment
        </button>
        <button
          onClick={() => {
            useRefWalaCount.current += 1;
            console.log("useref : ",useRefWalaCount.current)
          }}
          className="px-3 py-2 bg-blue-500 text-white rounded mr-2 max-w-[200px]"
        >
          UseRef Increment
        </button>
        <button
          onClick={() => {
            normalCount+=1;
            console.log("normal : ",normalCount)
          }}
          className="px-3 py-2 bg-blue-500 text-white rounded mr-2 max-w-[200px]"
        >
          Normal Increment
        </button>
      </div>
    </div>
  );
}
