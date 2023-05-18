import {useState, useEffect} from 'react';
import { TTodo } from '../types/example/TTodo';
import { Api } from '../services/Api';

export function useTodos(): [TTodo[], React.Dispatch<React.SetStateAction<TTodo[]>>] {
  // Custom hook
  const [todos, setTodos] = useState<TTodo[]>([]);

  useEffect(() => {
    const get = Api.get<TTodo[]>("https://jsonplaceholder.typicode.com/todos");
    get.then((result) => setTodos(result.data.filter((todo) => todo.id)));
  }, []);

  return [todos, setTodos];
}