import path from 'path';
import fs from 'promise-fs';
import Link from "next/link";

function Home(props) {
    const {products} = props;

    return (
        <>
            <ul>
                {products.map(product =>
                    <li key={product.id}>
                        <Link href={`/${product.id}`}>link</Link>
                        <br/>
                        <label>{product.title}</label>
                    </li>
                )}
            </ul>
        </>
    )
}

export async function getStaticProps(context) {
    console.log('Re grenation')
    const filePath = path.join(process.cwd(), 'data', 'products.json');
    const jsonData = await fs.readFile(filePath);
    const data = JSON.parse(jsonData)

    if (!data) {
        return {
            redirect: {
                destination: '/no-data'
            }
        }
    }

    if (data.products.length === 0) {
        return {notFound: true}
    }
    return {
        props: {
            products: data.products
        },
        revalidate: 10,
        // notFound:true
    }
}

export default Home;