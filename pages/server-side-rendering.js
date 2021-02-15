import Head from 'next/head';
import Button from '../components/button';
import { getData } from '../lib/data';

// Server Side Rendering : 각 요청이 들어올 때 pre-rendering

// 아래의 getServerSideProps를 이용해서 외부 data를 가져온 다음에 실행된다.
export default function ServerSideRendering({ data }) {
  return (
    <section className="container">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Server Side Rendering"
        />
        <title>Server Side Rendering</title>
      </Head>

      <main>
        <h1>Server Side Rendering</h1>
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

export async function getServerSideProps(context) {
  const data = await getData();

  return {
    props: {
      data
    }
  }
}