// app/destinations/[slug]/page.tsx
import { notFound } from "next/navigation";
import React from "react";
import { Destinationdata } from "@/data/destinationData";
import Banner from "@/components/global/banner";
import Destdetails from "@/components/destination/dest-detail";

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
  const destData = Destinationdata;
  return destData.map((dest: any) => ({
    slug: createSlug(dest.title),
  }));
}

export default function BlogPage({ params }: PageProps) {
  const decodedSlug = createSlug(decodeURIComponent(params.slug));
  const destData = Destinationdata;
  const singleDest = destData.find(
    (dest: any) => createSlug(dest.title) === decodedSlug
  );

  if (!singleDest) {
    notFound();
  }

  return (
    <main>
      <Banner
        title={singleDest.title}
       
        slug={`destinations/${createSlug(singleDest.title)}`}
      />
      <Destdetails data={singleDest} />
    </main>
  );
}