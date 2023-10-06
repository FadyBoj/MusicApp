import { View, Text } from 'react-native'
import React from 'react'

//Styles
import styles from '../styles/SongStyles';


//Icons 
import PlayIcon from '../assets/PlayIcon';
import NextIcon from '../assets/NextIcon';
import PreviousIcon from '../assets/PreviousIcons';
import DownloadIcon from '../assets/DowloadIcon';
import PauseIcon from '../assets/PauseIcon';

const SwiperSongLoader = ({image,name,artist,time}) => {
  return (
    <View key={index} style={styles.container}>
        
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

  )
}

export default SwiperSongLoader