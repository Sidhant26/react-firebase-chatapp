import React from 'react'
import SendIcon from '@mui/icons-material/Send'
import {Button} from "@mui/material"


function SendMessage() {
  return (
    <div>
        <form>
            <input placeholder="Your message">
                <Button><SendIcon /></Button>
            </input>
        </form>
    </div>
  )
}

export default SendMessage