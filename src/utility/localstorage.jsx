
const getStoredJobApplication = () => {
    const storedJobApplication = localStorage.getItem('job-applications')
    if (storedJobApplication) {
        return JSON.parse(storedJobApplication);
    }
    return[];
}


const saveJobAppllication = id => {
    const storedJobApplication = getStoredJobApplication();
    const exists = storedJobApplication.find(jobId => jobId === id);
    if(!exists){
        storedJobApplication.push(id);
        localStorage.setItem('job-applications', JSON.stringify(storedJobApplication))
    }
}

export { saveJobAppllication }