import { Helmet } from "react-helmet-async";
import { useCallback } from "react";
import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil";
import { inputState, todoState } from "../../recoil/todo";
import TodoItem from "./TodoItem";

const TodoPage = () => {
  const [content, setContent] = useRecoilState(inputState);
  // get & set
  const todos = useRecoilValue(todoState);
  // getter
  const setTodo = useSetRecoilState(todoState);
  // setter

  const addTodo = useCallback(() => {
    if (!content.trim()) {
      return;
    }
    const nextId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 0;
    const todo = {
      id: nextId,
      contents: content,
      isCompleted: false,
    };
    setTodo([...todos, todo]);
    setContent("");
  }, [content, setContent, setTodo, todos]);

  const onChange = useCallback(
    (e) => {
      setContent(e.target.value);
    },
    [setContent]
  );

  const onKeyDown = useCallback(
    (e) => {
      if (e.key === "Enter") {
        addTodo();
      }
    },
    [addTodo]
  );
  return (
    <>
      <Helmet>
        <title>TodoPage</title>
      </Helmet>
      <div>
        <input
          type='text'
          placeholder='입력'
          value={content}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
        <button onClick={addTodo}>등록</button>
      </div>
      {todos.map((todo) => {
        const { id, contents, isCompleted } = todo;
        return (
          <TodoItem
            key={id}
            id={id}
            content={contents}
            isCompleted={isCompleted}
          />
        );
      })}
    </>
  );
};

export default TodoPage;
