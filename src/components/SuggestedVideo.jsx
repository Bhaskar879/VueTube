import { abbreviateNumber } from "js-abbreviation-number";
import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Time from "../loader/Time";

const SuggestedVideo = ({ video }) => {
  return (
    <div>
      <Link to={`/video/${video?.videoId}`}>
        <div className="flex items-center mb-2">
          {/* thumbnail & time duration */}
          <div className="relative h-24 lg:h-20 xl:h-24 w-40 min-w-[168px] lg:w-32 lg:min-w-[128px] xi:w-40 xl:min-w-[168px] rounded-xl hover:rounded-none duration-200 overflow-hidden">
            <img
              className="h-full w-full"
              src={video?.thumbnails[0]?.url}
              alt="thumbnails"
            />
            {video?.lengthSeconds && <Time time={video?.lengthSeconds} />}
          </div>

          <div className="flex mt-1 ml-2 space-x-2">
            <div>
              <span className="text-sm font-bold line-clamp-2">
                {video?.title}
              </span>
              {/* channel name or title */}
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
      </Link>
    </div>
  );
};

export default SuggestedVideo;
