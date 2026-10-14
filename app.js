// name, team, matches, runs, avg, strike rate, 100s, 50s
const ODI = [
  ["Sachin Tendulkar","IND",463,18426,44.8,86.2,49,96],
  ["Kumar Sangakkara","SL",404,14234,42.0,78.9,25,93],
  ["Virat Kohli","IND",295,14181,58.2,93.5,51,74],
  ["Ricky Ponting","AUS",375,13704,42.0,80.4,30,82],
  ["Sanath Jayasuriya","SL",445,13430,32.4,91.2,28,68],
  ["Mahela Jayawardene","SL",448,12650,33.4,78.9,19,77],
  ["Inzamam-ul-Haq","PAK",378,11739,39.5,74.2,10,83],
  ["Jacques Kallis","SA",328,11579,44.4,72.9,17,86],
  ["Sourav Ganguly","IND",311,11363,41.0,73.7,22,72],
  ["Rohit Sharma","IND",273,11168,48.8,92.8,32,58],
  ["Rahul Dravid","IND",344,10889,39.2,71.2,12,83],
  ["MS Dhoni","IND",350,10773,50.6,87.6,10,73],
  ["Chris Gayle","WI",301,10480,37.8,87.2,25,54],
  ["Brian Lara","WI",299,10405,40.5,79.5,19,63],
  ["Tillakaratne Dilshan","SL",330,10290,39.3,86.2,22,47],
  ["Mohammad Yousuf","PAK",288,9720,41.7,75.1,15,64],
  ["Adam Gilchrist","AUS",287,9619,35.9,96.9,16,55],
  ["AB de Villiers","SA",228,9577,53.5,101.1,25,53],
  ["Mohammad Azharuddin","IND",334,9378,36.9,74.0,7,58],
  ["Aravinda de Silva","SL",308,9284,34.9,81.1,11,64],
  ["Saeed Anwar","PAK",247,8824,39.2,80.7,20,43],
  ["Shivnarine Chanderpaul","WI",268,8778,41.6,70.7,11,59],
  ["Yuvraj Singh","IND",304,8701,36.6,87.7,14,52],
  ["Desmond Haynes","WI",238,8648,41.4,63.1,17,57],
  ["Ross Taylor","NZ",236,8607,47.5,83.3,21,51],
  ["Marvan Atapattu","SL",268,8529,37.6,67.7,11,59],
  ["Mark Waugh","AUS",244,8500,39.4,76.9,18,50],
  ["Tamim Iqbal","BAN",243,8357,36.6,78.5,14,56],
  ["Virender Sehwag","IND",251,8273,35.1,104.3,15,38],
  ["Hashim Amla","SA",181,8113,49.5,88.4,27,39],
  ["Herschelle Gibbs","SA",248,8094,36.1,83.3,21,37],
  ["Shahid Afridi","PAK",398,8064,23.6,117.0,6,39],
  ["Stephen Fleming","NZ",280,8037,32.4,71.5,8,49],
  ["Michael Clarke","AUS",245,7981,44.6,79.0,8,58],
  ["Mushfiqur Rahim","BAN",271,7792,36.9,79.6,9,49],
  ["Eoin Morgan","ENG",248,7701,39.3,91.2,14,42],
  ["Shakib Al Hasan","BAN",247,7570,37.3,82.5,9,56],
  ["Steve Waugh","AUS",325,7569,32.9,75.9,3,45],
  ["Shoaib Malik","PAK",287,7534,34.6,81.9,9,44],
  ["Arjuna Ranatunga","SL",269,7456,35.8,77.9,4,49],
  ["Javed Miandad","PAK",233,7381,41.7,67.0,8,54],
  ["Martin Guptill","NZ",198,7346,41.7,87.6,18,39],
  ["Younis Khan","PAK",265,7249,31.2,75.3,7,48],
  ["Saleem Malik","PAK",283,7170,32.9,76.4,5,47],
  ["Nathan Astle","NZ",223,7090,34.9,72.6,16,41],
  ["Kane Williamson","NZ",170,7000,48.4,81.4,15,45],
  ["Graeme Smith","SA",197,6989,38.0,80.8,10,47],
  ["Upul Tharanga","SL",235,6951,33.7,75.9,15,37],
  ["David Warner","AUS",161,6932,45.0,97.3,22,33],
  ["Michael Bevan","AUS",232,6912,53.6,74.2,6,46],
  ["Joe Root","ENG",171,6800,50.2,87.0,16,40],
  ["Gary Kirsten","SA",185,6798,40.9,72.0,13,45],
  ["Shikhar Dhawan","IND",167,6793,44.1,91.4,17,39],
  ["Andy Flower","ZIM",213,6786,35.3,74.6,4,55],
  ["Quinton de Kock","SA",155,6770,45.7,96.1,21,30],
  ["Viv Richards","WI",187,6721,47.0,90.2,11,45],
  ["Allan Border","AUS",273,6524,30.6,71.4,3,39],
  ["Richie Richardson","WI",224,6248,33.4,63.7,5,44],
  ["Matthew Hayden","AUS",161,6133,43.8,78.9,10,36],
  ["Brendon McCullum","NZ",260,6083,30.4,96.4,5,32],
  ["Dean Jones","AUS",164,6068,44.6,72.6,7,46],
  ["David Boon","AUS",181,5964,37.0,65.1,5,37],
  ["Babar Azam","PAK",128,5957,56.7,88.9,19,35],
  ["Jonty Rhodes","SA",245,5935,35.1,80.9,2,33],
  ["Ramnaresh Sarwan","WI",181,5804,42.7,75.7,5,38],
  ["Steve Smith","AUS",170,5800,43.3,87.2,12,35],
  ["Carl Hooper","WI",227,5761,35.3,76.6,7,29],
  ["Shane Watson","AUS",190,5757,40.5,90.4,9,33],
  ["Suresh Raina","IND",226,5615,35.3,93.5,5,36],
  ["Faf du Plessis","SA",143,5507,47.5,88.6,12,35],
  ["Michael Hussey","AUS",185,5442,48.2,87.2,3,39],
  ["Aaron Finch","AUS",146,5406,38.9,87.7,17,30],
  ["Ian Bell","ENG",161,5416,37.9,77.2,4,35],
  ["Gautam Gambhir","IND",147,5238,39.7,85.3,11,34],
  ["Shai Hope","WI",128,5177,50.3,78.2,16,25],
  ["Gordon Greenidge","WI",128,5134,45.0,64.9,11,31],
  ["Misbah-ul-Haq","PAK",162,5122,43.4,73.8,0,42],
  ["Paul Collingwood","ENG",197,5092,35.4,76.9,5,26],
  ["Jos Buttler","ENG",181,5022,40.1,118.0,11,26],
  ["Chris Cairns","NZ",215,4950,29.5,84.3,4,26],
  ["Martin Crowe","NZ",143,4704,38.6,72.6,4,34],
  ["David Miller","SA",173,4458,42.5,103.3,6,24],
  ["Kevin Pietersen","ENG",136,4440,40.7,86.6,9,25],
  ["Marcus Trescothick","ENG",123,4335,37.4,85.2,12,21],
  ["Graham Gooch","ENG",125,4290,36.0,61.9,8,23],
  ["Jason Roy","ENG",116,4271,39.9,105.5,12,21],
  ["Glenn Maxwell","AUS",142,3934,35.4,126.9,4,23],
  ["Jonny Bairstow","ENG",107,3868,42.0,104.1,11,17],
  ["Kapil Dev","IND",225,3783,23.8,95.1,1,14],
  ["Wasim Akram","PAK",356,3717,16.5,88.3,0,6],
  ["Imran Khan","PAK",175,3709,33.4,72.7,1,19],
  ["Mohammad Nabi","AFG",167,3600,27.5,86.8,2,17],
  ["Lance Klusener","SA",171,3576,41.1,89.9,2,19],
  ["Fakhar Zaman","PAK",82,3492,46.6,93.2,11,16],
  ["Ben Stokes","ENG",114,3463,41.2,96.3,5,24],
  ["Andrew Flintoff","ENG",141,3394,32.0,88.8,3,18],
  ["Sunil Gavaskar","IND",108,3092,35.1,62.3,1,27],
  ["Dwayne Bravo","WI",164,2968,25.4,82.4,2,10],
  ["KL Rahul","IND",77,2851,49.2,87.6,7,18],
  ["Mitchell Marsh","AUS",93,2795,35.8,95.0,3,18],
  ["Shubman Gill","IND",55,2775,59.0,99.0,8,15],
  ["Ravindra Jadeja","IND",197,2756,32.8,85.0,0,13],
  ["Kieron Pollard","WI",123,2706,26.0,94.4,3,12],
  ["Travis Head","AUS",69,2645,43.4,106.1,6,16],
  ["Zaheer Abbas","PAK",62,2572,47.6,84.8,7,13],
  ["Shreyas Iyer","IND",62,2421,47.5,101.3,5,18],
  ["Mohammad Rizwan","PAK",74,2088,40.1,89.2,3,13],
  ["Nicholas Pooran","WI",61,1983,39.7,98.7,3,11],
  ["Clive Lloyd","WI",87,1977,39.5,81.2,1,11],
  ["Hardik Pandya","IND",86,1769,34.0,110.3,0,11],
  ["Rashid Khan","AFG",105,1344,19.8,105.1,0,5],
  ["Rishabh Pant","IND",31,871,33.5,106.5,1,5]
];

const TEST = [
  ["Sachin Tendulkar","IND",200,15921,53.8,54.0,51,68],
  ["Ricky Ponting","AUS",168,13378,51.9,58.7,41,62],
  ["Jacques Kallis","SA",166,13289,55.4,45.0,45,58],
  ["Rahul Dravid","IND",164,13288,52.3,42.5,36,63],
  ["Joe Root","ENG",150,12972,50.9,56.5,36,65],
  ["Alastair Cook","ENG",161,12472,45.4,46.9,33,57],
  ["Kumar Sangakkara","SL",134,12400,57.4,53.9,38,52],
  ["Brian Lara","WI",131,11953,52.9,60.5,34,48],
  ["Shivnarine Chanderpaul","WI",164,11867,51.4,43.3,30,66],
  ["Mahela Jayawardene","SL",149,11814,49.8,51.4,34,50],
  ["Allan Border","AUS",156,11174,50.6,56.0,27,63],
  ["Steve Waugh","AUS",168,10927,51.1,48.6,32,50],
  ["Steve Smith","AUS",109,10271,56.0,54.0,36,41],
  ["Sunil Gavaskar","IND",125,10122,51.1,66.0,34,45],
  ["Younis Khan","PAK",118,10099,52.1,52.1,34,33],
  ["Hashim Amla","SA",124,9282,46.6,50.0,28,41],
  ["Kane Williamson","NZ",105,9276,54.9,51.0,33,37],
  ["Graeme Smith","SA",117,9265,48.3,59.7,27,38],
  ["Virat Kohli","IND",123,9230,46.9,55.6,30,31],
  ["Graham Gooch","ENG",118,8900,42.6,50.0,20,46],
  ["Javed Miandad","PAK",124,8832,52.6,53.0,23,43],
  ["Inzamam-ul-Haq","PAK",120,8830,49.6,54.0,25,46],
  ["David Warner","AUS",112,8786,44.6,70.2,26,37],
  ["VVS Laxman","IND",134,8781,46.0,49.3,17,56],
  ["AB de Villiers","SA",114,8765,50.7,54.5,22,46],
  ["Michael Clarke","AUS",115,8643,49.1,55.9,28,27],
  ["Matthew Hayden","AUS",103,8625,50.7,60.1,30,29],
  ["Virender Sehwag","IND",104,8586,49.3,82.2,23,32],
  ["Viv Richards","WI",121,8540,50.2,86.1,24,45],
  ["Alec Stewart","ENG",133,8463,39.5,50.0,15,45],
  ["David Gower","ENG",117,8231,44.3,52.0,18,39],
  ["Kevin Pietersen","ENG",104,8181,47.3,61.7,23,35],
  ["Geoffrey Boycott","ENG",108,8114,47.7,36.0,22,42],
  ["Gary Sobers","WI",93,8032,57.8,65.0,26,30],
  ["Mark Waugh","AUS",128,8029,41.8,53.0,20,47],
  ["Ian Bell","ENG",118,7727,42.7,49.0,22,46],
  ["Justin Langer","AUS",105,7696,45.3,54.0,23,30],
  ["Ross Taylor","NZ",112,7683,44.7,59.2,19,35],
  ["Colin Cowdrey","ENG",114,7624,44.1,44.0,22,38],
  ["Gordon Greenidge","WI",108,7558,44.7,54.0,19,34],
  ["Mohammad Yousuf","PAK",90,7530,52.3,52.4,24,33],
  ["Mark Taylor","AUS",104,7525,43.5,45.0,19,40],
  ["Clive Lloyd","WI",110,7515,46.7,58.0,19,39],
  ["Desmond Haynes","WI",116,7487,42.3,48.0,18,39],
  ["David Boon","AUS",107,7422,43.7,48.0,21,32],
  ["Gary Kirsten","SA",101,7289,45.3,43.0,21,34],
  ["Wally Hammond","ENG",85,7249,58.5,55.0,22,24],
  ["Chris Gayle","WI",103,7214,42.2,60.0,15,37],
  ["Sourav Ganguly","IND",113,7212,42.2,51.2,16,35],
  ["Cheteshwar Pujara","IND",103,7195,43.6,44.4,19,35],
  ["Stephen Fleming","NZ",111,7172,40.1,46.0,9,46],
  ["Azhar Ali","PAK",97,7142,42.3,41.9,19,35],
  ["Greg Chappell","AUS",87,7110,53.9,55.0,24,31],
  ["Don Bradman","AUS",52,6996,99.9,71.4,29,13],
  ["Sanath Jayasuriya","SL",110,6973,40.1,65.1,14,31],
  ["Len Hutton","ENG",79,6971,56.7,45.0,19,33],
  ["Dilip Vengsarkar","IND",116,6868,42.1,45.0,17,35],
  ["Ben Stokes","ENG",105,6508,35.8,59.2,13,31],
  ["Brendon McCullum","NZ",101,6453,38.6,64.6,12,31],
  ["Aravinda de Silva","SL",93,6361,42.9,57.0,20,22],
  ["Michael Hussey","AUS",79,6235,51.5,50.0,19,29],
  ["Mohammad Azharuddin","IND",99,6215,45.0,62.0,22,21],
  ["Herschelle Gibbs","SA",90,6167,41.9,51.0,14,26],
  ["Neil Harvey","AUS",79,6149,48.4,50.0,21,24],
  ["Gundappa Viswanath","IND",91,6080,41.9,45.0,14,35],
  ["Saleem Malik","PAK",103,5768,45.4,52.0,15,29],
  ["Adam Gilchrist","AUS",96,5570,47.6,82.0,17,26],
  ["Tom Latham","NZ",84,5550,39.5,47.0,13,29],
  ["Marvan Atapattu","SL",90,5502,39.0,44.5,16,17],
  ["Tillakaratne Dilshan","SL",87,5492,40.9,65.0,16,23],
  ["Thilan Samaraweera","SL",81,5462,48.8,45.0,14,30],
  ["Usman Khawaja","AUS",73,5451,45.8,49.0,15,26],
  ["Martin Crowe","NZ",77,5444,45.4,48.0,17,18],
  ["Dean Elgar","SA",86,5347,37.9,47.0,14,23],
  ["Ian Chappell","AUS",75,5345,42.4,50.0,14,26],
  ["Kapil Dev","IND",131,5248,31.0,79.3,8,27],
  ["Misbah-ul-Haq","PAK",75,5222,46.6,44.5,10,39],
  ["Ajinkya Rahane","IND",85,5077,38.5,49.5,12,26],
  ["Zaheer Abbas","PAK",78,5062,44.8,55.0,12,20],
  ["MS Dhoni","IND",90,4876,38.1,59.1,6,33],
  ["Andy Flower","ZIM",63,4794,51.5,45.0,12,27],
  ["Everton Weekes","WI",48,4455,58.6,60.0,15,19],
  ["Rohit Sharma","IND",64,4276,42.8,56.4,12,18],
  ["Faf du Plessis","SA",69,4163,40.0,46.0,10,21],
  ["Gautam Gambhir","IND",58,4154,41.9,51.2,9,22],
  ["Marnus Labuschagne","AUS",50,4114,49.6,52.4,11,20],
  ["Babar Azam","PAK",55,3998,44.4,55.0,9,26],
  ["Imran Khan","PAK",88,3807,37.7,50.0,6,18],
  ["Ravichandran Ashwin","IND",105,3422,26.3,54.0,6,14],
  ["Ravindra Jadeja","IND",77,3250,36.5,58.5,4,21],
  ["Wasim Akram","PAK",104,2898,22.6,65.0,3,7],
  ["Rishabh Pant","IND",38,2693,44.1,74.1,6,12],
  ["Yuvraj Singh","IND",40,1900,33.9,58.0,3,11],
  ["Shubman Gill","IND",29,1800,36.7,60.0,5,7],
  ["Yashasvi Jaiswal","IND",17,1560,55.7,68.0,4,8]
];

const T20 = [
  ["Rohit Sharma","IND",159,4231,32.1,140.9,5,32],
  ["Babar Azam","PAK",128,4223,39.8,129.2,3,36],
  ["Virat Kohli","IND",125,4188,48.7,137.0,1,38],
  ["Paul Stirling","IRE",145,3601,27.7,135.2,1,23],
  ["Martin Guptill","NZ",122,3531,31.6,135.7,2,20],
  ["Mohammad Rizwan","PAK",102,3313,48.7,126.5,1,29],
  ["David Warner","AUS",110,3277,33.4,142.5,1,28],
  ["Jos Buttler","ENG",124,3200,34.0,144.0,1,25],
  ["Aaron Finch","AUS",103,3120,34.3,142.5,2,19],
  ["Suryakumar Yadav","IND",80,2600,37.5,167.0,4,21],
  ["Quinton de Kock","SA",92,2584,31.5,138.1,1,16],
  ["Kane Williamson","NZ",93,2575,33.4,123.1,0,18],
  ["Shakib Al Hasan","BAN",129,2551,23.2,122.4,0,13],
  ["Glenn Maxwell","AUS",115,2500,29.0,155.0,5,14],
  ["Eoin Morgan","ENG",115,2458,28.6,136.2,0,14],
  ["Mahmudullah","BAN",141,2444,23.5,117.7,0,8],
  ["David Miller","SA",125,2437,33.8,140.5,2,7],
  ["Shoaib Malik","PAK",124,2435,31.2,125.6,0,9],
  ["KL Rahul","IND",72,2265,37.8,139.1,2,22],
  ["Mohammad Nabi","AFG",129,2165,22.8,136.5,0,6],
  ["Brendon McCullum","NZ",71,2140,35.7,136.2,2,13],
  ["Nicholas Pooran","WI",98,2079,26.3,136.4,0,13],
  ["Alex Hales","ENG",75,2074,31.0,138.4,1,12],
  ["Sikandar Raza","ZIM",91,2030,25.4,134.2,1,14],
  ["Ross Taylor","NZ",102,1909,26.2,122.4,0,7],
  ["Chris Gayle","WI",79,1899,27.9,137.5,2,14],
  ["Dawid Malan","ENG",62,1892,36.4,132.5,1,16],
  ["Tillakaratne Dilshan","SL",80,1889,28.2,120.5,1,13],
  ["Glenn Phillips","NZ",78,1875,32.9,143.2,2,10],
  ["Fakhar Zaman","PAK",92,1848,23.4,132.8,0,11],
  ["Najibullah Zadran","AFG",107,1830,30.5,136.0,0,8],
  ["Kusal Perera","SL",72,1800,26.5,131.0,0,14],
  ["Shikhar Dhawan","IND",68,1759,27.9,126.3,0,11],
  ["Colin Munro","NZ",65,1724,31.3,156.4,3,11],
  ["Umar Akmal","PAK",84,1690,26.0,122.7,0,8],
  ["AB de Villiers","SA",78,1672,26.1,135.2,0,10],
  ["Rahmanullah Gurbaz","AFG",63,1657,26.3,134.8,1,10],
  ["Hardik Pandya","IND",104,1641,26.9,140.9,0,4],
  ["MS Dhoni","IND",98,1617,37.6,126.1,0,2],
  ["Suresh Raina","IND",78,1605,29.1,134.8,1,5],
  ["Kieron Pollard","WI",101,1569,25.3,135.1,0,6],
  ["Mitchell Marsh","AUS",60,1563,33.3,135.5,0,9],
  ["Faf du Plessis","SA",50,1528,35.5,134.4,1,10],
  ["Jason Roy","ENG",64,1522,24.2,137.6,0,8],
  ["Jonny Bairstow","ENG",70,1512,29.6,137.8,0,9],
  ["Mahela Jayawardene","SL",55,1493,31.8,133.2,1,9],
  ["Shane Watson","AUS",58,1462,29.2,145.3,1,10],
  ["Dasun Shanaka","SL",95,1450,21.3,121.8,0,5],
  ["Shahid Afridi","PAK",99,1416,17.9,150.7,0,4],
  ["Devon Conway","NZ",50,1408,39.1,128.5,0,10],
  ["Kumar Sangakkara","SL",56,1382,31.4,119.6,0,8],
  ["Daryl Mitchell","NZ",68,1370,26.3,138.0,0,7],
  ["Dwayne Bravo","WI",91,1255,22.0,115.4,0,4],
  ["Aiden Markram","SA",48,1250,33.8,146.5,0,9],
  ["Moeen Ali","ENG",92,1229,21.6,142.4,0,7],
  ["Rishabh Pant","IND",76,1209,23.2,127.3,0,3],
  ["Yuvraj Singh","IND",58,1177,28.0,136.4,0,8],
  ["Marcus Stoinis","AUS",65,1140,31.6,147.2,0,5],
  ["Tim David","AUS",49,1120,36.1,162.0,0,6],
  ["Steve Smith","AUS",67,1094,24.9,125.5,0,5],
  ["Travis Head","AUS",38,1092,34.1,159.2,0,6],
  ["Andre Russell","WI",82,1033,21.5,163.7,0,3],
  ["Heinrich Klaasen","SA",58,1000,24.4,142.8,0,5],
  ["Shimron Hetmyer","WI",60,940,21.4,122.0,0,5],
  ["Liam Livingstone","ENG",52,850,25.0,148.5,1,2],
  ["Sanju Samson","IND",37,810,25.3,151.0,3,2],
  ["Ishan Kishan","IND",32,796,25.7,124.4,0,6],
  ["Yashasvi Jaiswal","IND",23,723,36.1,164.3,1,5],
  ["Shadab Khan","PAK",104,650,18.5,140.0,0,1],
  ["Tilak Varma","IND",20,616,51.3,152.0,2,2],
  ["Ben Stokes","ENG",43,585,21.7,128.3,0,1],
  ["Shubman Gill","IND",21,578,30.4,139.3,1,3],
  ["Rinku Singh","IND",26,499,55.4,175.1,0,3],
  ["Rashid Khan","AFG",93,460,14.5,130.0,0,0]
];

const mkD = a => a.map(r => ({
  name: r[0],
  team: r[1],
  m: r[2],
  runs: r[3],
  avg: r[4],
  sr: r[5],
  c: r[6],
  f: r[7],
  balls: Math.round(r[3] / ((r[5] || 100) / 100)) || r[3],
  outs: Math.max(1, Math.round(r[3] / (r[4] || 40))) || 1,
  matchRuns: 0
}));

const SETS = {ODI: mkD(ODI), Test: mkD(TEST), T20I: mkD(T20)};
let D = SETS.ODI, FMT = "ODI";
const COLS = [["name","Player"],["team","Team"],["m","Mat"],["runs","Runs"],["avg","Avg"],["sr","SR"],["c","100s"],["f","50s"]];
const M = [["runs","Runs"],["avg","Average"],["sr","Strike rate"],["c","Hundreds"],["f","Fifties"],["m","Matches"]];
const $ = id => document.getElementById(id);
let A = D[0].name, B = D[1].name, sk = "runs", sd = -1, charts = {};
const get = n => D.find(p => p.name === n);
const fmt = (k, v) => k === "runs" || k === "m" ? v.toLocaleString("en-IN") : (k === "avg" || k === "sr") ? v.toFixed(1) : v;
const col = n => getComputedStyle(document.documentElement).getPropertyValue(n).trim();

try {
  const s = localStorage.getItem("crease-theme");
  if (s) document.documentElement.dataset.theme = s;
} catch (e) {}

$("theme").onclick = () => {
  const d = document.documentElement;
  const dark = getComputedStyle(d).getPropertyValue("--bg").trim() === "#0d1a14";
  d.dataset.theme = dark ? "light" : "dark";
  try { localStorage.setItem("crease-theme", d.dataset.theme); } catch (e) {}
  draw();
};

function fillSelect(selId, selectedVal) {
  const sel = $(selId);
  if (!sel) return;
  sel.innerHTML = "";
  D.forEach(p => {
    const o = document.createElement("option");
    o.value = o.textContent = p.name;
    if (p.name === selectedVal) o.selected = true;
    sel.append(o);
  });
}

let comboA, comboB;
function setupCombo(prefix, getPlayer, setPlayer) {
  const combo = $(`combo-${prefix}`);
  const input = $(`${prefix}-input`);
  const menu = $(`${prefix}-menu`);
  const sel = $(prefix);
  if (!combo || !input || !menu) return null;

  const arrow = combo.querySelector(".combo-arrow");

  function renderMenu(query = "") {
    const q = query.trim().toLowerCase();
    const matches = D.filter(p => p.name.toLowerCase().includes(q));
    const current = getPlayer();
    if (!matches.length) {
      menu.innerHTML = '<div class="combo-empty">No player found</div>';
      return;
    }
    menu.innerHTML = matches.map((p, idx) => `
      <div class="combo-item${p.name === current ? " selected" : ""}${idx === 0 && q ? " active" : ""}" data-name="${p.name}">
        <span>${p.name}</span>
        <span class="tag">${p.team}</span>
      </div>
    `).join("");
  }

  function openMenu() {
    document.querySelectorAll(".combo.open").forEach(c => {
      if (c !== combo) c.classList.remove("open");
    });
    combo.classList.add("open");
    const isCurrent = input.value.trim().toLowerCase() === getPlayer().toLowerCase();
    renderMenu(isCurrent ? "" : input.value);
  }

  function closeMenu() {
    combo.classList.remove("open");
    const q = input.value.trim().toLowerCase();
    if (!q) {
      input.value = getPlayer();
      return;
    }
    const match = D.find(p => p.name.toLowerCase() === q) || D.find(p => p.name.toLowerCase().includes(q));
    if (match) {
      setPlayer(match.name);
      if (sel) sel.value = match.name;
      input.value = match.name;
      draw();
    } else {
      input.value = getPlayer();
    }
  }

  function selectPlayer(name) {
    setPlayer(name);
    input.value = name;
    if (sel) sel.value = name;
    combo.classList.remove("open");
    draw();
  }

  if (arrow) {
    arrow.onclick = e => {
      e.stopPropagation();
      if (combo.classList.contains("open")) {
        closeMenu();
      } else {
        openMenu();
        input.focus();
        input.select();
      }
    };
  }

  input.onclick = e => {
    e.stopPropagation();
    if (!combo.classList.contains("open")) {
      openMenu();
      input.select();
    }
  };

  input.onfocus = () => {
    if (!combo.classList.contains("open")) {
      openMenu();
      input.select();
    }
  };

  input.onblur = () => {
    setTimeout(() => {
      if (!combo.contains(document.activeElement)) {
        closeMenu();
      }
    }, 160);
  };

  input.oninput = () => {
    if (!combo.classList.contains("open")) combo.classList.add("open");
    renderMenu(input.value);
    const exact = D.find(p => p.name.toLowerCase() === input.value.trim().toLowerCase());
    if (exact) {
      setPlayer(exact.name);
      if (sel) sel.value = exact.name;
      draw();
    }
  };

  input.onkeydown = e => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (!combo.classList.contains("open")) { openMenu(); return; }
      const active = menu.querySelector(".combo-item.active") || menu.querySelector(".combo-item");
      const next = active ? active.nextElementSibling : menu.querySelector(".combo-item");
      if (next && next.classList.contains("combo-item")) {
        if (active) active.classList.remove("active");
        next.classList.add("active");
        next.scrollIntoView({ block: "nearest" });
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const active = menu.querySelector(".combo-item.active");
      const prev = active ? active.previousElementSibling : null;
      if (prev && prev.classList.contains("combo-item")) {
        active.classList.remove("active");
        prev.classList.add("active");
        prev.scrollIntoView({ block: "nearest" });
      }
    } else if (e.key === "Enter") {
      e.preventDefault();
      const active = menu.querySelector(".combo-item.active") || menu.querySelector(".combo-item");
      if (active && active.dataset.name) {
        selectPlayer(active.dataset.name);
      } else {
        const q = input.value.trim().toLowerCase();
        if (q) {
          const match = D.find(p => p.name.toLowerCase().includes(q));
          if (match) selectPlayer(match.name);
        }
      }
    } else if (e.key === "Escape") {
      closeMenu();
    }
  };

  menu.onclick = e => {
    e.stopPropagation();
    const item = e.target.closest(".combo-item");
    if (item && item.dataset.name) {
      selectPlayer(item.dataset.name);
    }
  };

  return {
    sync() {
      if (document.activeElement !== input) {
        input.value = getPlayer();
      }
    },
    close() {
      if (combo.classList.contains("open")) {
        closeMenu();
      }
    }
  };
}

comboA = setupCombo("pa", () => A, name => { A = name; });
comboB = setupCombo("pb", () => B, name => { B = name; });

document.addEventListener("click", e => {
  if (!e.target.closest(".combo")) {
    if (comboA) comboA.close();
    if (comboB) comboB.close();
  }
});

function fill() {
  ["pa","pb"].forEach(i => fillSelect(i, i === "pa" ? A : B));
  if (comboA) comboA.sync();
  if (comboB) comboB.sync();
  $("team").innerHTML = '<option value="">All teams</option>';
  [...new Set(D.map(p => p.team))].sort().forEach(t => {
    const o = document.createElement("option");
    o.value = o.textContent = t;
    $("team").append(o);
  });
}
fill();

["q","team","avg","h"].forEach(i => $(i).oninput = () => draw());
$("reset").onclick = () => {
  $("q").value = "";
  $("team").value = "";
  $("avg").value = 0;
  $("h").value = 0;
  draw();
};

$("th").innerHTML = COLS.map(c => `<th data-k="${c[0]}">${c[1]}</th>`).join("");
$("th").onclick = e => {
  const k = e.target.dataset.k;
  if (!k) return;
  sd = sk === k ? -sd : (k === "name" || k === "team" ? 1 : -1);
  sk = k;
  draw();
};

function filtered() {
  const q = ($("q").value || "").trim().toLowerCase();
  const t = $("team").value;
  const a = +$("avg").value;
  const h = +$("h").value;
  return D.filter(p => p.name.toLowerCase().includes(q) && (!t || p.team === t) && p.avg >= a && p.c >= h)
    .sort((x, y) => (x[sk] > y[sk] ? 1 : -1) * sd);
}

function mk(id, cfg, isLiveTick) {
  if (charts[id] && charts[id].config && charts[id].config.type === cfg.type) {
    charts[id].data = cfg.data;
    charts[id].options = cfg.options;
    charts[id].update(isLiveTick ? 'none' : 'default');
  } else {
    if (charts[id]) charts[id].destroy();
    charts[id] = new Chart($(id), cfg);
  }
}

// Live simulation active player tracking
const ACTIVE_POOL = {
  ODI: ["Virat Kohli", "Rohit Sharma", "Babar Azam", "Shubman Gill", "Joe Root", "Steve Smith", "Shai Hope", "KL Rahul"],
  Test: ["Joe Root", "Steve Smith", "Virat Kohli", "Kane Williamson", "Babar Azam", "Rohit Sharma", "Ben Stokes", "Rishabh Pant"],
  T20I: ["Suryakumar Yadav", "Travis Head", "Heinrich Klaasen", "Nicholas Pooran", "Jos Buttler", "Hardik Pandya", "Rinku Singh", "Glenn Maxwell"]
};
let livePlayerName = null;

function getLivePlayer() {
  const pool = ACTIVE_POOL[FMT] || [];
  if (pool.includes(A)) return A;
  if (pool.includes(B)) return B;
  if (!livePlayerName || !pool.includes(livePlayerName)) {
    livePlayerName = pool[0];
  }
  return livePlayerName;
}

function draw(isLiveTick = false, liveTarget = null) {
  if ($("pa")) $("pa").value = A;
  if ($("pb")) $("pb").value = B;
  if (comboA) comboA.sync();
  if (comboB) comboB.sync();
  $("avgv").textContent = $("avg").value;
  $("hv").textContent = $("h").value;

  const a = get(A) || D[0];
  const b = get(B) || D[1];
  const ca = col("--a"), cb = col("--b"), ink = col("--ink"), grid = "rgba(128,128,128,.25)";
  Chart.defaults.color = ink;
  Chart.defaults.font.family = "'DM Sans',sans-serif";

  // Head to Head
  let wa = 0, wb = 0;
  $("cmp").innerHTML = M.map(([k, l]) => {
    const mx = Math.max(a[k], b[k]) || 1;
    const w = a[k] > b[k] ? "a" : a[k] < b[k] ? "b" : "";
    if (w === "a") wa++;
    if (w === "b") wb++;
    return `<div class="row"><div class="side l ${w==="a"?"win":""}"><div class="bar" style="width:${a[k]/mx*100}%;max-width:calc(100% - 60px)"></div><b>${fmt(k,a[k])}</b></div><div class="lab">${l}</div><div class="side r ${w==="b"?"win":""}"><div class="bar" style="width:${b[k]/mx*100}%;max-width:calc(100% - 60px)"></div><b>${fmt(k,b[k])}</b></div></div>`;
  }).join("");

  $("verdict").innerHTML = A === B
    ? "Pick two different players."
    : wa === wb
      ? `${a.name} and ${b.name} are level.<small>${wa} categories each.</small>`
      : `${wa > wb ? a.name : b.name} takes it, ${Math.max(wa,wb)}–${Math.min(wa,wb)}.<small>Wins are counted across ${M.length} categories. Strike rate and average say more about quality than raw runs.</small>`;

  const mxs = M.map(([k]) => Math.max(...D.map(p => p[k])) || 1);
  const rd = p => M.map(([k], i) => +(p[k] / mxs[i] * 100).toFixed(1));

  try {
    mk("radar", {
      type: "radar",
      data: {
        labels: M.map(m => m[1]),
        datasets: [
          {label: a.name, data: rd(a), borderColor: ca, backgroundColor: ca + "33"},
          {label: b.name, data: rd(b), borderColor: cb, backgroundColor: cb + "33"}
        ]
      },
      options: {
        maintainAspectRatio: false,
        scales: {
          r: {min: 0, max: 100, ticks: {display: false}, grid: {color: grid}, angleLines: {color: grid}, pointLabels: {color: ink}}
        },
        plugins: {title: {display: true, text: "Profile (100 = best in dataset)", color: ink}}
      }
    }, isLiveTick);
  } catch (err) {
    console.warn("Radar chart error:", err);
  }

  const f = filtered();
  try {
    mk("bar", {
      type: "bar",
      data: {
        labels: f.slice(0, 8).map(p => p.name.split(" ").slice(-1)[0]),
        datasets: [{
          label: "Runs",
          data: f.slice(0, 8).map(p => p.runs),
          backgroundColor: f.slice(0, 8).map(p => p.name === A ? ca : p.name === B ? cb : "#8aa097")
        }]
      },
      options: {
        maintainAspectRatio: false,
        indexAxis: "y",
        plugins: {
          legend: {display: false},
          title: {display: true, text: "Career runs (filtered, A and B highlighted)", color: ink}
        },
        scales: {x: {grid: {color: grid}}, y: {grid: {display: false}}}
      }
    }, isLiveTick);
  } catch (err) {
    console.warn("Bar chart error:", err);
  }

  try {
    const hasData = f.length > 0;
    const minAvg = hasData ? Math.max(0, Math.floor(Math.min(...f.map(p => p.avg))) - 3) : 0;
    const minSr = hasData ? Math.max(0, Math.floor(Math.min(...f.map(p => p.sr))) - 5) : 0;

    mk("scatter", {
      type: "bubble",
      data: {
        datasets: [{
          label: "Players",
          data: f.map(p => ({x: p.avg, y: p.sr, r: Math.max(3, 4 + p.c / 4), n: p.name})),
          backgroundColor: f.map(p => p.name === A ? ca : p.name === B ? cb : "#8aa097aa")
        }]
      },
      options: {
        maintainAspectRatio: false,
        plugins: {
          legend: {display: false},
          tooltip: {
            callbacks: {
              label: c => c && c.raw ? `${c.raw.n || ""}: avg ${c.raw.x || 0}, SR ${c.raw.y || 0}` : ""
            }
          }
        },
        scales: {
          x: {
            title: {display: true, text: "Batting average"},
            suggestedMin: minAvg,
            grid: {color: grid}
          },
          y: {
            title: {display: true, text: "Strike rate"},
            suggestedMin: minSr,
            grid: {color: grid}
          }
        }
      }
    }, isLiveTick);
  } catch (err) {
    console.warn("Scatter chart error:", err);
  }

  // Table
  document.querySelectorAll("#th th").forEach(t => {
    t.classList.toggle("s", t.dataset.k === sk);
    t.textContent = COLS.find(c => c[0] === t.dataset.k)[1] + (t.dataset.k === sk ? (sd > 0 ? " ▲" : " ▼") : "");
  });

  const currentLive = getLivePlayer();
  $("tb").innerHTML = f.length
    ? f.map(p => {
        const isLive = p.name === currentLive;
        const flashClass = (isLiveTick && p.name === liveTarget) ? " live-flash" : "";
        return `<tr data-n="${p.name}" class="${p.name === A ? "pa" : p.name === B ? "pb" : ""}${flashClass}" tabindex="0">
          <td>${p.name}${isLive ? '<span class="live-dot" title="Live match simulation in progress"></span><span class="live-badge">LIVE</span>' : ''}</td>
          <td><span class="tag">${p.team}</span></td>
          <td>${p.m}</td>
          <td class="${flashClass}">${fmt("runs", p.runs)}</td>
          <td>${p.avg.toFixed(1)}</td>
          <td>${p.sr.toFixed(1)}</td>
          <td>${p.c}</td>
          <td>${p.f}</td>
        </tr>`;
      }).join("")
    : `<tr><td colspan="8" class="empty">No players match. Lower the minimum average or hundreds, or reset the filters.</td></tr>`;
}

let flip = false;
$("tb").onclick = e => {
  const r = e.target.closest("tr");
  if (!r || !r.dataset.n) return;
  if (flip) {
    B = r.dataset.n;
    fillSelect("pb", B);
    if (comboB) comboB.sync();
  } else {
    A = r.dataset.n;
    fillSelect("pa", A);
    if (comboA) comboA.sync();
  }
  flip = !flip;
  draw();
};

$("csv").onclick = () => {
  const f = filtered();
  const t = [COLS.map(c => c[1]).join(",")].concat(f.map(p => COLS.map(c => p[c[0]]).join(","))).join("\n");
  const u = URL.createObjectURL(new Blob([t], {type: "text/csv"}));
  const a = document.createElement("a");
  a.href = u;
  a.download = "players.csv";
  a.click();
};

function setFmt(f) {
  FMT = f;
  D = SETS[f];
  const ok = n => D.some(p => p.name === n);
  if (!ok(A) || !ok(B) || A === B) {
    A = D[0].name;
    B = D[1].name;
  }
  fill();
  sk = "runs";
  sd = -1;
  document.querySelectorAll("#fmt button").forEach(b => b.setAttribute("aria-pressed", b.dataset.f === f));
  $("reset").click();
}
$("fmt").onclick = e => {
  const f = e.target.dataset.f;
  if (f) setFmt(f);
};

// Real-time live match simulation engine
function simulateLiveBall() {
  if (document.hidden) return;
  const targetName = getLivePlayer();
  const p = D.find(x => x.name === targetName);
  if (!p) return;

  const roll = Math.random();
  let dr = 0;
  if (roll < 0.32) {
    dr = 0;
  } else if (roll < 0.64) {
    dr = 1;
  } else if (roll < 0.78) {
    dr = 2;
  } else if (roll < 0.92) {
    dr = 4;
  } else if (roll < 0.98) {
    dr = 6;
  } else {
    // Dismissal
    p.outs = (p.outs || 1) + 1;
    p.matchRuns = 0;
    p.avg = +(p.runs / p.outs).toFixed(1);
    const pool = ACTIVE_POOL[FMT] || [];
    const nextIdx = (pool.indexOf(targetName) + 1) % pool.length;
    livePlayerName = pool[nextIdx];
    draw(true, targetName);
    return;
  }

  p.runs += dr;
  p.balls = (p.balls || p.runs) + 1;
  p.matchRuns = (p.matchRuns || 0) + dr;
  p.avg = +(p.runs / (p.outs || 1)).toFixed(1);
  p.sr = +(p.runs / p.balls * 100).toFixed(1);

  if (p.matchRuns >= 100 && !p.got100) {
    p.c += 1;
    p.got100 = true;
  } else if (p.matchRuns >= 50 && !p.got50) {
    p.f += 1;
    p.got50 = true;
  }

  draw(true, targetName);
}

// Start real-time simulation updates every 3.5 seconds
setInterval(simulateLiveBall, 3500);

draw();
