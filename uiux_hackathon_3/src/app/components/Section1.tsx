import Image from "next/image";

export default function Section1() {
  return (
    <div className="relative w-full h-[760px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={"/section1_gwithbg.jpg"} // Replace with your image path
          alt="Background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
        />
      </div>
      {/* Content Layer */}
      <div className="relative z-10 flex items-center h-full max-w-[1200px] mx-auto px-4">
        <div className="text-left text-white">
          <p className="text-[16px] uppercase tracking-widest font-semibold">
            Summer 2020
          </p>
          <h1 className="text-[58px] font-bold leading-[1.2] my-[10px]">
            NEW COLLECTION
          </h1>
          <p className="text-[20px] leading-[1.6] mb-[20px]">
            We know how large objects will act, <br/> but things on a small scale.
          </p>
          <button className="bg-[#4CAF50] text-white font-semibold text-[20px] px-[22px] py-[12px] rounded hover:bg-[#3C9E40]">
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
}
