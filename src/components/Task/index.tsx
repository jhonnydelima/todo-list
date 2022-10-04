import { Dispatch, SetStateAction, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Checkbox from 'expo-checkbox';
import { Ionicons } from '@expo/vector-icons';

import { styles } from './styles';
import { THEME } from '../../theme';

type Props = {
  description: string;
  setCounter: Dispatch<SetStateAction<number>>;
  onRemove: (id: string) => void;
}

export function Task({ description, setCounter, onRemove }: Props) {
  const [isChecked, setIsChecked] = useState(false);

  async function handleIsCheck() {
    if (isChecked) {
      setIsChecked(false);
      setCounter(prevState => prevState - 1);
      return;
    }

    setIsChecked(true);
    setCounter(prevState => prevState + 1);
  }

  return (
    <View style={styles.container}>
      <Checkbox
        style={styles.checkbox}
        value={isChecked}
        onValueChange={handleIsCheck}
        color={isChecked ? THEME.COLORS.PURPLE_DARK : THEME.COLORS.BLUE}
      />

      <Text style={[styles.description, isChecked ? styles.descriptionCompletedTask : undefined]}>
        {description}
      </Text>

      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Ionicons name="trash-outline" size={20} color={THEME.COLORS.GRAY_300} />
      </TouchableOpacity>
    </View>
  )
};