import Head from 'next/head'
import Layout from './components/Layout'

function Home() {
    return (
        <div>
            <Layout>
                <Head>
                    <title>Nextjs</title>
                </Head>

                <main>
                    Content
                </main>

                <footer>
                    Footer
                </footer>
            </Layout>
        </div>
    )
}

export default Home;
