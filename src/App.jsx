function App() {
  return (
    <>
      <div className="flex">
        <div className="w-3/12   h-52 bg-red-500 text-7xl leading-52  text-white text-center ">
          3:12
        </div>
        <div className="w-4/12 h-52 bg-red-800 text-7xl leading-52   text-white text-center ">
          4:12
        </div>
        <div className="w-5/12 h-52 bg-red-500 text-7xl leading-52   text-white text-center ">
          5:12
        </div>
      </div>
      <div className="flex">
        <div className="w-1/6 h-80 bg-amber-400 text-7xl leading-80  text-white text-center">
          1:6
        </div>
        <div className="w-5/6 h-80 bg-amber-950 text-7xl  text-white text-center">
          <div className=" w-full h-40 bg-amber-600 text-7xl leading-40 text-white text-center">
            5:6
          </div>
          <div className="flex">
            <div className=" w-1/2 h-40 bg-blue-950 text-7xl leading-40 text-white text-center">
              1:2
            </div>
            <div className=" w-1/2 h-40 bg-blue-500 text-7xl leading-40 text-white text-center">
              1:2
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="w-1/3 h-80 bg-amber-600 text-7xl leading-80  text-white text-center ">
          1:3
        </div>
        <div className="w-1/3 h-80 bg-cyan-950 text-7xl leading-80    text-white text-center ">
          1:3
        </div>
        <div className="w-1/3 h-80 bg-red-500 text-7xl leading-80    text-white text-center ">
          1:3
        </div>
      </div>
      <div className="flex">
        <div className="w-1/2 h-40 bg-fuchsia-700 text-7xl leading-40   text-white text-center">
          1:2
        </div>
        <div className="w-1/2 h-40 bg-fuchsia-500 text-7xl leading-40  text-white text-center">
          1:2
        </div>
      </div>
    </>
  );
}

export default App;
