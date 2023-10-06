import { View,
   Text,
  PermissionsAndroid,
  ActivityIndicator,
  TouchableOpacity,
  Dimensions,
  FlatList
} from 'react-native';
import RNFS , { DownloadDirectoryPath } from 'react-native-fs';
import RNFetchBlob from 'rn-fetch-blob';
import React, { memo } from 'react';
import FastImage from 'react-native-fast-image';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Slider } from '@rneui/themed';
import Swiper from 'react-native-swiper';
import { useNavigation } from '@react-navigation/native';
import Carousel from 'react-native-reanimated-carousel';
// Styles
import styles from '../styles/SongStyles';

//Components
import SwiperSongLoader from '../components/SwiperSongLoader';

//Icons
import PlayIcon from '../assets/PlayIcon';
import NextIcon from '../assets/NextIcon';
import PreviousIcon from '../assets/PreviousIcons';
import DownloadIcon from '../assets/DowloadIcon';
import PauseIcon from '../assets/PauseIcon';

const Song = ({ navigation,route }) => {

    const { id, name, artist, image, time, index, allSongs  } = route.params;
    const deviceWidth = Dimensions.get('window').width;


    const [songExist,setSongExist] = React.useState(false);
    const [isLoading,setIsLoading] = React.useState(false);
    const [isPlaying,setIsPlaying] = React.useState(false);    


    function cleanTime(millis) {
      var minutes = Math.floor(millis / 60000);
      var seconds = ((millis % 60000) / 1000).toFixed(0);
      return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
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





    const handleDownload = () =>{
      setIsLoading(true);
      downloadFile();
    }






  return (
    <FlatList
    data={allSongs}
    initialNumToRender={2}
    initialScrollIndex={index}
    scrollEventThrottle={10}
    pagingEnabled={true}
    getItemLayout={(data, index) => ({
      length:deviceWidth,
      offset: deviceWidth * index,
      index,
    })}
    horizontal={true}
    onViewableItemsChanged={()=> console.log("Changed")}
    viewabilityConfig={{
      itemVisiblePercentThreshold: 50
    }}
    keyExtractor={item => item.index}
    showsHorizontalScrollIndicator={false}
    renderItem={({ item,loopIndex })=>(
      <View key={loopIndex} style={styles.container}>
            
            <FastImage  
            style={styles.songImage}
            source={{
              uri:item.image,
              cache:FastImage.cacheControl.cacheOnly
            }}
            />
            <Text style={styles.songNameText}>{item.name}</Text>
            <Text style={styles.artistNameText}>{artist}</Text>
    
            <View style={styles.timing}>
              <Slider 
              style={{width:"80%",height:20,marginTop:30,}}
              thumbStyle={{ height: 10, width: 10 ,backgroundColor:'#fff'}}
              minimumTrackTintColor='#467be3'
                minimumValue={0}
                maximumValue={time / 1000}
                value={0}
                allowTouchTrack={true}
                onValueChange={(value)=>{
                }}
              />
    
              <View style={styles.songDurations}>
                <Text>{cleanTime(0)}</Text>
                <Text>{cleanTime(time)}</Text>
    
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
                    (
                      !isPlaying ?
                      <TouchableOpacity onPress={()=>{navigation.replace('song')}}>
                        <PlayIcon  width={20} height={20}/>
                      </TouchableOpacity>
                      :
                      <TouchableOpacity >
                        <PauseIcon  width={20} height={20}/>
                      </TouchableOpacity>
                    )
                    :
                  <TouchableOpacity onPress={handleDownload}>
                    <DownloadIcon  width={20} height={20} />
                  </TouchableOpacity>
                  )
                }
    
                
    
    
              </View>
    
              <TouchableOpacity onPress={()=>{swiperRef.current.scrollBy(1,true)}}>
                <NextIcon  width={20} height={20} />
              </TouchableOpacity>
              
            </View>
    
          </View>
    )}
    />
  )
}

export default Song