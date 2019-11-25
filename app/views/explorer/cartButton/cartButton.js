import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

class CartButton extends Component {

  navigateToCart = () => {
    this.props.navigation.navigate('Cart');
  }

    render(){
      return (
        <View>
          <View>
          {
            this.props.displayCartButton ?
            <Button title="View Cart" onPress={() => this.navigateToCart()} containerStyle={{width: '100%'}} />
            : null
          }
          </View>
        </View>
      );
    }
}


function mapStateToProps(state) {
  const { displayCartButton } = state.global
  return { displayCartButton }
}
export default connect(mapStateToProps, { })(withNavigation(CartButton));
