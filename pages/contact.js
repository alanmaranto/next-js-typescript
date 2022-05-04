import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Contact</title>
      </Head>
      <Navbar />
      <main>
        <h1>
          Ir a <Link href="/">Home</Link>
        </h1>
        <p>
          Get started by editing <code>pages/Contact.js</code>
        </p>
      </main>
    </div>
  );
}
