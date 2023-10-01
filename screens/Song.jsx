import { View, Text, PermissionsAndroid, Platform, ActivityIndicator, TouchableOpacity } from 'react-native';
import { DownloadDirectoryPath } from 'react-native-fs';
import RNFetchBlob from 'rn-fetch-blob';
import React from 'react';
import FastImage from 'react-native-fast-image';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Slider } from '@rneui/themed';
// Styles
import styles from '../styles/SongStyles';

//Icons
import PlayIcon from '../assets/PlayIcon';
import NextIcon from '../assets/NextIcon';
import PreviousIcon from '../assets/PreviousIcons';
import DownloadIcon from '../assets/DowloadIcon';



const Song = ({ navigation,route }) => {

    const { id, name, artist, image, time  } = route.params;

    const [songExist,setSongExist] = React.useState(false);
    const [isLoading,setIsLoading] = React.useState(false);

    const checkSong = async() =>{
      try {
        let isExist = await AsyncStorage.getItem('songs');
        isExist =  JSON.parse(isExist);

        if(isExist[`${id}`])
        {
          console.log("Exist")
          setSongExist(true)
        }
        else{
          console.log("Not exist")
        }
      } catch (error) {
        console.log(error)
      }
    }

    checkSong()
    
    const addItem = async () =>{
      try {
        const previousItems = await AsyncStorage.getItem('songs');

        if(previousItems !== null)
        {
          const newItems = {...JSON.parse(previousItems),[id]:true};
          await AsyncStorage.setItem('songs',JSON.stringify(newItems));
        }

        else{
          await AsyncStorage.setItem('songs',JSON.stringify({[id]:true}));
        }

      } catch (error) {
       console.log(error) 
      }
    }


    const downloadFile =  () =>{
      const fileUrl = `http://localhost:8000/spotify-api/audio?name=${artist} ${name}`;
      fileName = `${artist} - ${name}`;
      const downloadDest = `${DownloadDirectoryPath}/${fileName}.mp3`;
      RNFetchBlob.config({
        fileCache:true,
        addAndroidDownloads:{
          useDownloadManager: true,
          notification: true,
          path: downloadDest,
          description: 'Downloading file',
          mime: 'audio/mpeg',
          mediaScannable: true,
          }
      })
      .fetch('GET',fileUrl)
      .then((res) =>{
        addItem();
        setIsLoading(false);
        setSongExist(true)
      })
      .catch((err) =>{
        console.log("SADa")
        console.log(err)
      })

    }

    const requestDownloadPermission = async () =>{
      try {
        const granted = await   PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Storage Permission',
            message: 'App needs access to your storage to download files.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        )

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        } else {
          console.log('permission denied');
          navigation.goBack()
        }
      } catch (error) {
        console.log("Error")
      }
    }

    

    requestDownloadPermission()

    const handleDownload = () =>{
      setIsLoading(true);
      downloadFile();
    }

  return (
    <View style={styles.container}>
      
      <FastImage
      style={styles.songImage}
      source={{
        uri:image,
        cache:FastImage.cacheControl.immutable
      }}
      />
      <Text style={styles.songNameText}>{name}</Text>
      <Text style={styles.artistNameText}>{artist}</Text>

      <View style={styles.timing}>
        <Slider 
        style={{width:"80%",height:20,marginTop:30,}}
        thumbStyle={{ height: 10, width: 10 ,backgroundColor:'#fff'}}
        minimumTrackTintColor='#467be3'
          minimumValue={0}
          maximumValue={3.85}
          value={0}
          allowTouchTrack={true}
        />

        <View style={styles.songDurations}>
          <Text>0:00</Text>
          <Text>{time}</Text>

        </View>

      </View>

      <View style={styles.songOptions}>

        <PreviousIcon width={20} height={20} />

        <View style={[styles.playIconContainer,isLoading?{borderWidth:0}:{}]}>
          {
            isLoading?
            <ActivityIndicator size='large'/>
            :(
              songExist ?
              <TouchableOpacity>
                <PlayIcon width={20} height={20}/>
              </TouchableOpacity>
              :
            <TouchableOpacity onPress={handleDownload}>
              <DownloadIcon  width={20} height={20} />
            </TouchableOpacity>
            )
          }

          


        </View>

        <NextIcon width={20} height={20} />
        
      </View>

    </View>
  )
}

export default Song