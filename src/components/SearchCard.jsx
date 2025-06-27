import React from "react";
import { Link } from "react-router-dom";
import Time from "../loader/Time";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { abbreviateNumber } from "js-abbreviation-number";

const SearchCard = ({ video }) => {
  console.log(video);

  return (
    <div>
      <Link to={`/video/${video?.videoId}`}>
        <div className="flex flex-row">
          {/* thumbnail & time duration */}
          <div className="relative h-48 md:h-56 md:rounded-xl hover:rounded-none duration-200 overflow-hidden">
            <img
              className="h-full w-full"
              src={video?.thumbnails[0]?.url}
              alt="thumbnails"
            />
            {video?.lengthSeconds && <Time time={video?.lengthSeconds} />}
          </div>

          {/* channel title */}

          <div className="ml-4">
            <span className="text-sm font-bold line-clamp-2">
              {video?.title}
            </span>
            <span className="text-sm line-clamp-2">
              {video?.descriptionSnippet}
            </span>

            {/* logo */}
            <div className="flex items-center mt-3 space-x-2">
              <div className="flex items-start">
                <div className="flex h-9 w-9 rounded overflow-hidden border">
                  <img
                    className="h-full w-full rounded-full overflow-hidden"
                    src={video?.author?.avatar[0].url}
                    alt="channel logo"
                  />
                </div>
              </div>
              {/* channel name or title */}
              <div className="flex flex-col">
                <span className="flex items-center font-semibold mt-2 text-[12px] text-gray-600">
                  {video?.author?.title}
                  {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                    <BsFillCheckCircleFill className="text-gray-600 ml-1 text-[12px]" />
                  )}
                </span>

                <div className="flex text-gray-600 text-[12px]">
                  <span>
                    {`${abbreviateNumber(video?.stats?.views, 2)} views`}
                  </span>
                  <span className="flex text-[24px] leading-none font-bold relative top-[-10px] mx-1">
                    .
                  </span>
                  <span>{video?.publishedTimeText}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SearchCard;
