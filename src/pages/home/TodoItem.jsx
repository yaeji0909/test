import { useCallback } from "react"
import {useRecoilState} from 'recoil';
import {todoState} from '../../recoil/todo';


const TodoItem = (props) =>{
const {id,content,isCompleted} = props;
const [todos, setTodos] = useRecoilState(todoState)


const handleComplete = useCallback(
    (id)=>{
        setTodos(
            todos.map((todo)=>{
            return todo.id === id 
            ?{
                ...todo,
                isCompleted: !todo.isCompleted
            }
            :todo;
            })
        )
    },
    [setTodos,todos]
)
    const deleteTodo = useCallback(
        (id)=>{
        setTodos(todos.filter((todo)=>todo.id !== id));
        },[setTodos,todos])
    return(
        <div>
            <h2 onClick={()=>{
                handleComplete(id)
            }}>
                {id},{content},{isCompleted ? "o" : "x"}
            </h2>
            <button onClick={()=>deleteTodo(id)}>삭제</button>
        </div>
    )
}

export default  TodoItem
