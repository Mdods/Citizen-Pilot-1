import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';



function CurrentProposalCard() {
  return (
    <Container>
      <Header />
      <Content>
        <Card style={{ flex: 0 }}>
          <CardItem>
            <Left>
              <Thumbnail source={{ uri: 'Image URL' }} />
              <Body>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Body>
              <Image source={{ uri: 'Image URL' }} style={{ height: 200, width: 200, flex: 1 }} />
              <Text>
                  description
              </Text>
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent textStyle={{ color: '#87838B' }}>
                <Text>vote space</Text>
              </Button>
            </Left>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
}
export default CurrentProposalCard;
