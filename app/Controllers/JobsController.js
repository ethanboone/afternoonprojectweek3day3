import { ProxyState } from "../AppState.js";
import { jobsService } from "../Services/JobsService.js";


//Private
function _draw() {
    console.log('jobs draw')
    let jobs = ProxyState.jobs;
    let template = ''
    jobs.forEach(j => template += j.Template)
    document.getElementById("jobs").innerHTML = template
}

//Public
export default class JobsController {
    constructor() {
        ProxyState.on("jobs", _draw);
        _draw()
    }

    createJob() {
        window.event.preventDefault()
        // grab the element from html that triggered this event
        const form = window.event.target
        let newJob = {
            // @ts-ignore
            title: form.title.value,
            // @ts-ignore
            pay: form.pay.value,
            // @ts-ignore
            employer: form.employer.value,
            // @ts-ignore
            description: form.description.value
        }
        console.log(newJob)
        jobsService.createJob(newJob)

        // @ts-ignore
        form.reset()

        // get the modal and close (using jQuery's "$" selector) 
        $('#new-job-form').modal('hide')
    }

    contact(id) {
        jobsService.contact(id)
    }

}