import React, { useEffect, useState } from 'react'
import axios from 'axios'
import BugForm from '../components/BugForm'
import BugList from './BugList';


const Main = () => {
    const [bugs, setBugs] = useState();
    const [error, setError] = useState({})
    const [bugProp, setBugProp] = useState({'title':"",'description':""})
    useEffect(() => {
        axios.get('http://localhost:8000/api/bugs')
            .then(res => {
                setBugs(res.data)
            })

    }, [])

    const createBug = bug => {
        axios.post('http://localhost:8000/api/bugs/create', bug)
            .then((res) => {
                let newBugs = [...bugs, res.data]
                setBugs(newBugs)
                setBugProp({'title':"",'description':""})
                setError(false)

            })
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
            <BugForm submitProp={createBug} error={error} bugProp={bugProp}/>
            <hr />
            {bugs && <BugList bugs={bugs} setBugs={setBugs} />}
        </div>
    )
}

export default Main
