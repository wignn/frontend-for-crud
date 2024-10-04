import { Bg } from "@/app/components/dist/bg";
import { UpdateAvatar } from "@/app/components/profile/UpdateProfileImage";

export default function page() {
  return (
    <div
      className="min-h-full" 
      style={{
        backgroundImage: `url('/bg.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat", 
        backgroundAttachment: "fixed",
        minHeight: "100vh",
        height: "auto", 
        justifyContent: "center",
      }}
    >
      <div className="p-12 h-auto">
        <UpdateAvatar />
      </div>
    </div>
  );
}
