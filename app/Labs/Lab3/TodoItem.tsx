import { ListGroupItem } from "react-bootstrap";
import todos from "./todos/todos.json";

export default function TodoItem({ todo }: { todo: (typeof todos)[0] }) {
  return (
    <ListGroupItem>
      <input type="checkbox" className="me-2" defaultChecked={todo.done} />
      {todo.title} ({todo.status})
    </ListGroupItem>
  );
}
