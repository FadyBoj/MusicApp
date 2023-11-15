import { View, Text, TouchableOpacity, Animated, Dimensions } from 'react-native'
import React from 'react'

//Styles
import styles  from '../styles/tabBarStyles';

//Icons
import HomeIcon from '../assets/Home';
import SearchIcon from '../assets/SearchIcon';
import LibraryIcon from '../assets/LibraryIcon';

//Components
import Song from '../screens/Song';


const TabBar = ({state, descriptors, navigation, tabBarVisible, trackPlayerSongs, playListIndex}) => {

  const deviceWidth = Dimensions.get('window').width;
  const deviceHeight = Dimensions.get('window').height;

  const downAnim = React.useRef(new Animated.Value(0)).current
  const trackAnim = React.useRef(new Animated.Value(0)).current

  const goDown = () =>{
    Animated.spring(
      downAnim,{
        toValue:50,
        duration:1,
        useNativeDriver:true
      }
    ).start()
  }

  const goUp = () =>{
    Animated.spring(
      downAnim,{
        toValue:0,
        duration:1,
        useNativeDriver:true
      }
    ).start()
  }

  const trackPlayerDown = () =>{
    Animated.timing(
      trackAnim,{
        toValue:deviceHeight,
        duration:200,
        useNativeDriver:true
      }
    ).start()
  }

  const trackPlayerUp = () =>{
    Animated.timing(
      trackAnim,{
        toValue:0,
        duration:340,
        useNativeDriver:true
      }
    ).start()
  }


  React.useEffect(() =>{


    if(tabBarVisible)
    {
      goUp();
      trackPlayerDown()
    }
    else{
      goDown();
      trackPlayerUp()
    }

  },[tabBarVisible])

  return (
    <View style={{position:'relative'}}>

    <Animated.View style={[styles.trackPlayer,{translateY:trackAnim}]}>
      <Song trackPlayerSongs={trackPlayerSongs} />  
    </Animated.View>

    <Animated.View style={[styles.container,{translateY:downAnim}]}>

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
    </View>
  )
}

export default TabBar