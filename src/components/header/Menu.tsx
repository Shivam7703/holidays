// Menu.tsx

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { navigationMenu } from "@/data/homeData";
import { MdKeyboardArrowRight } from "react-icons/md";
import { usePathname } from "next/navigation";

export function FormatHref(url: any) {
  if (!url) return "#";

  const parts = url.split("/");
  if (parts[2]) {
    parts[2] = parts[2]
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");
  }

  return parts.join("/");
}

const Menu = ({ Isprimary, Items }: any) => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const pathname = usePathname();

  useEffect(() => {
    const lastSegment = pathname?.split("/").filter(Boolean).pop();
    let path = lastSegment || "home";

    setActiveItem(path);
  }, [pathname]);

  return (
    <ul
      className={`hidden items-center justify-between lg:gap-x-0 md:gap-x-0 font-medium w-full mx-auto md:flex`}
    >
      {Items.map((item: any) => (
        <li key={item?.id} className="group relative transition-all">
          <Link
            title={item?.label}
            href={item?.href || "#"}
            className={`p-2 flex justify-center  items-center gap-1 text-base py-3  cursor-pointer
              relative overflow-hidden transition-all duration-300 hover:bg-white/30 rounded-xl
              ${
                activeItem ===
                  (FormatHref(item.href).split("/").filter(Boolean).pop() ||
                    "home") && Isprimary
                  ? "text-color1 bg-white/30"
                  : Isprimary
                  ? "text-color1"
                  : "text-zinc-800"
              }`}
          >
            <span className="transition-all duration-300 hover:scale-105">
              {item?.label}
            </span>
         
          </Link>

          {/* ── First-level dropdown ── */}
          {item.subNav && (
            <div
              className="absolute w-max -left-2 top-[100%] z-[70] hidden flex-col
              rounded-xl bg-white border border-white/10
              py-2 shadow-[0_16px_40px_rgba(0,0,0,0.4)]
              transition-all group-hover:flex
              before:absolute before:-top-2 before:left-6 before:w-4 before:h-4
              before:bg-white before:rotate-45 before:border-l before:border-t
              before:border-white/10"
            >
              {item.subNav.map((nav: any) => (
                <div key={nav.id} className="group/subnav relative">
                  <Link
                    title={nav?.label}
                    href={FormatHref(nav.href)}
                    className={`group/navlink relative flex w-full items-center justify-between
                      gap-6 py-2.5 pl-4 pr-5 text-[13.5px] font-medium
                      transition-all duration-200 cursor-pointer
                      hover:bg-zinc-700 hover:text-white rounded-lg mx-1 
                      ${
                        activeItem ===
                        (FormatHref(nav.href)
                          .split("/")
                          .filter(Boolean)
                          .pop() || "home")
                          ? "bg-color1 text-white rounded-lg mx-1"
                          : "text-color1/80"
                      }`}
                    style={{ width: "calc(100% - 8px)" }}
                  >
                    {/* left gold accent bar */}
                    <span
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-0
                      bg-color2 rounded-full transition-all duration-200
                      group-hover/navlink:h-[60%]"
                    />
                    <span className="whitespace-nowrap pl-2">{nav.label}</span>
                    {nav?.subNav && nav.subNav.length !== 0 && (
                      <MdKeyboardArrowRight className="text-lg text-color2 transition-transform duration-200 group-hover/subnav:translate-x-0.5" />
                    )}
                  </Link>

                  {/* ── Second-level dropdown ── */}
                  {nav.subNav && (
                    <div
                      className="absolute left-[calc(100%)] top-0 z-[70] hidden flex-col
                      w-auto rounded-xl bg-white border border-white/10
                      py-2 shadow-[0_16px_40px_rgba(0,0,0,0.4)]
                      transition-all group-hover/subnav:flex max-h-[500px]"
                    >
                      {nav.subNav.map((subNav: any) => (
                        <div
                          key={subNav.id}
                          className="group/subsubnav relative"
                        >
                          <Link
                            title={subNav?.label}
                            href={FormatHref(subNav.href)}
                            className={`group/sublink relative flex w-full items-center justify-between
                              gap-6 py-2.5 pl-4 pr-5 text-[13.5px] font-medium
                              transition-all duration-200 cursor-pointer
                              hover:bg-zinc-700 hover:text-white rounded-lg mx-1
                              ${
                                activeItem ===
                                (FormatHref(subNav.href)
                                  .split("/")
                                  .filter(Boolean)
                                  .pop() || "home")
                                  ? "bg-color1 text-white rounded-lg "
                                  : "text-color1/80"
                              }`}
                            style={{ width: "calc(100% - 8px)" }}
                          >
                            <span
                              className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-0
                              bg-color2 rounded-full transition-all duration-200
                              group-hover/sublink:h-[60%]"
                            />
                            <span className="whitespace-nowrap pl-2">
                              {subNav.label}
                            </span>
                            {subNav?.subNavv && subNav.subNavv.length !== 0 && (
                              <MdKeyboardArrowRight className="text-lg text-color2 transition-transform duration-200 group-hover/subsubnav:translate-x-0.5" />
                            )}
                          </Link>

                          {/* ── Third-level dropdown ── */}
                          {subNav.subNavv && subNav.subNavv.length > 0 && (
                            <div
                              className="absolute left-[calc(100% - 8px)] top-0 z-[70] hidden flex-col
                              w-auto rounded-xl bg-white border border-white/10
                              py-2 shadow-[0_16px_40px_rgba(0,0,0,0.4)]
                              transition-all group-hover/subsubnav:flex
                              max-h-[500px] overflow-y-auto min-w-[200px]"
                            >
                              {subNav.subNavv.map((subSubNav: any) => (
                                <Link
                                  title={subSubNav?.label}
                                  key={subSubNav.id}
                                  href={FormatHref(subSubNav.href)}
                                  className={`group/deeplink relative flex w-full items-center
                                    gap-3 py-2.5 pl-4 pr-5 text-[13.5px] font-medium
                                    transition-all duration-200 cursor-pointer
                                    hover:bg-zinc-700 hover:text-white rounded-lg mx-1
                                    ${
                                      activeItem ===
                                      (FormatHref(subSubNav.href)
                                        .split("/")
                                        .filter(Boolean)
                                        .pop() || "home")
                                        ? "bg-color1 text-white rounded-lg mx-1"
                                        : "text-color1/80"
                                    }`}
                                  style={{ width: "calc(100% - 8px)" }}
                                >
                                  <span
                                    className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-0
                                    bg-color2 rounded-full transition-all duration-200
                                    group-hover/deeplink:h-[60%]"
                                  />
                                  <span className="w-1.5 h-1.5 rounded-full bg-color2/60 flex-shrink-0 ml-1" />
                                  <span className="whitespace-nowrap">
                                    {subSubNav.label}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Menu;






// ]RV*71(O/=|KHu:w