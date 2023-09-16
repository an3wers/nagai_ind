import Image from "next/image";

const About = () => {
  return (
    <>
      <section className="my-32">
        <h2 className=" uppercase font-medium text-4xl mb-6 tracking-widest">
          Studio
        </h2>
        <p className=" text-2xl">
          Our goal is to produce engaging, high-quality interactive experiences
          that combine best-in-class gameplay with strong narrative elements to
          explore and expand the possibilities of video games as a medium.
        </p>
      </section>
      <section className="my-32">
        <Image
          src="/images/image_2.jpg"
          width={1880}
          height={967}
          alt="image two"
        />
      </section>
      <section className="my-32">
        <p className=" text-center text-2xl italic">
          We’re drawing heavily from our daily lives crafting narratives that
          are moving, believable, and humane.
        </p>
      </section>
      <section className="my-32 grid grid-cols-2 grid-rows-5">
        <div className="row-start-1 row-span-2 p-6 flex items-center">
          <p className="italic text-2xl">
            We’re fascinated by Japan and its strong cultural presence that
            makes each and every moment of being there feel unique and
            meaningful. And we aspire to reflect these sensations in the
            projects we’re building.
          </p>
        </div>
        <div className="row-start-1 row-span-3">
          <Image
            src="/images/image_3.jpg"
            width={853}
            height={1280}
            alt="image three"
          />
        </div>
        <div className="row-start-3 row-span-3">
          <Image
            src="/images/image_4.jpg"
            width={853}
            height={1280}
            alt="image four"
          />
        </div>
        <div className="row-start-4 row-span-2 p-6 flex items-center">
          <p className="italic text-2xl">
            With human connection at the core of our design philosophy, we’re
            trying to offer new ways for our audience to interact with the
            environment and exceed our medium’s limitations.
          </p>
        </div>
      </section>
      <section className="my-32">
        <div className=" flex flex-col items-center space-y-16">
          <Image src="/frame_1.svg" width={300} height={80} alt="" />
          <p className="text-center italic text-2xl">
            We’re fully committed to employ traditional Japanese concept{" "}
            <span className=" font-bold">ichi-go ichi-e</span> as a foundation
            for our debut title. Representing transient nature of life, it help
            us navigate the development process and brings gravity to the
            experience we’re orchestrating.
          </p>
        </div>
      </section>
      <section className="my-32">
        <Image src="/images/image_5.jpg" width={1680} height={1120} alt="image five" />
      </section>
    </>
  );
};

export { About };
