import React, { useState } from 'react';

const UpdateBlog = ({blog, handleUpdate}) => {

    // console.log(handleUpdate);
               
    const [update, setUpdate] = useState('');
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            {/* The button to open modal */}
<label htmlFor="my-modal" onClick={handleOpen} className="btn bg-lime hover:bg-black hover:text-white rounded-none border-none ">Update</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal" className="modal-toggle" />
<div className="modal" open={open} onclose={handleClose}>
  <div className="modal-box">
    <h3 className="font-bold text-lg py-4">Update Blog Title</h3>
   
    <input defaultValue={blog.title} onChange={(e) => setUpdate(e.target.value)} type="text" placeholder="Type here" className="input input-lg input-bordered rounded-none input-lime w-full max-w-xs" />
  
    <div className="modal-action">
      <label htmlFor="my-modal" className="btn btn-outline text-red  hover:bg-red hover:text-white rounded-none">Cancle</label>
      <button type='submit' className='btn bg-black hover:text-white rounded-none border-none' onClick={() => handleUpdate(blog._id, update) }>Update</button>
    
    </div>
  </div>
</div>
        </div>
    );
};

export default UpdateBlog;