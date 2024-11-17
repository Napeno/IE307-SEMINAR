import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    canva: {
        width: '100%',
        height: '100%'
    },

    sliderContainerA: {
        position: 'absolute',
        top: 50,
        left: 50,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    sliderContainerB: {
        position: 'absolute',
        top: 150,
        left: 50,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    slider: {
        width: '100%',
        height: 40,
    },
    toggleButtonText: {
        fontSize: 16,
    },

    colorPickerContainer: {
        width: '40%',
        marginBottom: 20,
        padding: 10,
        backgroundColor: "#fff",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#ddd",
      },
      colorPicker: {
        height: 150,
      },

      startColorPicker: {
        position: "absolute",
        top: 500,
        left: 20, 
        zIndex: 1,
      },
      endColorPicker: {
        position: "absolute",
        top: 500,
        right: 20, 
        zIndex: 1,
      },

});