import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="xl:w-11/12 mx-auto max-w-screen-2xl px-4 md:px-6 lg:px-8">
      {children}
    </div>
  );
};

export default Container;
