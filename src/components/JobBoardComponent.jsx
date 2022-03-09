import React from "react";

const JobBoardComponent = ({ job, ...otherProps }) => {

    const tags = [job.role, job.level]

    if (job.languages) {
        tags.push(...job.languages)
    }

    if (job.tools) {
        tags.push(...job.tools)
    }

    return(
        <div className={`flex bg-white shadow-lg mb-8 p-4 rounded ${job.featured && "border-l-2 border-green-700"}`}
        >
            <div>
                <img src={job.logo} alt={job.company} className=""/>
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                    <p className="font-semibold text-green-500">
                        {job.company}
                    </p>
                    {job.new && <p className="font-semibold text-white bg-green-700 px-4 py-1 rounded-full">NEW!</p>}
                    {job.featured &&
                    <p className="font-semibold  text-white bg-gray-900 px-4 py-1 rounded-full">FEATURED</p>}
                </div>
                <div className="my-4">
                    <p className="font-semibold text-gray-900">
                        {job.position}
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <p className="text-gray-800">
                        {job.postedAt} . {job.contract} . {job.location}
                    </p>
                </div>
            </div>
            <div className="flex items-center gap-4">
                {tags ? tags.map(tag => (
                    <p
                        onClick={() => otherProps.onTagClick(tag)}
                        key={tag}
                        className="text-green-500 font-semibold bg-green-100 rounded px-4 py-1">
                        {tag}
                    </p>
                )): null}

            </div>
        </div>
    )
};
export default JobBoardComponent;
