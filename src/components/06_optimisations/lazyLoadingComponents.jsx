import { Suspense, lazy } from "react";

// we are adding delay intentionally. Meanwhile fallback will be rendering and after 2 seconds actual component is rendered
// in real world, if a component is taking significant amount of time to load (heavy funcitons / time taking ops), we can lazy load them
const Comp = lazy(() =>
  wait(2000).then(() => import("../06_optimisations/lazyComp"))
);
export default function LazyLoadingComponents() {
  return (
    <>
      <h1>This Component is being loaded lazily</h1>
      <Suspense fallback={<h1>Loading</h1>}>
        <Comp />
      </Suspense>
    </>
  );
}

async function wait(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}
