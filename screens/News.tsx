/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { Provider } from 'react-native-paper';
import { useSelector } from 'react-redux';
import Modal from 'react-native-modal';
import { RootState } from '../store/reducer';
import newsInterface from '../interfaces/newsInterface';
import HorizontalBannerComponent from '../components/HorizontalBannerComponent';
import IconComponent from '../components/NewsComponents/IconComponent';
import { FontAwesome } from '@expo/vector-icons';
import SortByCategory from '../components/NewsComponents/SortByCategory';
import { Button, Divider, Card, Title, Paragraph } from 'react-native-paper';


const modalInitalState = {
  id: '1',
  title: 'News Title',
  category: 'Category',
  shortDescription: 'Description',
  longDescription: 'Description',
  location: 'In the city',
  img: 'img',
  date: 'date',
};

const News = () => {
  const [modalInfo, setModalInfo] = useState<newsInterface>(modalInitalState);
  const [isModalVisible, setModalVisible] = useState(false);
  const allNews = useSelector((state: RootState) => {
    return state.newsData.news;
  });

  const [selectedNews, setSelectedNews] = useState(allNews);


  const sortCategory = (categoryName: string) => {
    if (categoryName === 'All') {
      return setSelectedNews(allNews);
    }
    const chosenNews = allNews.filter(newsItem => newsItem.category.indexOf(categoryName) !== -1)
    if (chosenNews.length === 0) return;
    setSelectedNews(chosenNews);
  }

  return (
    <Provider >
      <HorizontalBannerComponent />
      <View style={styles.header__container}>
        <FontAwesome name="newspaper-o" size={35} color="#3A4276" />
        <Text style={styles.header__text}>News</Text>
      </View>

      <SortByCategory sortCategory={sortCategory} />

      <FlatList
        style={styles.flatlist__container}
        data={selectedNews}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (


          <TouchableOpacity onPress={() => {
            setModalInfo(item);
            setModalVisible(true);
          }}>
            <View style={styles.container}>
              <IconComponent category={item.category} />
              <View style={styles.secondColumn}>
                <View style={styles.textBox}>
                  <Text style={styles.title}>{item.title}</Text>
                </View>
                <View style={styles.textBox}>
                  <Text style={styles.description}>{item.shortDescription}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalView}>
          {/* how do I make Paragraph scrollable? if there is too much text, it will spill over card*/}
          <Card style={{ width: '110%', height: 490 }}>
            <Card.Content>
              <Card.Cover style={styles.cardCover} source={{ uri: modalInfo.img }} />
              <Title style={{ marginTop: 7 }}>{modalInfo.title}</Title>
              <Divider />
              <Paragraph style={{ marginTop: 10 }}>{modalInfo.longDescription}</Paragraph>
            </Card.Content>
          </Card>
          <Button style={styles.button} icon="newspaper-variant-outline" mode="contained" onPress={() => console.log('navigation.navigate')}>
            More
          </Button>
        </View>
      </Modal>

    </Provider>
  );
};



const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    height: 100,
    paddingBottom: 12,
    borderRadius: 15,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 2,
    shadowRadius: 1,
    elevation: 3,
  },
  banner: {
    borderBottomLeftRadius: 15,
    borderTopLeftRadius: 15,
    height: 100,
    width: 50,
  },
  cardCover: {
    borderRadius: 12,
    height: 220,
  },
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    height: 45,
    width: '40%',
    borderRadius: 15,
    marginTop: 20,
  },

  flatlist__container: {
    paddingHorizontal: 25,
  },
  secondColumn: {
    justifyContent: 'center',

    marginTop: 10,
    paddingRight: 4,
    marginLeft: '8%',
    width: '75%',
    height: '90%',
  },
  progress__container: {
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
  },
  textBox: {
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 12,
  },
  newsContainer: {
    height: 55,
    width: 250,
    backgroundColor: 'red',
    borderRadius: 10,
    marginBottom: 10,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  newsText: {
    fontSize: 20,
    marginLeft: 10,
  },
  modalView: {
    height: 610,
    width: 350,
    margin: 20,
    backgroundColor: '#F0F5F9',
    borderRadius: 20,
    padding: 30,
    alignSelf: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  header__container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginRight: 25,
    marginLeft: 25,
    marginBottom: 15,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 5,
  },
  header__text: {
    alignSelf: 'center',
    marginLeft: 10,
    fontSize: 25,
    fontWeight: 'bold',
  }
});
export default News;
