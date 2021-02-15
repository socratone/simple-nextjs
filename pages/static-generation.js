import Head from 'next/head';
import Button from '../components/button';
import { getData } from '../lib/data';

// 아래의 getStaticProps를 이용해서 외부 data를 가져온 다음에 빌드된다.
export default function StaticGeneration({ data }) {
  return (
    <section className="container">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Static Generation"
        />
        <title>Static Generation</title>
      </Head>

      <main>
        <h1>Static Generation</h1>
        <span>data : </span>
        <span>{data}</span>
        <p>
          <Button route="/">
            Back to home
          </Button>
        </p>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </section>
  )
}

// page에 getStaticProps가 있으면 먼저 실행된다.
export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const data = await getData();

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: {
      data
    }
  }
}