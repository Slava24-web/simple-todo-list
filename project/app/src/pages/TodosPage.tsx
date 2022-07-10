import React, {useEffect, useState} from 'react';
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import {ITodo} from "../interfaces";

declare var confirm: (question: string) => boolean;

const TodosPage: React.FC = () => {
    const [todos, setTodos] = useState<Array<ITodo>>([]);

    useEffect(() => {
        // Получение задач из LS, если они там есть
        const saved = JSON.parse(localStorage.getItem('todos') || '[]') as Array<ITodo>;
        setTodos(saved);
    }, []);

    useEffect(() => {
        // Сохранение задач в LS
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodoHandler = (title: string) => {
        const newTodo: ITodo = {
            title,
            id: Date.now(),
            completed: false,
        }
        setTodos(prevState => [newTodo, ...prevState]);
    }

    const toggleHandler = (id: number) => {
        setTodos(prevState => prevState.map((todo: ITodo) => {
            return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
        }));
    }

    const removeHandler = (id: number) => {
        const shouldDelete: boolean = confirm("Вы уверены, что хотите удалить эту задачу?"); // либо window.confirm
        shouldDelete && setTodos(prevState => prevState.filter((todo: ITodo) => todo.id !== id));
    }

    return (
        <>
            <TodoForm addTodoHandler={addTodoHandler}/>
            <TodoList
                todos={todos}
                onToggle={toggleHandler}
                onRemove={removeHandler}
            />
        </>
    );
};

export default TodosPage;
