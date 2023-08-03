import { useTodos } from "../hooks/useTodos";

export function TodoList() {
  const { data: todos, isLoading } = useTodos();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}
