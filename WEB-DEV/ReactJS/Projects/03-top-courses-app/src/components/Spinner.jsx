export default function Spinner() {
  return (
    <div className="flex flex-col items-center space-y-2">
      {/* https://10015.io/tools/css-loader-generator */}
      <div className="spinner"></div>
      <p className="text-bgDark text-lg font-semibold">Loading ...</p>
    </div>
  );
}
