import { Draggable } from "react-beautiful-dnd";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { useForm } from "react-hook-form";
import useAxios from "../../Hooks/useAxios";
import useAllData from "../../Hooks/useAllData";
import Swal from "sweetalert2";
import { useDrag } from "react-dnd";
const Taskitems = ({ item, index, playerType,onDropPlayer, handleDelete, refetch  }) => {
    const axiosPublic = useAxios()
     
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();
    

const onSubmit = (data) => {
  const  updateInfo = {
    title: data.title,
    priority: data.priority,
    deadline: data.deadline,
    description: data.description,
     
  };
  axiosPublic.put(`/task/updateTask/${item._id}`, updateInfo).then((res) => {
    console.log(res.data);
    if (res.data.insertedId) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
      refetch();
      reset()
    }
  });
};

const handleUpdate = () => {
  document.getElementById("my_modal_4").showModal();
};

const [{ isDraggble }, dragRef] = useDrag({
    type: playerType,
    item: () => ({ ...item, index }),

    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
        console.log(dropResult);
      if (dropResult && item) {
        onDropPlayer(item);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  return (
    <div >
        <div>
          <div ref={dragRef} className="bg-white/15 backdrop-blur border-gray-500 mb-2 border mt-5 p-3 rounded">
            
              <h1 className="text-xl text-cyan-500 font-semibold">
                {item.title}
              </h1>
              <p className="font-normal text-sm tracking-wide text-gray-300">
                {item.description}
              </p>
              <p className="capitalize text-teal-500 font-semibold">
                {" "}
                <span>Priority : </span>
                {item.priority}
              </p>
              <div className="flex justify-between">
                <p>
                  <span>DeadLine : </span> {item.deadline}
                </p>
                <div className="flex gap-5">
                  <AiFillDelete onClick={() => handleDelete(item._id)} className="bg-red-600 w-6 h-6 rounded-full p-1" /> <AiFillEdit onClick={handleUpdate} className="bg-cyan-600 w-6 h-6 rounded-full p-1"  />
                </div>
              </div>
            </div>
          </div>
          <div>
            {/* modal review  */}
            <dialog id="my_modal_4" className="modal">
              <div className="modal-box  backdrop-blur bg-white/30">
                <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <h3 className="font-bold uppercase text-center text-xl text-green-400 border-b-2 py-2 font-roboto flex justify-center gap-3 items-center">
                   Update Task <FaEdit />
                </h3>
                <div className="mt-3">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="">
                      Title
                      <input
                        className="block bg-transparent border-gray-400 text-gray-200 mb-3 outline-none   px-3 py-2 rounded mt-2 border w-full"
                        type="text"
                        name="title"
                        defaultValue={item.title}
                        id=""
                        placeholder="Task Title"
                        {...register("title", { required: true })}
                      />
                      {errors.title && (
                        <span className="text-red-600 block">
                          This title is required
                        </span>
                      )}
                    </label>
                    <label htmlFor="">
                      Priority
                      <select
                        className="block mb-3 bg-transparent border-gray-400 text-gray-200 outline-none  px-3 py-2 rounded mt-2 border  w-full"
                        name="priority"
                        defaultValue={item.priority}
                        {...register("priority")}
                      >
                        <option value="low">Prioriry</option>
                        <option value="low">Low</option>
                        <option value="moderate">Moderate</option>
                        <option value="high">High</option>
                        <option value="other">Others</option>
                      </select>
                      {errors.priority && (
                        <span className="text-red-600 block">
                          This priority is required
                        </span>
                      )}
                    </label>

                    <label htmlFor="">
                      DeadLine
                      <select
                        className="block mb-3 outline-none bg-transparent border-gray-400 text-gray-200 px-3 py-2 rounded mt-2 border w-full"
                        name="deadline"
                        defaultValue={item.deadline}
                        {...register("deadline")}
                      >
                        <option value="21-24">21-24</option>
                        <option value="21-23">21-23</option>
                        <option value="21-27">21-27</option>
                        <option value="22-25">22-25</option>
                        <option value="ot23-28er">23-28</option>
                      </select>
                      {errors.deadline && (
                        <span className="text-red-600 block">
                          This dedline is required
                        </span>
                      )}
                    </label>
                    <label htmlFor="">
                      Description
                      <textarea
                        className="block mb-3 outline-none bg-transparent border-gray-400 text-gray-200 px-3 py-2 rounded mt-2 border w-full"
                        type="text"
                        name="title"
                        defaultValue={item.description}
                        id=""
                        placeholder="Task Title"
                        {...register("description", { required: true })}
                        cols="5"
                        rows="4"
                      ></textarea>
                      {errors.description && (
                        <span className="text-red-600 block">
                          This description is required
                        </span>
                      )}
                    </label>
                    <button
                      type="submit"
                      className="bg-teal-700 border border-gray-400 flex items-center gap-2  justify-center uppercase text-white w-full py-2 rounded"
                    >
                      Update Task <FaEdit className="text-xl" />
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
       
      
    </div>
  );
};
export default Taskitems;
