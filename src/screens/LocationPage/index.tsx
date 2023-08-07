import React, { useState, useEffect, useRef } from 'react';
import * as Location from 'expo-location';
import { GooglePlaceData, GooglePlaceDetail, GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import MapViewDirections, {} from "react-native-maps-directions";
import MapView, { Region, Marker, Polyline } from 'react-native-maps';
import { Text, TouchableOpacity, View } from 'react-native';
import { ComponentLogo, ComponentTitle } from '../../components';
import { Entypo, Ionicons } from '@expo/vector-icons';
import { styles } from "./styles"
import { colors } from '../../styles/colors';
import { API_GOOGLE } from '@env';
import { LoginTypes } from '../../navigations/login.navigation';


type ICoords ={
  latitude: number
  longitude: number
}

export function SLocation({navigation}: LoginTypes) {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [region, setRegion] = useState<Region>();
  const [marker, setMarker] = useState<Region[]>();
  const [coords, setCoords] = useState<ICoords[]>([]); 
  const [destination, setDestination] = useState<Region | null>(null);
  const mapRef = useRef<MapView>(null);


  useEffect(() => {
    let subscription: Location.LocationSubscription
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('A permissão de acesso à sua localização foi negada! ');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.004,
        longitudeDelta: 0.004
      })
      setMarker([{
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.004,
        longitudeDelta: 0.004
      }])
      subscription = await Location.watchPositionAsync({
        accuracy: Location.LocationAccuracy.High,
        timeInterval: 1000,
        distanceInterval: 1
      }, (location) => {
        setCoords((prevState)=> [...prevState, location.coords])
      });
    })();

    return() => {
      if (subscription) {
        subscription.remove()
      }
    }
  }, []);

  async function handleDestination(data: GooglePlaceData, details: GooglePlaceDetail | null) {
    if(details){
      setDestination({
        latitude: details?.geometry.location.lat,
        longitude: details?.geometry.location.lng,
        latitudeDelta: 0.004,
        longitudeDelta: 0.004
      })
      if(marker){
        setMarker([...marker, {
          latitude: details?.geometry.location.lat,
          longitude: details?.geometry.location.lng,
          latitudeDelta: 0.004,
          longitudeDelta: 0.004
        }])
      }
    }
  }

  let text = 'Carregando localização...';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  } else if (destination) {
    text = JSON.stringify(destination);
  }

  return (
    <View style={styles.container}>
      <ComponentLogo />
      <View style={styles.container2}>
        <View style={styles.ladinho}>
          <TouchableOpacity onPress={() => navigation.navigate('Tab')}>
            <Ionicons name="caret-back-circle" size={40} color={colors.secondary} />
          </TouchableOpacity>
          <ComponentTitle titleI='Sua localização' />
        </View>
      </View>
      <GooglePlacesAutocomplete
        styles={{ container: styles.pesquisaFrame, textInput: styles.pesquisaConteudo}}
        placeholder="Onde você vai"
        fetchDetails={true}
        GooglePlacesDetailsQuery={{ fields: "geometry" }}
        enablePoweredByContainer={false}
        query={{
          key: API_GOOGLE,
          language: 'pt-BR'
        }}
        onFail={setErrorMsg}
        onPress={handleDestination}
      />
      {region ? (
        <MapView  ref={mapRef} region={region} style={styles.map} showsUserLocation={true}>
          {marker && marker.map((i)=> (
            <Marker key={i.latitude} coordinate={i}>
              <Entypo name="location-pin" size={30} color={colors.secondary} />
            </Marker>
          ))}
          {coords && <Polyline
            coordinates={coords}
            strokeColor={colors.primary}
            strokeWidth={7} />
          }
          { destination && (
            <MapViewDirections 
            origin={region}
            destination={destination}
            apikey={API_GOOGLE}
            strokeColor={colors.secondary}
            strokeWidth={7}
            lineDashPattern={[0]}
            onReady={(result) => {
              mapRef.current?.fitToCoordinates(result.coordinates,{
                edgePadding: {
                  top: 24,
                  bottom: 24,
                  left: 24,
                  right: 24
                }
              })
            }}
            />
          )}
        </MapView>
      ):(
        <Text style={styles.paragraph}>{text}</Text>
      )}
      
    </View>
  );
}
