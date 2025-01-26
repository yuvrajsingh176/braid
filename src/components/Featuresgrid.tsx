export default function FeaturesGrid() {
  const features = [
    {
      emoji: "🤝",
      title: "Multiplayer by design",
      description: "Manage your pool with others or solo.",
    },
    {
      emoji: "",
      title: "Collect money easily",
      description: "Invite friends and family to your pools.",
    },
    {
      emoji: "👑",
      title: "Your pool your rules",
      description: "Settings to manage members and spending.",
    },
    {
      emoji: "🔔",
      title: "Automatic reminders",
      description: "So everyone remembers to pay.",
    },
    {
      emoji: "✨",
      title: "Cash out instantly",
      description:
        "Transfer money from Braid to your bank account in minutes for a small fee.",
    },
    {
      emoji: "💳",
      title: "Free debit cards for the squad",
      description: "Coming soon.",
    },
  ];

  return (
    <div className="flex justify-center">
 <div className="flex flex-col gap-5 pt-32 w-3/4">
      <p
        style={{ lineHeight: "76px", fontSize: "56px" }}
        className="flex text-center justify-center font-bold pb-16"
      >
            Why pool with Braid?
      </p>
      <div className=" h-[484px] flex  justify-between gap-5">
        <div className="p-4 w-1/2 bg-[#72D9E1] rounded-lg h-full shadow-md border border-cyan-300  text-center flex flex-col justify-center">
          <div className="text-2xl">{features[1].emoji}</div>
          <h3 className="mt-2 text-lg font-semibold">{features[1].title}</h3>
          <p className="mt-1 text-sm text-gray-700">
            {features[1].description}
          </p>
        </div>
        <div className="w-1/2 flex flex-col gap-5">
          {" "}
          <div className="p-4 bg-[#72D9E1] h-1/2 rounded-lg  shadow-md border border-cyan-300  text-center flex flex-col justify-center">
            <div className="text-2xl">{features[0].emoji}</div>
            <h3 className="mt-2 text-lg font-semibold">{features[0].title}</h3>
            <p className="mt-1 text-sm text-gray-700">
              {features[0].description}
            </p>
          </div>{" "}
          <div className="p-4 bg-[#72D9E1] h-1/2 rounded-lg  shadow-md border border-cyan-300  text-center flex flex-col justify-center">
            <div className="text-2xl">{features[2].emoji}</div>
            <h3 className="mt-2 text-lg font-semibold">{features[2].title}</h3>
            <p className="mt-1 text-sm text-gray-700">
              {features[2].description}
            </p>
          </div>
        </div>
      </div>
      <div className=" h-[484px] flex  justify-between gap-5">
        <div className="w-1/2 flex flex-col gap-5">
          {" "}
          <div className="p-4 bg-[#72D9E1] h-1/2 rounded-lg  shadow-md border border-cyan-300  text-center flex flex-col justify-center">
            <div className="text-2xl">{features[3].emoji}</div>
            <h3 className="mt-2 text-lg font-semibold">{features[3].title}</h3>
            <p className="mt-1 text-sm text-gray-700">
              {features[3].description}
            </p>
          </div>{" "}
          <div className="p-4 bg-[#72D9E1] h-1/2 rounded-lg  shadow-md border border-cyan-300  text-center flex flex-col justify-center">
            <div className="text-2xl">{features[5].emoji}</div>
            <h3 className="mt-2 text-lg font-semibold">{features[5].title}</h3>
            <p className="mt-1 text-sm text-gray-700">
              {features[5].description}
            </p>
          </div>
        </div>
        <div className="p-4 w-1/2 bg-[#72D9E1] rounded-lg h-full shadow-md border border-cyan-300  text-center flex flex-col justify-center">
          <div className="text-2xl">{features[4].emoji}</div>
          <h3 className="mt-2 text-lg font-semibold">{features[4].title}</h3>
          <p className="mt-1 text-sm text-gray-700">
            {features[4].description}
          </p>
        </div>
      </div>
    </div>
    </div>
   
  );
}
