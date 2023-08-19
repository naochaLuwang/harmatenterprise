import { BsPhone } from "react-icons/bs";
import { HiMail } from "react-icons/hi";

const Heading = () => {
  return (
    <div className="w-full h-12 bg-indigo-950 bg-opacity-80">
      <div className="w-full lg:max-w-7xl mx-auto h-full flex items-center justify-between text-white">
        <div className="flex items-center h-full justify-center space-x-3">
          <BsPhone className="h-5 w-5 text-white" />
          <p className="text-sm lg:tracking-widest">8132043928</p>
        </div>
        <div className="flex items-center h-full justify-center space-x-3">
          <HiMail className="h-5 w-5 text-white" />
          <p className="text-sm lg:tracking-widest">
            contact@hermatenterprise.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Heading;
