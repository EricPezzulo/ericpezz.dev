export default function AppDemoCard() {
  return (
    <div className="mx-5 w-fit rounded border border-gray-200 p-3 duration-150 ease-in-out hover:scale-105 hover:cursor-pointer ">
      <div className="flex h-56 w-72 flex-col items-center justify-center rounded bg-gray-200">
        <p className="mx-5 text-center text-gray-700">
          Well this is awkward...
        </p>

        <p className="mx-5 text-center text-gray-700">
          Please check back later!
        </p>
      </div>
      <h5 className="text-lg font-semibold">App Name</h5>
      <div className="flex ">
        <div className="m-1 w-fit rounded-full bg-gray-200 px-3 py-1 text-sm first:ml-0">
          <p>Javascript</p>
        </div>
        <div className="m-1 w-fit rounded-full bg-gray-200 px-3 py-1 text-sm">
          <p>Node</p>
        </div>
        <div className="last:mr:0 m-1 w-fit rounded-full bg-gray-200 px-3 py-1 text-sm">
          <p>Next.js</p>
        </div>
      </div>
    </div>
  );
}
