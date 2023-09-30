import Image from "next/image";

const AppHeader = () => {
  return (
    <header className="grid grid-cols-1 md:grid-cols-[250px_1fr]  gap-0">
      <div className="flex justify-start min-h-[240px] pr-28 md:pr-2">
        <Image
          src={"/nagai_logo.png"}
          width={250}
          height={250}
          alt="Logo Nagai Industries"
          quality={100}
          className="object-contain"
        />
      </div>
      <div className="flex items-center justify-start md:justify-end py-6">
        <p className="md:text-right max-w-xl italic">
          <span className=" font-bold">Nagai Industries</span> is an independent
          game development studio headquartered in Tokyo, Japan.
        </p>
      </div>
    </header>
  );
};

export { AppHeader };
