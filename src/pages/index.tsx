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
    <main>
      
      <div className="h-screen w-screen bg-snow bg-cover">
        <Dialog>
          <DialogTrigger className="w-24 h-44 absolute bottom-2 left-[23%]"></DialogTrigger>
          <DialogContent className="border-none p-0">
           <div className="relative"> 
           <Image src={"/dialog.png"} priority width={500} height={700} alt="dialog-img" className=""/>
           <h1 className="absolute mt-2 inset-9 font-game text-white  w-fit">Have a Merry Christmas and a Happy New Year</h1>
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
      <Snowfall color="white" changeFrequency={10} speed={[2, 5]} />
    </main>
  );
}
