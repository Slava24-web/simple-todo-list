import React, {useState} from 'react';

interface TodoFormProps {
    addTodoHandler: (title: string) => void,
}

const TodoForm: React.FC<TodoFormProps> = ({addTodoHandler}) => {
    const [title, setTitle] = useState<string>('');

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }

    const keyDownHandler = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            addTodoHandler(title);
            setTitle('');
        }
    }

    return (
        <div className="input-field mt2">
            <input
                type="text"
                id="title"
                placeholder="Введите название дела"
                value={title}
                onChange={changeHandler}
                onKeyDown={keyDownHandler}
            />
            <label htmlFor="title" className="active">Введите название дела</label>
        </div>
    );
};

export default TodoForm;
