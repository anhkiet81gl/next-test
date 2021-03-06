import path from "path";
import fs from 'promise-fs';
import {Fragment} from "react";

function ProductDetails(props) {
    const {loadedProduct} = props;

    if(!loadedProduct){
        return {notFound:true}
    }

    return (
        <Fragment>
            <h1>{loadedProduct.title}</h1>
            <p>{loadedProduct.content}</p>
        </Fragment>
    );
}

async function getData() {
    const filePath = path.join(process.cwd(), 'data', 'products.json');
    const jsonData = await fs.readFile(filePath);
    const data = JSON.parse(jsonData)

    return data;

}

export async function getStaticProps(context) {
    const {params} = context;

    const productId = params.pid;

    const data = await getData();

    const product = data.products.find(product => product.id === productId);

    return {
        props: {
            loadedProduct: product,
        },
    }
}

export async function getStaticPaths() {
    const data = await getData();

    const ids = data.products.map(product => product.id);

    const pathsWithParams = ids.map(id => ({params: {pid: id}}))

    return {
        paths:pathsWithParams,
        fallback: false
    }
}

export default ProductDetails;