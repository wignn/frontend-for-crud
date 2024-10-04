import Image from "next/image";
import { UpdateCover } from "@/app/components/profile/UpdateProfileImage";
import { Bg } from "@/app/components/dist/bg";

export default function Page() {
  return (
    <>
      <Bg />
      <div className="relative z-10">
        <div className="pb-4">
          <UpdateCover />
        </div>
      </div>
    </>
  );
}