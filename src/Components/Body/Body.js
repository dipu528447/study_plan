import React, { useEffect, useState } from 'react';
import Break from '../Break/Break';
import Subject from '../Subject/Subject';
import './Body.css';
const Body = () => {
    const [subjects, setSubjects] = useState([])
    const [totalStudyTime, setTotalStudyTime] = useState(0);
    const [breakingTime, setBreakingTime] = useState(0);
    const breakTime = [10, 20, 30, 45, 60];


    useEffect(() => {
        fetch('study_plan.json')
            .then(res => res.json())
            .then(data => setSubjects(data));
        if (localStorage.getItem('breakTime') !== null) {
            console.log('enter')
            setBreakingTime(JSON.parse(localStorage.getItem('breakTime')))
        }
        else {
            console.log('neutral')
            setBreakingTime(0);
        }
    }, [])


    // study time update
    const addStudyTime = id => {
        const topic = subjects.find(item => item.id === id)
        setTotalStudyTime(totalStudyTime + parseInt(topic.time));
    }

    // break time update
    const addBreakingTime = time => {
        setBreakingTime(time);
        console.log(time)
        localStorage.setItem("breakTime", JSON.stringify(time));
    }

    function showtoast() {
        console.log("show")
        const toast = document.getElementById("sectionToast")
        toast.setAttribute("className", "d-block")
    }
    return (
        <div className='container-fluid mainbody row'>
            <section className='container leftSection p-5 col-md-12 col-lg-9 col-sm-12'>
                <section className='sectionLeftTop'>
                    <img src='book.png' className='rounded-circle border border-dark' alt="not found" />
                    <span className='fs-2 fw-semibold text-primary ms-3'>STUDY PLAN ACTIVITIES</span>
                    <br />
                    <h3 className='fs-5 mt-3'>Select today's Topics</h3>
                </section>
                <section className='sectionLeftBottom py-5'>
                    <div className='subject_card row'>
                        {
                            subjects.map(subject =>
                                <Subject subject={subject} key={subject.id} addStudyTime={addStudyTime}></Subject>
                            )
                        }
                    </div>
                </section>
            </section>
            <section className='rightSection col-md-12 col-sm-12 col-lg-3'>
                <section className='personalInfoFirstSection rounded-pill'>
                    <div className='d-flex'>
                        <div className='col-3'>
                            <img className='rounded-circle border person_image' src='person_image.jpg' alt="not found" />
                        </div>
                        <div className='col-9 ms-1 mt-3axtyh7m7kj47'>
                            <h4 className='text-success fs-5'>Dipankar Gupta</h4>
                            <p className='text-secondary'>Chattogram,Bangladesh</p>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='personalInfoSecondSection d-flex my-2 rounded-pill px-3 text-center'>
                        <div className='m-2'>
                            <h4>4</h4>
                            <h6 className='text-secondary'>Languages</h6>
                        </div>
                        <div className='m-2'>
                            <h4>2</h4>
                            <h6 className='text-secondary'>Papers</h6>
                        </div>
                        <div className='m-2'>
                            <h4>27<span className='text-secondary fs-6'>yrs</span></h4>
                            <h6 className='text-secondary'>Age</h6>
                        </div>
                    </div>
                </section>
                <section className='my-5'>
                    <h5>Add A Break</h5>
                    <div className='row breakRow pb-2'>
                        {breakTime.map((breaks, index) => <Break breaks={breaks} key={index} addBreakingTime={addBreakingTime}></Break>)}
                    </div>
                </section>
                <section className='my-5'>
                    <h5>Study Details</h5>
                    <div>
                        <div className='d-flex justify-content-between'>
                            <p>Study Time</p>
                            <p className='text-secondary'>{totalStudyTime} minutes</p>
                        </div>
                    </div>
                </section>
                <section className='my-5'>
                    <h5>Break Time</h5>
                    <div>
                        <div className='d-flex justify-content-between'>
                            <p>Break Time</p>
                            <p className='text-secondary'>{breakingTime} minutes</p>
                        </div>
                    </div>
                </section>
                <button type="button" className="btn btn-primary" id="liveToastBtn" onClick={() => {
                    document.getElementById("liveToast").setAttribute("class", "toast show")
                }}>Activity Completed</button>

                <div className="position-fixed top-50 start-50 translate-middle p-3">
                    <div id="liveToast" className="toast hide" role="alert" aria-live="assertive" aria-atomic="true">
                        <div className="toast-header">

                            <strong className="me-auto fs-3">Congratulations!!!</strong>

                            <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                        </div>
                        <div className="toast-body bg-primary text-white fs-4">
                            Your Study Activities is completed for today. Thank you...
                        </div>
                    </div>
                </div>
            </section>
            <section className='container p-5'>
                <div className='Questionno1'>
                    <h1>Question: How Does React Work?</h1>
                    <p>Ans: React reads these objects and uses them to create HTML elements on the virtual DOM, after which it gets synced with the real DOM. So we'll have trees of objects on the virtual DOM and trees of objects on the real DOM. React automatically updates the associated DOM element when we change data on a React element.</p>
                </div>
                <div className='Questionno2'>
                    <h1>Question: Difference Between Props and State</h1>
                    <p>Ans: State is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function.</p>
                    <p>
                        Props, on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props.
                    </p>
                </div>
                <div className='Questionno3'>
                    <h1>Question: Functionality of useEffect without load data</h1>
                    <ul>
                        <li>The motivation behind the introduction of useEffect Hook is to eliminate the side-effects of using class-based components.</li>
                        <li>The useEffect Hook allows to perform side effects in your components.</li>
                    </ul>
                </div>
            </section>

        </div>
    );
};

export default Body;