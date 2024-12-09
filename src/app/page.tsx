import Sidebar from "./components/Sidebar/sidebar";
import Right from "./components/Right/page";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-400 p-8 lg:px-20 ">
      <div className="grid grid-cols-12 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-3 col-span-12 bg-white rounded-2xl shadow-xl lg:p-4 lg:sticky top-0 max-h-[90vh]">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="lg:col-span-9 col-span-12 bg-white rounded-2xl shadow-xl lg:p-4  lg:max-h-[90vh]">
          <Right />
        </div>
      </div>
    </div>
  );
}
