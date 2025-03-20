"use client";
import React from "react";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import AuthProvider from "../provider/AuthProvider";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ConvexProvider client={convex}>
      <AuthProvider>{children}</AuthProvider>
    </ConvexProvider>
  );
};

export default Provider;
