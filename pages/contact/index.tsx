import Link from "next/link";
import MainLayout from "../../components/layouts/MainLayout";

export default function Contact() {
  return (
    <MainLayout>
      <h1 className="title">
        Ir a <Link href="/">Home</Link>
      </h1>
      <p className="description">
        Get started by editing <code>pages/Contact.js</code>
      </p>
    </MainLayout>
  );
}
