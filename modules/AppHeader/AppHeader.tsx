import Image from "next/image";

const AppHeader = () => {
  return (
    <header className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-0">
      <div className="flex justify-center ">
        <Image
          src={"/nagai_logo_v1.jpg"}
          width={300}
          height={300}
          alt="Logo Nagai Industries"
          quality={100}
        />
      </div>
      <div className="flex items-center justify-start md:justify-end py-6">
        <p className="text-center md:text-right max-w-xl italic">
          <span className=" font-bold">Nagai Industries</span> is an independent
          game development studio headquartered in Tokyo, Japan.
        </p>
      </div>
    </header>
  );
};

export { AppHeader };
