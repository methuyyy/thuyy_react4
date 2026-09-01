//src/app/products/[productId]/page.tsx
type Props ={
    params: {
        ProductId: string;
    }
}

export default function ProductDetail({params}: Props){
    return(
        <h1>Details about product {params.ProductId}</h1>
    );
}