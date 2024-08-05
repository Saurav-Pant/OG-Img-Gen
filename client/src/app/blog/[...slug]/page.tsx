import { Metadata } from "next";
import Link from 'next/link';

interface BlogPostPageProps {
  params: { slug: string[] };
  searchParams: { [key: string]: string | string[] | undefined };
}

const siteMetadata = {
  siteUrl: "https://og-img-gen-flame.vercel.app",
};

export async function generateMetadata({
  params,
  searchParams,
}: BlogPostPageProps): Promise<Metadata> {
  const title = params.slug[0] || "Default Title";
  const description = searchParams.content as string || "Default description";
  const image = searchParams.image as string;

  const ogUrl = new URL(`${siteMetadata.siteUrl}/api/og`);
  ogUrl.searchParams.set("title", title);
  ogUrl.searchParams.set("description", description);
  if (image) {
    ogUrl.searchParams.set("image", image);
  }

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: `${siteMetadata.siteUrl}/blog/${params.slug.join('/')}`,
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogUrl.toString()],
    },
  };
}

export default function BlogPostPage({ params, searchParams }: BlogPostPageProps) {
  const title = params.slug[0];
  const content = searchParams.content as string;
  const image = searchParams.image as string;

  return (
    <div className="container mx-auto px-4">
      <Link href="/" className="text-blue-500 hover:underline mb-4 inline-block">← Back to Home</Link>
      <div className="mt-8 p-4 bg-gray-100 rounded-lg">
        <h1 className="text-red-600 text-3xl font-bold mb-4">{decodeURIComponent(title)}</h1>
        {image && <img src={image} alt={title} className="my-4 rounded-lg" />}
        <p className="mt-4">{decodeURIComponent(content || '')}</p>
      </div>
    </div>
  );
}