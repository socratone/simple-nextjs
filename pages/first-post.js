import Head from 'next/head';
import Button from '../components/button';

export default function FirstPost() {
  return (
    <section className="container">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
      </Head>

      <main>
        <h1>First Post</h1>
        <Button route="/">
          Back to home
        </Button>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        h1 {
          text-align: center;
        }
      `}</style>
    </section>
  )
}