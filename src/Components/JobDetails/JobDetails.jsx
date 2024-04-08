import { useParams, useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobAppllication } from '../../utility/localstorage';


const JobDetails = () => {

    const jobs = useLoaderData();

    const {id} = useParams()

    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    console.log(job, id);

    const handleApplyJob = () => {
        saveJobAppllication(id)
        toast('You have applied succesfully')
    }
    return (
        <div>

            <div className='grid gap-4 h-[70vh] md:grid-cols-4'>
                <div className='border md:col-span-3'>
                    <h2>Job Details Of: {job.job_title}</h2>
                    <h2>Details Coming Here</h2>
                </div>
                <div className='border'>
                    <p>Side Bar</p>
                    <button onClick={handleApplyJob} className='btn'>Apply Now</button>
                </div>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default JobDetails;