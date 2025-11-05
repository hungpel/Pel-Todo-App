import React from 'react'
import { Circle, CircleCheck, Trash2 } from 'lucide-react'

const TodoItems = ({text, id, isComplete, deleteTodo, toggleTodo}) => {
  return (
    <div className='flex items-center my-3 gap-2'>
        <div onClick={() => toggleTodo(id)} className='flex flex-1 items-center cursor-pointer'>
            {
                isComplete ?
                <CircleCheck size={24} strokeWidth={1.5} className='bg-blue-500 rounded-full text-white'/> :
                <Circle size={24} strokeWidth={1.5} className='rounded-full'/>
            }
            <p className={`text-slate-700 ml-4 text-lg decoration-slate-700 ${isComplete ? "line-through" : ""}  `}>{text}</p>
        </div>
        <Trash2 onClick={() => deleteTodo(id)} size={18} strokeWidth={1.5} className='cursor-pointer'/>
    </div>
  )
}

export default TodoItems