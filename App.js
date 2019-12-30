import React from 'react';
import {Text, View} from 'react-native';
import Video from 'react-native-video';
import {StyleSheet} from 'react-native';
import YouTube from 'react-native-youtube';
import {YouTubeStandaloneIOS} from 'react-native-youtube';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    // eslint-disable-next-line prettier/prettier
    return (
      <View style={styles.videoContainer}>
        <Video
          source={{
            uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
          }} // Can be a URL or a local file.
          ref={ref => {
            this.player = ref;
          }} // Store reference
          onBuffer={this.onBuffer} // Callback when remote video is buffering
          onError={this.videoError} // Callback when video cannot be loaded
          style={styles.backgroundVideo}
        />
        <YouTube
          videoId="m-HKcnwTcvk" // The YouTube video ID
          play // control playback of video with true/false
          //fullscreen // control whether the video should play in fullscreen or inline
          loop // control whether the video should loop when ended
          onReady={e => this.setState({isReady: true})}
          onChangeState={e => this.setState({status: e.state})}
          onChangeQuality={e => this.setState({quality: e.quality})}
          onError={e => this.setState({error: e.error})}
          style={styles.backgroundVideo}
        />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  backgroundVideo: {
    height: 300,
    width: '100%',
  },
  videoContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  video: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
