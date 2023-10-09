import { View,
   Text,
  PermissionsAndroid,
  ActivityIndicator,
  TouchableOpacity,
  Dimensions,
  FlatList
} from 'react-native';
import RNFS , { DownloadDirectoryPath } from 'react-native-fs';
import { LogBox } from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import React, { useMemo } from 'react';
import FastImage from 'react-native-fast-image';
import Sound from 'react-native-sound';
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
import { exists } from '../server/models/user';

const Song = ({ navigation,route }) => {

    // Enable playback in silence mode
    Sound.setCategory('Playback');
        


    //Start
    

    const { id, name, artist, image, time, index, updateTopSongs  } = route.params;


    
    const deviceWidth = Dimensions.get('window').width;
    const deviceHeight = Dimensions.get('window').height;

    const [songExist,setSongExist] = React.useState(false);
    const [isLoading,setIsLoading] = React.useState(false);
    const [isPlaying,setIsPlaying] = React.useState(false);    
    const [scrollable,setScrollable] = React.useState(true);
    const [allSongs,setAllSongs] = React.useState(route.params.allSongs);
    const [playableSongName,setPlayableSongName] = React.useState(
      `${DownloadDirectoryPath}/${artist} - ${name}.mp3`
    )

    function cleanTime(millis) {
      const minutes = Math.floor(millis / 60000);
      const seconds = ((millis % 60000) / 1000).toFixed(0);
      return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }


    const downloadFile =  (artistName,songName,itemIndex) =>{
      setIsLoading(true);
      setScrollable(false)
      const fileUrl = `http://localhost:8000/spotify-api/audio?name=${artistName} ${songName}`;
      fileName = `${artistName} - ${songName}`;
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
        updateTopSongs(itemIndex);

        //Update songs
        setAllSongs((prevSongs) =>{
          return prevSongs.map((song) =>{
            return song.index === itemIndex ? {...song,exist:true} : song
          })
        })
        setIsLoading(false);
        setScrollable(true)
      })
      .catch((err) =>{
        console.log("SADa")
        console.log(err)
      }) 

    }

    const handleDownload = (artistName,songName,itemIndex) =>{
      downloadFile(artistName,songName,itemIndex);
    }

       // Ignoring useless warning
       LogBox.ignoreLogs([
        'Non-serializable values were found in the navigation state',
      ]);


      React.useEffect(() =>{
        if(allSongs[index])

        if(PLAYING_SONG)
        {
          if(GLOBAL_SONG_NAME !== playableSongName)
          PLAYING_SONG.stop();
        }

        if(GLOBAL_SONG_NAME !== playableSongName){
        const playableSong = new Sound(playableSongName, Sound.MAIN_BUNDLE, (error) => {
          if (error) {
            console.log('failed to load the sound', error);
            return;
          }
          // loaded successfully
          console.log('duration in seconds: ' + playableSong.getDuration() + 'number of channels: ' + playableSong.getNumberOfChannels());
          PLAYING_SONG = playableSong;
          GLOBAL_SONG_NAME = playableSongName
          // Play the sound with an onEnd callback
          playableSong.play((success) => {
            if (success) {
              console.log('successfully finished playing');
            } else {
              console.log('playback failed due to audio decoding errors');
            }
          });
        });
      }
      },[playableSongName])
    
      

  return (
    <FlatList
    extraData={[allSongs]}
    scrollEnabled={scrollable}
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
              cache:FastImage.cacheControl.immutable
            }}
            />
            <Text style={styles.songNameText}>{item.name}</Text>
            <Text style={styles.artistNameText}>{item.artistName}</Text>
    
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
                <Text style={styles.timeText}>{cleanTime(0)}</Text>
                <Text style={styles.timeText}>{cleanTime(time)}</Text>
    
              </View>
    
            </View>
    
            <View style={styles.songOptions}>
    
              <PreviousIcon width={20} height={20} />
    
              <View style={[styles.playIconContainer,isLoading?{borderWidth:0}:{}]}>
                {
                  isLoading?
                  <ActivityIndicator size='large'/>
                  :(
                    item.exist ?
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
                  <TouchableOpacity onPress={()=>{handleDownload(item.artistName,item.name,item.index)}}>
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

export default React.memo(Song)