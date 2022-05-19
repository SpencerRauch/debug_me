import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import DeleteBtn from '../components/DeleteBtn'



const Detail = () => {
    const navigate = useNavigate();
    const {id} = useParams; 
    const [bug, setBug] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/bugs/" + id)
            .then(res=>setBug(res.data))
            .catch(err => console.log(err))
    }, [id])

    const deleteBug = (id) => {
        axios.delete('http://localhost:8000/api/bugs/' + id)
            .then(res => {
                navigate('/')
            })
            .catch(err=> console.log(err))
    }
    
    return (
        <div>
            <table className="table table-dark table-striped table-hover">
                <tbody>
                <tr>
                    <td>Title:</td>
                    <td>{bug.title}</td>
                </tr>
                <tr>
                    <td>Description:</td>
                    <td>{bug.description}</td>
                </tr>
                </tbody>
            </table>

            <Link to={`/bugs/${bug._id}/edit`} className="btn btn-link">Edit</Link>
            <DeleteBtn id = {bug._id} onClickHandle={deleteBug} styles="btn btn-link" />
            <Link to={"/"} className="btn btn-link">Home</Link>            
        </div>
    )
}

export default Detail

