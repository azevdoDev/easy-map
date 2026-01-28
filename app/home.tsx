import React from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const categorias = [
    { name: 'Festas', icon: '🎉' },
    { name: 'Eventos', icon: '🎭' },
    { name: 'Museus', icon: '🖼️' },
    { name: 'Parques', icon: '🌳' },
  ];

  const populares = [
    {
      nome: 'Bar do Zé',
      local: 'Centro',
      nota: '4.8',
      imagem: 'https://source.unsplash.com/random/300x200?bar',
    },
    {
      nome: 'Festa Neon',
      local: 'Zona Sul',
      nota: '4.9',
      imagem: 'https://source.unsplash.com/random/300x200?party',
    },
    {
      nome: 'Museu da Cultura',
      local: 'Avenida Paulista',
      nota: '4.7',
      imagem: 'https://source.unsplash.com/random/300x200?museum',
    },
  ];

  const recomendados = [
    {
      nome: 'Noite Sertaneja',
      local: 'Clube Imperial',
      nota: '4.9',
      imagem: 'https://source.unsplash.com/random/400x200?party',
    },
    {
      nome: 'Feira Gastronômica',
      local: 'Praça Central',
      nota: '4.7',
      imagem: 'https://source.unsplash.com/random/400x200?food',
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>
          O que você quer fazer hoje?
        </Text>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#f0f0f0',
            borderRadius: 12,
            paddingHorizontal: 12,
            paddingVertical: 8,
          }}
        >
          <TextInput
            placeholder="Buscar..."
            style={{
              flex: 1,
              fontSize: 16,
            }}
          />
          <Text style={{ fontSize: 18 }}>🔍</Text>
        </View>

        {/* CATEGORIAS */}
        <View style={{ marginTop: 20 }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {categorias.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 12,
                  marginRight: 10,
                  backgroundColor: index === 0 ? '#fff' : '#fff',
                  borderRadius: 12,
                  borderWidth: 1,
                  borderColor: '#ddd',
                  width: 80,
                  height: 80,
                  shadowColor: '#000',
                  shadowOpacity: 0.1,
                  shadowOffset: { width: 0, height: 2 },
                  shadowRadius: 4,
                }}
              >
                <Text style={{ fontSize: 24 }}>{item.icon}</Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: index === 0 ? '#333' : '#333',
                    marginTop: 5,
                  }}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* POPULARES */}
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 30, marginBottom: 10 }}>
          Populares perto de você
        </Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {populares.map((item, index) => (
            <View
              key={index}
              style={{
                width: 180,
                marginRight: 15,
                borderRadius: 12,
                overflow: 'hidden',
                backgroundColor: '#fff',
                shadowColor: '#000',
                shadowOpacity: 0.1,
                shadowOffset: { width: 0, height: 2 },
                shadowRadius: 4,
              }}
            >
              <Image
                source={{ uri: item.imagem }}
                style={{ width: '100%', height: 100 }}
              />
              <View style={{ padding: 10 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 14 }}>{item.nome}</Text>
                <Text style={{ color: '#555', fontSize: 12 }}>
                  📍 {item.local}   ⭐ {item.nota}
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>

        {/* RECOMENDADOS */}
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 30, marginBottom: 10 }}>
          Recomendados para você
        </Text>

        {recomendados.map((item, index) => (
          <View
            key={index}
            style={{
              marginBottom: 20,
              borderRadius: 12,
              overflow: 'hidden',
              backgroundColor: '#fff',
              shadowColor: '#000',
              shadowOpacity: 0.1,
              shadowOffset: { width: 0, height: 2 },
              shadowRadius: 4,
            }}
          >
            <Image
              source={{ uri: item.imagem }}
              style={{ width: '100%', height: 160 }}
            />
            <View style={{ padding: 12 }}>
              <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.nome}</Text>
              <Text style={{ color: '#555', fontSize: 13 }}>
                📍 {item.local}   ⭐ {item.nota}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
