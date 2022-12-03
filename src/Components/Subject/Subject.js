import React from 'react';
import './Subject.css'

const Subject = props => {
    const { subject, addStudyTime } = props;
    return (
        <div className="card col-md-6 col-lg-4 col-sm-12" style={{ "width": "18rem", "margin": "3px" }}>
            <img src={subject.img} className="card-img-top images" alt="not found subject img"></img>
            <div className="card-body">
                <h5 className="card-title">Subject Name: {subject.name}</h5>
                <p className="card-text">Subject Teacher: {subject.Teacher}</p>
                <p className="card-text">Subject Time: {subject.time}</p>
                <button className="btn btn-primary" onClick={() => addStudyTime(subject.id)}>Add to List</button>
            </div>
        </div >
    );
};

export default Subject;