export default function AppDemoCard() {
  return (
    <div className="mt-5 rounded border border-gray-200 p-3">
      <div className="flex h-56 w-80 flex-col items-center justify-center rounded bg-gray-200">
        <p className="mx-5 text-center text-gray-700">
          Well this is awkward...
        </p>
        <p className="mx-5 text-center text-gray-700">
          It seems you caught me while updating the site.
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
        <div className="last:mr:0 m-1 w-fit  rounded-full bg-gray-200 px-3 py-1 text-sm">
          <p>Next.js</p>
        </div>
        <div className="flex w-full justify-end ">
          <div className="mt-2 flex h-3 w-3   rounded-full bg-green-400" />
        </div>
      </div>
    </div>
  );
}
