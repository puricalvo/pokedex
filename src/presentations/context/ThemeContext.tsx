 import { createContext, PropsWithChildren } from "react";

import {
    NavigationContainer,
    DarkTheme as NavigationDarkTheme,
    DefaultTheme as NavigationDefaultTheme,
  } from '@react-navigation/native';

import { adaptNavigationTheme, PaperProvider } from 'react-native-paper';
import { useColorScheme } from "react-native";
  
  const { LightTheme, DarkTheme } = adaptNavigationTheme({
    reactNavigationLight: NavigationDefaultTheme,
    reactNavigationDark: NavigationDarkTheme,
  });


export const ThemeContext = createContext({
    isDark: false,
    theme: LightTheme,
});


export const ThemeContextProvider = ({ children }: PropsWithChildren) => {

    const colorScheme = useColorScheme();

    const isDark  = colorScheme === 'dark';
    const theme = isDark ? DarkTheme : LightTheme;

    

    return (
        <PaperProvider theme={ theme } >
            <NavigationContainer theme={theme }>
                <ThemeContext.Provider value={{
                    isDark, 
                    theme,
                }}>

                { children }
                </ThemeContext.Provider>
            </NavigationContainer>
        </PaperProvider>
    );
}; 

/* 
import { PropsWithChildren, createContext } from 'react';
 
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
 
import { PaperProvider, adaptNavigationTheme, MD3LightTheme, MD3DarkTheme } from 'react-native-paper';
import { useColorScheme } from 'react-native';
 
const { LightTheme: PaperLightTheme, DarkTheme: PaperDarkTheme } = adaptNavigationTheme( {
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
} );
 
export const ThemeContext = createContext( {
  isDark: false,
  theme: PaperLightTheme,
} );
 
export const ThemeContextProvider = ( { children }: PropsWithChildren ) => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
 
  const CombinedTheme = {
    ...( isDark ? MD3DarkTheme : MD3LightTheme ),
    ...( ( isDark ? PaperDarkTheme : PaperLightTheme ) as any ),
    fonts: {
      displaySmall: { fontFamily: 'Nunito-Regular', fontWeight: '400', fontSize: 20 },
      displayMedium: { fontFamily: 'Nunito-Regular', fontWeight: '400', fontSize: 24 },
      bodyLarge: { fontFamily: 'Nunito-Regular', fontWeight: '400', fontSize: 16 },
      bodyMedium: { fontFamily: 'Nunito-Regular', fontWeight: '400', fontSize: 14 },
      bodySmall: { fontFamily: 'Nunito-Regular', fontWeight: '400', fontSize: 12 },
      labelLarge: { fontFamily: 'Nunito-Regular', fontWeight: '500', fontSize: 14 },
      labelMedium: { fontFamily: 'Nunito-Regular', fontWeight: '400', fontSize: 12 },
      labelSmall: { fontFamily: 'Nunito-Regular', fontWeight: '400', fontSize: 10 },
      regular: { fontFamily: 'Nunito-Regular', fontWeight: '400' },
      medium: { fontFamily: 'Nunito-Medium', fontWeight: '500' },
      bold: { fontFamily: 'Nunito-Bold', fontWeight: '700' },
      heavy: { fontFamily: 'Nunito-Heavy', fontWeight: '900' },
    },
  };
  return (
    <PaperProvider theme={ CombinedTheme }>
      <NavigationContainer theme={ CombinedTheme }>
        <ThemeContext.Provider
          value={ {
            isDark,
            theme: CombinedTheme,
          } }
        >
          { children }
        </ThemeContext.Provider>
      </NavigationContainer>
    </PaperProvider>
  );
}; */