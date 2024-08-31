import React from "react";

const StoryCards = ({
  title,
  body,
  image,
}: {
  title: string;
  body: string;
  image: string;
}) => {
  return (
    <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg max-w-72">
      <img alt="" src={image} className="h-56 w-full object-cover" />

      <div className="bg-white p-4 sm:p-6">
        <time className="block text-xs text-gray-500"> 10th Oct 2022 </time>

        <a href="#">
          <h3 className="mt-0.5 text-lg text-gray-900">{title}</h3>
        </a>

        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
          {body}
        </p>
      </div>
    </article>
  );
};

export default StoryCards;
