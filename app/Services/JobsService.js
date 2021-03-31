import { ProxyState } from "../AppState.js";
import Job from "../Models/Job.js";

class JobsService {
    createJob(newJob) {
        console.log(newJob)
        let job = new Job(newJob.title, newJob.pay, newJob.employer, newJob.description)
        ProxyState.jobs = [...ProxyState.jobs, job]
    }

    bid(id) {
        // find the Car
        let job = ProxyState.jobs.find(job => job.id === id)
        // make the change
        car.price += 100

        // trigger the cycle (this can only be the top level properties of ProxyState) to update the page
        ProxyState.jobs = ProxyState.jobs
    }
}

export const jobsService = new JobsService();

