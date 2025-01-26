export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Left Section */}
        <div className=" space-y-4 md:space-y-0 md:space-x-8 md:flex-row">
          <div>
            <img src="/logowhite.svg" alt="logo" />
          </div>
          <div className="flex gap-32 mt-10">
            <div className="flex flex-col space-y-2">
              <a href="#" className="text-sm hover:underline">
                FAQs
              </a>
              <a href="#" className="text-sm hover:underline">
                Blog
              </a>
              <div className="flex gap-2">
                <img src="/twitter.png" alt="" />
                <img src="/tiktok.png" alt="" />
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <a href="#" className="text-sm hover:underline">
                Support
              </a>
              <a href="#" className="text-sm hover:underline">
                Join Our Team
              </a>
              <a href="#" className="text-sm hover:underline">
                Terms of Service
              </a>
              <a href="#" className="text-sm hover:underline">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>

        {/* Right Section */}
          <div className="mt-10 h-full flex flex-col items-start justify-end space-y-8">
            <button className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 cursor-pointer">
              Start a Pool
            </button>
            <p className="text-xs    ">
              Braid is not a bank. Banking services provided by
              <br /> Braid's partner bank.
            </p>
          </div>
      </div>
    </footer>
  );
}
