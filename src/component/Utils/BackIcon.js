import React from 'react';
import { View } from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from "prop-types";


const BackIcon = ({ style, navigation, color }) => {
    return (
        <View style={style}>
            <TouchableNativeFeedback onPress={() => navigation.goBack()}>
                <Icon name={"md-chevron-back"} size={32} color={color}/>
            </TouchableNativeFeedback>
        </View>
    );
};

export default BackIcon;

BackIcon.propTypes = {
    style: PropTypes.object,
    navigation: PropTypes.object,
    color: PropTypes.string
};

BackIcon.defaultProps = {
    color: "#000000",
};