import Image from "next/image";

export default function Section4() {
    return (
        <div className="relative w-full h-[716px]">

            <div className="absolute inset-0">
                <Image
                    src={"/section4_bwithbg.jpg"}
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    priority
                />
            </div>

            <div className="relative flex justify-between items-center h-full px-8 ml-20">

                <div className="max-w-md text-white">
                    <p className="text-[28]">SUMMER 2020</p>
                    <h1 className="text-[48px] font-bold my-4">Vita Classic <br />Product</h1>
                    <p className="text-sm mb-6">
                        We know how large objects will act, We know  <br /> how are objects will act, We know</p>
                    <div className="flex items-center">
                        <p className="text-[24px] font-bold mr-4">$16.48</p>
                        <button className="bg-[#2DC071] text-white px-6 py-2 rounded hover:bg-[#28a864]">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
