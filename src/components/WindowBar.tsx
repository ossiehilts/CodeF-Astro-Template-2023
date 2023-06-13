export default function WindowBar({
  title,
  webURL,
}: {
  title: string;
  webURL: string;
}) {
  return (
    <div className="flex items-center justify-between bg-gray-200 text-gray-500 px-2 py-1 rounded-t-md">
      <div className="font-mono text-sm">{title}</div>
      <div className="flex space-x-1.5">
        <div className="w-3 h-3 rounded-full bg-gray-300"></div>
        <div className="w-3 h-3 rounded-full bg-gray-300"></div>
        <button
          className="w-3 h-3 rounded-full bg-green-500"
          onClick={() => window.open(webURL, "_blank")}
        ></button>
      </div>
    </div>
  );
}
