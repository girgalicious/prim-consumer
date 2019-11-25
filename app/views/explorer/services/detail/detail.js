import React, { Component } from 'react';
import { ActivityIndicator, SafeAreaView, ScrollView, Dimensions, StyleSheet, Text, View, ImageBackground, FlatList, TextInput } from 'react-native';
import { connect } from 'react-redux';
import StarRating from 'react-native-star-rating';
import { Image, CheckBox, ListItem, Button, Avatar, Icon, withTheme, Divider, Rating } from 'react-native-elements';
import { updateShowCartButton, addToCart, incrementCartTotal } from "../../../../actions/global";
import Counter from "../../../../components/counter/counter";
import haircut from '../../../../assets/images/haircut.png';
import haircut_2 from '../../../../assets/images/haircut_2.png';
import haircut_3 from '../../../../assets/images/haircut_3.png';
import bessie from '../../../../assets/images/bessie.png';
import wendy from '../../../../assets/images/wendy.png';
import morris from '../../../../assets/images/morris.png';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    button: {
      width: DEVICE_WIDTH - 80,
      padding: 10
    }
})

const list = [
  {
    title: 'Womans haircut',
    price: "$50-$150",
    showDivider: true
  },
  {
    title: 'Mens haircut',
    price: '$50-$80',
    showDivider: true
  },
  {
    title: 'Kids haircut',
    price: '$100-$200',
    showDivider: true
  },
  {
    title: 'Styling',
    price: '$120-$180',
    showDivider: true
  },
  {
    title: 'Coloring',
    price: '$250-$300',
    showDivider: false
  }
]

const photos = [
  haircut,
  haircut_2,
  haircut_3
]

class ServiceDetail extends Component {
  state = {
    clients: 1,
    items: [
      {title: 'Shampoo', description: 'Some description here. What this add service is include.', price: '$5', checked: false},
      {title: 'Shampoo & Basic Style', description: 'Some description here. What this add service is include.', price: '$20', checked: false},
      {title: 'Shampoo & Full Style', description: 'Some description here. What this add service is include.', price: '$30', checked: false}
    ]
  }
  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }

  componentDidMount() {
    this.props.navigation.setParams({
      leftPage: 'ProviderDetail',
      rightPage: '',
      isShownLeftOption: true,
      isShownRightOption: false,
      isRightOptionAsForm: false,
    });
  }

  componentWillReceiveProps() {
  };

  checkItem = (index) => {
    this.setState(previousState => {
      var items = Object.assign([], this.state.items);
      items[index].checked = !items[index].checked;
      return {
        ...previousState,
        items
      }
    })
  }

  addToCart = () => {
    this.props.updateShowCartButton(true);
    this.props.addToCart({id: 1, title: "Men's Haircut", price: '$50'})
    this.props.incrementCartTotal(50 * this.state.clients);
    this.props.navigation.navigate('ProviderDetail');
  }

  onNumberOfClientsChange = (number, type) => {
    this.setState(previousState => {
      return {
        ...previousState,
        clients: number
      }
    })
}

render(){
const { theme, updateTheme, replaceTheme, navigation } = this.props;
const provider = navigation.getParam('provider');
  return (
      <View style={{flex: 1}}>
        <View style={{flex: 1}}>
          <ImageBackground source={haircut} style={{height: "100%", width: "100%"}}>
            <View style={{flex: 1, flexDirection: 'row', marginTop: 60, right: 5, justifyContent: 'flex-end'}}>
              <Icon
                name='heart'
                color='red'
                type='font-awesome'
                onPress={() => console.log('hello')} />
            </View>
            <View>
              <Text style={{marginLeft: 20, fontSize: 20, fontWeight: 'bold', color: 'white'}}>Mens haircut</Text>
            </View>
            <View style={{marginLeft: 20, top: 10, flex: 1, flexDirection: 'row'}}>
                <Text style={{fontSize: 15, color: 'white'}}>$50</Text>
                <View style={{flex: 1, flexDirection: 'row', position: 'absolute', right: 10}}>
                <Icon
                  name='bell'
                  type='font-awesome'
                  color='white'
                  iconStyle={{marginRight: 10}}
                  onPress={() => console.log('hello')} />
                  <Text style={{fontSize: 15, color: 'white'}}>30-45 min</Text>
                </View>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Avatar
              rounded
              size={'medium'}
              containerStyle={{marginLeft: 20}}
              source={bessie}
              />
              <View style={{justifyContent: 'center'}}>
                <Text style={{marginLeft: 15, bottom: 10, fontSize: 15, color: 'white'}}>Bessie Cooper</Text>
              </View>
              <View style={{bottom: 10, marginLeft: 60, justifyContent: 'center'}}>
                          <StarRating
                  disabled={true}
                  maxStars={5}
                  rating={4.3}
                  selectedStar={(rating) => this.onStarRatingPress(rating)}
                  fullStarColor={'white'}
                  starSize={20}
                  />
                </View>
            </View>
          </ImageBackground>
        </View>
        <View style={{flex: 2}}>
          <ScrollView>
            <View style={{padding: 20}}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>About the service</Text>
              <Text style={{fontSize: 14, top: 10, color: '#ABABAB'}}>Our professional stylists will help you find the hairstyle and services that fit into your day and your life, whether it’s a quick trim or a completely new look.</Text>
            </View>
            <View style={{padding: 20}}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>Add ons</Text>
            </View>
            <View>
              <FlatList
              data={this.state.items}
              extraData={this.props}
              renderItem={({item, index}) =>
                <View style={{top: -15}}>
                  <View style={{flex: 1, flexDirection: 'row', width: '90%'}}>
                    <View style={{flex: 1, flexDirection: 'column'}}>
                          <CheckBox
                            checked={item.checked}
                            onPress={() => this.checkItem(index)}
                            containerStyle={{borderColor: 'white', backgroundColor: 'white'}}
                          />
                      </View>
                    <View style={{flex: 3, flexDirection: 'column', top: 17, right: 10}}>
                      <Text style={{marginLeft: 0}}>{item.title}</Text>
                    </View>
                    <View style={{flex: 1, flexDirection: 'column', top: 17}}>
                      <Text style={{marginLeft: 0}}>+{item.price}</Text>
                    </View>
                  </View>
                  <View style={{flex: 1, flexDirection: 'row', width: '90%'}}>
                    <Text style={{marginLeft: 58, top: -10, color: '#ABABAB'}}>{item.description}</Text>
                  </View>
                </View>
              }
              />
            </View>
            <View style={{flex: 1, flexDirection: 'row', padding: 20}}>
              <Text style={{fontSize: 15, fontWeight: 'bold'}}>How many clients?</Text>
              <Counter start={1} onChange={this.onNumberOfClientsChange.bind(this)} />
            </View>
            <View style={{padding: 20}}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>Work gallery</Text>
              <FlatList
                data={photos}
                renderItem={({ item }) => (
                  <View style={{padding: 10}}>
                    <Image
                      source={item}
                      style={{height: 100, width: 100}}
                      PlaceholderContent={<ActivityIndicator />}
                    />
                  </View>
                )}
                horizontal={true}
              />
            </View>
            <View style={{padding: 20, flex: 1, flexDirection: 'row'}}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>Reviews</Text>
              <View style={{justifyContent: 'center', position: 'relative', left: 10}}>
                          <StarRating
                  disabled={true}
                  maxStars={5}
                  rating={4.3}
                  selectedStar={(rating) => this.onStarRatingPress(rating)}
                  fullStarColor={'#FEC740'}
                  starSize={20}
                  />
                </View>
            </View>
            <View style={{padding: 20, top: -20, flex: 1, flexDirection: 'row'}}>
              <Text style={{color: '#ABABAB'}}>713 Comments</Text>
            </View>
            <View>
              <FlatList
              data={[
                {avatar: wendy, title: 'Wendy Robertson', comment: 'Best haircut I have ever had!!! She is amazing, definitely will user her sercvice again!', stars: 4.3, last_reply: '7 days ago'},
                {avatar: morris, title: 'Morris Watson', comment: 'Best haircut I have ever had!!! She is amazing, definitely will user her sercvice again!', stars: 5, last_reply: '7 days ago'}
              ]}
              renderItem={({item}) =>
                <View style={{}}>
                  <View style={{flex: 1, flexDirection: 'row', width: '90%'}}>
                    <View style={{flex: 1, flexDirection: 'column'}}>
                      <Avatar
                      rounded
                      size={'medium'}
                      containerStyle={{marginLeft: 20}}
                      source={item.avatar}
                      />
                      </View>
                    <View style={{flex: 3, flexDirection: 'column', top: 17}}>
                      <Text style={{marginLeft: 20}}>{item.title}</Text>
                    </View>
                    <View style={{flex: 1, flexDirection: 'column', top: 17}}>
                              <StarRating
                      disabled={true}
                      maxStars={5}
                      rating={item.stars}
                      fullStarColor={'#FEC740'}
                      starSize={20}
                      />
                    </View>
                  </View>
                  <View style={{flex: 1, flexDirection: 'row', width: '90%'}}>
                    <Text style={{padding: 20, top: -10, color: '#ABABAB'}}>{item.comment}</Text>
                  </View>
                  <View style={{flex: 1, flexDirection: 'row', width: '90%'}}>
                    <Text style={{padding: 20, top: -30, color: '#ABABAB'}}>{item.last_reply}</Text>
                    <Text style={{padding: 20, top: -30}}>Reply</Text>
                  </View>
                </View>
              }
              />
            </View>
            <View style={{alignItems: "center"}}>
              <Button title={"ADD 1 TO CART " + "$50"} style={styles.button} onPress={() => this.addToCart()} />
            </View>
          </ScrollView>
        </View>
      </View>
  );
}
}

function mapStateToProps(state) {
  return {
  };
}

export function mapDispatchToProps(dispatch, ownProps) {
    return {
        updateShowCartButton: function(payload) {
            dispatch(updateShowCartButton(payload));
        },
        addToCart: function(payload) {
            dispatch(addToCart(payload));
        },
        incrementCartTotal: function(payload){
          dispatch(incrementCartTotal(payload));
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(withTheme(ServiceDetail));
