import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
import DeleteBtn from '../components/DeleteBtn';


const BugList = (props) => {
    const { bugs, setBugs } = props;

    const deleteBug = (id) => {
        axios.delete('http://localhost:8000/api/bugs/' + id)
            .then(res => { 
                let newProds = bugs.filter(bug => bug._id !== id)
                setBugs(newProds)
             })
            .catch(err => console.log(err))
    }
    return (
        <div>
            {bugs.sort((a, b) => a.title.localeCompare(b.title)).map((bug, i) => {
                return <p key={i} className="d-flex justify-content-between">
                    <Link to={`/bugs/${bug._id}`}>{bug.title}</Link>
                    <DeleteBtn styles="btn btn-danger" onClickHandle = {deleteBug} id={bug._id}/>
                </p>
            })}
        </div>
    )
}

export default BugList
