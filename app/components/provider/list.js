import React, { Component } from 'react';
import { Platform, View, ScrollView, Text, StatusBar, SafeAreaView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from '../../styles/provider.style';
import SliderEntry from './provider';
import Card from './card';
import styles, { colors } from '../../styles/index.style';
import { ENTRIES1, ENTRIES2, ENTRIES3 } from './entries';
import { scrollInterpolators, animatedStyles } from './animations';

const IS_ANDROID = Platform.OS === 'android';
const SLIDER_1_FIRST_ITEM = 1;

export default class List extends Component {

    constructor (props) {
        super(props);
        this.state = {
            slider1ActiveSlide: SLIDER_1_FIRST_ITEM
        };
    }

    _renderItemWithParallax ({item, index}, parallaxProps) {
        return (
            <Card
              data={item}
              even={(index + 1) % 2 === 0}
              parallax={true}
              parallaxProps={parallaxProps}
            />
        );
    }

    mainExample () {
        const { slider1ActiveSlide } = this.state;

        return (
            <View style={styles.exampleContainer} removeClippedSubviews={false}>
                <Carousel
                  ref={c => this._slider1Ref = c}
                  data={ENTRIES3}
                  renderItem={this._renderItemWithParallax}
                  sliderWidth={sliderWidth}
                  itemWidth={itemWidth}
                  hasParallaxImages={true}
                  firstItem={0}
                  inactiveSlideScale={0.94}
                  inactiveSlideOpacity={0.7}
                  containerCustomStyle={styles.slider}
                  contentContainerCustomStyle={styles.sliderContentContainer}
                  onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index }) }
                  removeClippedSubviews={false}
                />
            </View>
        );
    }

    render () {
        const example1 = this.mainExample();

        return (
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.container}>
                    <ScrollView
                      style={styles.scrollview}
                      scrollEventThrottle={200}
                      directionalLockEnabled={true}
                    >
                        { example1 }
                    </ScrollView>
                </View>
            </SafeAreaView>
        );
    }
}
