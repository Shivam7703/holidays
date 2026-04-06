import Blogs from "../home/blog";
import BlogAside from "./side";

export default function BlogPage() {
  return (
    <div className="lg:px-28 md:p-20 sm:p-12 p-7">
                <div className="space-y-3 max-w-xl mx-auto text-center mb-10">
                              <p className="block text-color1 font-bold uppercase text-xs tracking-[0.25em]">
latest updates                              </p>
                            <h2 className="text-color1 font-bold leading-tight text-3xl md:text-4xl lg:text-5xl">
                              Explore{" "}
                              <span className="text-color2">Latest News</span>
                            </h2>
                          </div>

              <div className="flex flex-wrap justify-between gap-y-7 relative min-h-screen w-full">
        <div className=" w-full">
      <Blogs isHome={false} />
      </div>

      {/* <div className="md:w-[30%] w-full md:sticky top-10 space-y-5 sm:space-y-12 h-full">
        <BlogAside />
      </div> */}
      </div>
    </div>
  );
}