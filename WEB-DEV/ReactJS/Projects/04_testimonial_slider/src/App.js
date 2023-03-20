import React from "react";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <main>
      <section className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Our Testimonials</h2>
          <div className="bg-violet-400 h-[4px] w-1/2 mt-1 mx-auto"></div>
        </div>
        <Testimonial />
      </section>
    </main>
  );
}

export default App;
