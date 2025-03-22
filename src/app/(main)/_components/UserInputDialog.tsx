import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { assistant } from "@/lib/data";
import { ICardInfo, IExpart } from "@/types";
import Image from "next/image";
import { useState } from "react";
import { api } from "../../../../convex/_generated/api";
import { useMutation } from "convex/react";
import { LoaderCircle } from "lucide-react";

const UserInputDialog = ({
  children,
  item,
}: {
  children: any;
  item: ICardInfo;
}) => {
  const [selected, setSelected] = useState<string | undefined>();

  const [topic, setTopic] = useState<string | undefined>();

  // api
  const CreateDiscussionRoom = useMutation(api.DiscussionRoom.CreateNewRoom);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    const result = await CreateDiscussionRoom({
      topic: topic || "",
      coachingOption: item?.title || "",
      expertName: selected || "",
    });

    console.log(result);

    setLoading(false);
  };

  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{item.title}</DialogTitle>
          <DialogDescription asChild>
            <div className="mt-3 ">
              <h2 className="text-black mb-2">
                Enter a topic to master your skills in {item.title}
              </h2>
              <Textarea
                placeholder="Enter your Topics here..."
                onChange={(e) => setTopic(e.target.value)}
              />
              <h2 className="text-black mt-4">Select your coaching expert</h2>
              <div className="grid grid-cols-3 md:grid-cols-5 gap-6 mt-3">
                {assistant.map((expert: IExpart, idx) => (
                  <div key={idx} onClick={() => setSelected(expert?.name)}>
                    <Image
                      src={expert.avatar}
                      width={100}
                      height={100}
                      alt={expert.name}
                      className={`rounded-2xl h-[80px] w-[80px] object-cover cursor-pointer hover:scale-105 transition-all
                        
                        ${selected == expert.name && "border-2 border-blue-500 p-1"}
                        `}
                    />
                    <h1 className="text-center text-black py-1">
                      {expert.name}
                    </h1>
                  </div>
                ))}
              </div>

              <div className="flex gap *:cursor-pointer gap-5 mt-5 justify-end">
                <DialogClose asChild>
                  <Button variant={"ghost"}>Cancel</Button>
                </DialogClose>
                <Button
                  disabled={!topic || !selected || loading}
                  onClick={handleSubmit}
                  className="bg-blue-500"
                >
                  {loading && <LoaderCircle className="animate-spin" />}
                  Next
                </Button>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default UserInputDialog;
