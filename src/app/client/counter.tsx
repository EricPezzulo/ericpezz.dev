"use client";
import { useState } from "react";

export default function Counter({ children }: { children?: React.ReactNode }) {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="mt-5 flex w-1/2 justify-between">
        <button
          type="button"
          className="rounded bg-black px-3 py-2 text-white"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>{" "}
        <h2 className="text-2xl">{count}</h2>
        <button
          onClick={() => setCount(count - 1)}
          type="button"
          className="rounded bg-black px-3 py-2 text-white"
        >
          Decrement
        </button>
      </div>
      {children}
    </>
  );
}
