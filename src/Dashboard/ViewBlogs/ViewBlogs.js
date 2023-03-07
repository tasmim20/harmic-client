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
  },[url, user?.email])

 
  //update blog
  const handleUpdate = (id, data) =>{
    console.log(id, data);
    axios.put(`${url}/blogs/${id}`, {title: data})
    .then(res => {
      if(res.data.success){
        setIsChanged(!isChanged);
      }
    })
  }


  // delete blog
  const handleDelete = (id) => {
    axios.delete(`${url}/blogs/${id}`)
    .then(res => {
      if(res.data.success){
        // swal({
        //   title: "Are you sure?",
        //   text: "You want to delete this Blog..??",
        //   icon: "warning",
        //   buttons: true,
        //   dangerMode: true,
        // })
        // .then((willDelete) => {
        //   if (willDelete) {
        //     swal(" Your Blog has been deleted!", {
        //       icon: "success",
        //     });
        //   } else {
        //     swal("Your Blog is safe!");
        //   }
        // });
        const newState = viewBlogs.filter(item =>item._id !== id);
        setViewBlogs(newState);
      }
    })
  }



    return (
        <div className='my-20 container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12'>
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
      {/* <tr>
        <th>1</th> 
        <td>Cy Ganderton</td> 
        <td>Quality Control Specialist</td> 
        <td>Littel, Schaden and Vandervort</td> 
        <td>Canada</td> 
        <td>12/16/2020</td> 
        
      </tr> */}
      {viewBlogs.map((row) =>(
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
