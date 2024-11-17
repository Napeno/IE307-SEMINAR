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

      bgText:{
        position: 'absolute',
        top: 200,
        left: 45,
        backgroundColor: 'white',
        width: '80%',
        height: '50%'
      },

      text: {
        fontSize: 16,
        marginVertical: 10,
      },
      linkStyle: {
        color: '#2980b9',
        textDecorationLine: 'underline',
      },
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5', // Màu nền sáng, dễ nhìn
        padding: 20,
      },
      header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333', // Màu tối cho tiêu đề
        marginBottom: 20,
      },
      text: {
        fontSize: 16,
        color: '#333',
        marginBottom: 15,
        lineHeight: 22,
      },
      linkStyle: {
        color: '#1E90FF', // Màu xanh dương cho liên kết
        textDecorationLine: 'underline', // Gạch chân cho liên kết
      },
      callLink: {
        fontSize: 16,
        color: '#FF6347', // Màu đỏ cho cuộc gọi
        marginTop: 15,
        textDecorationLine: 'underline',
      },
      emailLink: {
        fontSize: 16,
        color: '#32CD32', // Màu xanh lá cho email
        marginTop: 15,
        textDecorationLine: 'underline',
      }

});