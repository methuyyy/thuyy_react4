export default async function BlogDetail({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) {
  const { blogId } = await params;

  return (
    <div>
      <h1>Halaman Blog ID: {blogId}</h1>
    </div>
  );
}