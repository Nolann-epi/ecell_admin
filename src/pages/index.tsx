/* eslint-disable @next/next/no-img-element */
import Layout from "@/components/Layout";
import { signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <Layout>
      <div className="text-blue-900 flex justify-between">
        <h2> Hi, {session?.user?.name || "user"}! </h2>
        <div className="flex bg-gray-300 text-black gap-2 items-center pr-3 rounded-lg overflow-hidden">
          <img
            src={session?.user?.image || ""}
            alt="user image"
            className="h-8 w-8"
          />
          <span className="">{session?.user?.name || "user"}</span>
        </div>
      </div>
      <button
        onClick={() => signOut()}
        className=" py-4 px-4 mt-8  bg-red-600 text-white font-semibold rounded-md"
      >
        Logout
      </button>
    </Layout>
  );
}
