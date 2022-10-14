import { useState } from 'react'
import { SpeechSynthesizer, SpeechRecognizer, SpeechConfig, AudioConfig, ResultReason } from 'microsoft-cognitiveservices-speech-sdk';
// import { AudioWorkletSourceRLPropertyName } from 'microsoft-cognitiveservices-speech-sdk/distrib/lib/src/common.browser/MicAudioSource';
// import { System } from 'microsoft-cognitiveservices-speech-sdk/distrib/lib/src/common.speech/RecognizerConfig';

const Chatbot = ({ setFormData }) => {
    // var sdk = require("microsoft-cognitiveservices-speech-sdk");

    //90f6efdc0763424ca5cb297a51f6623d

    const [speech, setSpeech] = useState('');
    const [f, setF] = useState(0);
    //cases:-
    //WEL-welcome
    //INST-instructions
    //digit- for ex- 1, means number in the form, digit along with 'c' for ex- 1c, means to check the input
    function speechDialogues(a, readInput) {
        var response;
        switch (a) {
            case 'WEL':
                response = `<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="en-US">
                 <voice name="en-US-JennyNeural">
                    Welcome to Bank of Baroda, I am laudiya, I will help you fill this form to open your savings account<bookmark mark='done_bolna_mera'/>>
                </voice>
                </speak>`
                break;
            case 'INST':
                response = 'I will ask you your details regarding the form, as I ask you will tell me the answer and I will keep the detail to myself, if you are ready say "yes" so that we can continue.'
                break;
            case 'ST':
                response = 'Great!';
                break;
            case '1.1':
                response = 'Let us start with the name of applicant, please tell me what is the prefix that you use for your name, for example, Mister, Miss, or  Misses';
                break;
            case '1.2':
                response = 'Okay, tell me your First Name.'
            case '1.2c':
                response = `Your first name is ${readInput}, you can see the spelling I wrote on your screen, if it is correct say "yes" else say "no"`
        }
        return response;
    }
    function synthesizeSpeech(a, readInput) {
        const speechConfig = SpeechConfig.fromSubscription("90f6efdc0763424ca5cb297a51f6623d", "centralindia");
        const audioConfig = AudioConfig.fromDefaultSpeakerOutput();

        const synthesizer = new SpeechSynthesizer(speechConfig, audioConfig);
        synthesizer.speakSsmlAsync(
            speechDialogues(a, readInput),
            result => {
                if (result) {
                    synthesizer.close();
                    return result.audioData;
                }
            },
            error => {
                console.log(error);
                synthesizer.close();
            });
        synthesizer.synthesisCompleted = function (s, e) {
            // var str = `SynthesisCompleted event: \
            //             \r\n\tAudioData: ${e.result.audioData.byteLength} bytes \
            //             \r\n\tAudioDuration: ${e.result.audioDuration}`;
            // console.log(str);
            // setF(++f);
            // setF(++f);
            // if (f === 1) {
            // synthesizeSpeech('INST');
            console.log('ho gya vro')
            // }
            // if (f === 2)
            //    listenSpeech();
            // if (speech === 'Yes.')
            // synthesizeSpeech('ST')
        };

        synthesizer.bookmarkReached = function (s, e) {
            var str = `BookmarkReached event: \
                \r\n\tAudioOffset: ${(e.audioOffset + 5000) / 10000}ms \
                \r\n\tText: \"${e.text}\".`;
            console.log(str);
        };
    }

    function listenSpeech() {
        const speechConfig = SpeechConfig.fromSubscription("90f6efdc0763424ca5cb297a51f6623d", "centralindia");
        const audioConfig = AudioConfig.fromDefaultMicrophoneInput();
        const recognizer = new SpeechRecognizer(speechConfig, audioConfig);
        recognizer.recognizeOnceAsync(result => {
            let displayText;
            if (result.reason === ResultReason.RecognizedSpeech) {
                displayText = result.text;
            } else {
                displayText = 'ERROR: Speech was cancelled or could not be recognized. Ensure your microphone is working properly.';
            }
            setSpeech(displayText)
        })
    }



    // synthesizeSpeech();
    return (
        <>
            <div onClick={
                () => {
                    synthesizeSpeech('WEL');
                    // if (f == 1) {
                    //     synthesizeSpeech('INST');
                    // }
                    // if (f == 2)
                    //     listenSpeech();
                    // if (speech === 'Yes.')
                    //     synthesizeSpeech('ST')
                }}>Chatbot</div>
            <div onClick={() => listenSpeech()}>Suno Gaur se</div>
            {
                speech ?
                    <div>Maine Ye suna : {speech}</div> : null
            }
        </>
    )
}

export default Chatbot