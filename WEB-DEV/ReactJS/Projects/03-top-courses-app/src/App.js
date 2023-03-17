//https://codehelp-top-courses.netlify.app/
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Spinner from "./components/Spinner";
import Cards from "./components/Cards";
import { apiUrl, filterData } from "./data";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function App() {
  const [category, setCategory] = useState(filterData[0].title);
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        if (data.status === 404) throw new Error("Something Went Wrong !");
        // console.log("Fetched Data", data);
        setCourses(data.data);
      } catch (error) {
        toast.error("Something Went Wrong !");
        console.log("Fetch error", error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 bg-bgDark2">
        <Filter
          filterData={filterData}
          category={category}
          setCategory={setCategory}
        />
        <div className="w-11/12 max-w-[1200px] mx-auto flex justify-center items-center min-h-[50vh]">
          {loading ? (
            <Spinner />
          ) : (
            <Cards courses={courses} category={category} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
