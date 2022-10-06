import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {Box, TextField } from "@mui/material";
import Todolist from "./components/todolist/todolist";

import {IconButton} from "@mui/material";
import AlarmIcon from '@mui/icons-material/Alarm';
import DeleteIcon from "@mui/icons-material/Delete"

const Main = () => {
    const dispatch = useDispatch();
    const [todo,setTodo] = useState();
    const todos = useSelector((state) => state.todos )

    const  handleChange = (e) => {
        setTodo(e.target.value);
    }
    const handleClick = () => {
        dispatch({
            type:"ADD_TODO",
            payload : {label : todo , id: Math.ceil(Math.random() *500)},
        })
    }
    const deleteClick = () => {
        dispatch({
            type:"DELETE_ALL",

        })
    }
    return (
    <Box sx={{
        width:"100vw" ,
        height: "100vh",
        display:"flex" ,
        justifyContent:"center",
        alignItems: " center",
        flexDirection: "column",
        fontSize:"30px",
        color:"darkred"
    }}
    >
        <Box sx={{display: "flex",}}>

            <TextField onChange={handleChange}
                    placeholder="One Pice"></TextField>

            <IconButton
                onClick={handleClick}
                color="success"
            >
                <AlarmIcon/>
            </IconButton>

            <IconButton aria-label="delete"
                        color="error"
                        onClick={deleteClick}>
                <DeleteIcon />
            </IconButton>
        </Box>

        <Todolist/>

    </Box>

);
};


export  default Main