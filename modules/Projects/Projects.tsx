import Image from "next/image";

const Projects = () => {
  return (
    <>
      <section className="my-32">
        <h2 className=" uppercase font-medium text-4xl mb-6 tracking-widest">
          Project
        </h2>
        <p className=" text-xl mb-4">
          InKonbini is an accessible, choice-driven shop assistant simulator
          that makes you explore and appreciate wonders of a day-to-day life in
          a 1990s small-town Japanese convenience store.
        </p>
        <p className=" text-xl mb-4">
          InKonbini offers a meditative, slice-of-life experience and lets you
          discover the secrets of Japanese customer service through meaningful
          conversations with a variety of the store’s regulars.
        </p>
        <p className=" text-xl mb-4">
          Featuring a unique blend of easy-to-grasp gameplay mechanics and a
          subtle narrative structure, the game conveys the idea that every
          single moment which comes is unique and worth savouring, and the only
          thing that’s constant in life is change.
        </p>
      </section>
      <section className="my-32">
        <Image
          src="/images/image_6.jpg"
          width={1680}
          height={883}
          alt="image six"
        />
      </section>
    </>
  );
};

export { Projects };
