import { Checkbox } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import { setCheck } from '../features/todoSlice'
import './TodoItem.css'

export default function TodoItem({name, done, id}) {

    const dispatch = useDispatch()

    const handleChange = () => {
        dispatch(setCheck(id))
    }

    return (
        <div className="todoItem">
            <Checkbox
                checked={done}
                onChange={handleChange}
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
            <p className={done && 'todoItem--done'}>{name}</p>  
        </div>
    )
}
