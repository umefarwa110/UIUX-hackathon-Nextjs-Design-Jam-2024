import Image from "next/image";

export default function Section2() {
  return (
    <div className="w-full h-[auto] flex justify-center py-[10px] bg-[#FAFAFA] relative z-0">
      <div className="w-[1050px] h-auto flex flex-col gap-[30px] p-[40px]">

        <div className="flex flex-col items-center gap-[10px]">
          <h3 className="font-Montserrat font-semibold text-[24px] leading-[32px]">
            EDITOR’S PICK
          </h3>
          <p className="w-[347px] font-Montserrat font-normal text-[14px] leading-[20px] text-[#737373] text-center">
            Problems trying to resolve the conflict between
          </p>
        </div>

        <div className="w-full h-[500px] flex gap-[30px]">

          <div className="relative w-[510px] h-[500px]">
            <Image
              src={"/section2_men.png"}
              alt="men"
              className="object-cover"
              fill
            />
            <button className="absolute top-[434px] left-[101px] transform -translate-x-1/2 bg-white px-[50px] py-[10px] shadow-md font-Montserrat font-bold text-[#252B42] text-[15px] leading-[24px] hover:bg-gray-100">
              MEN
            </button>
          </div>

          <div className="relative w-[240px] h-[500px]">
            <Image
              src={"/section2_women.png"}
              alt="women"
              className="object-cover"
              fill
            />
            <button className="absolute top-[434px] left-[21px] w-[136px] h-[48px] px-[48px] py-[12px] flex items-center justify-center gap-[10px] bg-white shadow-md">
              <h2 className="font-Montserrat font-bold text-[15px] leading-[24px] text-[#252B42]">
                WOMEN
              </h2>
            </button>
          </div>

          <div className="w-[240px] h-[500px] flex flex-col gap-[30px]">

            <div className="relative w-[240px] h-[242px]">
              <Image
                src={"/section2_accessories.png"}
                alt="accessories"
                className="object-cover"
                fill
              />
              <button className="absolute top-[180px] left-[20px] w-[136px] h-[48px] px-[24px] py-[12px] flex items-center justify-center gap-[10px] bg-white shadow-md">
                <h2 className="font-Montserrat font-bold text-[15px] leading-[24px] text-[#252B42]">
                  ACCESSORIES
                </h2>
              </button>
            </div>

            <div className="relative w-[240px] h-[242px]">
              <Image
                src={"/section2_kids.png"}
                alt="kids"
                className="object-cover"
                fill
              />
              <button className="absolute top-[180px] left-[20px] w-[136px] h-[48px] px-[24px] py-[12px] flex items-center justify-center gap-[10px] bg-white shadow-md">
                <h2 className="font-Montserrat font-bold text-[15px] leading-[24px] text-[#252B42]">
                  KIDS
                </h2>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
