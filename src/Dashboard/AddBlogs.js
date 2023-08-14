import React, { useContext } from "react";
import tometo from "../Assets/Images/2-1-601x426.png";
import bg from "../Assets/Images/1-1.jpg";
import { useForm } from "react-hook-form";
import { AuthContext } from "../contexts/AuthProvider/AuthProvider";
import axios from "axios";
import { toast } from "react-hot-toast";

const AddBlogs = () => {
  const { user, url } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const date = new Date().toDateString();
    const newBlog = {
      date,
      authorEmail: user.email,
      ...data,
    };
    // console.log(newBlog);

    axios.post(`${url}/blogs`, newBlog).then((res) => {
      if (res.data.success) {
        // alert('Success');
        // swal("WOW Greate!", "Blog create successfully!", "success");
        toast.success("Blog Created Successfully!");
        reset();
      } else {
        alert(res.data.message);
      }
    });
  };

  return (
    <div>
      <div
        className="hero  bg-base-200 max-h-full mb-20"
        style={{ backgroundImage: `url(${bg})`, minHeight: 610 }}
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={tometo} className=" rounded-lg " alt="" />
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Blog Title</span>
                </label>
                <input
                  {...register("title", { required: true })}
                  type="text"
                  placeholder="Title"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Blog Image</span>
                </label>
                <input
                  {...register("image", { required: true })}
                  type="text"
                  placeholder="Image"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Short Description</span>
                </label>
                <input
                  {...register("description", { required: true })}
                  type="text"
                  placeholder="Description"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn btn-white bg-lime hover:bg-black hover:text-white"
                >
                  Add Blog
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBlogs;
