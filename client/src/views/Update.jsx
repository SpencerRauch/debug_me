import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import BugForm from '../components/BugForm';

const Update = () => {
    const navigate= useNavigate();
    const { id } = useParams();
    const [bug, setBug]  = useState()
    const [error, setError] = useState({})
    useEffect(() => {
        axios.get('http://localhost:8000/api/bugs/' + id)
        .then(res => {
            setBug({
                title: res.data.title, 
                description: res.data.description
            });
        })
    }, [id])
    const updateBug = bugWithEdits => {
        axios.put('http://localhost:8000/api/bugs/' + id, bugWithEdits)
            .then(res => navigate('/'))
            .catch((err) => {
                const {errors} = err.response.data
                let errorObj = {}
                for(let [key, value] of Object.entries(errors)){
                    errorObj[key] = value.message
                }
                setError(errorObj)
            })
    }
    return (
        <div>
            {bug && <BugForm submitProp={updateBug} error={error} bugProp={bug}/>}
        </div>
    )
}

export default Update
