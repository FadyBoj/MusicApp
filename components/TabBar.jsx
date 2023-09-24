import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

//Styles
import styles  from '../styles/tabBarStyles';

//Icons
import HomeIcon from '../assets/Home';
import SearchIcon from '../assets/SearchIcon';
import LibraryIcon from '../assets/LibraryIcon';
const TabBar = ({state, descriptors, navigation}) => {





  return (
    <View style={styles.container}>

      {
        state.routes.map((route,index) =>{
            const { options } = descriptors[route.key];
            const label = route.name;
            const isActive = state.index === index ;

            const tabIcons = [
                <HomeIcon active={isActive ? true : false} width={30} height={30} />,
                <SearchIcon active={isActive ? true : false} width={30} height={30}/>,
                <LibraryIcon active={isActive ? true : false}  width={30} height={30} />
            ]


            const handlePress = () => {
                const event = navigation.emit({
                  type: 'tabPress',
                  target: route.key,
                  canPreventDefault: true,
                });

      
                if (!isActive && !event.defaultPrevented) {
                  // The `merge: true` option makes sure that the params inside the tab screen are preserved
                  navigation.navigate({ name: route.name, merge: true });
                }
              };

            return (
                <TouchableOpacity key={index} onPress={handlePress} style={styles.tabItem}>
                    {tabIcons[index]}
                    <Text style={[styles.tabText,!isActive ? styles.inActiveText : {}]}>
                        {label}
                    </Text>
                </TouchableOpacity>
            )
        })
      }

        
    </View>
  )
}

export default TabBar