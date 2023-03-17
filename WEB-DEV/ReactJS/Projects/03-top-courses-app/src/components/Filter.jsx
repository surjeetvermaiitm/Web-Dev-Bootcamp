export default function Filter({ filterData, category, setCategory }) {
  return (
    <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center">
      {filterData.map((data) => (
        <button
          onClick={() => setCategory(data.title)}
          key={data.id}
          className={`text-lg px-2 py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-50 border-2 ${
            category === data.title
              ? "bg-opacity-60 border-white"
              : "bg-opacity-40 border-transparent"
          } transition-all duration-300`}
        >
          {data.title}
        </button>
      ))}
    </div>
  );
}
