import 'react-native-gesture-handler';

import { StackNavigator } from './presentations/navigator/StackNavigator';
import { ThemeContextProvider } from './presentations/context/ThemeContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const queryClient = new QueryClient()



export const PokedexApp = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeContextProvider>
        <StackNavigator/>
      </ThemeContextProvider>
    </QueryClientProvider>
      
  )
}

