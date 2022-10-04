import { useState } from 'react';
import {
  Alert,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList
} from 'react-native';
import uuid from 'react-native-uuid';
import { Feather, Ionicons } from '@expo/vector-icons';

import { Task } from '../../components/Task';

import { styles } from './styles';
import { THEME } from '../../theme';
import LogoImg from '../../assets/logo.png';
import EmptyListImg from '../../assets/clipboard.png';

interface TaskProps {
  id: string;
  description: string;
}

export function Home() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [taskDescription, setTaskDescription] = useState('');
  const [completedTasks, setCompletedTasks] = useState(0);
  const [isFocused, setIsFocused] = useState(false);

  function handleFocus() {
    setIsFocused(true);
  }

  function handleBlur() {
    setIsFocused(false);
  }

  function handleAddNewTask() {
    if (taskDescription.length === 0) {
      return;
    }

    const newTask: TaskProps = {
      id: uuid.v4().toString(),
      description: taskDescription
    };

    setTasks(prevState => [
      ...prevState,
      newTask
    ]);
    setTaskDescription('');
  }

  function handleRemoveTask(id: string) {
    Alert.alert("Remover", `Remover tarefa?`, [
      {
        text: "Sim",
        onPress: () => {
          setTasks(prevState => prevState.filter(task => task.id !== id));
        }
      },
      {
        text: "Não",
        style: "cancel"
      }
    ]);
  }

  function handleRemoveAllTasks() {
    Alert.alert("Remover", `Remover todas tarefas?`, [
      {
        text: "Sim",
        onPress: () => {
          setTasks([]);
          setCompletedTasks(0);
        }
      },
      {
        text: "Não",
        style: "cancel"
      }
    ]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={LogoImg}
        />
      </View>
      
      <View style={styles.body}>
        <View style={styles.form}>
          <TextInput
            style={[styles.input, isFocused ? styles.onFocusInput : {}]}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={THEME.COLORS.GRAY_300}
            onChangeText={setTaskDescription}
            value={taskDescription}
            onFocus={handleFocus}
            onBlur={handleBlur}
            keyboardAppearance='dark'
          />

          <TouchableOpacity style={styles.addButton} onPress={handleAddNewTask}>
            <Feather name="plus-circle" size={20} color={THEME.COLORS.GRAY_100} />
          </TouchableOpacity>
        </View>

        <View style={[
          styles.countersContainer,
          tasks.length > 0 ? {borderBottomWidth: 0} : undefined
          ]}
        >
          <View style={styles.counter}>
            <Text style={[styles.counterText, {color: THEME.COLORS.BLUE}]}>Criadas </Text>
            <View style={styles.counterNumberContainer}>
              <Text style={styles.counterNumber}>{tasks.length}</Text>
            </View>
          </View>
         
          <View style={styles.counter}>
            <Text style={[styles.counterText, {color: THEME.COLORS.PURPLE}]}>Concluídas </Text>
            <View style={styles.counterNumberContainer}>
              <Text style={styles.counterNumber}>{completedTasks}</Text>
            </View>
          </View>
        </View>
        
        <FlatList 
          data={tasks}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Task 
              description={item.description}
              setCounter={setCompletedTasks}
              onRemove={() => handleRemoveTask(item.id)} 
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <View style={styles.emptyListContainer}>
              <Image source={EmptyListImg} style={styles.emptyListImage} />
              <Text style={[styles.emptyListText, {fontFamily: THEME.FONT_FAMILY.BOLD}]}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.emptyListText}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          )}
        />
      </View>

      {tasks.length > 0 ? (
        <View style={styles.footer}>
          <TouchableOpacity
            style={[styles.footerButtons, { backgroundColor: THEME.COLORS.PURPLE_DARK }]}
            // onPress={handleRemoveAllTasks}
          >
            <Ionicons name="checkmark-done-circle-outline" size={28} color={THEME.COLORS.GRAY_200} />
            <Text style={styles.buttonText}>Concluir todas tarefas</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.footerButtons, { backgroundColor: THEME.COLORS.DANGER }]}
            onPress={handleRemoveAllTasks}
          >
            <Ionicons name="trash-outline" size={28} color={THEME.COLORS.GRAY_200} />
            <Text style={styles.buttonText}>Remover todas tarefas</Text>
          </TouchableOpacity>
        </View>
      ) : null}
      
    </View>
  );
}