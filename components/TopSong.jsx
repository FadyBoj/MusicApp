import { View, Text, Image } from 'react-native'
import React from 'react'
import axios from 'axios';
//Styles
import styles from '../styles/homeStyles'

const TopSong = ({ song }) => {

    const [imageUrl,setImageUrl] = React.useState('');
    
    const getSongData = async() =>{
        const { data } = await axios.get(`http://localhost:8000/spotify-api/get-song?id=${song.id}`)

        setImageUrl(data.album.images[0].url)
    }

    React.useEffect(() =>{
        getSongData();
    },[0])

  return (
    <View style={styles.topSong}>
        { imageUrl &&
     <Image style={styles.topSongImage}
     source={{uri:imageUrl}}
     />
        }
    </View>
  )
}

export default TopSong