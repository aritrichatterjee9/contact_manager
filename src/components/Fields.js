import React from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { Stack } from '@mui/material';


//this is the data part from app js like movies reviews
//onjects to be passed a sprops and hence objects need to be destructured  inside const fields
//index also needs to be passed to remove

const Fields = ({name, email, index}) => {
  return (
    
       <div className="data_val">

        {/* data store from above */}

            <h4> {name}</h4>
            <h4> {email}</h4>

            <Stack>
                <Button variant="contained" color="error">
                <DeleteIcon />
                </Button>        
            </Stack>
        </div>

    
  )
}

export default Fields
