import { View,
   Text,
  PermissionsAndroid,
  ActivityIndicator,
  TouchableOpacity,
  Dimensions,
  FlatList,
  Animated
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

const Song = ({ navigation,route,songs }) => {

    // Enable playback in silence mode
    Sound.setCategory('Playback');
      




  return (
 
      <Animated.View  style={styles.container}>
            
            <FastImage  
            style={styles.songImage}
            source={{
              uri:songs[3].image,
              cache:FastImage.cacheControl.immutable
            }}
            />
            <Text style={styles.songNameText}>{songs[3].name}</Text>
            <Text style={styles.artistNameText}>{songs[3].artistName}</Text>
    
            <View style={styles.timing}>
              <Slider 
              style={{width:"80%",height:20,marginTop:30,}}
              thumbStyle={{ height: 10, width: 10 ,backgroundColor:'#fff'}}
              minimumTrackTintColor='#467be3'
                minimumValue={0}
                maximumValue={songs[3].time/ 1000}
                value={0}
                allowTouchTrack={true}
                onValueChange={(value)=>{
                }}
              />
    
              <View style={styles.songDurations}>
                <Text style={styles.timeText}>{0}</Text>
                <Text style={styles.timeText}>{songs[3].time}</Text>
    
              </View>
    
            </View>
    
            <View style={styles.songOptions}>
    
              <PreviousIcon width={20} height={20} />
    
              <View style={[styles.playIconContainer]}>
                {
                  !true?
                  <ActivityIndicator size='large'/>
                  :(
                    true ?
                    (
                      !true?
                      <TouchableOpacity onPress={()=>{navigation.replace('song')}}>
                        <PlayIcon  width={20} height={20}/>
                      </TouchableOpacity>
                      :
                      <TouchableOpacity >
                        <PauseIcon  width={20} height={20}/>
                      </TouchableOpacity>
                    )
                    :
                  <TouchableOpacity >
                    <DownloadIcon  width={20} height={20} />
                  </TouchableOpacity>
                  )
                }
    
                
    
    
              </View>
    
              <TouchableOpacity onPress={()=>{swiperRef.current.scrollBy(1,true)}}>
                <NextIcon  width={20} height={20} />
              </TouchableOpacity>
              
            </View>
    
          </Animated.View>
  )
}

export default React.memo(Song)