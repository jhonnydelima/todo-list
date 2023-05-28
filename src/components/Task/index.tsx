import { useContext, useEffect, useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import Checkbox from 'expo-checkbox';
import { Ionicons } from '@expo/vector-icons';

import { TasksContext } from '../../contexts/tasks';

import { styles } from './styles';
import { THEME } from '../../theme';

export type TaskProps = {
  id: string;
  description: string;
  isChecked: boolean;
}

type Props = {
  item: TaskProps;
  onRemove: (id: string) => void;
}

export function Task({ item, onRemove }: Props) {
  const [isChecked, setIsChecked] = useState(false);
  const {
    tasks,
    areAllCompleted,
    setTasks,
    setCompletedTasks,
    setAreAllCompleted
  } = useContext(TasksContext);

  function handleIsCheck(id: string) {
    const isCheckedValue = !isChecked;
    const incrementValue = isChecked ? -1 : +1;

    setIsChecked(isCheckedValue);
    setCompletedTasks(prevState => prevState + incrementValue);

    const newState = tasks.map(task => {
      if (task.id === id) {
        return {...task, isChecked: isCheckedValue};
      }
      return task;
    });

    setTasks(newState);
  }

  function handleCompleteAllTasks() {
    const newState = tasks.map(task => {
      setIsChecked(true);
      return {...task, isChecked: true};
    });
    setTasks(newState);
  }

  useEffect(() => {
    if(areAllCompleted) {
      handleCompleteAllTasks();
    }
    setAreAllCompleted(false);
  }, [areAllCompleted]);

  return (
    <View style={styles.container}>
      <Checkbox
        style={styles.checkbox}
        value={isChecked}
        onValueChange={() => handleIsCheck(item.id)}
        color={isChecked ? THEME.COLORS.PURPLE_DARK : THEME.COLORS.BLUE}
      />

      <Text style={[styles.description, isChecked ? styles.descriptionCompletedTask : null]}>
        {item.description}
      </Text>

      <Pressable
        style={styles.button}
        onPress={() => onRemove(item.id)}
      >
        <Ionicons name="trash-outline" size={20} color={THEME.COLORS.GRAY_300} />
      </Pressable>
    </View>
  )
};