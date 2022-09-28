import { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import { styles } from './styles';

import LogoImg from '../../assets/logo.png';

export function Home() {
  const [createdTasks, setCreatedTasks] = useState(0);
  const [completedTasks, setCompletedTasks] = useState(0);
  const [tasks, setTasks] = useState<string[]>([]);
  const [taskName, setTaskName] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  function handleFocus() {
    setIsFocused(true);
  }
  function handleBlur() {
    setIsFocused(false);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={LogoImg}
        />
      </View>
      

      <View style={styles.form}>
        <TextInput
          style={[styles.input, isFocused ? { borderColor: "#5E60CE", borderWidth: 1 } : {}]}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          onChangeText={setTaskName}
          value={taskName}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />

        <TouchableOpacity style={styles.addButton}>
          <Feather name="plus-circle" size={24} color="#F2F2F2" />
        </TouchableOpacity>
      </View>

      <View style={styles.countersContainer}>
        <View style={styles.counter}>
          <Text style={[styles.counterText, {color: '#4EA8DE'}]}>Criadas </Text>
          <Text style={styles.counterNumber}>{createdTasks}</Text>
        </View>
        <View style={styles.counter}>
          <Text style={[styles.counterText, {color: '#8284FA'}]}>Concluídas </Text>
          <Text style={styles.counterNumber}>{completedTasks}</Text>
        </View>
      </View>

      {/* <FlatList 
        data={tasks}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Task 
            key={item} 
            name={item} 
            onRemove={() => handleRemoveTask(item)} 
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <>
            <MaterialCommunityIcons name="clipboard-text-multiple-outline" size={24} color="black" />
            <Text style={[styles.emptyListText, {}]}>
              Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={styles.emptyListText}>
              Crie tarefas e organize seus itens a fazer
            </Text
          </>
        )}
      /> */}

      <View style={styles.footer}>
        <TouchableOpacity style={[styles.footerButtons, { backgroundColor: "green" }]}>
          <Ionicons name="checkmark-done-circle-outline" size={32} color="#F2F2F2" />
          <Text style={styles.buttonText}>Concluir todas tarefas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.footerButtons, { backgroundColor: "red" }]}>
          <Ionicons name="trash-outline" size={32} color="#F2F2F2" />
          <Text style={styles.buttonText}>Remover todas tarefas</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}