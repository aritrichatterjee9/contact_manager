import "./App.css";
import Header from "./components/Header";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
import AddIcCallIcon from '@mui/icons-material/AddIcCall';import { useState } from "react";
// import Fields from "./components/Fields";
import DeleteIcon from '@mui/icons-material/Delete';


function App() {

  //name email data is the getter function and setname etc is setter function 

  //FORM USAGE for multiple input fields

  // const [name, setName] = useState("");
  const [form, setForm] = useState({});

  // const [email, setEmail] = useState("");
  const [data, setData] = useState([]); //serves as a container to store the above two informatin that why the the array

  //right hand side of setData name and email is key which is to be same as key value pair of usestate() LINE 10 as the right hand side is 
  //referring the key, left hand side can be anything for the following

  // const addData = () => {

  //   setData({

  //     name: name,
  //     email:email

  //   }) //this works OR

  //   // const addData = () => {
  //   //   setData([...data, { name: name, email: email }]); OR
  //   // };
  // }

  const addData = () => {

    // setData([...data,{ name, email // spread operator // previous state data also to be retained and mapped with ... spread operator +fetch the new data
    
      
    // }]) //this works OR

    setData([...data,form]);
    setForm(form); // add and showcase whatever is in the form

    // setForm("");

      // setName(""); //clear the old data from the field
      // setEmail(""); ////clear the old data from the field

    // const addData = () => {
    //   setData([...data, { name: name, email: email }]);
    // };
  }

  const removeItem =(index) => {

    let arr= data; //data is an array from usestate, check above
    arr.splice(index,1)

   // data.splice(index,1); //had to introduce arr as an array from above usestate as the data.splice was not working for delete
    setData([...arr]); //calling setdata and we are keeeping all the values of arr inside setdata and not keeeping "data" but setdata only because it will lead to dupication hence
    //only setdata is used


  }


  return (
    <div className="App">
      <Header />
      {/* form */}
      <div className="form">
        <Stack spacing={2} direction="row">
          <TextField
            value={form.name} //coming from the previous useState definition  
            onChange={(event) => setForm({...form, name: event.target.value})} //can be either e or event does not matter
            id="outlined-basic1"
            label="Please enter your name"
            variant="outlined"
          />
          <TextField
            value={form.email}////coming from the previous useState definition 
            onChange={(event) => setForm({...form, email: event.target.value})}
            id="outlined-basic2"
            label="Please enter your email"
            variant="outlined"
          />
          <Button onClick={addData} variant="contained" color="success">
            <AddIcCallIcon />
          </Button>
        </Stack>

        <div className="data">
          <div className="data_val">

        {/* data store from above */}

          <h4> Name</h4>
          <h4> Email</h4>
          <h4> Remove</h4>

        </div>

          {
            //like movies reviews from json mapping to show on the ui
            //tried without element.name or element.email what happens is it vanishes once clicked outside the box

              data.map((element, index) => {

                return(

                  // <Fields key={index} name={element.name}email={element.email} index={index} /> why did  we copy the snip from fields js to here instead of 
                  //fields because we had to write the delete 's logic as well which we will write onclick for button even as {removeitem}
                  <div key={index} className="data_val">

                     {/* data store from above */}

                        <h4> {element.name}</h4>
                        <h4> {element.email}</h4>

                        <Stack>
                            <Button onClick={() => removeItem(index)} variant="contained" color="error"> 
                            {/* passing index from removeitem function , we will "get" it at removeitem arrow function above */}
                            <DeleteIcon />
                            </Button>        
                        </Stack>
                  </div>
                )
              }
              
              )

          }

        </div>
      </div>
    </div>
  );
}

export default App;
