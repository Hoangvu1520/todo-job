import React, { useState} from 'react';
/* import './Job.css'; */

function Job({job, index, completeJob, removeJob}){
    return(
        <div
        className="job"
        style={{textDecoration: job.completed ? "line-through" : ""}}
        >
            {job.title}
            <button style={{ background: "red" }} onClick={() => removeJob(index)}>Remove</button>
            <button onClick={() => completeJob(index)}>Complete</button>
        </div>
    );
}

function CreateJob({addJob}){
    const [value, setValue] = useState("");

    const handleSubmit = e =>{
        e.preventDefault();
        if (!value) return;
        addJob(value);
        setValue("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            className="input"
            value={value}
            placeholder="add a new job to do"
            onChange={e => setValue(e.target.value)}
            />
            <button onClick={() => CreateJob(value)}>submit</button>
        </form>
    );
}

function Todo() {
    
    const [jobs, setJobs] = useState([
        {
            title: "do coding",
            completed: true
        },
        {
            title: "go to gym",
            completed: true
        },
        
    ]);

    


    const addJob = title => {
        const newJobs = [...jobs, { title, completed: false }];
        setJobs(newJobs);

        console.log(addJob);
    };
    const completeJob = index => {
        const newJobs = [...jobs];
        newJobs[index].completed = true;
        setJobs(newJobs);
    };

    const removeJob = index => {
        const newJobs = [...jobs];
        newJobs.splice(index, 1);
        setJobs(newJobs);
    };

    return (
        <div className="todo-container">
            
            <div className="jobs">
                {jobs.map((job, index) => (
                    <Job
                    job={job}
                    index={index}
                    completeJob={completeJob}
                    removeJob={removeJob}
                    key={index}
                    />
                ))}
            </div>
            <div className="create-job" >
                <CreateJob addJob={addJob} />
            </div>
        </div>
    );
}

export default Todo;
