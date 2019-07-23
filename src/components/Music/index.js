import React from "react";
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";

const options = {
    //audio lists model
    audioLists: [
        // {
        //     name: "后来的我们",
        //     singer: "五月天",
        //     cover: "https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike150%2C5%2C5%2C150%2C50/sign=1cb4a5bc00f3d7ca18fb37249376d56c/b3119313b07eca80e1aedb659d2397dda044838d.jpg",
        //     musicSrc: "http://www.ytmp3.cn/down/49444.mp3"
        // },
         {
            name: "郭源潮",
            singer: "宋冬野",
            cover:'http://img.ytmp3.cn/image/47.jpg' ,
            musicSrc: 'http://www.ytmp3.cn/down/52237.mp3'
        },
        {
            name: "云烟成雨",
            singer: "房东的猫",
            cover: "data:image/jpeg;base64,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",
            musicSrc: "http://www.ytmp3.cn/down/48951.mp3"
        },
        {
            name: "山海",
            singer: "华晨宇",
            cover: "https://pic2.zhimg.com/v2-c8478c1b408e4d2d266121d923f9e53d_1200x500.jpg",
            musicSrc: "http://www.ytmp3.cn/down/53961.mp3"
        }
    ],

    //default play index of the audio player  [type `number` default `0`]
    defaultPlayIndex: 0,

    //color of the music player theme    [ type `string: 'light' or 'dark'  ` default 'dark' ]
    theme: "dark",

    // Specifies movement boundaries. Accepted values:
    // - `parent` restricts movement within the node's offsetParent
    //    (nearest node with position relative or absolute), or
    // - a selector, restricts movement within the targeted node
    // - An object with `left, top, right, and bottom` properties.
    //   These indicate how far in each direction the draggable
    //   can be moved.
    bounds: "body",

    //Whether to load audio immediately after the page loads.  [type `Boolean | String`, default `false`]
    //"auto|metadata|none" "true| false"
    preload: true,

    //Whether the player's background displays frosted glass effect  [type `Boolean`, default `false`]
    glassBg: false,

    //The next time you access the player, do you keep the last state  [type `Boolean` default `false`]
    remember: false,

    //The Audio Can be deleted  [type `Boolean`, default `true`]
    remove: true,

    //audio controller initial position    [ type `Object` default '{top:0,left:0}' ]
    defaultPosition: {
        bottom: 20,
        left: 20
    },

    // play mode text config of the audio player
    playModeText: {
        order: "顺序播放",
        orderLoop: "列表循环",
        singleLoop: "单曲循环",
        shufflePlay: "随机播放"
    },

    //audio controller open text  [ type `String | ReactNode` default 'open']
    openText: "打开",

    //audio controller close text  [ type `String | ReactNode` default 'close']
    closeText: "关闭",

    //audio theme switch checkedText  [ type `String | ReactNode` default '-']
    checkedText: "开",

    //audio theme switch unCheckedText [ type `String | ReactNode` default '-']
    unCheckedText: "关",

    // audio list panel show text of the playlist has no songs [ type `String` | ReactNode  default 'no music']
    notContentText: "暂无音乐",

    panelTitle: "播放列表",

    defaultPlayMode: "order",

    //audio mode        mini | full          [type `String`  default `mini`]
    mode: "mini",

    /**
     * [ type `Boolean` default 'false' ]
     * The default audioPlay handle function will be played again after each pause, If you only want to trigger it once, you can set 'true'
     */
    once: true,

    //Whether the audio is played after loading is completed. [type `Boolean` default 'true']
    autoPlay: false,

    //Whether you can switch between two modes, full => mini  or mini => full   [type 'Boolean' default 'true']
    toggleMode: true,

    //audio cover is show of the "mini" mode [type `Boolean` default 'true']
    showMiniModeCover: true,

    //audio playing progress is show of the "mini"  mode
    showMiniProcessBar: false,

    //audio controller is can be drag of the "mini" mode     [type `Boolean` default `true`]
    drag: true,

    //drag the audio progress bar [type `Boolean` default `true`]
    seeked: true,

    //audio controller title [type `String | ReactNode`  default <FaHeadphones/>]
    // controllerTitle: <FaHeadphones />,

    //Displays the audio load progress bar.  [type `Boolean` default `true`]
    showProgressLoadBar: true,

    //play button display of the audio player panel   [type `Boolean` default `true`]
    showPlay: true,

    //reload button display of the audio player panel   [type `Boolean` default `true`]
    showReload: true,

    //download button display of the audio player panel   [type `Boolean` default `true`]
    showDownload: true,

    //loop button display of the audio player panel   [type `Boolean` default `true`]
    showPlayMode: true,

    //theme toggle switch  display of the audio player panel   [type `Boolean` default `true`]
    showThemeSwitch: true,

    //Extensible custom content       [type 'Array' default '[]' ]
    extendsContent: [],

    //default volume of the audio player [type `Number` default `100` range `0-100`]
    defaultVolume: 100,

    //playModeText show time [type `Number(ms)` default `700`]
    playModeShowTime: 600,

    //Whether to try playing the next audio when the current audio playback fails [type `Boolean` default `true`]
    loadAudioErrorPlayNext: true,

    //Music is downloaded handle

};

export default class Music extends React.Component {

    render() {
        return (
            <div>
                <ReactJkMusicPlayer {...options} />
            </div>
        );
    }
}
