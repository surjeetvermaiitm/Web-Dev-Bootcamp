import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { toast } from "react-toastify";
export default function Card({ course, likedCourses, setLikedCourses }) {
  const handleLike = () => {
    if (likedCourses.includes(course.id)) {
      setLikedCourses((prev) => prev.filter((cid) => cid !== course.id));
      toast.warning("Like Removed");
    } else {
      if (likedCourses.length) {
        setLikedCourses((prev) => [...prev, course.id]);
      } else {
        setLikedCourses([course.id]);
      }
      toast.success("Liked Successfully");
    }
  };

  return (
    <div className="w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden">
      <div className="relative">
        <img
          src={course.image.url}
          alt={course.image.alt}
          className="w-full min-h-[168px] object-cover"
        />
        <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 -bottom-3 shadow-xl grid place-items-center">
          <button onClick={handleLike}>
            {likedCourses.includes(course.id) ? (
              <FcLike fontSize="1.75rem" />
            ) : (
              <FcLikePlaceholder fontSize="1.75rem" />
            )}
          </button>
        </div>
      </div>
      <div className="p-4">
        <p className="text-white font-semibold text-lg leading-6">
          {course.title}
        </p>
        <p className="text-white text-base mt-2">
          {course.description.length > 100
            ? course.description.substr(0, 100) + "..."
            : course.description}
        </p>
      </div>
    </div>
  );
}
