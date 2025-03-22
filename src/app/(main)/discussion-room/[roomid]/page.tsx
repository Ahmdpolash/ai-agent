"use client";

import { useQuery } from "convex/react";
import { useParams } from "next/navigation";
import { api } from "../../../../../convex/_generated/api";
import { useEffect, useRef, useState } from "react";
import { assistant } from "@/lib/data";
import { IExpart } from "@/types";
import Image from "next/image";
import { UserButton } from "@stackframe/stack";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";

import RecordRTC from "recordrtc";
import { Id } from "../../../../../convex/_generated/dataModel";

const DiscussionRoom = () => {
  const { roomid } = useParams();
  const [expert, setExpart] = useState<IExpart | undefined>();
  const [enable, setEnable] = useState(false);
  const silenceTimeout = useRef<NodeJS.Timeout | null>(null);
  const recorder = useRef<RecordRTC | null>(null);

  const data = useQuery(
    api.DiscussionRoom.GetDiscussionRoomInfo,
    roomid ? { id: roomid as Id<"DiscussionRoom"> } : "skip"
  );

  useEffect(() => {
    if (data) {
      const expert = assistant.find((item) => item.name === data?.expertName);
      setExpart(expert);
    }
  }, [data]);

  const connectToServer = () => {
    setEnable(true);

    if (typeof window !== "undefined" && typeof navigator !== "undefined") {
      navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then((stream) => {
          recorder.current = new RecordRTC(stream, {
            type: "audio",
            mimeType: "audio/webm;codecs=pcm",
            recorderType: RecordRTC.StereoAudioRecorder,
            timeSlice: 250,
            desiredSampRate: 16000,
            numberOfAudioChannels: 1,
            bufferSize: 4096,
            audioBitsPerSecond: 128000,
            ondataavailable: async (blob) => {
              if (!blob) return;

              // Reset the silence detection timer on audio input
              if (silenceTimeout.current) {
                clearTimeout(silenceTimeout.current);
              }

              const buffer = await blob.arrayBuffer();
              console.log(buffer);

              // Restart the silence detection timer
              silenceTimeout.current = setTimeout(() => {
                console.log("User stopped talking");
                // Handle user stopped talking (e.g., send final transcript, stop recording, etc.)
              }, 2000);
            },
          });
          recorder.current.startRecording();
        })
        .catch((err) => console.error("Error accessing microphone:", err));
    }
  };

  const disConnect = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (recorder.current) {
      recorder.current.pauseRecording();
      recorder.current = null;
    }
    if (silenceTimeout.current) {
      clearTimeout(silenceTimeout.current);
      silenceTimeout.current = null;
    }
    setEnable(false);
  };

  return (
    <div className="-mt-12">
      <div>
        <h2 className="font-bold text-xl">{data?.coachingOption}</h2>
      </div>

      <div className="mt-5 grid grid-cols-2 lg:grid-cols-5 gap-7">
        <div className="lg:col-span-3">
          <div className="h-[50vh] cursor-pointer bg-gray-100 rounded-4xl flex flex-col relative items-center justify-center border border-gray-300">
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
          <div className="flex justify-center items-center mt-5">
            {!enable ? (
              <Button
                onClick={connectToServer}
                className="bg-blue-500 cursor-pointer"
              >
                Connect
              </Button>
            ) : (
              <Button onClick={disConnect} variant={"destructive"}>
                Disconnect
              </Button>
            )}
          </div>
        </div>
        <div className="col-span-2">
          <div className="h-[50vh] bg-gray-100 rounded-4xl flex flex-col relative items-center justify-center border border-gray-300"></div>
        </div>
      </div>
    </div>
  );
};

export default DiscussionRoom;
