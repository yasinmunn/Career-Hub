import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeatureJobs = () => {

    const [jobs, setJobs] = useState([]);

    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, [])

    return (
        <div>
            <div>
                <h2 className="text-6xl text-center">Feature Jobs:{jobs.length} </h2>
                <p className="text-center">Lorem ipsum dolor, sit amet consectetur
                    adipisicing elit. Id aperiam error quam amet explicabo cupiditate minus
                    ipsum vitae debitis assumenda.</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={dataLength === jobs.length && 'hidden'}>
                <div className="text-center mt-10">
                <button
                    onClick={() => setDataLength(jobs.length)}
                    className="px-5 py-2 rounded border-0 text-white font-bold bg-gradient-to-r 
            from-[#9873FF] to-[#7E90FE]">Show All Jobs</button>
                </div>
            </div>
        </div>
    );
};

export default FeatureJobs;