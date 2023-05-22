import * as MediaLibrary from 'expo-media-library'
import * as ImagePicker from 'expo-image-picker'
import { Camera, CameraCapturedPicture, CameraType } from 'expo-camera';
import { useState, useRef } from 'react';
import { Button, Text, TouchableOpacity, View, Image, Alert } from 'react-native';
import { styles } from "./styles"
import { MaterialCommunityIcons, MaterialIcons, Ionicons } from '@expo/vector-icons';
import { colors } from '../../styles/colors';
import { LoginTypes } from '../../navigations/login.navigation';


interface IPhoto {
  height: string
  uri: string
  width: string
}

export function SCamera({navigation}: LoginTypes) {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [permissionMedia, requestPermissionMedia] = MediaLibrary.usePermissions();
  const [photo, setPhoto] = useState<CameraCapturedPicture | ImagePicker.ImagePickerAsset>()
  const ref = useRef<Camera>(null)
  const [takePhoto, setTakePhoto] = useState(false)

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

  async function SavePhoto() {
    const asset = await MediaLibrary.createAssetAsync(photo!.uri)
    MediaLibrary.createAlbumAsync("HealthyMind", asset, true)
    Alert.alert("Imagem salva com sucesso!")
  }

  return (
    <View style={styles.container}>
      {photo && photo.uri ? (
        <>
          <View style={styles.camera2}>
            <View>
              <View style={styles.ladinho2}>
                <TouchableOpacity onPress={() => {navigation.navigate('Photo', {photo: photo!.uri})}} style={styles.botao3}>
                  <Ionicons name="caret-back-circle" size={40} color={colors.secondary} />
                </TouchableOpacity>
                <TouchableOpacity onPress={SavePhoto} style={styles.botao3} /*Para salvar */>
                  <MaterialIcons name="save" size={40} color={colors.secondary} />
                </TouchableOpacity>
              </View>
              <Image source={{ uri: photo.uri }} style={styles.img} />
              </View>
          </View>
        </>
      ) : (
        <Camera style={styles.camera} type={type} ref={ref}>
          <View style={styles.ladinho}>
            <TouchableOpacity onPress={() => navigation.navigate('Photo')} style={styles.botao3} /*Para voltar para o tab */>
                <Ionicons name="caret-back-circle" size={40} color={colors.white} />
            </TouchableOpacity>
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