import React from 'react';
import {ITodo} from "../interfaces";

type TodoListProps = {
    todos: Array<ITodo>,
    onToggle: (id: number) => void,
    onRemove: (id: number) => void,
}

const TodoList: React.FC<TodoListProps> = ({todos, onToggle, onRemove}) => {
    const removeHandler = (id: number) => (e: React.MouseEvent) =>  {
        e.preventDefault();
        onRemove(id);
    }

    if (!todos.length) {
        return <p className="center">Пока дел нет!</p>
    }

    return (
        <ul>
            {
                todos.map((todo: ITodo) => (
                    <li key={todo.id} className={`todo ${todo.completed ? 'completed' : ''}`}>
                        <label>
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={onToggle.bind(null, todo.id)}
                            />
                            <span>{todo.title}</span>
                            <i className="material-icons red-text" onClick={removeHandler(todo.id)}>delete</i>
                        </label>
                    </li>
                ))
            }
        </ul>
    );
};

export default TodoList;
