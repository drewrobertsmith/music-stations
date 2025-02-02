export interface Station {
  id: string;
  tritonId: string;
  title: string;
  appLogoM: string;
  bannerColor: string;
  stream: string;
  fallbackstream: string;
}

[
  {
    id: "28018",
    tritonId: "IM_1",
    title: "Praise and Worship",
    name: "PRWR",
    groupname: "Internet Radio",
    applogoM:
      "https://moodybible.canto.com/direct/image/42dfm4inb554r66omev6n8ni2s/q8R_QU4QyIxuAgphI-6QlCdxyEg/original?content-type=image%2Fpng&name=Praise+and+Worship.png",
    bannerColor: "#46a147",
    stream:
      "http://playerservices.streamtheworld.com/api/livestream-redirect/IM_1AAC.aac",
    fallbackstream:
      "http://playerservices.streamtheworld.com/api/livestream-redirect/IM_1.mp3",
    facebook: "https://www.facebook.com/PraiseandWorshipChannel/",
    twitter: "https://twitter.com/MoodyPraise",
    contactEmail: "praise@moody.edu",
    website: "https://www.moodyradio.org/stations/praise-and-worship/",
  },
];
