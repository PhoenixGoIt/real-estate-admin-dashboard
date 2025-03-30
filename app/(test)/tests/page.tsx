"use client";

function Tests() {
  Promise.resolve()
  .then(() => {
  console.log("Promise 1");
  setTimeout(() => {
    console.log("Timeout inside Promise 1");
    asyncFunc("Nested Async");
  }, 0);
  })
  .then(() => {
  console.log("Promise 2");
  queueMicrotask(() => {
    console.log("Microtask inside Promise 2");
  });
  });

  async function asyncFunc(text) {
    console.log(`Async Start: ${text}`);
    await new Promise((resolve) => {
      console.log(`Promise Executor: ${text}`);
      setTimeout(() => {
        console.log(`Timeout inside Promise: ${text}`);
        resolve("Resolved");
      }, 0);
    });
    console.log(`Async End: ${text}`);
    return `Done: ${text}`;
  }
  
  return (
    <>
    </>
  );
}

export default Tests;