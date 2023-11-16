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
import TextTicker from 'react-native-text-ticker';
import ytdl from "react-native-ytdl";
import axios from 'axios';

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
import { ListItemAccordion } from '@rneui/base/dist/ListItem/ListItem.Accordion';


const Song = ({ navigation, route,  trackPlayerSongs}) => {


  const isExist = async(songName,artistName) =>{
    const exist = await RNFS.exists(`${DownloadDirectoryPath}/${songName}-${artistName}`);
    if(!exist)
    return console.log("Doesn't exist");
    console.log(exist)
    
  }

  const playSong = async(songName,artistName) =>{

    const { data } = await axios.get(`http://localhost:8000/spotify-api/audio?name=${songName} - ${artistName}`)

    const youtubeURL = data.url;
    const urls = await ytdl(youtubeURL, { quality: 'highestaudio' });
    console.log(urls[0].url)
  }



   
  const deviceWidth = Dimensions.get('window').width;
  const deviceHeight = Dimensions.get('window').height;

  const [songs,setSongs] = React.useState([]);
  const [songExist,setSongExsist] = React.useState(false);

  const listRef = React.useRef(null);


  React.useEffect(() =>{

    if(trackPlayerSongs.songs)
    {
       setSongs({tracks:trackPlayerSongs.songs,index:trackPlayerSongs.index});

    }
    
    if(songs.tracks?.length > 0)
    {
    listRef.current.scrollToIndex({animated:false,index:trackPlayerSongs.index})
    }


  },[trackPlayerSongs])

  const onViewableItemsChanged = ({
    viewableItems,
  }) => {
    if(viewableItems.length > 0)
    {

    const newIndex = viewableItems[0].index
    setSongs((prevSongs) =>{
      return {...prevSongs,index:newIndex}
    });


  }
  };

  const viewabilityConfigCallbackPairs = React.useRef([
    {
      onViewableItemsChanged,
      viewabilityConfig: {
        itemVisiblePercentThreshold: 60, // Adjust as needed
        minimumViewTime: 100, // Adjust as needed
      },
    },
  ]);

  React.useEffect(() =>{
    if(songs.tracks?.length > 0 )
     isExist(songs.tracks[songs.index]?.name,songs.tracks[songs.index]?.artistName)

  },[songs])


  return (
    <>
    {
      trackPlayerSongs &&
      <View style={{position:'relative',height:deviceHeight,width:deviceWidth}}>

      <View >
        <FlatList
        style={styles.songList}
        showsHorizontalScrollIndicator={false}
        ref={listRef}
        extraData={trackPlayerSongs}
        getItemLayout={(data, index) => (
          {length: deviceWidth, offset: deviceWidth * index, index}
        )}
        data={songs.tracks}
        horizontal={true}
        pagingEnabled={true}
        viewabilityConfigCallbackPairs={
          viewabilityConfigCallbackPairs.current
        }
       
        renderItem={({ item }) =>(
          <View  style={styles.container}>
            
            <FastImage  
            style={styles.songImage}
            source={{
              uri:item?.image,
              cache:FastImage.cacheControl.immutable
            }}
            />
           
          </View>
        )}
        
        
        />
        </View>
            <View style={{alignSelf:'center',zIndex:400,position:'absolute',bottom:340,alignItems:'center',maxWidth:320}} >
              <TextTicker 
              style={styles.songNameText}
              duration={7000} // Duration of the scroll animation in milliseconds
              bounce
              loop
              >{songs.tracks && songs.tracks[songs.index]?.name}</TextTicker>
            </View>
            <View style={{alignSelf:'center',zIndex:400,position:'absolute',bottom:300,alignItems:'center'}}>
              <Text style={styles.artistNameText}>{songs.tracks && songs.tracks[songs.index]?.artistName}</Text>
            </View>
    
            <View style={styles.timing}>
            <Slider 
              style={{width:"80%",height:20,marginTop:30,}}
              thumbStyle={{ height: 10, width: 10 ,backgroundColor:'#fff'}}
              minimumTrackTintColor='#467be3'
                minimumValue={0}
                maximumValue={songs[trackPlayerSongs.index]?.time}
                value={0}
                allowTouchTrack={true}
                onValueChange={(value)=>{
                }}
              />
              
    
              <View style={[styles.songDurations]}>
                <Text style={styles.timeText}>{0}</Text>
                <Text style={styles.timeText}>{songs.tracks && songs.tracks[songs.index]?.time}</Text>
    
              </View>
    
            </View>
    
            <View style={[styles.songOptions,{alignSelf:'center',zIndex:400,position:'absolute',bottom:120,alignItems:'center'}]}>
    
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
    
              <TouchableOpacity >
                <NextIcon  width={20} height={20} />
              </TouchableOpacity>
              
            </View>
            </View>
              }
        </>
  )
              
}


export default React.memo(Song)