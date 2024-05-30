import { Text, View, Pressable, StyleSheet } from 'react-native';

import Colors from '../../constants/colors';

function CustomButton({children, onPress}) {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                style = {({pressed}) =>  
                    pressed 
                        ? [styles.buttonInnerContainer, styles.pressed] 
                        : styles.buttonInnerContainer
                    }
                onPress={onPress}
                android_ripple = {{color: Colors.primary600}}
            >
                <Text style = {styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    );
}

export default CustomButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28, 
        margin: 4,
        overflow: 'hidden',
    },
    buttonInnerContainer: {
        backgroundColor: Colors.cardColor,
        paddingVertical: 8,
        paddingHorizontal: 16,  
        elevation: 2,
    },
    buttonText: {
        color: 'black', 
        textAlign: 'center',
        fontWeight: 'bold'
    },
    pressed: {
        opacity: 0.75,
    }
});