"use client";
import { useUser } from "@stackframe/stack";
import { useMutation } from "convex/react";
import { ReactNode, useEffect, useState } from "react";
import { api } from "../../convex/_generated/api";
import { UserContext } from "@/context/UserContext";
import { IData } from "@/types";

export default function AuthProvider({ children }: { children: ReactNode }) {
  const user = useUser();
  const createUser = useMutation(api.users.CreateUser);
  const [userData, setUserData] = useState<IData>();

  useEffect(() => {
    user && CreateNewUser();
  }, [user]);

  const CreateNewUser = async () => {
    const result = await createUser({
      email: user?.primaryEmail ?? "",
      name: user?.displayName ?? "",
    });

    setUserData(result);
  };

  return (
    <div>
      <UserContext.Provider value={{ userData, setUserData }}>
        {children}
      </UserContext.Provider>
    </div>
  );
}
