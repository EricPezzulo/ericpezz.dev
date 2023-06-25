import { AiOutlineDownload } from "react-icons/ai";

export default function DownloadResume() {
  return (
    <div className="flex flex-col items-center justify-center">
      <p>Download my resume as a PDF file.</p>
      <button className="mt-2">
        <a
          className="flex h-9 items-center justify-center rounded bg-black px-5 text-white"
          target="_blank"
          href="/EricPezzuloResume.pdf"
        >
          <AiOutlineDownload className="h-5 w-5 text-white" />
          <p className="pl-3">Download (86.3 KB)</p>
        </a>
      </button>
    </div>
  );
}
