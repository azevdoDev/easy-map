import React, { useRef, useState, useEffect } from 'react';
import { View, StyleSheet, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import { Video } from 'expo-av';
import { useRouter } from 'expo-router';


const LoginScreen = () => {
  const video = useRef<Video>(null);
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const router = useRouter();


  useEffect(() => {
  const playVideo = async () => {
    const status = await video.current?.getStatusAsync();
if (status && 'isPlaying' in status && !status.isPlaying) {

      await video.current?.playAsync();
    }
  };

  playVideo();
}, []);


  return (
    <View style={styles.container}>
      <Video
        ref={video}
        source={require('./assets/videoback.mp4')} // ajuste esse caminho conforme sua pasta
        style={StyleSheet.absoluteFill}
        shouldPlay
        isLooping
        isMuted
      />

      <View style={styles.overlay}>
        <Text style={styles.title}>O que ta tendo?</Text>

        <TextInput
          style={styles.input}
          placeholder="Usuário"
          placeholderTextColor="#ccc"
          value={login}
          onChangeText={setLogin}
        />

        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.inputSenha}
            placeholder="Senha"
            placeholderTextColor="#ccc"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry={!mostrarSenha}
          />
          <TouchableOpacity
            style={styles.toggleButton}
            onPress={() => setMostrarSenha(!mostrarSenha)}
          >
            <Text style={styles.toggleText}>{mostrarSenha ? '🙈' : '👁️'}</Text>
          </TouchableOpacity>
        </View>

        <Button title="Entrar" onPress={() => {
  console.log('Login:', login, 'Senha:', senha);
  router.push('/home');}} />

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // deixa os inputs mais visíveis
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
    color: '#fff',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
  },
  inputSenha: {
    flex: 1,
    height: 50,
    paddingHorizontal: 15,
    color: '#fff',
  },
  toggleButton: {
    paddingHorizontal: 10,
  },
  toggleText: {
    fontSize: 18,
    color: '#fff',
  },
});

export default LoginScreen;
