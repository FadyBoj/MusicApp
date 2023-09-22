import { View, Text } from 'react-native'
import React from 'react'

//Styles
import styles  from '../styles/tabBarStyles';

//Icons
import HomeIcon from '../assets/Home';
import SearchIcon from '../assets/SearchIcon';
import LibraryIcon from '../assets/LibraryIcon';
const TabBar = ({navigation}) => {

    const [activeTab,setActiveTab] = React.useState(2);


  return (
    <View style={styles.container}>

        <View style={styles.tabItem}>
            <HomeIcon active={activeTab === 0 ? true : false} width={30} height={30} />
            <Text 
            style={[styles.tabText,activeTab === 0 ? {} : styles.inActiveText]}
            >Home</Text>
        </View>

        <View style={styles.tabItem}> 
            <SearchIcon active={activeTab === 1 ? true : false} width={30} height={30} />
            <Text
            style={[styles.tabText,activeTab === 1 ? {} : styles.inActiveText]}
            >
                Search</Text>
        </View>

        <View style={styles.tabItem}>
            <LibraryIcon active={activeTab === 2 ? true : false} width={30} height={30} />
            <Text 
            style={[styles.tabText,activeTab === 2 ? {} : styles.inActiveText]}
            >
                Library</Text>
        </View>

        
    </View>
  )
}

export default TabBar