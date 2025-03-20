import React, { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="p-10 mt-20 md:px-20 lg:px-32 xl:px-56 2xl:px-56 overflow-auto">
      {children}
    </div>
  );
};

export default DashboardLayout;
