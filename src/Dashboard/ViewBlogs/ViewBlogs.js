import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import UpdateBlog from '../UpdateBlog/UpdateBlog';
import swal from 'sweetalert';



const ViewBlogs = () => {

  const {url, user} = useContext(AuthContext);
  const [viewBlogs, setViewBlogs] = useState([]);
  const [isChanged, setIsChanged] = useState(false);



  useEffect( () =>{
    if(user?.email){
      axios.get(`${url}/blogs/${user.email}`)
      .then(res => setViewBlogs(res.data.result))
    }
  },[url,isChanged, user?.email])

//  console.log(viewBlogs)
  //update blog
  const handleUpdate = (id, data) =>{
    console.log(id, data);
    axios.put(`${url}/blogs/${id}`, {title: data})
    .then(res => {
      if(res.data.success){
        console.log(res.data);
        setIsChanged(!isChanged);
      }
    })
  }


  // delete blog
  const handleDelete = (id) => {
    axios.delete(`${url}/blogs/${id}`)
    .then(res => {
      if(res.data.success){
       const newState = viewBlogs.filter(item =>item._id !== id);
        setViewBlogs(newState);
      }
    })
  }



    return (
        <div className='pt-32 container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12'>
         <div className="overflow-x-auto">
  <table className="table table-compact w-full">
    <thead>
      <tr>
        <th></th> 
        <th>Date</th> 
        <th>Author</th> 
        <th>Title</th> 
        <th>Update</th> 
        <th>Delete</th> 
        
      </tr>
    </thead> 
    <tbody className='bg-light'>
     

       {viewBlogs?.length!== 0 && viewBlogs?.map((row) =>(
        <tr key={row._id}>
        <th></th> 
        <td>{row.date}</td> 
        <td>{row.authorEmail}</td> 
        <td>{row.title}</td> 
        <td><UpdateBlog blog={row} handleUpdate={handleUpdate} className="btn bg-lime hover:bg-black hover:text-white rounded-none border-none"></UpdateBlog></td> 
        <td><button onClick={() =>handleDelete(row._id)} className="btn bg-red hover:bg-black hover:text-white rounded-none border-none">Delete</button></td> 
        
      </tr>
 ))}

 
   
      
     
    </tbody> 
   
  </table>
</div>
        </div>
    );
};

export default ViewBlogs;
