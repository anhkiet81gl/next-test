import Layout from './components/Layout';
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css'

const Movie = (props) => (
    <Layout>
        <div className="container m-auto row mt-5">
            {props.shows.map(({show}) => (
                <div key={show.id} className="col-3">
                    <Link as={`/post/${show.id}`} href={`/post?id=${show.id}`}>
                        <a className="font-weight-bold">{show.name}</a>
                    </Link>
                    <img src={show.image.medium}/>
                </div>
            ))}

        </div>
    </Layout>
)

Movie.getInitialProps = async function () {
    const res = await fetch('http://localhost:3000/api/batman')
    const data = await res.json()

    console.log(`Show data. Count: ${data.length}`)

    return {
        shows: data
    }
}

export default Movie;