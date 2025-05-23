import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function NavigationMenubar() {
  return (
    <div>
      <div className="flex">
        <div className="w-32 flex-none">
          <Link href={"/"}>The Novel</Link>
        </div>
        <div className="flex-auto">.</div>
        <div className="w-12 flex-none">
          <UserButton />
        </div>
      </div>
    </div>
  );
}
