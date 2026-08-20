// Menu.tsx

import React, { useEffect, useState } from "react";
import Link from "next/link";
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
  const [activePath, setActivePath] = useState<string>("");
  const pathname = usePathname();

  useEffect(() => {
    setActivePath(pathname || "");
  }, [pathname]);

  const isActive = (href: string) => {
    return activePath === FormatHref(href);
  };

  // Dynamic Grid + Column Divider config with optimized widths
  const getSubNavGridConfig = (count: number) => {
    if (count > 45) {
      return { 
        gridClass: "grid-cols-4 divide-x divide-gray-100", 
        widthClass: "w-[720px]" 
      };
    }
    if (count >= 30) {
      return { 
        gridClass: "grid-cols-3 divide-x divide-gray-100", 
        widthClass: "w-[540px]" 
      };
    }
    if (count >= 15) {
      return { 
        gridClass: "grid-cols-2 divide-x divide-gray-100", 
        widthClass: "w-[380px]" 
      };
    }
    return { 
      gridClass: "grid-cols-1", 
      widthClass: "w-56" 
    };
  };

  return (
    <ul className="hidden items-center justify-between lg:gap-x-0 md:gap-x-0 font-medium w-full mx-auto md:flex">
      {Items.map((item: any) => (
        <li key={item?.id} className="group relative transition-all">
          <Link
            title={item?.label}
            href={item?.href || "#"}
            className={`p-2 flex justify-center items-center gap-1 text-base py-3 cursor-pointer
              relative overflow-hidden transition-all duration-300 hover:bg-white/30 rounded-xl
              ${
                isActive(item.href) && Isprimary
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

          {/* First-level dropdown */}
          {item.subNav && (
            <div
              className="absolute w-max -left-2 top-[100%] z-[70] hidden flex-col
              rounded-xl bg-white border border-white/10 py-2 shadow-[0_16px_40px_rgba(0,0,0,0.2)]
              transition-all group-hover:flex
              before:absolute before:-top-2 before:left-6 before:w-4 before:h-4
              before:bg-white before:rotate-45 before:border-l before:border-t
              before:border-white/10"
            >
              {item.subNav.map((nav: any) => {
                const subNavLength = nav.subNav ? nav.subNav.length : 0;
                const { gridClass, widthClass } = getSubNavGridConfig(subNavLength);

                return (
                  <div key={nav.id} className="group/subnav relative">
                    <Link
                      title={nav?.label}
                      href={FormatHref(nav.href)}
                      className={`group/navlink relative flex w-full items-center justify-between
                        gap-6 py-2.5 pl-4 pr-5 text-[13.5px] font-medium
                        transition-all duration-200 cursor-pointer
                        hover:bg-zinc-700 hover:text-white rounded-lg mx-1 
                        ${
                          isActive(nav.href)
                            ? "bg-color1 text-white rounded-lg mx-1"
                            : "text-color1"
                        }`}
                      style={{ width: "calc(100% - 8px)" }}
                    >
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-0 bg-color2 rounded-full transition-all duration-200 group-hover/navlink:h-[60%]" />
                      <span className="whitespace-nowrap pl-2">{nav.label}</span>
                    </Link>

                    {/* Second-level dropdown (Multi-column Grid Layout) */}
                    {nav.subNav && nav.subNav.length > 0 && (
                      <div
                        className={`absolute left-[100%] top-0 z-[70] hidden grid ${gridClass} ${widthClass}
                        rounded-xl bg-white border border-gray-100 p-2 shadow-[0_16px_40px_rgba(0,0,0,0.15)]
                        transition-all group-hover/subnav:grid`}
                      >
                        {nav.subNav.map((subNav: any) => (
                          <div key={subNav.id} className="px-1">
                            <Link
                              title={subNav?.label}
                              href={FormatHref(subNav.href)}
                              className={`group/sublink relative flex items-center
                                py-2 px-3 text-[13.5px] font-medium
                                transition-all duration-200 cursor-pointer
                                hover:bg-zinc-700 hover:text-white rounded-lg
                                ${
                                  isActive(subNav.href)
                                    ? "bg-color1 text-white"
                                    : "text-color1"
                                }`}
                            >
                              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-0 bg-color2 rounded-full transition-all duration-200 group-hover/sublink:h-[60%]" />
                              <span className="truncate pl-1">{subNav.label}</span>
                            </Link>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Menu;