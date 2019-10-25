
// Cheatsheet for react native - React Navigation 
// You will see the error, it's no problem cause module not installed, you can install yourself
import * as React from 'react'

//Import rn module

import { 
    NavigationScreenOptions, 
    NavigationScreenProps, 
    NavigationScreeenComponent, 
    NavigationScreenProp } from 'react-navigation'

interface NavInterfave extends NavigationScreenProps{
    navigation: NavigationScreenProp<any, any> //should be two params
}

//Define component with NavigationScreeenComponent (must)
const Component:NavigationScreeenComponent<NavInterfave> = ({ navigation }) => {
    const clickFunction = () => navigation.navigate('Screen Param')

    return <>{/* your compoenent here */  }</>
}

Component.navigationOptions = {
    swipeEnabled: false,
    //nav option here
} as NavigationScreenOptions // using alias for autocomplete navigation option properties

export default Component