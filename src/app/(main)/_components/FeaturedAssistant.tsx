"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useUser } from "@stackframe/stack";
import { data } from "@/lib/data";
import { BlurFade } from "@/components/magicui/blur-fade";
import UserInputDialog from "./UserInputDialog";
import { ICardInfo } from "@/types";

export default function FeaturedAssistant() {
  const user = useUser();

  return (
    <div className="">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-gray-500 font-medium">My Workspace</h2>
          <h1 className="text-3xl font-bold text-balance">
            Welcome back, {user?.displayName}
          </h1>
        </div>
        <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-6">
          Profile
        </Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-5 mb-12">
        {data?.map((item: ICardInfo, idx) => (
          <BlurFade key={item.image} delay={0.25 + idx * 0.05} inView>
            <UserInputDialog item={item}>
              <div className="bg-gray-20 bg-gray-100 flex  flex-col justify-center items-center p-6 rounded-lg border border-gray-300 w-[200px] cursor-pointer">
                <Image
                  src={item.image}
                  alt={item?.title}
                  width={150}
                  height={150}
                  className="h-[70px] mb-4 w-[70px] hover:rotate-12 transition-all"
                />

                <h2 className="font-medium text-center">{item.title}</h2>
              </div>
            </UserInputDialog>
          </BlurFade>
        ))}
      </div>
    </div>
  );
}
