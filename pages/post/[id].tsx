import Layout from '../components/Layout'
import fetch from 'isomorphic-unfetch'


const Detail = (props) => (
    <Layout>
        <div className="container">
            <img src={props.show.image.medium}/>
            <h1>{props.show.name}</h1>
            <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
        </div>
    </Layout>
)

Detail.getInitialProps = async function (context) {
    const {id} = context.query
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
    const show = await res.json()

    console.log(`Fetched show: ${show.name}`)

    return {show}
}

export default Detail