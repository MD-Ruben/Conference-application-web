"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { LiveBadge } from "./LiveBadge";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <section className="sticky left-0 top-0 flex h-screen w-fit flex-col  justify-between  bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[264px] overflow-y-auto scrollbar-hide">
      <div className="flex flex-1 flex-col gap-6">
        {sidebarLinks.map((item) => {
          const isActive =
            pathname === item.route || pathname.startsWith(`${item.route}/`);

          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn(
                "flex gap-4 items-center p-4 rounded-lg justify-start",
                {
                  "bg-orange-1": isActive,
                }
              )}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={24}
                height={24}
              />
              <p className="text-lg font-semibold max-lg:hidden">
                {item.label}
              </p>
            </Link>
          );
        })}
        <div className="space-y-4 pt-4 lg:pt-0">
        <div>
      <div className="pl-6 mb-4">
        <p className="text-sm text-gray-300">Recommandé</p>
      </div>
      <div className="relative flex items-center gap-x-2 space-y-2 px-2">
        <Image
          src="/images/avatar-1.jpeg"
          alt="avatar"
          width={40}
          height={40}
          className="rounded-full"
        />
        <p>Christine</p>
        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
          {/* En direct */}
          <LiveBadge />
        </div>
      </div>
    </div>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
