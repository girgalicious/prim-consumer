import React, {Component} from 'react';
import {
    Dimensions,
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Image,
    FlatList,
    TextInput,
} from 'react-native';
import {connect} from 'react-redux';
import StarRating from 'react-native-star-rating';
import {
    ListItem,
    Button,
    Avatar,
    Icon,
    withTheme,
    Divider,
    Rating,
} from 'react-native-elements';
import CartButton from '../../cartButton/cartButton';
import haircut from '../../../../assets/images/haircut.png';
import bessie from '../../../../assets/images/bessie.png';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    button: {
        width: DEVICE_WIDTH - 80,
        padding: 10,
    },
});

const list = [
    {
        title: 'Womans haircut',
        price: '$50-$150',
        showDivider: true,
    },
    {
        title: 'Mens haircut',
        price: '$50-$80',
        showDivider: true,
    },
    {
        title: 'Kids haircut',
        price: '$100-$200',
        showDivider: true,
    },
    {
        title: 'Styling',
        price: '$120-$180',
        showDivider: true,
    },
    {
        title: 'Coloring',
        price: '$250-$300',
        showDivider: false,
    },
];
let didBlurSubscription,
    willBurSubscription,
    didFocusSubscription,
    willFocusSubscription = null;

class ProviderDetail extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {}

    componentDidMount() {
        this.props.navigation.setParams({
            leftPage: 'HomePage',
            rightPage: '',
            isShownLeftOption: true,
            isShownRightOption: false,
            isRightOptionAsForm: false,
        });
    }

    componentWillReceiveProps() {}

    navigateToService = () => {
        this.props.navigation.navigate('ServiceDetail', {
            service: {},
        });
    };

    render() {
        const {theme, updateTheme, replaceTheme, navigation} = this.props;
        const provider = navigation.getParam('provider');
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 2}}>
                    <ImageBackground
                        source={bessie}
                        style={{height: '100%', width: '100%'}}>
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                marginTop: 60,
                                right: 5,
                                justifyContent: 'flex-end',
                            }}>
                            <Icon
                                name="heart"
                                color="red"
                                type="font-awesome"
                                onPress={() => console.log('hello')}
                            />
                        </View>
                        <View style={{top: 30}}>
                            <Text
                                style={{
                                    marginLeft: 20,
                                    fontSize: 20,
                                    fontWeight: 'bold',
                                    color: 'white',
                                }}>
                                Bessie Cooper
                            </Text>
                        </View>
                        <View
                            style={{
                                marginLeft: 20,
                                top: 35,
                                flex: 1,
                                flexDirection: 'row',
                            }}>
                            <Icon
                                name="cut"
                                color="white"
                                type="font-awesome"
                                size={20}
                                onPress={() => console.log('hello')}
                            />
                            <Text
                                style={{
                                    marginLeft: 20,
                                    fontSize: 15,
                                    color: 'white',
                                }}>
                                Hair Dresser
                            </Text>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <Icon
                                name="phone"
                                color="white"
                                type="font-awesome"
                                containerStyle={{opacity: 0.4}}
                                size={20}
                                reverse
                                reverseColor={'black'}
                                onPress={() => console.log('hello')}
                            />
                            <Icon
                                name="comment"
                                color="white"
                                type="font-awesome"
                                containerStyle={{opacity: 0.4}}
                                size={20}
                                reverse
                                reverseColor={'black'}
                                onPress={() => console.log('hello')}
                            />
                            <Icon
                                name="envelope"
                                color="white"
                                type="font-awesome"
                                containerStyle={{opacity: 0.4}}
                                size={20}
                                reverse
                                reverseColor={'black'}
                                onPress={() => console.log('hello')}
                            />
                            <View
                                style={{
                                    marginLeft: 60,
                                    justifyContent: 'center',
                                }}>
                                <StarRating
                                    disabled={true}
                                    maxStars={5}
                                    rating={4.3}
                                    selectedStar={rating =>
                                        this.onStarRatingPress(rating)
                                    }
                                    fullStarColor={'white'}
                                    starSize={20}
                                />
                            </View>
                        </View>
                    </ImageBackground>
                </View>
                <View style={{flex: 3}}>
                    <View style={{alignItems: 'center'}}>
                        <Button
                            title="SCHEDULE AN APPOINTMENT"
                            titleStyle={{fontSize: 15, fontWeight: 'bold'}}
                            style={styles.button}
                        />
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <Text style={{fontSize: 12}}>VIEW THE CALENDAR</Text>
                    </View>
                    <View style={{marginLeft: 10, marginTop: 10}}>
                        {list.map((item, i) => (
                            <ListItem
                                key={i}
                                title={item.title}
                                onPress={() => this.navigateToService()}
                                titleStyle={{fontWeight: 'bold'}}
                                subtitle={item.price}
                                subtitleStyle={{
                                    color: 'grey',
                                    top: 10,
                                    fontSize: 12,
                                }}
                                bottomDivider={item.showDivider}
                                chevron
                            />
                        ))}
                    </View>
                    <CartButton />
                </View>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {};
}
export default connect(
    mapStateToProps,
    {},
)(withTheme(ProviderDetail));
