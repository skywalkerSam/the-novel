// import NavBar from "~/components/NavBar";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      {/* <NavBar></NavBar> */}
      <main>{children}</main>
    </div>
  );
}
