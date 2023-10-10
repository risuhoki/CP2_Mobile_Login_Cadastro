import { useState } from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';

export function FormCadastro({ navigation }){
	const [usuario, setUsuario] = useState({
		email: "",
		senha: ""
	})

	function setValor(campo, valor) {
		setValor({ ...usuario, [campo]: valor })
	}

	return (
		<KeyboardAvoidingView style={styles.background}>
			<View style={styles.container}>
				<TextInput
					style={styles.input}
					value={usuario["email"]}
					placeholder="Email"
					autoCorrect={false}
					onChangeText={(valor) => { setValor("email", valor) }}
					autoCapitalize='none'
				/>
				<TextInput
					style={styles.input}
					value={usuario["senha"]}
					placeholder="Senha"
					autoCorrect={false}
					onChangeText={(valor) => { setValor("senha", valor) }}
					secureTextEntry={true}
					autoCapitalize='none'
				/>

				<TouchableOpacity 
					style={styles.btnsubmit} 
					onPress={() => {
						try {
							cadastrar(usuario)
							navigation.navigate('Home')
						} catch(err) {
							console.warn(err)
						}
					}}
				>
					<Text style={styles.submitText}>Cadastrar</Text>
				</TouchableOpacity>
			</View>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	background:{
	  flex:1,
	  alignItems:'center',
	  justifyContent:'center',
	  backgroundColor:'#191919'
	},
	container:{
	  flex:1,
	  alignItems:'center',
	  justifyContent:'center',
	  width:'90%',
	  paddingBottom:50
	},
	input:{
	  backgroundColor: '#FFF',
	  width: '90%',
	  marginBottom:15,
	  color:'#222',
	  fontSize:17,
	  borderRadius:7,
	  padding:10
	},
	btnsubmit:{
	  backgroundColor:'#35AAFF',
	  width:'90%',
	  height:45,
	  alignItems:'center',
	  justifyContent:'center',
	  borderRadius:7
	},
	submitText:{
	  color:'#FFF',
	  fontSize:18
	},
});