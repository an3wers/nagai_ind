import Image from "next/image";

const AppHeader = () => {
  return (
    <header className=" grid grid-cols-1 md:grid-cols-[300px_1fr] gap-0">
      <div className="">
        <Image
          src={"/nagai_logo_v1.jpg"}
          width={300}
          height={300}
          alt="Logo Nagai Industries"
          quality={100}
        />
      </div>
      <div className="flex items-center justify-end">
        <p className="text-right max-w-xl italic">
          <span className=" font-bold">Nagai Industries</span> is an independent
          game development studio headquartered in Tokyo, Japan.
        </p>
      </div>
    </header>
  );
};

export { AppHeader };
