<h1>custom header</h1>
<img src="https://iili.io/HL1Kjdg.png" width="400px"/>

<p>a custom header component added to shared folder</p>

``` javascript
export default function Header({navigation,title}){
    return(
        <ImageBackground source={require("../assets/game_bg.png")}>
            <View style={styles.header}>
                <Icon style={styles.icon} name="bars" size={35} color="#ba00e5" onPress={() => navigation.openDrawer()}/>
                <View style={styles.headerTitle}>
                    <Image source={require("../assets/bytes-logo.png")} style={styles.headerImage}/>
                    <Text style={styles.txt}>{title}</Text>
                </View>
            </View>
        </ImageBackground>
    )
}
```

<p>import the header component to the drawer.js in route folder</p>

``` javascript

    <NavigationContainer>
        <Drawer.Navigator useLegacyImplementation screenOptions={{drawerIcon:() => <Icon name="exclamationcircle" size={20} color="white" />,drawerStyle:{backgroundColor:color},drawerActiveTintColor:"white",drawerInactiveTintColor:"silver"}}>
          <Drawer.Screen name="Home" component={HomeStack} options={({navigation}) => {return{header:() => <Header navigation={navigation} title={"home header"}/>}}} />
          <Drawer.Screen name="About" component={AboutStack} options={({navigation}) => {return{header:() => <Header navigation={navigation} title={"about header"}/>}}}/>
        </Drawer.Navigator>
    </NavigationContainer>

```
