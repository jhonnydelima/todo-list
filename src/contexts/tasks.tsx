import { createContext, useState, Dispatch, SetStateAction, ReactNode } from "react";

import { TaskProps } from '../components/Task';

type TaskContextType = {
  tasks: TaskProps[];
  completedTasks: number;
  areAllCompleted: boolean;
  setTasks: Dispatch<SetStateAction<TaskProps[]>>;
  setCompletedTasks: Dispatch<SetStateAction<number>>;
  setAreAllCompleted: Dispatch<SetStateAction<boolean>>;
}

type Props = {
  children: ReactNode;
}

const defaultValue: TaskContextType = {
  tasks: [],
  completedTasks: 0,
  areAllCompleted: false,
  setTasks: () => {},
  setCompletedTasks: () => {},
  setAreAllCompleted: () => {}
}

export const TasksContext = createContext<TaskContextType>(defaultValue);

export function TasksProvider({children}: Props) {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [completedTasks, setCompletedTasks] = useState(0);
  const [areAllCompleted, setAreAllCompleted] = useState(false);

  return (
    <TasksContext.Provider
      value={{
        tasks,
        completedTasks,
        areAllCompleted,
        setTasks,
        setCompletedTasks,
        setAreAllCompleted
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}