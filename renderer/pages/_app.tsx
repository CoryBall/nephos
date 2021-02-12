import type { AppProps } from 'next/app'
import '../styles/index.css'
import Head from 'next/head'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Nephos</title>
      </Head>
      <div className="background">
        <div className="flex flex-col">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  )
}

export default MyApp
