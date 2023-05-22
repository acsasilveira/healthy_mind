import { Camera, CameraType } from 'expo-camera';
import { useState, useRef } from 'react';
import { Button, Text, TouchableOpacity, View, Image } from 'react-native';
import { styles } from "./styles"
import { ComponentButton } from "../../components";
import { MaterialCommunityIcons, MaterialIcons, Ionicons } from '@expo/vector-icons';
import { colors } from '../../styles/colors';
import { color } from 'react-native-reanimated';

interface IPhoto {
  height: string
  uri: string
  width: string
}

export function SCamera() {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const ref = useRef(null);
  const [photo, setPhoto] = useState<IPhoto>()

  if (!permission) {
    // As permissões da câmera estão sendo carregadas
    return <View />
  }

  if (!permission.granted) {
    // A permissão da câmera ainda não foi dada
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>Permita o acesso à sua câmera!!</Text>
        <Button onPress={requestPermission} title="Pemissão do Uso da Câmera" />
      </View>
    );
  }

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  async function takePicture() {
    if (ref.current) {
      const picture = await ref.current.takePictureAsync()
      console.log(picture)
      setPhoto(picture)
    }
  }


  return (
    <View style={styles.container}>
      {photo && photo.uri ? (
        <>
          <View style={styles.camera}>
            <TouchableOpacity onPress={() => setPhoto(undefined)}>
              <Ionicons name="caret-back-circle" size={40} color={colors.secondary} />
            </TouchableOpacity>
            <Image source={{ uri: photo.uri }} style={styles.img} />
          </View>
        </>
      ) : (
        <Camera style={styles.camera} type={type} ref={ref}>
          <View style={styles.ladinho}>
            <TouchableOpacity onPress={takePicture} style={styles.botao1} /* Para tirar  a foto */>
              <MaterialIcons name="camera" size={100} color={colors.white} />
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleCameraType} style={styles.botao2} /* Para mudar a câmera */>
              <MaterialCommunityIcons name="camera-flip" size={70} color={colors.white} />
            </TouchableOpacity>
          </View>
        </Camera>
      )}

    </View>
  );
}