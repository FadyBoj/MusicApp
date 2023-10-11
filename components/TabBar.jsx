import { View, Text, TouchableOpacity, Animated } from 'react-native'
import React from 'react'

//Styles
import styles  from '../styles/tabBarStyles';

//Icons
import HomeIcon from '../assets/Home';
import SearchIcon from '../assets/SearchIcon';
import LibraryIcon from '../assets/LibraryIcon';
const TabBar = ({state, descriptors, navigation, tabBarVisible}) => {

  const downAnim = React.useRef(new Animated.Value(0)).current
  
  const goDown = () =>{
    Animated.timing(
      downAnim,{
        toValue:50,
        duration:500,
        useNativeDriver:true
      }
    ).start()
  }

  const goUp = () =>{
    Animated.timing(
      downAnim,{
        toValue:0,
        duration:500,
        useNativeDriver:true
      }
    ).start()
  }


  React.useEffect(() =>{


    if(tabBarVisible)
    {
      goUp();
    }
    else{
      goDown();
    }

  },[tabBarVisible])

  return (
    <Animated.View style={[styles.container,{transform:[{translateY:downAnim}]}]}>

      {
        state.routes.map((route,index) =>{
            const { options } = descriptors[route.key];
            const label = route.name;
            const isActive = state.index === index ;

            const tabIcons = [
                <HomeIcon active={isActive ? true : false} width={24} height={24} />,
                <SearchIcon active={isActive ? true : false} width={24} height={24}/>,
                <LibraryIcon active={isActive ? true : false}  width={24} height={24} />
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

        
    </Animated.View>
  )
}

export default TabBar