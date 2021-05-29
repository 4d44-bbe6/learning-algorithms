import React from "react";

const Heap = () => {
  return (
    <>
      <h1 className="font-bold text-lg">Heap Sort</h1>
      <div>
        <span className="font-bold">Analysis</span>
        <p className="pt-4">
          Heap Sort is a comparison sorting algorithm which uses the insertion
          method.
        </p>

        <p className="pt-4">
          First, we create a max heap by passing the array to our heapify
          function. This function returns a binary tree with the largest item as
          the first element.
        </p>
        <p className="pt-4">
          This calls itself recursively to build heap in top down manner.
        </p>
        <p className="pt-4">
          Finally in the heapsort function, we swap the value from the curent
          root of the tree to the end.
        </p>
        <p className="pt-4">
          Each call to heapify costs O(logn) and there are O(n) such calls,
          therefore the time complexity of this algorithm is O(nlogn)
        </p>
      </div>
    </>
  );
};

export default Heap;
