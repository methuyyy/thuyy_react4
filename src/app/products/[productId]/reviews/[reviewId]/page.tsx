export default async function ReviewDetail({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { productId, reviewId } = await params;

  return (
    <div>
      <h1>Produk ID: {productId}</h1>
      <h2>Review ID: {reviewId}</h2>
    </div>
  );
}