import { FaStore, FaUserCircle, FaCalendarAlt, FaCode } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { FaQq, FaArrowRightLong } from "react-icons/fa6";
import { IoChatbubbles } from "react-icons/io5";
import { PiTestTubeFill } from "react-icons/pi";

export default function Home() {
  return (
    <div className="min-h-[100vh] bg-[#f4f6fa] min-w-full flex flex-col">
      <div className="flex-1 max-w-[900px] w-full mx-auto px-4 py-8 h-auto">
        <div className="p-4 flex flex-row items-center rounded-md shadow-[0_.125rem_.25rem_rgba(0,0,0,0.075)] bg-white">
          <div className="flex flex-row items-center">
              <FaUserCircle size={50} color="gray" className="max-sm:hidden"/>
              <FaUserCircle size={30} color="gray" className="sm:hidden"/>
            <div className="ml-4 flex flex-col">
              <div className="text-lg max-sm:text-base">John's Restaurant</div>
              <div className="text-sm text-slate-600">john@example.com</div>
            </div>
          </div>
          <div className="flex flex-row items-center ml-auto mr-0 active:bg-slate-400 rounded-md p-2 cursor-pointer bg-[#f1f1f1]">
            <IoIosSettings size={25}/>
            <div className="ml-2 text-sm max-[400px]:hidden">Account Setting</div>
          </div>
        </div>

        <div className="mt-8 max-sm:px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 flex-row">

          <div className="p-4 min-h-[160px] h-full rounded-md bg-white flex justify-center flex-col shadow-[0_.125rem_.25rem_rgba(0,0,0,0.075)]">
            <div className="flex flex-row items-center">
              <FaStore size={20} color="blue"/>
              <div className="ml-2 text-base font-bold">Store Information</div>
            </div>
            <div className="my-2 text-gray-800 text-sm">Configure your store's basic information</div>
            <div className="text-blue-800 flex flex-row items-center cursor-pointer">
              <div className="text-sm">Configure</div>
              <div className="ml-2">
                <FaArrowRightLong color="blue"/>
              </div>
            </div>
          </div>

          <div className="p-4 min-h-[160px] h-full rounded-md bg-white flex justify-center flex-col shadow-[0_.125rem_.25rem_rgba(0,0,0,0.075)]">
            <div className="flex flex-row items-center">
              <FaQq size={20} color="purple"/>
              <div className="ml-2 text-base font-bold">FAQ Training</div>
            </div>
            <div className="my-2 text-gray-800 text-sm">Train AI with your FAQs for automated responses</div>
            <div className="text-purple-800 flex flex-row items-center cursor-pointer">
              <div className="text-sm">Configure</div>
              <div className="ml-2">
                <FaArrowRightLong color="purple"/>
              </div>
            </div>
          </div>

          <div className="p-4 min-h-[160px] h-full rounded-md bg-white flex justify-center flex-col shadow-[0_.125rem_.25rem_rgba(0,0,0,0.075)]">
            <div className="flex flex-row items-center">
              <FaCalendarAlt size={20} color="green"/>
              <div className="ml-2 text-base font-bold">Calendar Sync</div>
            </div>
            <div className="my-2 text-gray-800 text-sm">Sync bookings with Google Calendar</div>
            <div className="text-green-800 flex flex-row items-center cursor-pointer">
              <div className="text-sm">Connect</div>
              <div className="ml-2">
                <FaArrowRightLong color="green"/>
              </div>
            </div>
          </div>

          <div className="p-4 min-h-[160px] h-full rounded-md bg-white flex justify-center flex-col shadow-[0_.125rem_.25rem_rgba(0,0,0,0.075)]">
            <div className="flex flex-row items-center">
              <IoChatbubbles size={20} color="orange"/>
              <div className="ml-2 text-base font-bold">Chat History</div>
            </div>
            <div className="my-2 text-gray-800 text-sm">View past chat conversations</div>
            <div className="text-amber-500 flex flex-row items-center cursor-pointer">
              <div className="text-sm">View</div>
              <div className="ml-2">
                <FaArrowRightLong color="orange"/>
              </div>
            </div>
          </div>

          <div className="p-4 min-h-[160px] h-full rounded-md bg-white flex justify-center flex-col shadow-[0_.125rem_.25rem_rgba(0,0,0,0.075)]">
            <div className="flex flex-row items-center">
              <FaCode size={20} color="indigo"/>
              <div className="ml-2 text-base font-bold">Generate Snippet</div>
            </div>
            <div className="my-2 text-gray-800 text-sm">Generate chat widget code for your website</div>
            <div className="text-indigo-800 flex flex-row items-center cursor-pointer">
              <div className="text-sm">Generate</div>
              <div className="ml-2">
                <FaArrowRightLong color="indigo"/>
              </div>
            </div>
          </div>

          <div className="p-4 min-h-[160px] h-full rounded-md bg-white flex justify-center flex-col shadow-[0_.125rem_.25rem_rgba(0,0,0,0.075)]">
            <div className="flex flex-row items-center">
              <PiTestTubeFill size={20} color="red"/>
              <div className="ml-2 text-base font-bold">AI Test</div>
            </div>
            <div className="my-2 text-gray-800 text-sm">Test your trained AI responses</div>
            <div className="text-red-600 flex flex-row items-center cursor-pointer">
              <div className="text-sm">Test</div>
              <div className="ml-2">
                <FaArrowRightLong color="red"/>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
