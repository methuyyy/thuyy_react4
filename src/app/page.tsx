//src/app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Welcome to Home</h1>
      
      <nav style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "20px" }}>
        <Link href="/profile">Profile</Link>
        <Link href="/about">About</Link>
        <Link href="/blogs">Blogs Utama</Link>
        <Link href="/blogs/1">Blog Detail (ID: 1)</Link>
        <Link href="/products/1">Product Detail (ID: 1)</Link>
        <Link href="/products/1/reviews/5">Product Review (Product 1, Review 5)</Link>
      </nav>
    </div>
  );
}