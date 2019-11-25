import React, {Component} from 'react';
import {
    Dimensions,
    Text,
    View,
    StyleSheet,
    ImageBackground,
    Image,
    FlatList,
    TextInput,
} from 'react-native';
import {
    Button,
    Avatar,
    Icon,
    withTheme,
    Divider,
    Input,
} from 'react-native-elements';
import {connect} from 'react-redux';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    button: {
        width: DEVICE_WIDTH - 80,
        padding: 10,
        margin: 20,
    },
});

class Profile extends Component {
    state = {
        promoCode: '',
        comment: '',
    };

    constructor(props) {
        super(props);
    }

    componentWillMount() {}

    componentDidMount() {
        this.props.navigation.setParams({
            leftPage: 'ProviderDetail',
            rightPage: '',
            isShownLeftOption: true,
            isShownRightOption: false,
            isRightOptionAsForm: false,
        });
    }

    componentWillReceiveProps() {}

    setComment = text => {
        this.setState(previousState => {
            return {
                ...previousState,
                comment: text,
            };
        });
    };

    setPromoCode = text => {
        this.setState(previousState => {
            return {
                ...previousState,
                promoCode: text,
            };
        });
    };

    render() {
        const {theme} = this.props;
        return (
            <View style={{flex: 1}}>
                <View
                    style={{
                        flex: 3,
                        flexDirection: 'row',
                        backgroundColor: '#F7F7F7',
                    }}>
                    <FlatList
                        data={this.props.cart}
                        renderItem={({item, index}) => (
                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <Text
                                    style={{
                                        fontWeight: 'bold',
                                        fontSize: 15,
                                        padding: 20,
                                    }}>
                                    {item.title}
                                </Text>
                                <Text
                                    style={{
                                        position: 'absolute',
                                        right: 20,
                                        padding: 20,
                                    }}>
                                    {item.price}
                                </Text>
                            </View>
                        )}
                        keyExtractor={item => item.id}
                    />
                </View>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <Text
                        style={{fontWeight: 'bold', fontSize: 15, padding: 20}}>
                        Total
                    </Text>
                    <Text
                        style={{position: 'absolute', right: 20, padding: 20}}>
                        ${this.props.cartTotal}
                    </Text>
                </View>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View
                        style={{
                            width: '15%',
                            height: 75,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                        <Avatar
                            rounded
                            source={{
                                uri:
                                    'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                            }}
                            size={'medium'}
                            containerStyle={{marginLeft: 25}}
                        />
                    </View>
                    <View
                        style={{
                            width: '45%',
                            height: 75,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                        <Text style={{fontWeight: 'bold'}}>Bessie Cooper</Text>
                        <Text style={{}}>Hair Dresser</Text>
                    </View>
                </View>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <Text
                        style={{fontWeight: 'bold', fontSize: 15, padding: 20}}>
                        Location
                    </Text>
                </View>
                <View style={{flex: 1}}>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View
                            style={{
                                width: '15%',
                                height: 75,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                            <Icon
                                iconStyle={{marginLeft: 25}}
                                name="map-marker"
                                type="font-awesome"
                            />
                        </View>
                        <View
                            style={{
                                width: '65%',
                                height: 75,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                            <Text style={{}}>8710 5th Ave W, Everett, WA</Text>
                        </View>
                    </View>
                </View>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <Text
                        style={{fontWeight: 'bold', fontSize: 15, padding: 20}}>
                        Payment Method
                    </Text>
                </View>
                <View style={{flex: 1}}>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View
                            style={{
                                width: '15%',
                                height: 75,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                            <Icon
                                iconStyle={{marginLeft: 25}}
                                name="cc-mastercard"
                                type="font-awesome"
                            />
                        </View>
                        <View
                            style={{
                                width: '65%',
                                height: 75,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                            <Text style={{}}>****1234</Text>
                        </View>
                    </View>
                </View>
                <View style={{flex: 1, alignItems: 'center'}}>
                    <TextInput
                        style={{
                            width: '90%',
                            padding: 10,
                            height: 40,
                            borderColor: theme.colors.secondary,
                            borderWidth: 1,
                        }}
                        placeholder="Add a Promo Code"
                        onChangeText={text => this.setPromoCode(text)}
                        value={this.state.promoCode}
                    />
                </View>
                <View style={{flex: 1, alignItems: 'center'}}>
                    <TextInput
                        style={{
                            width: '90%',
                            padding: 10,
                            height: 100,
                            borderColor: theme.colors.secondary,
                            borderWidth: 1,
                        }}
                        multiline={true}
                        numberOfLines={4}
                        placeholder="Note for provider"
                        onChangeText={text => this.setComment(text)}
                        value={this.state.comment}
                    />
                </View>
                <View
                    style={{
                        flex: 3,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <Button
                        title="CONFIRM"
                        style={styles.button}
                        onPress={() => this.complete()}
                    />
                </View>
            </View>
        );
    }
}

function mapStateToProps(state) {
    const {cart, cartTotal} = state.global;
    return {cart, cartTotal};
}
export default connect(
    mapStateToProps,
    {},
)(withTheme(Profile));
