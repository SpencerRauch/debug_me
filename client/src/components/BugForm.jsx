import React, { useState, useEffect } from 'react'

const BugForm = (props) => {
    const { submitProp, error, bugProp } = props;
    const [bug, setBug] = useState(bugProp)
    useEffect(() => {
        setBug(bugProp)
    }, [bugProp])
  
    const submitHandler = e => {
        e.preventDefault();
        submitProp(bug)
        setBug(bugProp)
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="form-floating mb-3">
                <input className='form-control' 
                    onChange={(e) => setBug({
                        'title':e.target.value,
                        "description": bug.description})} 
                    type="text" name="title" id="title" value={bug.title} placeholder="title"/>
                <label htmlFor='title'>Title</label>
                {(error.title)? <p style={{color:'red'}}>{error.title}</p> :null}
            </div>
            <div className="form-floating">
                <input className='form-control' 
                    onChange={(e) => setBug({
                        'title':bug.title,
                        "description": e.target.value})} 
                    type="text" name="description" id="description" value={bug.description} placeholder="description"/>
                <label htmlFor='description'>Description</label>
                {(error.description)? <p style={{color:'red'}}>{error.description}</p> :null}

            </div>

            <button className='btn btn-primary'>Submit</button>

        </form>
    )
}

export default BugForm
