
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { ACTIONS } from "../reducers/TaskReducer";
import { useDraggable } from "@dnd-kit/core";


function TaskItem({ task, onEdit }) {
  const { dispatch } = useContext(TaskContext);

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.id,
  });

  const style = {
    transform: transform
      ? `translate(${transform.x}px, ${transform.y}px)`
      : undefined,
  };

  const handleDeleteTask = (id) => {
    dispatch({ type: ACTIONS.DELETE_TASK, payload: { id } });
  };

  const handleMoveTask = (taskId, newStatus) => {
    dispatch({
      type: ACTIONS.MOVE_TASK,
      payload: { id: taskId, newStatus },
    });
  };

  const getDeadlineStatus = (deadline) => {
    const today = new Date();
    const dueDate = new Date(deadline);
    const diffTime = dueDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 0) return "overdue";
    if (diffDays <= 2) return "urgent";
    return "safe";
  };

  const status = getDeadlineStatus(task.deadline);

  const deadlineColor =
    status === "overdue"
      ? "text-red-500"
      : status === "urgent"
      ? "text-yellow-500"
      : "text-green-600";

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="bg-cyan-50 border border-green-100 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200"
    >
      {/* Top section */}
      <div className="flex justify-between items-center mb-2">
        <div
          {...listeners}
          {...attributes}
           className="cursor-grab active:cursor-grabbing text-gray-400 hover:text-green-600 hover:bg-green-50 p-1 rounded-md transition-all duration-200 text-base"
     title="Drag task">
      ⠿
    </div>

        <button
          onClick={() => onEdit(task)}
          className="text-gray-400 hover:text-green-600 transition"
        ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
</svg>
</button>
      </div>

      {/* Title */}
      <h1 className="text-sm font-semibold text-green-900 mb-1">
        {task.title}
      </h1>

      {/* Assigned user */}
      <p className="text-xs text-gray-500 mb-2">
        {task.assignedUser}
      </p>

      {/* Bottom section */}
      <div className="flex items-center justify-between gap-2">
        {/* Deadline */}
        <span className={`text-xs font-medium ${deadlineColor}`}>
          {task.deadline}
        </span>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Delete */}
          <button
            onClick={() => handleDeleteTask(task.id)}
            className="text-gray-400 hover:text-red-500 transition"
          >
            <svg width="12px" height="14px" viewBox="-3 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g 
            id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>trash</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-261.000000, -205.000000)" fill="#000000"> <path d="M268,220 C268,219.448 268.448,
            219 269,219 C269.552,219 270,219.448 270,220 L270,232 C270,232.553 269.552,233 269,233 C268.448,233 268,232.553 268,232 L268,220 L268,220 Z M273,220 C273,219.448 273.448,219 274,219 C274.552,219 275,219.448 275,220 L275,232 C275,232.553 274.552,233 274,233 C273.448,233 273,232.553 273,232 L273,220 L273,220 Z M278,220 C278,219.448 278.448,219 279,219 C279.552,219 280,219.448 280,220 L280,232 C280,232.553 279.552,233 279,233 C278.448,233 278,232.553 278,232 L278,220 L278,220 Z M263,233 C263,235.209 264.791,237 267,237 L281,237 C283.209,237 285,235.209 285,233 
            L285,217 L263,217 L263,233 L263,233 Z M277,209 L271,209 L271,208 C271,207.447 271.448,207 272,207 L276,207 C276.552,207 277,207.447 277,208 L277,209 L277,209 Z M285,209 L279,209 L279,207 C279,205.896 278.104,205 277,205 L271,205 C269.896,205 269,205.896 269,207 L269,209 L263,209 C261.896,209 261,209.896 261,211 L261,213 C261,214.104 261.895,214.999 262.999,
            215 L285.002,215 C286.105,214.999 287,214.104 287,213 L287,211 C287,209.896 286.104,209 285,209 L285,209 Z" id="trash" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg>
        </button>

          {/* Status dropdown */}
          <select
            value={task.status}
            onChange={(e) =>
              handleMoveTask(task.id, e.target.value)
            }
            className="text-xs bg-green-50 border border-green-200 rounded-md px-2 py-1 focus:outline-none focus:ring-1 focus:ring-green-400"
          >
            <option value="todo">To Do</option>
            <option value="inprogress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default TaskItem;

/**Purpose:

Represents one task card

💡 What it does:
Shows:
Task title
Assigned person
Deadline
Handles:
Edit
Delete
🧠 Think:

“One draggable card” */