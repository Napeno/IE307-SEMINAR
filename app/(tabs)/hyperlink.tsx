import React from 'react';
import { Text, View, StyleSheet, Alert, Linking } from 'react-native';
import Hyperlink from 'react-native-hyperlink';
import linkify from 'linkify-it';
import styles from '@/styles';

const linkifier = new linkify();
linkifier.add('@', 'https://github.com/Napeno');

const App = () => {
  const handlePress = (url: string) => {
    Alert.alert('Link Pressed', `You pressed on: ${url}`);
    Linking.openURL(url).catch((err) => console.error('Failed to open URL:', err));
  };

  const handlePressFake = () => {
    const url = 'https://google.com';
    Linking.openURL(url).catch((err) => console.error('Failed to open URL:', err));
  };

  const handleLongPress = (url: string) => {
    Alert.alert('Long Press Detected', `You long pressed on: ${url}`);
    Linking.openURL(url).catch((err) => console.error('Failed to open URL:', err));
  };

  const injectProps = (url: string) => {
    return { style: { color: 'green' } };
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hyperlink Config Examples</Text>
      
      <Hyperlink linkify={linkifier}>
        <Text style={styles.text}>Follow us on @example for updates.</Text>
      </Hyperlink>
      
      <Hyperlink linkStyle={styles.linkStyle}>
        <Text style={styles.text}>Visit our website at https://github.com/Napeno.</Text>
      </Hyperlink>

      <Hyperlink linkStyle={styles.linkStyle} onPress={handlePressFake} linkText={(url) => 'Click here for more info'}>
        <Text style={styles.text}>Learn more at https://github.com/Napeno.</Text>
      </Hyperlink>

      <Hyperlink linkStyle={styles.linkStyle} onPress={handlePress}>
        <Text style={styles.text}>Press this link: https://github.com/Napeno</Text>
      </Hyperlink>

      <Hyperlink linkStyle={styles.linkStyle} onLongPress={handleLongPress}>
        <Text style={styles.text}>Long press this link: https://github.com/Napeno</Text>
      </Hyperlink>

      <Hyperlink linkStyle={styles.linkStyle} linkDefault>
        <Text style={styles.text}>Go to our blog at https://github.com/Napeno</Text>
      </Hyperlink>

      <Hyperlink 
      linkDefault={ true }
        injectViewProps={ url => ({
          testID: url === 'http://link.com' ? 'id1' : 'id2' ,
          style: url === 'https://link.com' ? { color: 'red' } : { color: 'blue' },
     })}>
          <Text>Red url https://link.com
          and this url looks blue https://link2.com </Text> 
      </Hyperlink>

       <Text
          style={styles.text}
          onPress={() => Linking.openURL('tel:+84367306824').catch(err => console.error(err))}
        >
          Call us at +84367306824
      </Text>

      <Text
        style={styles.text}
        onPress={() =>
          Linking.openURL('mailto:napeno70@gmail.com?subject=Hello&body=How are you?')
            .catch((err) => console.error('Failed to open email:', err))
        }
      >
        Send us an email
      </Text>
    </View>
  );
};



export default App;
