import Freqquestions from "./Freqquestions";
import FeaturesGrid from "./Featuresgrid";

const Whypool = () => {
  return (
    <div>
      <p
        style={{ lineHeight: "76px", fontSize: "56px" }}
        className="flex text-center justify-center font-bold pt-32 pb-16 "
      >
        Why Pool???
      </p>
      <div className="flex justify-around">
        <div>
          <p className="text-[44px] font-bold leading-16">
            Because splitting sucks
          </p>
          <p className="text-[#636260] text-xl font-normal leading-8">
            Calculating the split. Juggling payment methods.
            <br /> Fronting money. Spreadsheets. It's time consuming
            <br /> and messy.
          </p>
        </div>
        <img src="/split.png" alt="split" />
      </div>
      <div className="flex justify-around mt-16">
        <img src="/heroimage.png" alt="split" />

        <div>
          <p className="text-[44px] font-bold leading-16">
            Pooling is a better way
            <br /> to manage shared
            <br /> expenses{" "}
          </p>
          <p className="text-[#636260] text-xl font-normal leading-8 mt-3">
            Everyone chips in instead of one person footing the <br /> bill. All
            transactions are visible to the group instead
            <br /> of hidden in one person’s bank account.
            <br />
          </p>
          <p className="text-[#636260] text-xl font-normal leading-8 mt-3">
            And it’s even better when you pool with Braid!
          </p>
        </div>
      </div>
      <FeaturesGrid />  
      <Freqquestions />
    </div>
  );
};

export default Whypool;
