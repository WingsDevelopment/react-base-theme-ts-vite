import { ElementType, Suspense } from "react";

export const Loadable = (Component: ElementType) => (props: any) =>
  (
    <Suspense fallback={<div>loading. . .</div>}>
      <Component {...props} />
    </Suspense>
  );
