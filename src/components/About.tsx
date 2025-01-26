const About = () => {
  return (
    <div>
      <p
        style={{ lineHeight: "76px", fontSize: "56px" }}
        className="flex text-center justify-center font-bold pt-32 pb-16 "
      >
        About Us{" "}
      </p>
      <div className="flex justify-between">
        <div className="text-xl font-normal leading-8 flex flex-col gap-6">
          <p className="text-[44px] font-bold leading-16">Our Story</p>
          <p>
            My money, your money, their money. What about our
            <br /> money?
          </p>
          <p>
            Vibrant communities are built by pooling resources.
            <br /> But when it comes to sharing money, we're stuck with
            <br /> tools designed for individual use. As a result, sharing
            <br /> money is often complicated and opaque.
          </p>
          <p>We started Braid to fix this problem.</p>
        </div>
        <img src="/circlearrow.png" alt="" />
      </div>
      <div className="my-32 bg-[#72D9E1] h-[672px] w-full flex justify-center flex-col items-center">
        <img src="figures.png" alt="figures" />
        <div className="mt-10">
          <p className="text-[44px] font-bold leading-16 text-center">
            Our Mission
          </p>
          <p className="text-xl font-normal leading-8 text-center">
            Build tools to make pooling money simple,
            <br />
            transparent and safe.
          </p>
        </div>
      </div>
      <div className="flex justify-around pb-32 items-center">
        <img src="team.png" alt="team" />
        <div className="flex flex-col gap-6">
          <p className="text-[44px] font-bold leading-16 ">
            Our Team
          </p>
          <p>
            We're a small, distributed team based across the
            <br /> United States. We have a wealth of experience in
            <br /> building consumer technology products from <br />
            working at companies like Etsy, Coursera, Google,
            <br /> BuzzFeed, Mozilla and others.
          </p>
          <button className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 w-fit cursor-pointer">
            Read about our values{" "}
          </button> 
        </div>
      </div>
    </div>
  );
};

export default About;
