import { View, Text, Image,Animated,TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image'
import React, {useCallback} from 'react'
import axios from 'axios';
import RNFS, {DownloadDirectoryPath} from 'react-native-fs';
//Styles
import styles from '../styles/homeStyles'

const TopSong = ({ song, navigation, index, TrackPlayer, allSongs, setTabBarVisible, setTrackPlayerSongs, setPlayListIndex}) => {

  const fileUrl = `${DownloadDirectoryPath}/${song.artistName} - ${song.name}.mp3`
  const [exist,setExist] = React.useState(false);

  React.useEffect(() =>{

    RNFS.exists(fileUrl)
    .then((exist) =>{
      setExist(exist);
    });
    
  },[0])


  

  const [scaleAnim,setScaleAnim] = React.useState(new Animated.Value(1))

  const scaleDown = ()=>{
    Animated.timing(scaleAnim,{
      toValue:0.96,
      duration:100,
      useNativeDriver:true
    }).start();
  }

  const scaleUp = ()=>{
    Animated.timing(scaleAnim,{
      toValue:1,
      duration:100,
      useNativeDriver:true
    }).start();
  }

 

  const handlePress = () =>{
    setTabBarVisible(false);
    setTimeout(() =>{
      setTrackPlayerSongs((prev) =>{
        return {...prev,index:index}
      })
    },0)

  }

  return (
    <Animated.View style={[{transform:[{scale:scaleAnim}]}]}>
      <TouchableOpacity onPress={handlePress} activeOpacity={0.7} onPressIn={scaleDown} onPressOut={scaleUp}  style={styles.topSong}>
          <FastImage style={styles.topSongImage}
          source={{uri:song.image,cache:FastImage.cacheControl.immutable}}
          
          />
          <View><Text numberOfLines={1} style={styles.songNameText}>{song.name}</Text></View>

     </TouchableOpacity>
    </Animated.View>
  )
}

export default TopSong