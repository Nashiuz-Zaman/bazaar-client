// core
import Link from "next/link";
import Image from "next/image";

// components
import { InnerContainer } from "../containers";

const Header = () => {
  return (
    <header>
      {/* top black part */}
      <InnerContainer modifyClasses="h-12 bg-lightBlack w-full flex items-center justify-between mb-4">
        {/* marquee */}
        <div></div>

        {/* auth links */}
        <div className="flex items-center gap-6 text-white">
          <Link href="/login">Login</Link>
          <Link href="/register">Register</Link>
        </div>
      </InnerContainer>

      {/* bottom part */}
      <InnerContainer>
        <Image
          width={171}
          height={39}
          src="https://res.cloudinary.com/diwzuhlc3/image/upload/v1727548124/bazaar%20assets/logo/logo_imuw15.png"
          alt="logo"
        />
      </InnerContainer>
    </header>
  );
};

export default Header;
