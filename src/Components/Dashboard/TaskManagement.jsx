import { useForm } from "react-hook-form";
import HeadingContent from "../Shared/HeadingContent";
import { MdTask } from "react-icons/md";
import toast from "react-hot-toast";
import useAxios from "../../Hooks/useAxios";
import useAllData from "../../Hooks/useAllData";
import useAuth from "../../Hooks/useAuth";
import TaskTodos from "./TaskTodos";
import { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Swal from "sweetalert2";
const TaskManagement = () => {
  const axiosPublic = useAxios();
  const { user } = useAuth();
  const [task, refetch, loading] = useAllData();
  const [completeTodo, setCompleteTodo] = useState([]);
  const [onGoing, setOnGoing] = useState([]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const taskInfo = {
      title: data.title,
      priority: data.priority,
      deadline: data.deadline,
      description: data.description,
      userEmail: user?.email,
    };
    axiosPublic.post("/task", taskInfo).then((res) => {
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

  const handlePost = () => {
    document.getElementById("my_modal_3").showModal();
  };
  console.log(task);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/task/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            refetch()
          }
        });
      }
    });
  }

  return (
    <DragDropContext>
      <div className="w-full bg-background  rounded-lg  relative bg-cover bg-no-repeat bg-opacity-20 ">
        <HeadingContent
          heading={"Task Management"}
          subHeading={"Create a new task"}
        />

        <div>
          <div className="w-full  px-10">
            <div className="flex  justify-between flex-col-reverse gap-y-4 md:flex-row items-center">
              <h1 className="text-white z-30 border px-7 py-1 rounded border-gray-500">
                Total Task : {task.length}{" "}
              </h1>
              <button
                onClick={handlePost}
                className="bg-white  z-30 text-rose-800 px-4 py-2 rounded"
              >
                Create new task
              </button>
            </div>
            <div className="border-b mt-3 border-gray-400 w-full"></div>
            <div>
              <div className="flex justify-between mt-5 gap-3 flex-col md:flex-row text-white">
                <Droppable droppableId="onpost">
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className="text-white flex-1"
                    >
                      <h1 className="uppercase border border-orange-600 border-opacity-50 mx-auto w-max px-3 rounded ">
                        On Post
                      </h1>
                      {task.map((todo, index) => (
                        <TaskTodos key={todo._id} handleDelete={handleDelete} index={index} refetch={refetch} todo={todo} />
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>

                <Droppable droppableId="ongoing">
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className="text-white flex-1"
                    >
                      <h1 className="uppercase border border-orange-600 border-opacity-50 mx-auto w-max px-3 rounded ">
                        Ongoing
                      </h1>
                      {onGoing.map((todo, index) => (
                        <TaskTodos key={todo._id} setOnGoing={setOnGoing} onGoing={onGoing} refetch={refetch} index={index} todo={todo} />
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
                <Droppable droppableId="complete">
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className="text-white flex-1"
                    >
                      <h1 className="uppercase border border-orange-600 border-opacity-50 mx-auto w-max px-3 rounded ">
                         complete
                      </h1>
                      {completeTodo.map((todo, index) => (
                        <TaskTodos key={todo._id} setCompleteTodo={setCompleteTodo} completeTodo={completeTodo} index={index} refetch={refetch} todo={todo} />
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
            </div>
          </div>

          <div>
            {/* modal review  */}
            <dialog id="my_modal_3" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <h3 className="font-bold uppercase text-center text-xl text-teal-600 border-b-2 py-2 font-roboto flex justify-center gap-3 items-center">
                  Create Task <MdTask />
                </h3>
                <div className="mt-3">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="">
                      Title
                      <input
                        className="block mb-3 outline-none text-gray-700 px-3 py-2 rounded mt-2 border w-full"
                        type="text"
                        name="title"
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
                        className="block mb-3 outline-none text-gray-700 px-3 py-2 rounded mt-2 border w-full"
                        name="priority"
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
                        className="block mb-3 outline-none text-gray-700 px-3 py-2 rounded mt-2 border w-full"
                        name="deadline"
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
                        className="block mb-3 outline-none text-gray-700 px-3 py-2 rounded mt-2 border w-full"
                        type="text"
                        name="title"
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
                      className="bg-rose-600 flex items-center gap-2  justify-center uppercase text-white w-full py-2 rounded"
                    >
                      Create Task <MdTask className="text-xl" />
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </DragDropContext>
  );
};
export default TaskManagement;
