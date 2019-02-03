import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { SectionGrid } from 'react-native-super-grid';

class MenuGrid extends Component {
  render() {
    const items = [
      { name: 'EMPANADA', price: '$1.35', url: 'https://www.laylita.com/recipes/wp-content/uploads/2008/02/Empanada-recipe.jpg' },
      { name: 'MORCILLA', price: '$2.99', url: 'https://dompal.tienda/wp-content/uploads/2016/03/135104.png'},
      { name: 'YUCCA FRITA', price: '$4.45', url: 'https://i.pinimg.com/originals/e2/73/24/e27324709c0e7ab1152bde2224d5c3ae.jpg'},
      { name: 'CHICHARRON', price: '$4.24', url: 'https://www.mycolombianrecipes.com/wp-content/uploads/2009/08/receta-de-chicharron-.jpg' },
      { name: 'PATACONES CON HOGAO', price: '$4.99', url: 'https://www.seriouseats.com/recipes/images/2012/05/20120501-colombian-patacones-con-guiso-hogao-11.jpg' },
      { name: 'AREPA CON QUESO', price: '$3.85', url: 'http://farm9.staticflickr.com/8070/8249304530_4d87135147_c.jpg' },
      { name: 'CARNE ENCEBOLLADA', price: '$15.75', url: 'https://media-cdn.tripadvisor.com/media/photo-s/05/b4/93/43/carne-encebollada-fried.jpg' },
      { name: 'SOBREBARRIGA A LA CRIOLLA', price: '$13.95', url: 'https://antojandoando.com/wp-content/uploads/2015/09/sobsalsa-feat-pq.jpg' },
      { name: 'WISTERIA', code: '#8e44ad' },
      { name: 'MIDNIGHT BLUE', code: '#2c3e50' },
      { name: 'SUN FLOWER', code: '#f1c40f' },
      { name: 'CARROT', code: '#e67e22' },
      { name: 'ALIZARIN', code: '#e74c3c' },
      { name: 'CLOUDS', code: '#ecf0f1' },
      { name: 'CONCRETE', code: '#95a5a6' },
      { name: 'ORANGE', code: '#f39c12' },
      { name: 'PUMPKIN', code: '#d35400' },
      { name: 'POMEGRANATE', code: '#c0392b' },
      { name: 'SILVER', code: '#bdc3c7' },
      { name: 'ASBESTOS', code: '#7f8c8d' },
    ];

    return (
      <SectionGrid
        itemDimension={150}
        // staticDimension={300}
        // fixed
        // spacing={20}
        sections={[
          {
            title: 'Appetizers',
            data: items.slice(0, 6),
          },
          {
            title: 'Entrees',
            data: items.slice(6, 12),
          },
          {
            title: 'Deserts',
            data: items.slice(12, 20),
          },
        ]}
        style={styles.gridView}
        renderItem={({ item, section, index }) => (
          <View style={[styles.itemContainer, { backgroundColor: '#eff1f4' }]}>
            <Image style={{flex: 1, resizeMode: 'center'}} source={{uri: item.url}} />
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemCode}>{item.price}</Text>
          </View>
        )}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  gridView: {
    marginTop: 20,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: '#000',
    fontWeight: '600',
    textShadowColor: 'rgba(0, 0, 0, 0.75)'
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#000',
    textShadowColor: 'rgba(0, 0, 0, 0.75)'
  },
  sectionHeader: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
    alignItems: 'center',
    backgroundColor: '#636e72',
    color: 'white',
    padding: 10,
  },
});

export { MenuGrid };