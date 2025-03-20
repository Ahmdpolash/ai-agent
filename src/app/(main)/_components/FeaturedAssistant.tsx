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
    <div className="container mx-auto  max-w-6x">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-gray-500 font-medium">My Workspace</h2>
          <h1 className="text-3xl font-bold">
            Welcome back, {user?.displayName}
          </h1>
        </div>
        <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-6">
          Profile
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-7  mb-12">
        {data?.map((item: ICardInfo, idx) => (
          <BlurFade key={item.image} delay={0.25 + idx * 0.05} inView>
            <UserInputDialog item={item}>
              <div
                key={idx}
                className="bg-gray-100 rounded-lg p-4 border border-gray-300 cursor-pointer flex flex-col items-center"
              >
                <div className="mb-4  flex items-center justify-center">
                  <Image
                    src={item.image}
                    alt={item?.title}
                    width={120}
                    height={120}
                    className="h-[70px] w-[70px] hover:rotate-12 transition-all"
                  />
                </div>
                <span className="font-medium text-center">{item.title}</span>
              </div>
            </UserInputDialog>
          </BlurFade>
        ))}
      </div>
    </div>
  );
}
