import React, {Component} from 'react';
import {Text, View, ImageBackground, Image, FlatList} from 'react-native';
import {Avatar, ListItem, withTheme} from 'react-native-elements';
import {connect} from 'react-redux';
import {GiftedChat, Bubble, Time} from 'react-native-gifted-chat';

const list = [{name: 'Details', route: 'Details'}];

class MessagesDetails extends Component {
    state = {
        messages: [],
    };

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        var dt = new Date("December 30, 2017 11:20:25");

        this.setState({
            messages: [
                {
                    _id: 1,
                    text: 'Hello developer',
                    createdAt: dt.setSeconds( dt.getSeconds() + 60 ),
                    user: {
                        _id: 2,
                        name: 'React Native',
                        avatar: 'https://placeimg.com/140/140/any',
                    },
                },
                {
                    _id: 2,
                    text: 'Hey, how are you?',
                    createdAt: dt.setSeconds( dt.getSeconds() + 120 ),
                    user: {
                        _id: 1,
                        name: 'React Native',
                        avatar: 'https://placeimg.com/140/140/any',
                    },
                },
                {
                    _id: 3,
                    text: "Im good.",
                    createdAt: dt.setSeconds( dt.getSeconds() + 160 ),
                    user: {
                        _id: 2,
                        name: 'React Native',
                        avatar: 'https://placeimg.com/140/140/any',
                    },
                },
                {
                    _id: 4,
                    text: 'Its good to hear from you.',
                    createdAt: dt.setSeconds( dt.getSeconds() + 190 ),
                    user: {
                        _id: 2,
                        name: 'React Native',
                        avatar: 'https://placeimg.com/140/140/any',
                    },
                },
                {
                    _id: 5,
                    text: 'What are you doing today?',
                    createdAt: dt.setSeconds( dt.getSeconds() + 200 ),
                    user: {
                        _id: 1,
                        name: 'React Native',
                        avatar: 'https://placeimg.com/140/140/any',
                    },
                },
                {
                    _id: 6,
                    text: "I heard you're developing a new app?",
                    createdAt: dt.setSeconds( dt.getSeconds() + 210 ),
                    user: {
                        _id: 2,
                        name: 'React Native',
                        avatar: 'https://placeimg.com/140/140/any',
                    },
                },
                {
                    _id: 13,
                    text: 'Hello developer',
                    createdAt: dt.setSeconds( dt.getSeconds() + 260 ),
                    user: {
                        _id: 2,
                        name: 'React Native',
                        avatar: 'https://placeimg.com/140/140/any',
                    },
                },
                {
                    _id: 14,
                    text: 'Hey, how are you?',
                    createdAt: dt.setSeconds( dt.getSeconds() + 320 ),
                    user: {
                        _id: 1,
                        name: 'React Native',
                        avatar: 'https://placeimg.com/140/140/any',
                    },
                },
                {
                    _id: 15,
                    text: "Im good.",
                    createdAt: dt.setSeconds( dt.getSeconds() + 460 ),
                    user: {
                        _id: 2,
                        name: 'React Native',
                        avatar: 'https://placeimg.com/140/140/any',
                    },
                },
                {
                    _id: 16,
                    text: 'Its good to hear from you.',
                    createdAt: dt.setSeconds( dt.getSeconds() + 590 ),
                    user: {
                        _id: 2,
                        name: 'React Native',
                        avatar: 'https://placeimg.com/140/140/any',
                    },
                },
                {
                    _id: 17,
                    text: 'What are you doing today?',
                    createdAt: dt.setSeconds( dt.getSeconds() + 600 ),
                    user: {
                        _id: 1,
                        name: 'React Native',
                        avatar: 'https://placeimg.com/140/140/any',
                    },
                },
                {
                    _id: 18,
                    text: "I heard you're developing a new app?",
                    createdAt: dt.setSeconds( dt.getSeconds() + 710 ),
                    user: {
                        _id: 2,
                        name: 'React Native',
                        avatar: 'https://placeimg.com/140/140/any',
                    },
                },
                {
                    _id: 7,
                    text: 'Hello developer',
                    createdAt: dt.setSeconds( dt.getSeconds() + 760 ),
                    user: {
                        _id: 2,
                        name: 'React Native',
                        avatar: 'https://placeimg.com/140/140/any',
                    },
                },
                {
                    _id: 8,
                    text: 'Hey, how are you?',
                    createdAt: dt.setSeconds( dt.getSeconds() + 820 ),
                    user: {
                        _id: 1,
                        name: 'React Native',
                        avatar: 'https://placeimg.com/140/140/any',
                    },
                },
                {
                    _id: 9,
                    text: "Im good.",
                    createdAt: dt.setSeconds( dt.getSeconds() + 860 ),
                    user: {
                        _id: 2,
                        name: 'React Native',
                        avatar: 'https://placeimg.com/140/140/any',
                    },
                },
                {
                    _id: 10,
                    text: 'Its good to hear from you.',
                    createdAt: dt.setSeconds( dt.getSeconds() + 890 ),
                    user: {
                        _id: 2,
                        name: 'React Native',
                        avatar: 'https://placeimg.com/140/140/any',
                    },
                },
                {
                    _id: 11,
                    text: 'What are you doing today?',
                    createdAt: dt.setSeconds( dt.getSeconds() + 900 ),
                    user: {
                        _id: 1,
                        name: 'React Native',
                        avatar: 'https://placeimg.com/140/140/any',
                    },
                },
                {
                    _id: 12,
                    text: "I heard you're developing a new app?",
                    createdAt: dt.setSeconds( dt.getSeconds() + 910 ),
                    user: {
                        _id: 2,
                        name: 'React Native',
                        avatar: 'https://placeimg.com/140/140/any',
                    },
                },
            ],
        });
    }

    componentDidMount() {
        this.props.navigation.setParams({
            leftPage: 'Messages',
            rightPage: '',
            isShownLeftOption: true,
            isShownRightOption: false,
            isRightOptionAsForm: false,
        });
    }

    componentWillReceiveProps() {}

    onSend(messages = []) {
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages),
        }));
    }

    render() {
      console.log(this.props.theme);
        return (
            <GiftedChat
                messages={this.state.messages}
                showUserAvatar={true}
                onSend={messages => this.onSend(messages)}
                user={{
                    _id: 1,
                    avatar: 'https://placeimg.com/140/140/any',
                }}
                renderTime={props => {
                  return (
                    <Time
                      {...props}
                      timeTextStyle={{
                        right: {
                          color: this.props.theme.grey0
                        },
                        left: {
                          color: this.props.theme.grey0
                        }
                      }}
                    />
                  );
                }}
                renderBubble={props => {
                    let username = props.currentMessage.user.name;
                    return (
                        <Bubble
                            {...props}
                            textStyle={{
                                left: {
                                    color: 'white',
                                },
                                right: {
                                    color: 'black',
                                },
                            }}
                            wrapperStyle={{
                                left: {
                                    backgroundColor: this.props.theme.colors
                                        .primary,
                                },
                                right: {
                                    backgroundColor: this.props.theme.colors
                                        .secondary,
                                },
                            }}
                        />
                    );
                }}
            />
        );
    }
}

function mapStateToProps(state) {
    return {};
}
export default connect(
    mapStateToProps,
    {},
)(withTheme(MessagesDetails));
