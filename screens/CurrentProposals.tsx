import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Title } from 'native-base';
import CurrentProposalInput from '../components/Proposals/currentProposalItem'
import { currentProposal } from '../store/mock';


function CurrentProposalScreen() {
  return (
    <Container>
      <Header />
      <Content>
        <Card style={{ flex: 0 }}>
          <CardItem>
            <Left>
              <Thumbnail source={{ uri: 'Image URL' }} />
                <Body data={currentProposal} keyExtractor={item => item.id} renderItem={({ item }) => (
            			<CurrentProposalInput title={item.title} />
          			)} />
            </Left>
          </CardItem> 
          <CardItem>
            <Body data={currentProposal} keyExtractor={item => item.id} renderItem={({ item }) => (
							<CurrentProposalInput title={item.description} /> 
							)} />         
            
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent textStyle={{ color: '#87838B' }}>
                <CurrentProposalInput title={item.votes} />
              </Button>
            </Left>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
}
export default CurrentProposalScreen;
