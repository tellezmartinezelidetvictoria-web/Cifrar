import React,{useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button,TextInput, } from 'react-native';
import * as Crypto from 'expo-crypto'; 
export default function HomeScreen() {
  const [cifrar, Setcifrar] = useState<string>('');

  const handlePress = async  () => {
    if(!cifrar) return ;
    const inicio = performance.now();
    const hash = await Crypto.digestStringAsync(
      Crypto.CryptoDigestAlgorithm.SHA256,
      cifrar
    );
    const fin = performance.now();
    const tnHallado = (fin - inicio).toFixed(4);

    setHashResult(hash);
    setTiempoEjecucion(`${tnHallado} ms`);
    setBigO('O(n)');

  };

  const [hashResult, setHashResult] = useState<string>('-');
  const [tiempoEjecucion, setTiempoEjecucion] = useState<string>('-');
  const [bigO, setBigO] = useState<string>('-')

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Aplicacion Cifrado</Text>
        <Text style={styles.subtitle}>Elabore una aplicación Movil donde implemente Hashing y calcule el TNo y BigO</Text>
        <TextInput
        style={styles.input}
          placeholder="Texto a cifrar"
          placeholderTextColor="#999"
          value={cifrar}
          onChangeText={(texto) => Setcifrar(texto)}
          autoCapitalize="none" 
          autoCorrect={false}
        />
        <Text style={styles.resultado}>Texto Escrito: {cifrar}</Text>
        <Button 
          title="Cifrar" 
          onPress={handlePress} 
          color="#007AFF" 
        />
      </View>

      <View style={styles.cardContainer}>
        <Text style={styles.cardTitle}>Resultados del Análisis</Text>
        
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>SHA-256 Hash:</Text>
          <Text style={styles.hashText} numberOfLines={2}>
            {hashResult}
          </Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Tiempo de Ejecución (T(n)):</Text>
          <Text style={styles.infoValue}>{tiempoEjecucion}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Complejidad Algorítmica (Big O):</Text>
          <Text style={[styles.infoValue, styles.bigOText]}>{bigO}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', 
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 20,
    textAlign: 'center',
  },
  formContainer: {
    padding: 20,          
    marginTop: 40,        
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,      
    color: '#333',
  },
  input: {
    height: 50,
    width : "80%",
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12, 
    marginVertical : 20,
    fontSize: 16,
    color: '#000',
    backgroundColor: '#f9f9f9',
  },
  resultado: {
    marginVertical: 15,
    color: '#666',
    fontStyle: 'italic',
  },
  cardContainer: {
    backgroundColor: '#ffffff',
    marginHorizontal: 25,
    marginTop: 20,
    marginBottom: 50,          
    padding: 20,                
    borderRadius: 12,           
    borderWidth: 1,
    borderColor: '#e9ecef',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,               
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#212529',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f3f5',
    paddingBottom: 8,
  },
  infoRow: {
    marginBottom: 12,
  },
  infoLabel: {
    fontSize: 14,
    color: '#6c757d',
    fontWeight: '600',
    marginBottom: 4,
  },
  infoValue: {
    fontSize: 15,
    color: '#212529',
    fontWeight: '500',
  },
  hashText: {
    fontSize: 13,
    fontFamily: 'Platform-Specific-Monospace', 
    color: '#495057',
    backgroundColor: '#f1f3f5',
    padding: 6,
    borderRadius: 4,
  },
  bigOText: {
    color: '#dc3545', 
    fontWeight: 'bold',
  },
});