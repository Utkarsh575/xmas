import Image from "next/image";
import Snowfall from "react-snowfall";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Home() {
  return (
    <main >
      <Snowfall color="white" changeFrequency={100} speed={[2, 5]} />
      <div className="h-screen w-screen bg-snow bg-cover">
        <Dialog >
          <DialogTrigger>Open</DialogTrigger>
          <DialogContent className="border-none p-0">
           <div className="relative"> 
           <Image src={"/dialog.png"} priority width={500} height={700} alt="dialog-img" className=""/>
           <h1 className="absolute inset-10 font-game text-white border w-fit">Have a Merry Christmas and a Happy New Year</h1>
           </div>
   
            {/* <DialogHeader>
              <DialogTitle>Are you sure absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </DialogDescription>
            </DialogHeader> */}
          </DialogContent>
        </Dialog>
      </div>
    </main>
  );
}
