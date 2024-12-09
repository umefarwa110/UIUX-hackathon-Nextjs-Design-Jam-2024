import Image from "next/image";

export default function Header2() {
  return (
    <div className="flex justify-between items-center w-full h-[58px] px-[24px] border-b border-gray-200">
      {/* Left section: Logo */}
      <div className="flex items-center">
        <h1 className="font-bold text-xl text-[#252B42]">Bandage</h1>
      </div>

      {/* Center section: Navigation Links */}
      <div className="flex gap-[24px]">
        <a href="#" className="text-[#737373] text-[14px] hover:text-[#252B42]">
          Home
        </a>
        <a href="#" className="text-[#737373] text-[14px] hover:text-[#252B42]">
          Shop
        </a>
        <a href="#" className="text-[#737373] text-[14px] hover:text-[#252B42]">
          About
        </a>
        <a href="#" className="text-[#737373] text-[14px] hover:text-[#252B42]">
          Blog
        </a>
        <a href="#" className="text-[#737373] text-[14px] hover:text-[#252B42]">
          Contact
        </a>
        <a href="#" className="text-[#737373] text-[14px] hover:text-[#252B42]">
          Pages
        </a>
      </div>

      {/* Right section: Login and Icons */}
      
      <div className="flex items-center gap-[16px]">
      <Image src={"/user.png"} alt="User" width={16} height={16} />
        <a
          href="#"
          className="text-[#23A6F0] text-[14px] font-semibold hover:underline"
        >
          Login / Register
        </a>
        <Image src={"/search.png"} alt="Search" width={16} height={16} />
        <Image src={"/cart.png"} alt="Cart" width={16} height={16} />
        <Image src={"/heart.png"} alt="Wishlist" width={16} height={16} />
      </div>
    </div>
  );
}
