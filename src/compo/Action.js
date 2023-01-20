import * as React from 'react';
import { Button} from 'reactstrap';
import {useFormik} from 'formik'
import { useState,useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { GiTeacher } from 'react-icons/gi';
import {FaStudiovinari} from 'react-icons/fa'
import MenuItem from '@mui/material/MenuItem';
import { toast } from 'react-toastify';
import { useContext } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Context from './Context';
import axios from 'axios';


export default function Action() {
  const formik=useFormik({
  initialValues:{
      avatar:'',
      name:'',
      field:'',
      division:''
  },
  onSubmit:(values)=>{
    console.log(values)
  },
  validate:(values)=>{
    let {avatar,name,field,division}=values
    let errors={}
    if(!avatar)
  {
    errors.avatar='image is required'

  }
  if(!name)
  {
    errors.name='nmae is required'

  }
  if(!field)
  {
    errors.field='feild is required'

  }
  return errors
  }

    })
    const context=useContext(Context)
    console.log("context.people")

    console.log(context.people)
    const [form,setform]=useState({})
    const nav=useNavigate()
    const url="https://63ac054434c46cd7ae74a1f8.mockapi.io/mouni"

    const handlechange=(e)=>{
        setform({...form,[e.target.name]:e.target.value})
        console.log(e.target.value)
        console.log("hello")
    }
    const {id}=useParams()
    formik.handleSubmit = (e) => {
      e.preventDefault();
      console.log(formik.values);
    
        if(id){
            console.log("update")
        axios.put("https://63ac054434c46cd7ae74a1f8.mockapi.io/mouni/"+id,formik.values).then(()=>{
            context.getpeople();
            
            nav(-1)
            
              toast.success("product updated sucessfully ")})
              
    }
    else{

    axios.post("https://63ac054434c46cd7ae74a1f8.mockapi.io/mouni",formik.values)
           .then(()=>{
            context.getpeople();
            nav(-1)
              toast.success("product added sucessfully ")})
  
        }

    }
    useEffect(()=>{
        if(id)
        {
            fetch("https://63ac054434c46cd7ae74a1f8.mockapi.io/mouni/"+id)
            .then((data)=>data.json()).then((res)=>setform(res))
        
        }
            },[id])


            const divi=[{
                value:'Teacher',
                label:<GiTeacher/>},
                {
                    value:'Student',
                    label:<FaStudiovinari label="hello"/>,
                },{
                    value:'NaN',
                label:'NaN'}

            ]
            
  return (
    <Box
      
      sx={{
        '& > :not(style)': { width: 500,
            maxWidth: '100%' }, height: 20,
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? 'rgba(255, 0, 0, 0.1)'
                : 'rgb(255 132 132 / 25%)',
                display: 'flex',
                flexDirection: 'column',
                '& .MuiTextField-root': { width: '50ch' },
      }}
      noValidate
      autoComplete="off"
    >
    {/* disabled={state.isView==='true'? true:false}       */}
<form>

    <TextField  type="text" color="secondary"  id="outlined-basic" margin="dense" label="Name" variant="outlined" name='name' value={form.name}   onChange={formik.handleChange}  className='mb-3' placeholder="'Enter name"/>
    <br/>

    {formik.errors.name && !formik.isSubmitting ? formik.errors.name : ""}

    <TextField  id="outlined-basic" color="secondary"  margin="dense" label="Image" variant="outlined" type="text" name='avatar' value={form.avatar}  onChange={formik.handleChange}  className='mb-3'  placeholder="Enter image"/>
    <br/>

    {formik.errors.avatar && !formik.isSubmitting ? formik.errors.avatar : ""}


    <TextField  id="outlined-basic" color="secondary"  margin="dense" label="Field" variant="outlined" type="text" name='field' value={form.field}  onChange={formik.handleChange} className='mb-3'  placeholder="'Enter pricing"/>
    <br/>
    {formik.errors.field && !formik.isSubmitting ? formik.errors.field : ""}


    <TextField
          id="outlined-select-currency"
          select
          label="Select"
          defaultValue='NaN'
          margin="dense"
          helperText="Please select teacher or student"
          name='division'
          type="text" value={form.division}  onChange={formik.handleChange} className='mb-3'
        >

          {divi.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
          </TextField>
          
<Button color='success' onClick={formik.handleSubmit}>SUBMIT</Button>
<Button color='danger' onClick={()=>nav(-1)}>CANCLE</Button>

</form>
        </Box>
  );
}