import {
  ClerkProvider,
  SignedIn,
  SignInButton,
  SignedOut,
} from "@clerk/nextjs";
import NavBar from "~/components/NavBar";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <SignedOut>
        <div className="hover:text-primary px-4 py-2 hover:rounded-full">
          <SignInButton />
        </div>
      </SignedOut>
      <SignedIn>
        <NavBar></NavBar>
      </SignedIn>
      <main>{children}</main>
    </ClerkProvider>
  );
}
