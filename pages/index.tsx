import Head from 'next/head';
import Image from 'next/image';
import { ToastContainer } from 'react-toastify';
import { Footer } from '../components/Footer';
import { Form } from '../components/Form';
import { Links } from '../components/Links';
import { signInWithGoogle, useAuthentication } from '../hooks/authentication';

export default function Home() {
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

        <div className="text-center mt-8">
          <button
            className="border border-gray-800 px-4 py-3 rounded-sm"
            onClick={signInWithGoogle}
          >
            sign in with google
          </button>
        </div>
      </main>

      <Footer />
      <ToastContainer />
    </div>
  );
}
