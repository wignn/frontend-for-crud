import { Bg } from "@/app/components/dist/bg";
import { UpdateAvatar } from "@/app/components/profile/UpdateProfileImage";
export default function page() {
  return (
    <div className="min-h-full ">
      <Bg/>
      <UpdateAvatar />
    </div>
  );
}
