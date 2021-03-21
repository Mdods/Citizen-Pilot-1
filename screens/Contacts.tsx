import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducer';
import ContactItems from '../components/ContactComponents/ContactItems';

const Contacts = () => {
  return (
    <View>
      <View>
        <Text>City Contacts</Text>
      </View>
      <View>
        <FlatList
          data={allContacts}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <ContactItems
              title={item.title}
              phoneNumber={item.phoneNumber}
              email={item.email}
              img={item.img}
            />
          )

          }
        />
      </View>
      {/* Add navigation to the bottom of the screen */}
    </View>
  );
};

export default Contacts;

const styles = StyleSheet.create({});
