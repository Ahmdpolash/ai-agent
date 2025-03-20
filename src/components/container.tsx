import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="lg:max-w-7xl mx-auto lg:px-0 px-5 ">{children}</div>;
};

export default Container;
