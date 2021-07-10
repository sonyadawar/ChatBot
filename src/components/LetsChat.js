import React from 'react'
import CommentIcon from '@material-ui/icons/Comment';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import '../styling/Letschat.css'
const LetsChat = () => {
    return (
        <div className='chatIcon-container'>
            <div className='chatIcon'>
                <Button variant="contained" component={Link} to='/chat'>
                    Lets Chat <CommentIcon/>
                </Button>
            </div>
            
        </div>
    )
}

export default LetsChat
