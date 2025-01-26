const Freqquestions = () => {
  const faqs = [
    "What is a Braid Pool?",
    "How do Braid Pools work?",
    "Does Braid charge fees?",
    "How is Braid different from Venmo, Cash App, Zelle, PayPal, etc.?",
  ];
  return (
    <div className="py-32">
      <div>
        <p
          style={{ lineHeight: "76px", fontSize: "56px" }}
          className="flex text-center justify-center font-bold pb-16"
        >
          Frequently Asked Questions{" "}
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`${index===0 && 'border-t'} border-b border-black flex justify-between items-center py-6`}
            >
              <span className="text-xl font-semibold leading-6 ">{faq}</span>
              <button className="text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Freqquestions;
