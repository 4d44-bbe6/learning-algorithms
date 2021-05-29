import React from "react";

const Merge = () => {
  return (
    <>
      <h1 className="font-bold text-lg">Merge Sort</h1>
      <div>
        <span className="font-bold">Analysis</span>
        <p>
          Merge sort is a divide and conquer algorithm with the following steps:
        </p>
        <ul>
          <li>
            <p>
              <span className="font-bold">1. </span>
              The divide step calculates the middle of each (sub)array.{" "}
              <span className="underline">This step takes O(1) time.</span>
            </p>
          </li>
          <li>
            <p>
              <span className="font-bold">2. </span>
              The conquer step recursively divides both subarrays (left and
              right).{" "}
              <span className="underline">
                This step takes log<sup>2</sup>n time.
              </span>
            </p>
          </li>
          <li>
            <p>
              <span className="font-bold">3. </span>
              The merge step merges elements from both subarrays (left and
              right).{" "}
              <span className="underline">This step takes O(n) time.</span>
            </p>
          </li>
        </ul>
        <p className="font-bold pt-4">Master Theorem</p>

        <div>
          <p className="font-bold">T(n) = 2T(n/2)+ O(n)</p>
          <span>
            O(n<sup>log</sup>
            <sub>
              b<sup>a</sup>
            </sub>
            ) {" = "}
          </span>
          <span>
            O(n<sup>log</sup>
            <sup>
              <sub>2</sub>2
            </sup>
            <sup></sup>)
          </span>
          {" = "} <span> O(n) </span>
          <p>f(n) = 0(n)</p>
          <span>
            T(n) = f(n) * log n (Case: f(n) = O(n
            <sup>
              log<sub>b</sub>a
            </sup>
            ) // Case 2 Master Theorem
          </span>
          <p className="py-4 font-bold">T(n) = O(nlogn)</p>
        </div>
      </div>
    </>
  );
};

export default Merge;
