import Image from "next/image";
import Link from "next/link";

const ITservice = () => {
  return (
    <div className="w-full h-[80vh]">
      <div className="grid grid-cols-3 w-full h-full">
        <div className="relative w-full h-full ">
          <Image
            src="/icons/server.jpeg"
            alt="server"
            fill
            style={{ objectFit: "fill" }}
          />
        </div>
        <div className="w-full h-auto py-10  col-span-2 px-6">
          <h1 className="text-4xl font-medium ">
            Seamless IT Enterprise <br /> Solutions
          </h1>
          <p className="text-sm mt-3">
            Unleash Efficiency and Innovation. Elevate Your Business Today!
          </p>

          <div className="grid grid-cols-3 mt-10">
            <div className="w-[19rem] h-80 rounded-lg bg-blue-50 flex items-center justify-center flex-col">
              <div className="relative w-60 h-60">
                <Image src={"/icons/creators.png"} alt="creator" fill />
              </div>
              <p className="font-medium text-lg text-center">
                WEBSITE DESIGN AND DEVELOPMENT
              </p>
            </div>
            <div className="w-[19rem] h-80 flex items-center justify-center flex-col">
              <div className="relative w-60 h-60">
                <Image src={"/icons/security.png"} alt="creator" fill />
              </div>
              <p className="font-medium mt-5">NETWORK SECURITY</p>
            </div>
            <div className="w-[19rem] h-80 rounded-lg bg-slate-50 flex items-center justify-center flex-col">
              <div className="relative w-60 h-60">
                <Image src={"/icons/medical.png"} alt="creator" fill />
              </div>
              <p className="font-medium text-center">
                MEDICAL EQUIPMENT RELATED SERVICES
              </p>
            </div>
          </div>
          <div className="w-full h-auto flex items-center justify-center">
            <Link
              href="#"
              className="relative px-6 py-3 font-bold text-black group mt-10"
            >
              <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-indigo-950  group-hover:translate-x-0 group-hover:translate-y-0 bg-opacity-90"></span>
              <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
              <span className="relative text-white">Explore More</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ITservice;
