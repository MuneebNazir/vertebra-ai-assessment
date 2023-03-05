
export default function Home() {
  return (
    <div className="bg-[#302367] rounded-lg my-4 shadow-lg max-w-4xl mx-auto shadow-black/40">
      <div className="p-4">
        <div className="flex justify-between items-center w-[55px]">
          <div className="bg-red-500 w-3 h-3 rounded-full"></div>
          <div className="bg-yellow-500 w-3 h-3 rounded-full"></div>
          <div className="bg-green-500 w-3 h-3 rounded-full"></div>
        </div>
      </div>
      <div className="bg-[#50418C] py-2 px-4 overflow-hidden min-h-[200px] rounded-b-lg">
        <p className="text-white font-mono">guest@localhost:~$</p>
        <p className="text-white font-mono">$ begin</p>
      </div>
    </div>
  );
}
