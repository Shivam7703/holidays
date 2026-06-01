// app/packages/[slug]/page.tsx
import { notFound } from "next/navigation";
import React from "react";
import { Packagedata } from "@/data/packageData";
import Banner from "@/components/global/banner";
import PackageDetail from "@/components/package/package-detail";
 
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
  const packageData = Packagedata;
  return packageData.map((pkg: any) => ({
    slug: createSlug(pkg.title),
  }));
}

export default function BlogPage({ params }: PageProps) {
  const decodedSlug = createSlug(decodeURIComponent(params.slug));
  const packageData = Packagedata;
  const singlePackage = packageData.find(
    (pkg: any) => createSlug(pkg.title) === decodedSlug
  );

  if (!singlePackage) {
    notFound();
  }

  return (
    <main>
      <Banner
        title={singlePackage.title}
       
        slug={`packages/${createSlug(singlePackage.title)}`}
      />
      <PackageDetail data={singlePackage} />
    </main>
  );
}