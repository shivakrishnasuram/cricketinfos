const express = require('express');
const cors = require('cors'); // Import cors middleware
const router = express.Router();
router.use(cors());
const players = [
  {
    "id": 1,
    "name": "Virat Kohli",
    "role": "Batter",
    "team": "India",
    "achievements": [
      "ICC Cricketer of the Year (2017, 2018, 2020)",
      "Fastest to 8,000, 9,000, 10,000, 11,000 and 12,000 runs in ODIs",
      "Most runs in a calendar year (2017)",
      "Player of the Tournament in 2014 ICC World T20"
    ],
    "image": "https://img.mensxp.com/media/content/2020/Sep/Greatest-Fielding-Efforts-By-Virat-Kohli-1400x653_5f6daf2ef21e9.jpeg?w=1100&h=513&cc=1"
  },
  {
    "id": 2,
    "name": "Rohit Sharma",
    "role": "Batter",
    "team": "India",
    "achievements": [
      "Only player to score three double centuries in ODIs",
      "Highest individual score in an ODI (264 runs)",
      "ICC Champions Trophy 2013 Winner",
      "Asia Cup 2018 Winner"
    ],
    "image": "https://english.mathrubhumi.com/image/contentid/policy:1.9523128:1714451229/Rohit%20Sharma%20celebrates%20after%20winning%20the%202023%20ICC%20Men's%20Cricket%20World%20Cup%20ODI%20first%20semi-final%20match%20between%20India%20and%20New%20Zealand%20AFP.jpg?$p=24e0516&f=16x10&w=852&q=0.8"
  },
  {
    "id": 3,
    "name": "MS Dhoni",
    "role": "Batter",
    "team": "India",
    "achievements": [
      "ICC T20 World Cup Winner (2007)",
      "ICC ODI World Cup Winner (2007)",
      "ICC Champions Trophy Winner (2013)",
      "Captain of India for most matches (2007–2017)"
    ],
    "image": "https://c.ndtvimg.com/2019-09/con6mlfs_ms-dhoni-india-afp_625x300_17_September_19.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605"
  },
  {
    "id": 4,
    "name": "Ajinkya Rahane",
    "role": "Batter",
    "team": "India",
    "achievements": [
      "Player of the Match in the 2021 Melbourne Test against Australia",
      "Centuries in overseas Test matches (West Indies, England, Australia)",
      "ICC Test Player of the Year nominee"
    ],
    "image": "https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/775d/live/da3ccc50-346a-11ef-9e6a-858b51f7415c.jpg.webp"
  },
  {
    "id": 5,
    "name": "Shikhar Dhawan",
    "role": "Batter",
    "team": "India",
    "achievements": [
      "Fastest to 1,000 runs in ICC Champions Trophy",
      "Most runs in a single season of the IPL",
      "Key contributor in 2013 ICC Champions Trophy victory"
    ],
    "image": "https://static.cricketaddictor.com/images/2024/Shikhar%20Dhawan%20retirement.jpg?q=80"
  },
  {
    "id": 6,
    "name": "Mitchell Starc",
    "role": "Bowler",
    "team": "Australia",
    "achievements": [
      "Player of the Tournament in 2015 ICC Cricket World Cup",
      "Most wickets in 2015 World Cup",
      "Fastest to 100 wickets in ODI cricket"
    ],
    "image": "https://e0.365dm.com/15/06/2048x1152/Mitchell-Starc-Test-celeb_3312186.jpg?20150606101216"
  },
  {
    "id": 7,
    "name": "David Warner",
    "role": "Batter",
    "team": "Australia",
    "achievements": [
      "Highest individual score in a T20I (125 runs)",
      "Player of the Tournament in 2016 ICC T20 World Cup",
      "Orange Cap Winner in IPL (2016, 2017)"
    ],
    "image": "https://static.tnn.in/thumb/msid-104139767,thumbsize-18102,width-1280,height-720,resizemode-75/104139767.jpg"
  },
  {
    "id": 8,
    "name": "Steve Smith",
    "role": "Batter",
    "team": "Australia",
    "achievements": [
      "ICC Test Player of the Year (2015, 2017)",
      "Number 1 Test batsman in ICC rankings multiple times",
      "Player of the Series in Ashes 2019"
    ],
    "image": "https://cdn.dnaindia.com/sites/default/files/2017/11/25/627426-steve-smith-afp.jpg?im=FitAndFill=(1200,900)"
  },
  {
    "id": 9,
    "name": "Kane Williamson",
    "role": "Batter",
    "team": "New Zealand",
    "achievements": [
      "Captain of New Zealand's 2019 ICC Cricket World Cup Finalist team",
      "Most runs in a single World Cup edition (2015)",
      "ICC World Test Championship Finalist (2021)"
    ],
    "image": "https://i.pinimg.com/736x/21/71/11/217111854be30c005fc40d98e8958be0.jpg"
  },
  {
    "id": 10,
    "name": "Joe Root",
    "role": "Batter",
    "team": "England",
    "achievements": [
      "Player of the Series in 2015 Ashes",
      "Highest run scorer for England in Tests",
      "ICC Men's Test Player of the Year (2021)"
    ],
    "image": "https://crictoday.com/wp-content/uploads/2023/03/UsgAIOc.jpg"
  },
  {
    "id": 11,
    "name": "Babar Azam",
    "role": "Batter",
    "team": "Pakistan",
    "achievements": [
      "Fastest to 1000 runs in T20I cricket",
      "ICC Men's T20I Player of the Year (2021)",
      "Leading run scorer for Pakistan in ODIs and T20Is"
    ],
    "image": "https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2021/10/19/980756-babar-azam.jpg?im=Resize=(700,400)"
  },
  {
    "id": 12,
    "name": "Ben Stokes",
    "role": "All-rounder",
    "team": "England",
    "achievements": [
      "Player of the Match in 2019 ICC Cricket World Cup Final",
      "Ashes 2019 Hero (Headingley Test)",
      "ICC Men's Test Player of the Year (2020)"
    ],
    "image": "https://c.ndtvimg.com/2020-08/0g5s6oug_ben-stokes-twitter_625x300_25_August_20.jpg?output-quality=80&downsize=639:*"
  },
  {
    "id": 13,
    "name": "Quinton de Kock",
    "role": "Batter/Wicketkeeper",
    "team": "South Africa",
    "achievements": [
      "Fastest South African to 4,000 runs in ODIs",
      "Player of the Series in 2019 ICC Cricket World Cup",
      "Multiple IPL titles with Mumbai Indians"
    ],
    "image": "https://c.ndtvimg.com/2023-10/enkbh5g_quinton-de-kock-pti_625x300_25_October_23.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605"
  },
  {
    "id": 14,
    "name": "Shane Watson",
    "role": "All-rounder",
    "team": "Australia",
    "achievements": [
      "ICC T20 World Cup Winner (2009)",
      "Player of the Tournament in IPL 2008",
      "Multiple ICC Player of the Year Awards"
    ],
    "image": "https://images.firstpost.com/uploads/2024/05/Shane-Watson-RCB-2024-05-9ba8139af973256477f8628dbcf6cc3d-1200x675.jpg?im=FitAndFill=(596,336)"
  },
  {
    "id": 15,
    "name": "Chris Gayle",
    "role": "Batter",
    "team": "West Indies",
    "achievements": [
      "Highest individual score in T20Is (175* runs)",
      "Most sixes in T20I cricket",
      "ICC World T20 Champion (2012, 2016)"
    ],
    "image": "https://www.royalchallengers.com/PRRCB01/public/styles/1061x767_landscape/public/2020-04/post_image_2387a61.jpg?h=b22b6faa&itok=BzFeivOL"
  },
  {
    "id": 16,
    "name": "Yuvraj Singh",
    "role": "Batter",
    "team": "India",
    "achievements": [
      "Player of the Tournament in 2007 ICC World T20",
      "Six sixes in an over against England (2007)",
      "ICC Cricket World Cup Winner (2007, 2011)"
    ],
    "image": "https://images.firstpost.com/wp-content/uploads/2014/05/01_Yuvraj-Singh.jpg?im=FitAndFill=(596,336)"
  },
  {
    "id": 17,
    "name": "Dinesh Karthik",
    "role": "Batter/Wicketkeeper",
    "team": "India",
    "achievements": [
      "Finisher role in 2007 ICC T20 World Cup",
      "Key match-winning performances in IPL finals",
      "Veteran of more than 300 T20 matches"
    ],
    "image": "https://library.sportingnews.com/styles/crop_style_16_9_desktop/s3/2024-03/Dinesh%20Karthik.jpg?h=920929c4&itok=I13vGcki"
  },
  {
    "id": 18,
    "name": "Marnus Labuschagne",
    "role": "Batter",
    "team": "Australia",
    "achievements": [
      "First player to be substituted in Test cricket as a concussion replacement",
      "Number 1 Test batsman (2020)",
      "Player of the Series in 2021 Ashes"
    ],
    "image": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202408/marnus-labuschagne-12312953-16x9_0.jpg?VersionId=BLMvv6WaaVc2gu6vMGii4a9rNElWK7gU&size=690:388"
  },
  {
    "id": 19,
    "name": "Rishabh Pant",
    "role": "Batter/Wicketkeeper",
    "team": "India",
    "achievements": [
      "Match-winning knock in the 2020-21 Brisbane Test",
      "ICC Emerging Cricketer of the Year (2018)",
      "Youngest to score Test centuries in Australia and England"
    ],
    "image": "https://c.ndtvimg.com/2022-04/vbn0i928_rishabh-pant-test-afp_625x300_06_April_22.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605"
  },
];

// Define the route to get batters
router.get('/', (req, res) => {
  const batters = players.filter(player => player.role === "Batter");
  res.json(batters);
});
module.exports = router;
