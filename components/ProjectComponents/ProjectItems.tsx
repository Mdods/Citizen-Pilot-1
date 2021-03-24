import React, { useState } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Image,
  ScrollView,
} from 'react-native';
import { Button, Avatar } from 'react-native-paper';
import Modal from 'react-native-modal';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

interface ProjectItemsInterface {
  title: string;
  description: string;
  location: string;
  projectedCompletion: string;
  img: string;
}

const ProjectItems: React.FC<ProjectItemsInterface> = ({
  title,
  description,
  location,
  projectedCompletion,
  img,
}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  // needed number without % for progress bar
  let projectProgress = +projectedCompletion.slice(0, -1);

  return (
    <View>
      <TouchableOpacity onPress={toggleModal}>
        <View style={styles.container}>
          <View>
            <Image
              style={styles.banner}
              source={require('../../assets/images/banner.png')}
            />
          </View>
          <View style={styles.secondColumn}>
            <View style={{ marginBottom: 15 }}>
              <Text style={styles.title}>{title}</Text>
            </View>
            <View>
              <Text style={styles.location}>Location: {location}</Text>
            </View>
            <AnimatedCircularProgress
              style={styles.progress__container}
              size={40}
              width={10}
              fill={projectProgress}
              tintColor="#5ba4fc"
              backgroundColor="#3A4276">
              {
                (fill) => (
                  <Text style={{ fontSize: 9 }}>
                    { projectedCompletion}
                  </Text>
                )
              }
            </AnimatedCircularProgress>
          </View>
        </View>
      </TouchableOpacity>


      <Modal isVisible={isModalVisible}>
        <ScrollView style={styles.modal__container}>
          <View style={styles.modal__information__container}>
            <Avatar.Image size={120} source={{ uri: img }} />
            <Text style={styles.modal__title}>{title}</Text>
          </View>

          <View style={styles.modal__textcontainer}>
            <Text style={styles.modal__headers}>Where is the project located? </Text>
            <Text>{location}</Text>
          </View>

          <View style={styles.modal__textcontainer}>
            <Text style={styles.modal__headers}>What is being implemented? </Text>
            <Text>{description}</Text>
          </View>

          <View style={styles.modal__textcontainer}>
            <Text style={styles.modal__headers}>For more information, visit: </Text>
            <Text>www.somelink.com</Text>
          </View>

          <Button style={{ alignSelf: 'flex-end', marginTop: '40%' }} onPress={toggleModal}>close</Button>
        </ScrollView>
      </Modal>
    </View>
  );
};

export default ProjectItems;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  secondColumn: {
    justifyContent: 'space-around',
    marginTop: 10,
    paddingRight: 4,
    marginLeft: '8%',
    width: '75%',
    height: '90%',
  },
  banner: {
    borderBottomLeftRadius: 15,
    borderTopLeftRadius: 15,
    height: 100,
    width: 50,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  location: {
    fontSize: 12,
    fontStyle: 'italic',
  },
  progress__container: {
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
  },
  progress: {
    marginTop: 5,
  },
  modal__container: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  image: {
    height: 200,
    width: 200,
  },
  modal__information__container: {
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: 10,
    flexWrap: 'wrap',
  },
  modal__title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  modal__textcontainer: {
    marginTop: 30,
  },
  modal__headers: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  modal__vote: {
    marginTop: '20%',
    alignItems: 'center'
  },
});
