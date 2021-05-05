import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Layout from './components/Layout'
import fetch from 'isomorphic-unfetch'

export default function Home() {
  return (
    <div>
        <Layout>
          <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <main>

          </main>

          <footer>
          
          </footer>
        </Layout>
    </div>
  )
}
