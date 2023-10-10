import 'react-native-gesture-handler'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { FormLogin } from './src/screens/FormLogin'
import { FormCadastro } from './src/screens/FormCadastro'
import { Home } from "./src/screens/Home"

const Stack = createStackNavigator()

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name='Login'
					component={FormLogin}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name='Cadastro'
					component={FormCadastro}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name='Home'
					component={Home}
					options={{ headerShown: false }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}