import { useContext, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Checkbox from 'expo-checkbox';
import { Ionicons } from '@expo/vector-icons';

import { TasksContext } from '../../contexts/tasks';

import { styles } from './styles';
import { THEME } from '../../theme';
import { useEffect } from 'react';

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

  useEffect(() => {
    if(areAllCompleted) {
      tasks.forEach(task => handleIsCheck(task.id));
      setAreAllCompleted(false);
    }
  }, [areAllCompleted]);

  return (
    <View style={styles.container}>
      <Checkbox
        style={styles.checkbox}
        value={isChecked}
        onValueChange={() => handleIsCheck(item.id)}
        color={isChecked ? THEME.COLORS.PURPLE_DARK : THEME.COLORS.BLUE}
      />

      <Text style={[styles.description, isChecked ? styles.descriptionCompletedTask : undefined]}>
        {item.description}
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={onRemove}
      >
        <Ionicons name="trash-outline" size={20} color={THEME.COLORS.GRAY_300} />
      </TouchableOpacity>
    </View>
  )
};