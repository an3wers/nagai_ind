"use client";
import smoothscroll from "smoothscroll-polyfill";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const AppNavigation = () => {
  const router = useRouter();
  useEffect(() => {
    smoothscroll.polyfill();
  }, []);
  function handler(e: any, hash: string) {
    (e as MouseEvent).preventDefault();
    const target = document.querySelector(hash);
    if (target) {
      // router.push(hash);
      window.location.hash = hash
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  }

  return (
    <nav className="absolute md:sticky z-20 top-14 right-6">
      <ul className="flex flex-col md:flex-row gap-4 md:gap-6 justify-end">
        <li>
          <Link href="#" onClick={(e: any) => handler(e, "#studio")}>
            Studio
          </Link>
        </li>
        <li>
          <Link href="#" onClick={(e: any) => handler(e, "#projects")}>
            Projects
          </Link>
        </li>
        <li>
          <Link href="#" onClick={(e: any) => handler(e, "#team")}>
            Team
          </Link>
        </li>
        <li>
          <Link href="#" onClick={(e: any) => handler(e, "#contact")}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export { AppNavigation };
