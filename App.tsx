import { StatusBar } from 'react-native';
import { 
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from '@expo-google-fonts/inter';

import { Home } from './src/screens/Home';
import { Loading } from './src/components/Loading';
import { TasksProvider } from './src/contexts/tasks';

export default function App() {
  const [loadedFonts] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  return (
    <>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <TasksProvider> 
        {loadedFonts ? <Home /> : <Loading />}
      </TasksProvider>
    </>
  );
}