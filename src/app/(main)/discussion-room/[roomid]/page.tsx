"use client";

import { useQuery } from "convex/react";
import { useParams } from "next/navigation";
import { api } from "../../../../../convex/_generated/api";
import { useEffect, useState } from "react";
import { assistant } from "@/lib/data";
import { IExpart } from "@/types";
import Image from "next/image";
import { UserButton } from "@stackframe/stack";
import { Button } from "@/components/ui/button";

const DiscussionRoom = () => {
  const { roomid } = useParams();
  const [expert, setExpart] = useState<IExpart>();

  const data = useQuery(api.DiscussionRoom.GetDiscussionRoomInfo, {
    id: roomid,
  });

  useEffect(() => {
    if (data) {
      const expert = assistant.find((item) => item.name === data?.expertName);

      setExpart(expert);
    }
  }, [data]);

  return (
    <div className="-mt-12">
      <div>
        <h2 className="font-bold text-xl">{data?.coachingOption}</h2>
      </div>

      <div className="mt-5 grid grid-cols-2 lg:grid-cols-5 gap-7">
        <div className="lg:col-span-3">
          <div className=" h-[50vh] cursor-pointer bg-gray-100 rounded-4xl flex flex-col relative items-center justify-center border border-gray-300">
            <Image
              src={expert?.avatar || "/a.webp"}
              width={200}
              height={200}
              alt="avatar"
              className="h-[80px] w-[80px] rounded-full object-cover animate-pulse"
            />
            <h2 className="text-gray-500 mt-1">{expert?.name}</h2>

            <div className="p-6 bg-gray-300 rounded-lg px-10 absolute right-10 bottom-10">
              <UserButton />
            </div>
          </div>
          <div className="flex justify-center items-center mt-5 ">
            <Button className="bg-blue-500 cursor-pointer">Connect</Button>
          </div>
        </div>
        <div className="col-span-2">
          <div className=" h-[50vh] bg-gray-100 rounded-4xl flex flex-col relative items-center justify-center border border-gray-300"></div>
        </div>
      </div>
    </div>
  );
};

export default DiscussionRoom;
