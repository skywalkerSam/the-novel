import { UserButton } from "@clerk/nextjs";

export default function NavigationMenubar() {
  return (
    <div className="flex flex-row">
      <div className="basis 32"></div>
      <div className="basis 32"></div>
      <div className="basis 64 p-2">
        <UserButton />
      </div>
    </div>
  );
}
