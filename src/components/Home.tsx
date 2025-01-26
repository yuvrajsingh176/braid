import Freqquestions from "./Freqquestions";

const Home = () => {
  const values1 = [
    "Rent 🏠",
    "Vacation Funds 🏖",
    "Sports Leagues 🏀",
    "Gifts 🎁",
    "Baby Showers 🍼",
  ];
  const values2 = [
    "Teacher Appreciation 🧑",
    "Graduation Gifts 🎁",
    "Class Reunions 🎓",
    "Cash Registry",
  ];
  const values3 = [
    "Weddings 💍",
    "Community Projects 🌻",
    "Club Dues 👥",
    "Emergency Funds 🚨",
  ];
  const values4 = [
    "Memorials 💛",
    "Bands 🎸",
    "Netflix 🍿",
    "Home Improvement Projects 🛠",
  ];

  return (
    <div className="">
      <div className="flex justify-between pt-16 pb-32">
        <div>
          <p className="text-6xl font-bold leading-24">
            Simple free <br /> money pools
          </p>
          <p className="text-xl font-normal leading-8 mt-2">
            Braid is the easiest way to pool money. Collect money
            <br /> with just a link, and manage it solo or together.
          </p>
          <button className="bg-[#4B52D9] text-xl font-medium leading-7 py-[18px] mt-10 px-8 text-white rounded-full">
            Start a Pool
          </button>{" "}
        </div>
        <img src="/heroimage.png" />
      </div>

      <div className="pb-32">
        <p
          style={{ lineHeight: "76px", fontSize: "56px" }}
          className="flex text-center justify-center font-bold "
        >
          How does Braid work?
        </p>
        <div className="flex justify-between pt-16">
          <div>
            <img src="/work1.png" alt="Start your Braid Pool " />
            <p className="text-2xl font-semibold leading-8 text-center pt-10 pb-3">
              Start your Braid Pool
            </p>
            <p className="text-base font-normal leading-6 text-center">
              Braid Pools are free to use. Start as many
              <br />
              as you need.
            </p>
          </div>
          <div>
            <img src="/work2.png" alt="Start your Braid Pool" />
            <p className="text-2xl font-semibold leading-8 text-center pt-10 pb-3">
              Share your Pool Link to
              <br />
              collect money
            </p>
            <p className="text-base font-normal leading-6 text-center">
              Braid Pools are free to use. Start as many
              <br />
              as you need.
            </p>
          </div>{" "}
          <div>
            <img src="/work3.png" alt="Start your Braid Pool" />
            <p className="text-2xl font-semibold leading-8 text-center pt-10 pb-3">
              Send money directly
              <br />
              from your pool
            </p>
            <p className="text-base font-normal leading-6 text-center">
              You can send funds from your pool to any
              <br />
              debit card or phone number instantly.
            </p>
          </div>
        </div>
      </div>
      <div className=" flex justify-around pb-16">
        <div className="flex flex-col justify-center">
          {" "}
          <div className="flex flex-col gap-10">
            <div>
              <p className="text-[#2D9164] text-2xl font-semibold  leading-7">
                Easy contribution
              </p>
              <p className="text-base  font-normal leading-6">
                Contributors don't need a Braid account to chip in.
              </p>
            </div>
            <div>
              <p className="text-[#2D9164] text-2xl font-semibold  leading-7">
                Free to use
              </p>
              <p className="text-base  font-normal leading-6">
                Start as many pools as you need.{" "}
              </p>
            </div>{" "}
            <div>
              <p className="text-[#2D9164] text-2xl font-semibold  leading-7">
                Personalize your Pool Link{" "}
              </p>
              <p className="text-base  font-normal leading-6">
                Make it unique to your group and goal.{" "}
              </p>
            </div>
          </div>
        </div>

        <img src="/eatsclub.png" alt="eatsclub" />
      </div>
      <div className=" flex justify-around pb-32">
        <img src="/debitcard.png" alt="eatsclub" />
        <div className="flex flex-col justify-center">
          {" "}
          <div className="flex flex-col gap-10">
            <div>
              <p className="text-[#2D9164] text-2xl font-semibold  leading-7">
                Spend with the pool debit card{" "}
              </p>
              <p className="text-base  font-normal leading-6">Coming soon. </p>
            </div>
            <div>
              <p className="text-[#2D9164] text-2xl font-semibold  leading-7">
                See transactions as they happen
              </p>
              <p className="text-base  font-normal leading-6">
                Track contributions, and spending with timely <br />{" "}
                notifications and monthly statements.{" "}
              </p>
            </div>{" "}
            <div>
              <p className="text-[#2D9164] text-2xl font-semibold  leading-7">
                Run your pool solo or as a team{" "}
              </p>
              <p className="text-base  font-normal leading-6">
                Invite collaborators and set permissions for what they,
                <br /> can do. Decide who can spend, set spending limits and
                <br /> more.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-32">
        <p
          style={{ lineHeight: "76px", fontSize: "56px" }}
          className="flex text-center justify-center font-bold "
        >
          How are people using Braid?{" "}
        </p>
        <div className="pt-16 ">
          <div className="flex justify-center">
            <div className="flex  flex-wrap justify-between gap-5  ">
              {values1.map((value, index) => (
                <div
                  className={`  py-6 px-8 text-black text-xl font-semibold leading-7 rounded-2xl border border-black/10 bg-white shadow-sm`}
                  key={index}
                >
                  {value}
                </div>
              ))}
            </div>
          </div>

          <div className="flex  gap-5 flex-wrap mt-5 justify-center">
            {values2.map((value, index) => (
              <div
                className="py-6 px-8 text-black text-xl font-semibold leading-7 rounded-2xl border border-black/10 bg-white shadow-sm"
                key={index}
              >
                {value}
              </div>
            ))}
          </div>
          <div className="flex  gap-5 flex-wrap mt-5 justify-center">
            {values3.map((value, index) => (
              <div
                className="py-6 px-8 text-black text-xl font-semibold leading-7  rounded-2xl border border-black/10 bg-white shadow-sm"
                key={index}
              >
                {value}
              </div>
            ))}
          </div>
          <div className="flex  gap-5 flex-wrap mt-5 justify-center">
            {values4.map((value, index) => (
              <div
                className="py-6 px-8 text-black text-xl font-semibold leading-7 rounded-2xl border border-black/10 bg-white shadow-sm"
                key={index}
              >
                {value}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="">
        <p
          style={{ lineHeight: "76px", fontSize: "56px" }}
          className="flex text-center justify-center font-bold "
        >
          Braid is safe and secure{" "}
        </p>
        <div className="flex justify-between pt-16">
          <div>
            <div className="flex justify-center">
              <img src="/shield.svg" alt="shield" />
            </div>
            <p className="text-center text-base font-normal leading-6">
              We use best-in-class security and
              <br /> compliance practices to keep your money
              <br /> safe and personal data private.
            </p>
          </div>
          <div>
            <div className="flex justify-center">
              <img src="/lock.svg" alt="shield" />
            </div>
            <p className="text-center items-center text-base font-normal leading-6">
              All payment and personal information is <br />
              encrypted end-to-end using SSL 256-bit <br />
              encryption.
            </p>
          </div>{" "}
          <div>
            <div className="flex justify-center">
              <img src="/bell.svg" alt="shield" />
            </div>
            <p className="text-center items-center text-base font-normal leading-6">
              Get timely notifications for pool
              <br /> transactions, so you’re always in the loop.
            </p>
          </div>
        </div>
      </div>
      <Freqquestions />
    </div>
  );
};

export default Home;
