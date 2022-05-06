import Link from "next/link";
import MainLayout from "../../components/layouts/MainLayout";
import DarkLayout from "../../components/layouts/DarkLayout";

export default function Pricing() {
  return (
    <>
      <h1 className="title">
        Ir a <Link href="/">Home</Link>
      </h1>
      <p className="description">
        Get started by editing <code>pages/Pricing.js</code>
      </p>
    </>
  );
}

Pricing.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
