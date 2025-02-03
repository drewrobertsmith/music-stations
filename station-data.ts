export interface Station {
  id: string;
  tritonId: string;
  title: string;
  applogoM: string;
  bannerColor: string;
  stream: string;
  fallbackstream: string;
  name: string;
}

export const STATION_DATA: Station[] = [
  {
    id: "28018",
    tritonId: "IM_1",
    title: "Praise and Worship",
    name: "PRWR",
    applogoM:
      "https://moodybible.canto.com/direct/image/42dfm4inb554r66omev6n8ni2s/q8R_QU4QyIxuAgphI-6QlCdxyEg/original?content-type=image%2Fpng&name=Praise+and+Worship.png",
    bannerColor: "#46a147",
    stream:
      "http://playerservices.streamtheworld.com/api/livestream-redirect/IM_1AAC.aac",
    fallbackstream:
      "http://playerservices.streamtheworld.com/api/livestream-redirect/IM_1.mp3",
  },
  {
    id: "493866",
    tritonId: "IM_2",
    title: "Majesty Radio",
    name: "MJST",
    applogoM:
      "https://moodybible.canto.com/direct/image/08s24giflh6b9dbauumhrfv01r/n1CNUtGjxSFMyNIqIZtUQgPdjY4/original?content-type=image%2Fjpeg&name=Majesty_1400x1400.jpg",
    bannerColor: "#66bac4",
    stream:
      "http://playerservices.streamtheworld.com/api/livestream-redirect/IM_2AAC.aac",
    fallbackstream:
      "http://playerservices.streamtheworld.com/api/livestream-redirect/IM_2.mp3",
  },
  {
    id: "29230",
    tritonId: "IM_3",
    title: "Urban Praise",
    name: "URPR",
    applogoM:
      "https://moodybible.canto.com/direct/image/8e6v64b22h2er3ih0jku5pe942/_KQGQ4Q9xTwuUZTi5Rjwodl0XJU/original?content-type=image%2Fpng&name=Urban+Praise.png",
    bannerColor: "#a84e20",
    stream:
      "http://playerservices.streamtheworld.com/api/livestream-redirect/IM_3AAC.aac",
    fallbackstream:
      "http://playerservices.streamtheworld.com/api/livestream-redirect/IM_3.mp3",
  },
  {
    id: "28696",
    tritonId: "IM_4",
    title: "Proclaim",
    name: "PCLM",
    applogoM:
      "https://moodybible.canto.com/direct/image/72o8qlpsf95i14lpu4b4ulaq77/BC3eaSNR_mEVR2XCiofo3kCmQbs/original?content-type=image%2Fpng&name=Proclaim.png",
    bannerColor: "#793134",
    stream:
      "http://playerservices.streamtheworld.com/api/livestream-redirect/IM_4AAC.aac",
    fallbackstream:
      "http://playerservices.streamtheworld.com/api/livestream-redirect/IM_4.mp3",
  },
  {
    id: "342809",
    tritonId: "IM_5",
    title: "Southern Gospel Radio",
    name: "SGR",
    applogoM:
      "https://moodybible.canto.com/direct/image/0trvejb5pt75rduq8ggn738c6e/UIEQzzS-rJUX4n2NlgEAgZfdnFM/original?content-type=image%2Fpng&name=so-gospel-radio-logo_580x580.png",
    bannerColor: "#e6e3da",
    stream:
      "http://playerservices.streamtheworld.com/api/livestream-redirect/IM_5AAC.aac",
    fallbackstream:
      "http://playerservices.streamtheworld.com/api/livestream-redirect/IM_5.mp3",
  },
  {
    id: "186070",
    tritonId: "WMBIAM",
    title: "Radio Moody (Español)",
    name: "rdmd",
    applogoM:
      "https://moodybible.canto.com/direct/image/vvhu0b6cf120n319ctrh33fo5t/IlGBC2vdcUA_FoDVss5M8KnddiE/original?content-type=image%2Fpng&name=Radio+Moody.png",
    bannerColor: "#003a5c",
    stream:
      "http://playerservices.streamtheworld.com/api/livestream-redirect/WMBIAMAAC.aac",
    fallbackstream:
      "http://playerservices.streamtheworld.com/api/livestream-redirect/WMBIAM.mp3",
  },
];
