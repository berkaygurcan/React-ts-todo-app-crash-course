
export interface Todo {
    id: number;
    todo: string;
    isDone: boolean;
}

// //reducer da action kullanacağımız için ts de belirtmemiz gerekli
// type Actions = 
// {type: 'add', payload: string} 
// | {type: 'remove', payload: number}
// | {type: 'done', payload: number}

// const TodoReducer = (state: Todo[], action: Actions) => {
    //Switch case ile atamalar yapılır burada
// }

// import { useReducer } from "react"

// const model = () => {
//     const [state, dispatch] = useReducer(TodoReducer,[])
//   return (
    
//   )
// }


