import React, { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="max-w-6xl p-10 mt-10 lg:mt-20 2xl:mt-24  mx-auto overflow-x-hidden">
      {children}
    </div>
  );
};

export default DashboardLayout;
