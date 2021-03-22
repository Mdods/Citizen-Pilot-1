import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducer';
import CurrentProposalInput from '../components/Proposals/currentProposalItem';

const CurrentProp = () => {
  const CurrentItem = useSelector((state: RootState) => {
    return state.Proposals.currentProposal;
  });

  return (
    <View>
      <View>
        <Text>Current Proposals test</Text>
      </View>
      <View>
        <FlatList
          data={CurrentItem}
          renderItem={({ item }) => (
            <CurrentProposalInput
              title={item.title}
              description={item.description}
							location={item.location}
							vote={item.votes}
              img={item.img}
            />
          )}
        />
      </View>
		</View>
		  );
};

export default CurrentProp;