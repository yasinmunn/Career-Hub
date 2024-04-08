
import { GoLocation } from "react-icons/go";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router-dom";

const Job = ({ job }) => {

    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;

    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div>
                    <button className="px-5 py-2 font-extrabold border-2 rounded-md border-[#7E90FE] text-[#7E90FE] mr-4">{remote_or_onsite}</button>
                    <button className="px-5 py-2 font-extrabold border-2 rounded-md border-[#7E90FE] text-[#7E90FE]">{job_type}</button>
                </div>
                <div className="flex gap-4">
                    <h2 className="flex gap-2 items-center"><GoLocation className="text-2xl"></GoLocation> {location}</h2>
                    <h2 className="flex gap-2 items-center">
                        <AiOutlineDollar className="text-2xl"></AiOutlineDollar> {salary}
                    </h2>
                </div>
                <div className="card-actions">
                    <Link to={`/job/${id}`}>
                        <button className="px-5 py-2 rounded border-0 text-white font-bold bg-gradient-to-r from-[#9873FF] to-[#7E90FE]">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Job;