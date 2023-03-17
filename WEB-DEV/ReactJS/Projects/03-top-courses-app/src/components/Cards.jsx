import Card from "./Card";
import { TbError404 } from "react-icons/tb";
import { useState } from "react";

export default function Cards({ courses, category }) {
  const [likedCourses, setLikedCourses] = useState([]);

  const getCourses = () => {
    if (category === "All") {
      let allCourses = [];
      Object.values(courses).forEach((courseCategory) => {
        courseCategory.forEach((course) => {
          // console.log(course);
          allCourses.push(course);
        });
      });
      // console.log("Courses: ", allCourses);
      return allCourses;
    } else {
      // console.log("Courses: ", courses[category]);
      return courses[category];
    }
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {!courses ? (
        <div className="flex flex-col items-center">
          <TbError404 fontSize="4rem" color="white" />
          <p className="text-white text-3xl font-semibold">No Data Found</p>
        </div>
      ) : (
        getCourses()?.map((course) => (
          <Card
            key={course.id}
            course={course}
            likedCourses={likedCourses}
            setLikedCourses={setLikedCourses}
          />
        ))
      )}
    </div>
  );
}
