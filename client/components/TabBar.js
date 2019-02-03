import React from 'react';
import { StyleSheet, Text, Image, View, Dimensions } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { CardCarousel } from './CardCarousel';
import { RecentlyOrdered } from './RecentlyOrdered';
import { MenuGrid } from './MenuGrid';
import { ScrollView } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
    scene: {
        flex: 1,
    },
    toolbar: {
        backgroundColor: '#307EF6',
        paddingTop: 30,
        paddingBottom: 10,
        flexDirection: 'row'
    },
    toolbarButton: {
        width: 50,            //Step 2
        color: '#fff',
        textAlign: 'center'
    },
    toolbarTitle: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        flex: 1
    },
    recentlyOrdered: {
        flex: 1
    },
    carousel: {
        flex: 1, 
        flexDirection:'row', 
        alignItems:'center', 
        justifyContent:'center' 
    }
});

const activeTabColor = '#307EF6';
const inactiveTabColor = '#A4A4A4';

const FindRoute = () => (
    <View style={[styles.scene, { backgroundColor: '#ffffff' }]} />
);
const MenuRoute = () => (
  <React.Fragment>
      <MenuGrid />
  </React.Fragment>
);
const HomeRoute = () => (
    <React.Fragment>
        <View style={styles.toolbar}><Text style={styles.toolbarTitle}>Example Restaurant</Text></View>
        <View style={styles.carousel}>
            <CardCarousel />
        </View>
        <View style={styles.recentlyOrdered}>
            <RecentlyOrdered />
        </View>
    </React.Fragment>
);
const CartRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#f3f3f3' }]} />
);
const AccountRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);

class TabBarNav extends React.Component {
  state = {
    index: 2,
    routes: [
      { pos: 0, key: 'find', title: 'Find', icon: require('../assets/find.png') },
      { pos: 1, key: 'menu', title: 'Menu', icon: require('../assets/menu.png') },
      { pos: 2, key: 'home', title: 'Home', icon: require('../assets/home.png') },
      { pos: 3, key: 'cart', title: 'Cart', icon: require('../assets/cart.png') },
      { pos: 4, key: 'account', title: 'Account', icon: require('../assets/account.png') },
    ],
  };

  _renderTabBar = props =>
    <TabBar
      style={{backgroundColor: '#F9F9F9', elevation: 0, borderColor: inactiveTabColor, borderTopWidth: 1, height:60}}
      renderIcon={ ({route}) => <Image source={route.icon} style={{tintColor: route.pos == this.state.index ? activeTabColor : inactiveTabColor}} /> }
      renderLabel={ ({route}) => <Text style={{ marginTop: 5, fontSize: 12, fontWeight: 'bold', color: route.pos == this.state.index ?  activeTabColor : inactiveTabColor }} >{route.title}</Text> }
      {...props}
      indicatorStyle={{backgroundColor: activeTabColor, height: 2.5}}
    />

  _tabs = {
    find: FindRoute,
    menu: MenuRoute,
    home: HomeRoute,
    cart: CartRoute,
    account: AccountRoute,
  }

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap(this._tabs)}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ height: 0, width: Dimensions.get('window').width }}
        renderTabBar={this._renderTabBar}
        tabBarPosition={'bottom'}
      />
    );
  }
}

export { TabBarNav };