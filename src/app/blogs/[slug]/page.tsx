// app/blogs/[slug]/page.tsx
import { notFound } from "next/navigation";
import React from "react";
import { blogData } from "@/data/homeData";
import Banner from "@/components/global/banner";
import Blogdetails from "@/components/blog/blog-detail";

interface PageProps {
  params: {
    slug: string;
  };
}

// Helper function to create consistent slugs
const createSlug = (title: string): string => {
  return title
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

// Generate static paths for blogs - removed Promise return type
export function generateStaticParams() {
  const blogsData = blogData.blog;
  return blogsData.map((blog: any) => ({
    slug: createSlug(blog.title),
  }));
}

export default function BlogPage({ params }: PageProps) {
  const decodedSlug = createSlug(decodeURIComponent(params.slug));
  const blogsData = blogData.blog;
  const singleBlog = blogsData.find(
    (blog: any) => createSlug(blog.title) === decodedSlug
  );

  if (!singleBlog) {
    notFound();
  }

  return (
    <main>
      <Banner
        title={singleBlog.title}
       
        slug={`blogs/${createSlug(singleBlog.title)}`}
      />
      <Blogdetails data={singleBlog} />
    </main>
  );
}