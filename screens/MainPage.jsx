import { View, Text, ScrollView, Image, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNFS, {DownloadDirectoryPath} from 'react-native-fs';

import React from 'react';
import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';
import JohnWick from '../assets/John-wick.jpg';

//Styles
import styles from '../styles/homeStyles';

//Icons
import SettingsIcon from '../assets/SettingsIcon';

//Componenets
import TopSong from '../components/TopSong';
import LoadingSong from '../components/LoadingSong';
import TopArtist from '../components/TopArtist';
import Recommendations from '../components/Recommendations';
const MainPage = ({ navigation }) => {

  global.PLAYING_SONG = '';
  global.GLOBAL_SONG_NAME = '';

  const isExist = async(artistName,songName) =>{
    const fileUrl = `${DownloadDirectoryPath}/${artistName} - ${songName}.mp3`
    const exist = await RNFS.exists(fileUrl);
    return exist;
  }
  

  //States
  const [topSongs,setTopSongs] = React.useState([]);
  const [topArtist,setTopArtist] = React.useState([]);
  const [recommendations,setRecommendations] = React.useState([]);

  const [name,setName] = React.useState('');

  const getData = async() =>{
    const { data } = await axios.get('http://localhost:8000/spotify-api/top-songs');
    let songsInfo = [];

    data.songs.map(async(song,index) =>{

      const newSong = {
        id:song.track.id,
        name:song.track.name,
        artistName:song.track.album.artists[0].name,
        artistId:song.track.album.artists[0].id,
        image:song.track.album.images[0].url,
        time:song.track.duration_ms,
        index:index,
        exist:await isExist(song.track.album.artists[0].name,song.track.name)
      }

      songsInfo.push(newSong)

    })

    setTopSongs(songsInfo)

   }

   const getName = async() =>{
    try {
      const user = await AsyncStorage.getItem('user');
      const userName = JSON.parse(user).firstname
      setName(userName)
    } catch (error) {
    }
    
   }

   const getTopArtist = async() =>{
    const artist = await axios.get('http://localhost:8000/spotify-api/top-artist');
    setTopArtist(artist.data)
   }

   const getRecommendations = async () =>{
    const artists = await axios.get('http://localhost:8000/spotify-api/recommendations');
    setRecommendations(artists.data)
   }

   React.useEffect(() =>{
    getData();
    getName();
    getTopArtist();
    getRecommendations();

    
  
   },[0])

   const updateTopSongs = (songId) =>{
    setTopSongs((prevSongs) =>{
      return prevSongs.map((song) =>{
        return song.index === songId ? {...song,exist:true} : song
      })
    })
   }
   

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <LinearGradient 
      colors={['#023166','#000000']}
      style={styles.linear}
      locations={[0,0.6]}
      >
      </LinearGradient>
      
      <View style={styles.header}>

        <View style={styles.welcome}>
          <Text style={styles.welcomeText}>Hey {name} ,</Text>
          <Text style={styles.timeWelcome}>Good evening</Text>
        </View>

        <View style={styles.settingContainer}>
          <View style={styles.settingsIconContainer}>
            <SettingsIcon style={styles.settingsIcon} width={36} height={36}/>
          </View>
          <Image  style={styles.profileImage} source={JohnWick} />
        </View>

      </View>

      <View style={styles.topSongs}>
          <Text style={styles.topText}>Popular This week</Text>

          { topSongs.length > 0 ?
            <FlatList
            style={styles.topSongsList}
            horizontal={true}
            data={topSongs}
            renderItem={({ item,index }) => (
              <TopSong 
              updateTopSongs={updateTopSongs}
              allSongs={topSongs}
              index={index}
              navigation={navigation}
              song={item} />
            )}
            ItemSeparatorComponent={()=> <View style={{width:13}}></View>}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 30,paddingLeft:5 }}
            />:


            <FlatList
            style={styles.topSongsList}
            horizontal={true}
            data={[1,2,3,4]}
            renderItem={({ item }) => (
              <LoadingSong song={item} />
            )}
            ItemSeparatorComponent={()=> <View style={{width:20}}></View>}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 20 }}
            />

          }
          

      </View>


      <View style={styles.recommendationsContainer}>
          
        <Text style={styles.topArtistText}>Artists you might like </Text>

        <FlatList
          style={styles.topSongsList}
          horizontal={true}
          data={recommendations}
          renderItem={({ item, }) =>(
            <Recommendations  artist={item} />
          )}
          keyExtractor={(item, index) => index}
          ItemSeparatorComponent={()=> <View style={{width:20}}></View>}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingRight: 40,paddingLeft:5 }}
          />


      </View>


      <View style={styles.topArtistContainer}>

          
          <Text style={styles.topArtistText}>Most listened to artists</Text>

          <FlatList
          style={styles.topSongsList}
          horizontal={true}
          data={topArtist}
          renderItem={({ item }) =>(
            <TopArtist artist={item} />
          )}
          ItemSeparatorComponent={()=> <View style={{width:30}}></View>}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingRight: 40,paddingLeft:10 }}
          />

      </View>

    </ScrollView>
  )
}

export default MainPage