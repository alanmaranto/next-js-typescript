import Link from "next/link";
import DarkLayout from "../components/layouts/DarkLayout";
import MainLayout from "../components/layouts/MainLayout";

export default function About() {
  return (
    <>
      <h1 className="title">
        Ir a <Link href="/">Home</Link>
      </h1>
      <p className="description">
        Get started by editing <code>pages/about.js</code>
      </p>
    </>
  );
}

About.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
