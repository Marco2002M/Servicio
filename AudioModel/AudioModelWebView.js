// AudioModelWebView.js
import React from 'react';
import { WebView } from 'react-native-webview';

const AudioModelWebView = ({ onStartAudioModel }) => {
    const injectedJavaScript = `
        window.onStartAudioModel = () => {
            // Llama a la función de inicio de modelo en el WebView
            document.getElementById('start-button').onclick();
        };
    `;

    return (
        <WebView
            source={require('../AudioModel/audioModelÑ.html')} // Cambia esta ruta al archivo HTML
            injectedJavaScript={injectedJavaScript}
            javaScriptEnabled={true}
            style={{ flex: 1 }}
        />
    );
};

export default AudioModelWebView;
