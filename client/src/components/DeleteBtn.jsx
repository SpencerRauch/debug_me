import React from 'react'

const DeleteBtn = (props) => {
    const { id, styles, onClickHandle} = props
    return (
            <button className={styles} onClick={(e) => { onClickHandle(id) }}>Delete</button>
    )
}

export default DeleteBtn
