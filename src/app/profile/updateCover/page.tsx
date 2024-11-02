
import { UpdateCover } from "@/app/components/profile/UpdateProfileImage";
import { Bg } from "@/app/components/comp/bg";

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