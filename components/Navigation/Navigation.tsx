import Link from "next/link";

const AppNavigation = () => {
  return (
    <nav className="absolute md:fixed z-20 top-6 right-6">
      <ul className="flex flex-col md:flex-row gap-6 justify-end">
        <li>
          <Link href="/#studio">Studio</Link>
        </li>
        <li>
          <Link href="/#projects">Projects</Link>
        </li>
        <li>
          <Link href="/#team">Team</Link>
        </li>
        <li>
          <Link href="/#contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export { AppNavigation };
