import { View, Text, ScrollView, Image, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import React from 'react';
import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';
import JohnWick from '../assets/John-wick.jpg'
//Styles
import styles from '../styles/homeStyles';

//Icons
import SettingsIcon from '../assets/SettingsIcon';

//Componenets
import TopSong from '../components/TopSong';
import LoadingSong from '../components/LoadingSong';

const MainPage = () => {

  //States
  const [topSongs,setTopSongs] = React.useState([]);
  const [topArtist,setTopArtist] = React.useState([]);

  const [name,setName] = React.useState('');

  const getData = async() =>{
    const { data } = await axios.get('http://localhost:8000/spotify-api/top-songs');
    let songsInfo = [];

    data.songs.map((song) =>{

      const newSong = {
        id:song.track.id,
        name:song.track.name,
        artistName:song.track.album.artists[0].name,
        artistId:song.track.album.artists[0].id,
        image:song.track.album.images[1].url
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

   React.useEffect(() =>{
    getData();
    getName();
    getTopArtist();
   },[0])

  

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <LinearGradient 
      colors={['#23377c','#000000']}
      style={styles.linear}
      locations={[0,0.6]}
      >
      </LinearGradient>
      
      <View style={styles.header}>

        <View style={styles.welcome}>
          <Text style={styles.welcomeText}>Hey {name}</Text>
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
            renderItem={({ item }) => (
              <TopSong song={item} />
            )}
            ItemSeparatorComponent={()=> <View style={{width:20}}></View>}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 40 }}
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


      <View style={styles.topArtistContainer}>
      
        <Text style={styles.topArtistText}>Artist of the week</Text>
          { topArtist.image &&
          <View style={{width:'100%',alignItems:'center',position:'relative',justifyContent:'center',height:400}}>
            <View style={styles.topArtistBrightness}></View>
            <View style={{width:'100%',alignItems:'center',position:'relative',justifyContent:'center',height:400}}>
              <Image 
              style={styles.topArtistImage}
              source={{
                uri:topArtist.image
              }}
              />
            </View>
          </View>
          }
      </View>

    </ScrollView>
  )
}

export default MainPage