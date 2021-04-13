import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Footer } from '../components/Footer';
import { Form } from '../components/Form';
import { Links } from '../components/Links';
import { useAuthentication } from '../hooks/authentication';

export default function Home() {
  const router = useRouter();
  const { user } = useAuthentication();

  return (
    <div className="relative pt-16 pb-36 min-h-screen">
      <Head>
        <title>pigu｜ご意見箱</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="font-sans">
        <h1 className="text-2xl text-center">pigu｜ご意見箱</h1>

        <div className="mt-5 text-center">
          <Image
            src="/pigu_icon.png"
            alt="icon"
            width="70"
            height="70"
            className="rounded-full"
          />
        </div>

        <div className="text-center mt-5 text-sm">
          <p>
            サービスについての意見等を送ってください！
            <br />
            <span className="text-red-500">
              ※大学に関する質問には回答致しません。
            </span>
          </p>
        </div>

        <Form />

        <Links />
      </main>

      <Footer />
    </div>
  );
}
