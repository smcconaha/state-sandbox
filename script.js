//Define state object: TV with build in VHS player, all other inputs external
//Determine properties / keys:values
let television = {
    powered: true,
    currentChannel: [56],
    currentVolume: [35],
    inputHdmi: false,
    inputAntenna: false,
    inputVhs:  {
        tapeIn: true,
        playVhs: function () {
            console.log('play');
        },
        stopVhs: function () {
            console.log('stop');
        },
        rewindVhs: () => {console.log('rewind');},
        fastVhs: () => {console..log('fastforward');}
    }
};