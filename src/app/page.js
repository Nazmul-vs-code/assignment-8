import Banner from "@/components/Banner";
import FeturedAnimal from "@/components/FeturedAnimal";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="w-[80%] mx-auto my-20">

        <Banner />

      </div>

      <div className=" mb-8 w-5/10 mx-auto flex justify-center">
        <button className="btn btn-primary">
          <Link href={'/all-animals'}>
            All animals
          </Link>
        </button>
      </div>

      <div className="border w-[80%] mx-auto border-red-500 mb-20">
        < FeturedAnimal></FeturedAnimal>

      </div>

    </div>

  );
}
