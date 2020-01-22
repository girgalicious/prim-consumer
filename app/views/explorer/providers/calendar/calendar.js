import React, {Component} from 'react';
import {Text, View, ImageBackground, Image, FlatList} from 'react-native';
import {Icon, Button, withTheme} from 'react-native-elements';
import {
    Calendar,
    CalendarList,
    Agenda,
    LocaleConfig,
} from 'react-native-calendars';
import {connect} from 'react-redux';
import moment from 'moment';

class ProviderCalendar extends Component {
    state = {
        currentDate: new Date(),
        markedDate: moment(new Date()).format('YYYY-MM-DD'),
    };

    constructor(props) {
        super(props);
    }

    componentWillMount() {}

    componentDidMount() {
        this.props.navigation.setParams({
            leftPage: 'Cart',
            rightPage: '',
            isShownLeftOption: true,
            isShownRightOption: false,
            isRightOptionAsForm: false,
        });
    }

    componentWillReceiveProps() {}

    renderCalendar = () => {
        const today = new Date();
        return (
            <Calendar
                // Initially visible month. Default = Date()
                current={this.state.markedDate}
                // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                minDate={this.state.markedDate}
                // Handler which gets executed on day press. Default = undefined
                onDayPress={day => {
                    console.log('selected day', day);
                }}
                // Handler which gets executed on day long press. Default = undefined
                onDayLongPress={day => {
                    console.log('selected day', day);
                }}
                // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                monthFormat={'yyyy MM'}
                // Handler which gets executed when visible month changes in calendar. Default = undefined
                onMonthChange={month => {
                    console.log('month changed', month);
                }}
                // Hide month navigation arrows. Default = false
                hideArrows={false}
                // Replace default arrows with custom ones (direction can be 'left' or 'right')
                renderArrow={direction => {
                    switch (direction) {
                        case 'left':
                            return (
                                <Icon name="chevron-left" type="font-awesome" />
                            );
                        case 'right':
                            return (
                                <Icon
                                    name="chevron-right"
                                    type="font-awesome"
                                />
                            );
                    }
                }}
                // Do not show days of other months in month page. Default = false
                hideExtraDays={true}
                // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
                // day from another month that is visible in calendar page. Default = false
                disableMonthChange={false}
                // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
                firstDay={1}
                // Hide day names. Default = false
                hideDayNames={false}
                // Show week numbers to the left. Default = false
                showWeekNumbers={false}
                // Handler which gets executed when press arrow icon left. It receive a callback can go back month
                onPressArrowLeft={substractMonth => substractMonth()}
                // Handler which gets executed when press arrow icon left. It receive a callback can go next month
                onPressArrowRight={addMonth => addMonth()}

                markingType={'custom'}
                markedDates={{
                  '2019-11-27': {
                    customStyles: {
                      container: {
                        backgroundColor: this.props.theme.colors.primary
                      },
                      text: {
                        color: 'white'
                      },
                    },
                  }
                }}
            />
        );
    };

    render() {
        return (
            <View>
                <View>{this.renderCalendar()}</View>
                <View
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <Button
                        title={'Select ' + this.state.markedDate}
                        onPress={() => console.log('OKOK')}
                    />
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
)(withTheme(ProviderCalendar));
