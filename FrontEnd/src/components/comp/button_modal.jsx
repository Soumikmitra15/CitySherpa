import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Modal from '@mui/material/Modal';
import { TextField } from "@mui/material"
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { nanoid } from 'nanoid';
import "../budget/Budget.css"
import Divider from '@mui/material/Divider';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
export default function BasicModal() {
    
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    const [actType, setAct] = React.useState('');
    const [price, setPrice] = React.useState('');
    //get value of Activity type
    function handleSelectChange(event) {
      setAct(event.target.value);
    }

    //get value for activity price
    function handleTextChange(event) {
      setPrice(event.target.value);
    }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newRow={
      email: localStorage.getItem("email"),
      actType: actType,
      price: price
    }

    console.log(newRow);

    //To send objects in MongoDB
    const response = await fetch('http://localhost:8080/demo',{
      method:'POST',
      body: JSON.stringify(newRow),
      headers:{
        'Content-Type':'application/json'
      }
      
    }).then(
      setAct(''),
      setPrice(''))

    //const data = await response.text();
    //console.log(data)


    //To clear the input after submitting
    
    //to send objects in local storage
    /*const row =JSON.stringify(newRow)
      localStorage.setItem(nanoid(), row);*/
  }
    
  return (
    <div className='but_mod'>
      <Button onClick={handleOpen} variant="contained" >ADD ACTIVITIES</Button>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
          <Typography style={{color: 'black'}} variant="h6" component="h2">
            SELECT ACTIVITIES AND BUDGET
          </Typography>

          <Tooltip title="close" onClick={handleClose}>
          <IconButton>
            <CloseIcon />
          </IconButton>
        </Tooltip>
          <Divider />

            <form onSubmit={handleSubmit}>
            <div>
            <FormControl variant="standard" sx={{ width: 500,m:2 }}>
        <InputLabel id="activity">Activity</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="actType"
          name='actType'
          value={actType}
          onChange={handleSelectChange}
          label="Activity"
        >
          
          <MenuItem value="Flights">Flights</MenuItem>
          <MenuItem value="Train">Train</MenuItem>
          <MenuItem value="Cab">Cab</MenuItem>
          <MenuItem value="Dining">Dining</MenuItem>
          <MenuItem value="Groceries">Groceries</MenuItem>
          <MenuItem value="Accommodation">Accommodation</MenuItem>
          <MenuItem value="Leisure Activities">Leisure Activites</MenuItem>
          <MenuItem value="Sightseeing">Sight Seeing</MenuItem>
          <MenuItem value="Shopping">Shopping</MenuItem>
          <MenuItem value="Visa and Documentation">Visa and Documentation</MenuItem>
          <MenuItem value="Travel Gear and Essentials">Travel Gear and Essentials</MenuItem>
          <MenuItem value="Pet Care">Pet Care</MenuItem>
          <MenuItem value="Miscellaneous"></MenuItem>
          
        </Select>
      </FormControl>
              <TextField
                            className="login-text_field"
                            sx={{ width: 500,m:2 }}
                            color="primary"
                            variant="standard"
                            type="number"
                            value={price}
                            name='price'
                            onChange={handleTextChange}
                            label="Price"
                            id='price'
                            size="medium"
                            margin="none"
                        
            />
          </div>   

          <Divider />

              <Button type='submit' variant="contained">Submit</Button>
            
            </form>
          
</Box>
      </Modal>
    </div>
  );
}