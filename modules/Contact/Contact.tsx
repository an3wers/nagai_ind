import Link from "next/link";

const Contact = () => {
  return (
    <section id="contact" className="my-14 md:my-20 lg:my-32">
      <h2 className=" uppercase font-medium text-4xl mb-6 tracking-widest">
        Contact Us
      </h2>
      <div className="text-lg md:text-xl flex flex-col md:flex-row space-x-0 md:space-x-4 space-y-6 md:space-y-0 justify-between">
        <Link href='mailto:support@nagai-industries.com'>support@nagai-industries.com</Link>
        <div className=" space-x-6">
          <Link target="_blank" href="https://www.facebook.com/nagaigames">Facebook</Link>
          <Link target="_blank" href="https://twitter.com/NagaiIndustries">Twitter</Link>
        </div>
      </div>
    </section>
  );
};

export { Contact };
