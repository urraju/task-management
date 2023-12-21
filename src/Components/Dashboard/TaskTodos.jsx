import { Draggable } from "react-beautiful-dnd";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { useForm } from "react-hook-form";
import useAxios from "../../Hooks/useAxios";
import useAllData from "../../Hooks/useAllData";
const TaskTodos = ({ todo, index, handleDelete, refetch  }) => {
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
  axiosPublic.post(`/task/updateProduct/${todo._id}`, updateInfo).then((res) => {
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

 

  return (
    <Draggable draggableId={todo._id || index.toString()} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="bg-white/15 backdrop-blur border-gray-500 mb-2 border mt-5 p-3 rounded">
            <div
              className=" bg-white"
              style={{
                backgroundColor: snapshot.isDragging
                  ? "lightblue"
                  : "transparent",
                ...provided.draggableProps.style,
              }}
            >
              <h1 className="text-xl text-cyan-500 font-semibold">
                {todo.title}
              </h1>
              <p className="font-normal text-sm tracking-wide text-gray-300">
                {todo.description}
              </p>
              <p className="capitalize text-teal-500 font-semibold">
                {" "}
                <span>Priority : </span>
                {todo.priority}
              </p>
              <div className="flex justify-between">
                <p>
                  <span>DeadLine : </span> {todo.deadline}
                </p>
                <div className="flex gap-5">
                  <AiFillDelete onClick={() => handleDelete(todo._id)} className="bg-red-600 w-6 h-6 rounded-full p-1" /> <AiFillEdit  className="bg-cyan-600 w-6 h-6 rounded-full p-1"  />
                </div>
              </div>
            </div>
          </div>
           
        </div>
      )}
    </Draggable>
  );
};
export default TaskTodos;
