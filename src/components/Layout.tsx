import { useSession, signIn, signOut } from "next-auth/react";
import Navbar from "@/components/Navbar";

export default function Layout({ children }: any) {
  const { data: session } = useSession();
  if (!session) {
    return (
      <div className="bg-blue-400 w-screen h-screen flex items-center">
        <div className="text-center w-full">
          <button
            onClick={() => signIn("google")}
            className=" py-4 px-4 mt-8  bg-red-600 text-white font-semibold rounded-md"
          >
            Login with google
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-blue-400 w-screen min-h-screen flex">
      <Navbar />
      <div className="bg-white flex-grow my-2 mr-2 rounded-lg p-4">
        {children}
      </div>
    </div>
  );
}
