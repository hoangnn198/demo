import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "10",
      password: "5",
      number: 0,
      Array: [1, 2, 4]
    };
  }

  Sum = () => {
    let sum = 0
    for (let item of this.state.Array) {
      sum += item
    }
    console.log(sum)
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <View
          style={{
            height: 100,
            width: 200,
            backgroundColor: 'red',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 20,

            }}
          >
            Logo FPT
          </Text>
        </View>
        <Text
          style={{
            color: "blue",
            fontSize: 20,
            fontWeight: '700',
            marginTop: 10,
          }}
        >
          FIS INSIGHT PORTAL
        </Text>
        <View
          style={{
            // backgroundColor: "gray",
            flexDirection: 'row',
            width: '90%',
            alignItems: 'center',
            marginTop: 10,
            borderWidth: 1,
            borderRadius: 10,
          }}
        >
          <View
            style={{
              height: 30,
              width: "10%",
              backgroundColor: 'yellow',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Image
              source={require('./src/res/image/ic_close.png')}
              style={{
                height: 20,
                width: 20,
                tintColor: '#000000'
              }}
            />
          </View>
          <TextInput
            placeholder='Username'
            style={{
              // backgroundColor: 'green',
              width: '90%'
            }}
            onChangeText={(text) => {
              this.setState({ username: text })
            }}
          />
        </View>
        <View
          style={{
            // backgroundColor: "gray",
            flexDirection: 'row',
            width: '90%',
            alignItems: 'center',
            marginTop: 10,
            borderWidth: 1,
            borderRadius: 10,
          }}
        >
          <View
            style={{
              height: 30,
              width: "10%",
              backgroundColor: 'yellow',
            }}
          >

          </View>
          <TextInput
            placeholder='Password'
            style={{
              // backgroundColor: 'green',
              width: '90%'
            }}
            onChangeText={(text) => {
              this.setState({ password: text })
            }}
          />
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "blue",
            width: '90%',
            marginTop: 10,
            padding: 10,
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onPress={() => {
            this.Sum()
          }}
        >
          <Text>
            Đăng nhập
          </Text>
        </TouchableOpacity>

      </View>
    );
  }
}
