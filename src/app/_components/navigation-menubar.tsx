import { UserButton } from "@clerk/nextjs";

export default function NavigationMenubar() {
  return (
    <div className="flex flex-row gap-2 p-2">
      <div className="basis-32"></div>
      <div className="basis-32"></div>
      <div className="basis-64">
        <UserButton />
      </div>
    </div>
  );
}
