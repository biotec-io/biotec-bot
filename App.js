/* eslint camelcase: 0 */
import React, { Component } from 'react';
import { StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Header } from 'react-native-elements';
import { GiftedChat } from 'react-native-gifted-chat';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
    };
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }

  UNSAFE_componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hola, ¿en qué puedo ayudarte?',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://s3.us-east-2.amazonaws.com/biotec-io/robot.png',
          },
        },
      ],
    });
  }

  render() {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
      >
        <Header
          backgroundColor="#233978"
          centerComponent={{ text: 'BiotecBot', style: { color: '#fff' } }}
        />

        <GiftedChat
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: 1,
          }}
        />
      </KeyboardAvoidingView>
    );
  }
}

export default App;
