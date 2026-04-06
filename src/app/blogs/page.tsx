import BlogPage from "@/components/blog/blog-page";

import Banner from "@/components/global/banner";

export default function Blogs() {
  return (
    <>
      <Banner
        title={"Our Blogs"}
      
        slug={"blogs"}
      />
      <BlogPage/>
    </>
  );
}
