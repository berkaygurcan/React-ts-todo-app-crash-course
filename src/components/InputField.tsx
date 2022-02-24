import React, { useRef } from 'react'
import "./styles.css";

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd:(e: React.FormEvent) => void;
}

const InputField:React.FC<Props> = ({todo, setTodo, handleAdd}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  
    return (
    <form className='input' onSubmit={(e) => {
        handleAdd(e)
        inputRef.current?.blur();//tam anlamadım
    } }>
        <input type="input"  placeholder='Enter a task'
        ref={inputRef} className='input__box' value={todo}
        onChange= {(e) => setTodo(e.target.value)}/>
        <button className='input_submit' type='submit'> Go</button>
    </form>
  )
}

export default InputField
