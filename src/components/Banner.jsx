import Link from "next/link";

const Banner = () => {
  return (
    <div className=" bg-[url('https://static.vecteezy.com/system/resources/previews/038/085/268/non_2x/ai-generated-cow-high-quality-image-free-photo.jpg')] h-[60vh] w-full bg-cover bg-no-repeat bg-center flex items-center rounded-lg shadow-2xl">

      <div className="w-full h-full rounded-lg bg-black/50 flex items-center">
        <div className="max-w-7xl mx-auto px-6 text-white">

          <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-2xl">
            Find Healthy Animals for Your Qurbani
          </h1>

          <p className="text-lg md:text-xl mb-6 max-w-xl text-gray-200">
            Explore cows, goats, and premium livestock for Eid-ul-Adha. Book your perfect Qurbani animal easily and safely.
          </p>

          <div className="flex gap-4">
            <Link href="/animals">
              <button className="btn btn-primary">
                Browse Animals
              </button>
            </Link>

            <Link href="#">
              <button className="btn btn-outline text-white border-white hover:bg-white hover:text-black">
                Learn More
              </button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Banner;