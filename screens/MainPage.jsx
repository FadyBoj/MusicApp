import { View, Text, ScrollView, Image, FlatList } from 'react-native'
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

const MainPage = () => {

  //States
  const [topSongs,setTopSongs] = React.useState([]);


  const getData = async() =>{
    const { data } = await axios.get('http://localhost:8000/spotify-api/top-songs');
    let songsInfo = [];

    data.songs.map((song) =>{

      const newSong = {
        id:song.track.id,
        name:song.track.name,
        artistName:song.track.album.artists[0].name,
        artistId:song.track.album.artists[0].id
      }

      songsInfo.push(newSong)

    })

    setTopSongs(songsInfo)

   }


   React.useEffect(() =>{
    getData()
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
          <Text style={styles.welcomeText}>Hey john</Text>
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

          <FlatList
          style={styles.topSongsList}
          horizontal={true}
          data={topSongs}
          renderItem={({ item }) => (
            <TopSong song={item} />
          )}
          ItemSeparatorComponent={()=> <View style={{width:20}}></View>}
          showsHorizontalScrollIndicator={false}
          />

      </View>

    </ScrollView>
  )
}

export default MainPage