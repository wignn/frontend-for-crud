import { Bg } from "@/app/components/dist/bg";
import { UpdateAvatar } from "@/app/components/profile/UpdateProfileImage";

export default function page() {
  return (
    <div
      className="min-h-full" 
      style={{
        backgroundImage: `url('https://files.edgestore.dev/93ti9i3vqygrxg8l/myPublicImage/_public/47c2ca68-c36e-45d1-8186-79bb7292814c.jpg')`,
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
