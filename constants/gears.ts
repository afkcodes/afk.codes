export type Gear = Array<{
  header: string;
  items: Array<{
    name: string;
    url: string;
  }>;
}>;

const gearsMap: Gear = [
  {
    header: 'Gears',
    items: [
      {
        name: 'Acer Aspire 5s (Hackintosh)',
        url: 'https://www.flipkart.com/acer-aspire-5s-core-i5-8th-gen-8-gb-1-tb-hdd-windows-10-home-a515-52-laptop/p/itmfdvfhnbbxbqpt'
      },
      {
        name: 'Macbook Pro M2',
        url: 'https://www.apple.com/in/mac/compare/?modelList=MacBookPro-13-M2,MacBook-Pro-14-M2'
      },
      {
        name: 'Garmin Venu SQ 2',
        url: 'https://www.amazon.in/Garmin-Venu-Sq-Shadow-Slate/dp/B0BD57PMSX/ref=sr_1_1_sspa?adgrpid=68068634520&ext_vrnc=hi&gclid=EAIaIQobChMI-fnF29iJgwMVJyx7Bx3X1wmAEAAYASAAEgJLK_D_BwE&hvadid=590712392375&hvdev=c&hvlocphy=9062029&hvnetw=g&hvqmt=e&hvrand=17987340753503320124&hvtargid=kwd-1137383909038&hydadcr=24567_2265462&keywords=garmin+venu+sq+2&qid=1702377055&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1'
      }
    ]
  },
  {
    header: 'Desktop Apps',
    items: [
      {
        name: 'Visual Studio Code',
        url: 'https://code.visualstudio.com/'
      },
      {
        name: 'Zed',
        url: 'https://zed.dev/'
      },
      {
        name: 'Google Chrome',
        url: 'https://www.google.com/chrome/'
      },
      {
        name: 'Firefox',
        url: 'https://www.mozilla.org/en-US/firefox/developer/'
      },
      {
        name: 'Postman',
        url: 'https://www.postman.com/'
      },
      {
        name: 'Figma',
        url: 'https://www.figma.com/'
      },
      {
        name: 'Slack',
        url: 'https://slack.com/intl/en-in'
      },
      {
        name: 'Spotify',
        url: 'https://open.spotify.com'
      },
      {
        name: '1.1.1.1 (WARP)',
        url: 'https://1.1.1.1/'
      }
    ]
  },
  {
    header: 'Mobile Apps',
    items: [
      {
        name: 'Cromite - Privacy enabled chrome',
        url: 'https://github.com/uazo/cromite'
      },
      {
        name: 'Discord',
        url: 'https://play.google.com/store/apps/details?id=com.discord&hl=en&gl=US'
      },
      {
        name: 'Reddit',
        url: 'https://play.google.com/store/apps/details?id=com.reddit.frontpage&hl=en&gl=US'
      },
      {
        name: 'Adobe Scan',
        url: 'https://play.google.com/store/apps/details?id=com.adobe.scan.android&hl=en&gl=US'
      },
      {
        name: '1.1.1.1 (WARP)',
        url: 'https://play.google.com/store/apps/details?id=com.cloudflare.onedotonedotonedotone&hl=en&gl=US'
      },
      {
        name: 'Proton Mail',
        url: 'https://proton.me/mail'
      },
      {
        name: 'Apple Music',
        url: 'https://play.google.com/store/apps/details?id=com.apple.android.music&hl=en-IN'
      },
      {
        name: 'Spotify',
        url: 'https://play.google.com/store/apps/details?id=com.spotify.music&hl=en-IN'
      },
      {
        name: 'Netflix',
        url: 'https://play.google.com/store/apps/details?id=com.netflix.mediaclient&hl=en-IN'
      },
      {
        name: 'Prime Video',
        url: 'https://play.google.com/store/apps/details?id=com.amazon.avod.thirdpartyclient&hl=en-IN'
      },
      {
        name: 'Strava',
        url: 'https://play.google.com/store/apps/details?id=com.strava&hl=en-IN'
      }
    ]
  },
  {
    header: 'Learning',
    items: [
      {
        name: 'Frontend Masters',
        url: 'https://frontendmasters.com'
      },
      {
        name: 'Codedamn',
        url: 'https://codedamn.com/'
      }
    ]
  },
  {
    header: 'Entertainment',
    items: [
      {
        name: 'Soundcore Q35',
        url: 'https://www.flipkart.com/soundcore-anker-life-q35-targeted-active-noise-cancellation-enabled-bluetooth-headset/p/itm2edc39c53f8c9'
      },
      {
        name: 'Soundcore Liberty Air 2 Pro',
        url: 'https://www.flipkart.com/soundcore-anker-liberty-air-2-pro-active-noise-cancellation-bluetooth-headset/p/itm998fdbaa17aa1?q=soundcore&qH=331d0cee01a203f8'
      },
      {
        name: 'Soundcore Motion X600',
        url: 'https://us.soundcore.com/products/motion-x600-a3130011'
      },
      {
        name: 'Mi Smart Speaker',
        url: 'https://www.flipkart.com/mi-smart-speaker-google-assistant/p/itmc7434534b8b84'
      },
      {
        name: 'KZ - ZEX',
        url: 'https://www.headphonezone.in/products/kz-zex?_pos=1&_sid=a59a207c5&_ss=r&variant=40942009909436'
      }
    ]
  }
];

export default gearsMap;
