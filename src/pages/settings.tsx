import Layout from "@/components/Layout";
import Link from "next/link";

export default function Settings() {
  return (
    <Layout>
      <Link className="bg-green" href="/products/new">
        {" "}
        List of settings
      </Link>
    </Layout>
  );
}
