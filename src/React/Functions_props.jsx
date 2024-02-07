export const Functions_props = ({ todos, toggleTodo }) => {
  //   console.log(toggleTodo);
  return (
    <>
      <h1>Todos</h1>
      {todos.map(({ id, text, isDone }) => (
        <li
          key={id}
          style={{
            textDecoration: isDone ? "line-through" : "none",
            cursor: "pointer",
          }}
          onClick={() => toggleTodo(id)}
        >
          {text}
        </li>
      ))}
    </>
  );
};
