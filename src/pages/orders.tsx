import Layout from "@/components/Layout";
import Link from "next/link";

export default function Orders() {
  return (
    <Layout>
      <Link className="bg-green" href="/products/new">
        {" "}
        List of orders
      </Link>
    </Layout>
  );
}
