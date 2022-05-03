// Create next js pages/about.js:
import Head from "next/head";
import Link from "next/link";

export default function About() {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <main>
        <h1>
          Ir a <Link href="/">Home</Link>
        </h1>
        <p>
          Get started by editing <code>pages/about.js</code>
        </p>
      </main>
    </div>
  );
}
