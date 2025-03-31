import Logo from "@/public/images/TestASLogo.png";
import Image from "next/image";

export default function TestASLogo() {
  return (
    <div className="flex items-center space-x-3 pb-4">
      {/* Orange Square (Placeholder for Geometric Pattern) */}
      <Image
        src={Logo}
        width={48}
        height={48}
        alt="KNI Logo"
        className="hover:opacity-80 transition-opacity"
      />
      {/* Text Section */}
      <div className="flex flex-col">
        <span className="text-2xl font-bold text-gray-800">TestAS</span>
        <span className="text-sm text-gray-500">Test for Academic Studies</span>
      </div>
    </div>
  );
}