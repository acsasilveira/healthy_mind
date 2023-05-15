import { Camera, CameraType } from 'expo-camera';
import { useState, useRef } from 'react';
import { Button, Text, TouchableOpacity, View, Image } from 'react-native';
import { styles } from "./styles"
import { ComponentButton } from "../../components";
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
    // Camera permissions are still loading
    return <View />
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>Permita o acesso à sua câmera!!</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  async function takePicture(){
    if(ref.current){
      const picture = await ref.current.takePictureAsync()
      console.log(picture)
      setPhoto(picture)
    }
  }


  return (
    <View style={styles.container}>
      <ComponentButton title="Flip" type="geral" onPressI={toggleCameraType} />
      <Camera style={styles.camera} type={type} ref={ref}>
      <ComponentButton title="Tirar Foto" type="geral" onPressI={toggleCameraType} />
      {photo && photo.uri && (
        <Image source={{uri: photo.uri}} style={styles.img} />
      )}
      </Camera>
    </View>
  );
}