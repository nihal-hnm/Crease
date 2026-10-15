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

// ======= Bowler Datasets =======
const BOWL_ODI = [
  ["Wasim Akram","PAK",356,502,23.5,3.89,5,15,6],
  ["Waqar Younis","PAK",262,416,24.0,4.68,7,36,13],
  ["Muttiah Muralitharan","SL",350,534,23.1,3.93,7,30,10],
  ["Chaminda Vaas","SL",322,400,27.1,4.18,8,19,4],
  ["Javagal Srinath","IND",229,315,28.1,4.44,5,23,3],
  ["Shane Warne","AUS",194,293,25.8,4.25,5,33,1],
  ["Allan Donald","SA",164,272,21.9,3.53,6,23,2],
  ["Brett Lee","AUS",221,380,23.4,4.76,5,22,9],
  ["Anil Kumble","IND",271,337,30.9,4.30,6,12,2],
  ["Glenn McGrath","AUS",250,381,22.0,3.88,7,15,7],
  ["James Anderson","ENG",194,269,29.2,4.83,5,23,2],
  ["Zaheer Khan","IND",200,282,29.4,4.69,5,42,5],
  ["Shaun Pollock","SA",303,393,24.5,3.67,6,35,6],
  ["Imran Khan","PAK",175,182,26.6,3.89,6,14,1],
  ["Kapil Dev","IND",225,253,27.5,3.71,5,43,1],
  ["Courtney Walsh","WI",205,227,30.5,3.94,5,1,1],
  ["Curtly Ambrose","WI",176,225,24.1,3.48,5,17,2],
  ["Mitchell Starc","AUS",127,227,22.2,4.61,6,43,6],
  ["Trent Boult","NZ",107,169,25.1,4.72,7,34,3],
  ["Rashid Khan","AFG",105,176,16.8,3.94,7,18,5],
  ["Jasprit Bumrah","IND",87,149,24.4,4.63,5,27,3],
  ["Kagiso Rabada","SA",95,152,26.8,5.20,5,34,2],
  ["Josh Hazlewood","AUS",100,145,26.4,4.74,5,35,1],
  ["Mohammad Shami","IND",97,149,27.2,5.17,5,69,2],
  ["Ravichandran Ashwin","IND",116,150,33.4,4.89,4,25,0],
  ["Shakib Al Hasan","BAN",247,299,29.5,4.61,5,29,6],
  ["Harbhajan Singh","IND",236,269,33.7,4.29,5,29,2],
  ["Saqlain Mushtaq","PAK",169,288,21.8,3.64,5,20,11],
  ["Shahid Afridi","PAK",398,395,34.5,4.62,7,12,9],
  ["Daniel Vettori","NZ",295,305,30.4,3.99,5,7,2],
  ["Tim Southee","NZ",149,203,29.4,5.26,7,33,5],
  ["Pat Cummins","AUS",97,139,27.0,5.22,5,70,1],
  ["Mustafizur Rahman","BAN",98,127,30.4,5.27,5,50,2],
  ["Lockie Ferguson","NZ",64,112,26.5,5.62,5,45,1],
  ["Lance Klusener","SA",171,192,29.8,3.85,6,49,5],
  ["Dwayne Bravo","WI",164,199,33.4,5.17,6,28,2],
];
const BOWL_TEST = [
  ["Muttiah Muralitharan","SL",133,800,22.7,2.47,9,51,67],
  ["Shane Warne","AUS",145,708,25.4,2.65,8,71,37],
  ["James Anderson","ENG",188,695,26.4,2.88,7,42,32],
  ["Anil Kumble","IND",132,619,29.7,2.69,10,74,35],
  ["Glenn McGrath","AUS",124,563,21.6,2.49,8,24,29],
  ["Courtney Walsh","WI",132,519,24.4,2.65,7,37,22],
  ["Curtly Ambrose","WI",98,405,20.9,2.30,8,45,22],
  ["Ian Botham","ENG",102,383,28.4,3.03,8,34,27],
  ["Richard Hadlee","NZ",86,431,22.3,2.63,9,52,36],
  ["Kapil Dev","IND",131,434,29.6,2.87,9,83,23],
  ["Nathan Lyon","AUS",127,435,32.0,2.88,8,50,16],
  ["Ravichandran Ashwin","IND",105,500,24.0,2.83,9,72,37],
  ["Ravindra Jadeja","IND",77,280,24.5,2.54,7,42,10],
  ["Wasim Akram","PAK",104,414,23.6,2.77,7,119,25],
  ["Waqar Younis","PAK",87,373,23.6,3.54,7,76,22],
  ["Dale Steyn","SA",93,439,22.9,3.05,7,51,26],
  ["Kagiso Rabada","SA",58,273,22.3,3.15,7,112,12],
  ["Mitchell Starc","AUS",72,300,26.4,3.34,6,66,14],
  ["Pat Cummins","AUS",65,247,21.9,2.98,7,23,8],
  ["Stuart Broad","ENG",167,604,27.7,2.99,8,15,20],
  ["Shaun Pollock","SA",108,421,23.1,2.66,7,87,16],
  ["Harbhajan Singh","IND",103,417,32.5,3.32,8,84,25],
  ["Kemar Roach","WI",83,266,27.2,2.87,6,48,6],
  ["Tim Southee","NZ",100,355,29.5,3.36,7,64,12],
  ["Josh Hazlewood","AUS",61,223,27.6,3.03,6,67,7],
  ["Jasprit Bumrah","IND",43,182,18.9,2.39,6,27,9],
  ["Ben Stokes","ENG",105,195,32.5,3.21,6,22,4],
  ["Shakib Al Hasan","BAN",68,242,31.2,2.86,7,36,14],
  ["Imran Khan","PAK",88,362,22.8,2.54,8,58,23],
  ["Zaheer Khan","IND",92,311,32.9,3.13,7,87,11],
  ["Malcolm Marshall","WI",81,376,20.9,2.69,7,53,22],
  ["Bob Willis","ENG",90,325,25.2,3.12,8,43,16],
];
const BOWL_T20 = [
  ["Rashid Khan","AFG",93,144,13.7,6.44,5,3,1],
  ["Shakib Al Hasan","BAN",129,130,21.0,6.92,4,9,0],
  ["Tim Southee","NZ",116,136,22.0,7.61,5,18,3],
  ["Lasith Malinga","SL",84,107,20.0,7.14,5,31,2],
  ["Shadab Khan","PAK",104,124,22.2,7.19,4,24,0],
  ["Jasprit Bumrah","IND",72,89,22.4,6.24,3,21,0],
  ["Samuel Badree","WI",59,68,14.8,5.47,4,17,0],
  ["Mitchell Starc","AUS",60,77,20.2,7.11,4,8,0],
  ["Trent Boult","NZ",66,84,19.9,7.20,4,21,0],
  ["Adil Rashid","ENG",84,93,22.7,7.28,4,2,0],
  ["Kagiso Rabada","SA",61,81,19.5,7.51,4,21,0],
  ["Dwayne Bravo","WI",91,78,28.2,8.00,4,38,0],
  ["Mohammad Nabi","AFG",129,92,24.6,6.75,4,11,0],
  ["Pat Cummins","AUS",63,84,21.8,8.24,4,32,0],
  ["Sikandar Raza","ZIM",91,82,22.4,7.32,4,9,0],
  ["Mujeeb ur Rahman","AFG",77,98,18.6,6.61,5,20,1],
  ["Wanindu Hasaranga","SL",77,99,18.4,6.81,6,35,3],
  ["Ish Sodhi","NZ",66,79,22.6,7.76,4,19,0],
  ["Imad Wasim","PAK",85,93,24.1,6.89,4,21,0],
  ["Stuart Broad","ENG",56,65,24.0,7.49,3,10,0],
];

const mkBowlD = a => a.map(r => ({name:r[0],team:r[1],m:r[2],wkts:r[3],bavg:r[4],eco:r[5],bestW:r[6],bestR:r[7],fiver:r[8]}));
const BOWL_SETS = {ODI:mkBowlD(BOWL_ODI),Test:mkBowlD(BOWL_TEST),T20I:mkBowlD(BOWL_T20)};
let BD = BOWL_SETS.ODI;
const BCOLS = [["name","Player"],["team","Team"],["m","Mat"],["wkts","Wkts"],["bavg","Avg"],["eco","Econ"],["bestW","Best"],["fiver","5W"]];
let bsk = "wkts", bsd = -1;

function fillBowlSelect() {
  const tb = document.getElementById("teamb"); if (!tb) return;
  tb.innerHTML = '<option value="">All teams</option>';
  [...new Set(BD.map(p=>p.team))].sort().forEach(t=>{const o=document.createElement("option");o.value=o.textContent=t;tb.append(o);});
}
fillBowlSelect();

function filteredBowl() {
  const q=(document.getElementById("qb")?document.getElementById("qb").value:"").trim().toLowerCase();
  const t=document.getElementById("teamb")?document.getElementById("teamb").value:"";
  const w=+(document.getElementById("wk")?document.getElementById("wk").value:0);
  return BD.filter(p=>p.name.toLowerCase().includes(q)&&(!t||p.team===t)&&p.wkts>=w)
    .sort((x,y)=>(x[bsk]>y[bsk]?1:-1)*bsd);
}

function drawBowlerTable() {
  const thb=document.getElementById("thb"); if(!thb) return;
  thb.innerHTML=BCOLS.map(c=>`<th data-bk="${c[0]}" class="${c[0]===bsk?"s":""}">${c[1]}${c[0]===bsk?(bsd>0?" \u25b2":" \u25bc"):""}</th>`).join("");
  thb.onclick=e=>{const k=e.target.dataset.bk;if(!k)return;bsd=bsk===k?-bsd:(k==="name"||k==="team"?1:-1);bsk=k;drawBowlerTable();};
  const f=filteredBowl();
  document.getElementById("tbb").innerHTML=f.length
    ?f.map(p=>`<tr tabindex="0"><td>${p.name}</td><td><span class="tag">${p.team}</span></td><td>${p.m}</td><td>${p.wkts}</td><td>${p.bavg.toFixed(1)}</td><td>${p.eco.toFixed(2)}</td><td>${p.bestW}/${p.bestR}</td><td>${p.fiver}</td></tr>`).join("")
    :`<tr><td colspan="8" class="empty">No bowlers match. Reset filters.</td></tr>`;
}
drawBowlerTable();

(function(){
  const qb=document.getElementById("qb"); if(qb) qb.oninput=()=>drawBowlerTable();
  const teamb=document.getElementById("teamb"); if(teamb) teamb.oninput=()=>drawBowlerTable();
  const wk=document.getElementById("wk"); if(wk) wk.oninput=()=>{document.getElementById("wkv").textContent=wk.value;drawBowlerTable();};
  const eco=document.getElementById("eco"); if(eco) eco.oninput=()=>{document.getElementById("ecov").textContent=parseFloat(eco.value).toFixed(1);drawBowlerTable();};
  const resetb=document.getElementById("resetb"); if(resetb) resetb.onclick=()=>{
    if(qb)qb.value=""; if(teamb)teamb.value="";
    if(wk){wk.value=0;document.getElementById("wkv").textContent="0";}
    if(eco){eco.value=0;document.getElementById("ecov").textContent="0.0";}
    drawBowlerTable();
  };
})();

// Batsmen / Bowlers switch bar
let playerTab = "bat";
function switchPlayerTab(tab) {
  playerTab = tab;
  const batSec=document.getElementById("bat-section"),bowlSec=document.getElementById("bowl-section");
  const ptsBat=document.getElementById("pts-bat"),ptsBowl=document.getElementById("pts-bowl");
  if(tab==="bat"){
    if(batSec)batSec.style.display=""; if(bowlSec)bowlSec.style.display="none";
    if(ptsBat)ptsBat.classList.add("active"); if(ptsBowl)ptsBowl.classList.remove("active");
  } else {
    if(batSec)batSec.style.display="none"; if(bowlSec)bowlSec.style.display="";
    if(ptsBat)ptsBat.classList.remove("active"); if(ptsBowl)ptsBowl.classList.add("active");
    BD=BOWL_SETS[FMT]; fillBowlSelect(); drawBowlerTable();
  }
}
(function(){
  const pb=document.getElementById("pts-bat"); if(pb) pb.onclick=()=>switchPlayerTab("bat");
  const pw=document.getElementById("pts-bowl"); if(pw) pw.onclick=()=>switchPlayerTab("bowl");
  const fmtEl=document.getElementById("fmt");
  if(fmtEl) fmtEl.addEventListener("click",()=>setTimeout(()=>{BD=BOWL_SETS[FMT];if(playerTab==="bowl"){fillBowlSelect();drawBowlerTable();}},60));
})();

// ======= Live Match Panel Simulation =======
const MT=["IND","AUS","ENG","PAK","SA","NZ","SL","WI","BAN","AFG"];
const BAT_POOL={
  IND:["Rohit Sharma","Virat Kohli","Shubman Gill","KL Rahul","Rishabh Pant","Hardik Pandya","Yashasvi Jaiswal"],
  AUS:["David Warner","Travis Head","Steve Smith","Marnus Labuschagne","Glenn Maxwell","Pat Cummins","Matthew Wade"],
  ENG:["Joe Root","Ben Stokes","Jos Buttler","Jonny Bairstow","Jason Roy","Moeen Ali","Dawid Malan"],
  PAK:["Babar Azam","Mohammad Rizwan","Fakhar Zaman","Iftikhar Ahmed","Salman Agha","Shadab Khan","Abdullah Shafique"],
  SA:["Quinton de Kock","David Miller","Heinrich Klaasen","Aiden Markram","Rassie van der Dussen","Marco Jansen","Temba Bavuma"],
  NZ:["Kane Williamson","Devon Conway","Glenn Phillips","Daryl Mitchell","Mark Chapman","Mitchell Santner","Tom Latham"],
  SL:["Pathum Nissanka","Kusal Mendis","Charith Asalanka","Dasun Shanaka","Wanindu Hasaranga","Sadeera Samarawickrama","Dhananjaya de Silva"],
  WI:["Nicholas Pooran","Shai Hope","Evin Lewis","Andre Russell","Shimron Hetmyer","Jason Holder","Romario Shepherd"],
  BAN:["Shakib Al Hasan","Mushfiqur Rahim","Tamim Iqbal","Mahmudullah","Litton Das","Towhid Hridoy","Najmul Hossain"],
  AFG:["Rashid Khan","Mohammad Nabi","Rahmanullah Gurbaz","Ibrahim Zadran","Najibullah Zadran","Ikram Alikhil","Azmatullah Omarzai"]
};
const BOWL_POOL_LM={
  IND:["Jasprit Bumrah","Mohammad Shami","Ravindra Jadeja","Ravichandran Ashwin","Hardik Pandya"],
  AUS:["Pat Cummins","Mitchell Starc","Josh Hazlewood","Glenn Maxwell","Adam Zampa"],
  ENG:["James Anderson","Stuart Broad","Ben Stokes","Mark Wood","Adil Rashid"],
  PAK:["Shaheen Afridi","Haris Rauf","Naseem Shah","Shadab Khan","Wahab Riaz"],
  SA:["Kagiso Rabada","Anrich Nortje","Lungi Ngidi","Keshav Maharaj","Wayne Parnell"],
  NZ:["Tim Southee","Trent Boult","Matt Henry","Ish Sodhi","Mitchell Santner"],
  SL:["Wanindu Hasaranga","Maheesh Theekshana","Dushmantha Chameera","Kasun Rajitha","Akila Dananjaya"],
  WI:["Alzarri Joseph","Jason Holder","Hayden Walsh","Andre Russell","Kemar Roach"],
  BAN:["Taskin Ahmed","Mustafizur Rahman","Shakib Al Hasan","Mehidy Hasan","Shoriful Islam"],
  AFG:["Rashid Khan","Mujeeb ur Rahman","Naveen-ul-Haq","Fazalhaq Farooqi","Qais Ahmad"]
};
let liveMatch=null;
const ri=(a,b)=>Math.floor(Math.random()*(b-a+1))+a;
const pr=arr=>arr[ri(0,arr.length-1)];

function mkBatter(name){return {name,runs:0,balls:0,fours:0,sixes:0,dismissed:false};}
function mkBowler(name){return {name,overs:0,balls:0,runs:0,wkts:0,maidens:0};}

function seedBatters(pool){
  const used=[],batters=[];
  for(let i=0;i<Math.min(6,pool.length);i++){
    let n;do{n=pr(pool);}while(used.includes(n));
    used.push(n);
    const b=mkBatter(n);
    b.runs=ri(0,72);b.balls=ri(b.runs,b.runs+30);b.fours=ri(0,Math.floor(b.runs/6));b.sixes=ri(0,Math.floor(b.runs/12));b.dismissed=true;
    batters.push(b);
  }
  return batters;
}
function seedBowlers(pool){
  const used=[],bowlers=[];
  for(let i=0;i<Math.min(4,pool.length);i++){
    let n;do{n=pr(pool);}while(used.includes(n));
    used.push(n);
    const bw=mkBowler(n);
    bw.overs=ri(2,8);bw.balls=bw.overs*6;bw.runs=ri(bw.overs*4,bw.overs*8);bw.wkts=ri(0,2);
    bowlers.push(bw);
  }
  return bowlers;
}

function initLiveMatch(){
  let ti=ri(0,MT.length-1),tj;do{tj=ri(0,MT.length-1);}while(tj===ti);
  const tA=MT[ti],tB=MT[tj];
  const maxOv=FMT==="Test"?90:FMT==="ODI"?50:20;
  const isChase=Math.random()>0.5;
  const batsA=BAT_POOL[tA]||["Opener A","Opener B"],batsB=BAT_POOL[tB]||["Opener C","Opener D"];
  const bowlsB=BOWL_POOL_LM[tB]||["Bowler"],bowlsA=BOWL_POOL_LM[tA]||["Bowler"];

  if(!isChase){
    const r=ri(30,110),w=ri(2,5),ov=parseFloat((ri(10,Math.floor(maxOv*0.55))+Math.random()*0.4).toFixed(1));
    const dBats=seedBatters(batsA);
    const remPool=batsA.filter(x=>!dBats.find(b=>b.name===x));
    const b1=mkBatter(pr(remPool.length?remPool:batsA));
    const b2=mkBatter(pr(remPool.filter(x=>x!==b1.name).length?remPool.filter(x=>x!==b1.name):batsA));
    b1.runs=ri(0,55);b1.balls=ri(b1.runs,b1.runs+30);b1.fours=ri(0,Math.floor(b1.runs/6));b1.sixes=ri(0,Math.floor(b1.runs/12));
    b2.runs=ri(0,40);b2.balls=ri(b2.runs,b2.runs+25);b2.fours=ri(0,Math.floor(b2.runs/6));b2.sixes=ri(0,Math.floor(b2.runs/12));
    const dBowl=seedBowlers(bowlsB);
    const abw=mkBowler(pr(bowlsB.filter(x=>!dBowl.find(b=>b.name===x)).length?bowlsB.filter(x=>!dBowl.find(b=>b.name===x)):bowlsB));
    abw.overs=ri(0,3);abw.balls=abw.overs*6;abw.runs=ri(0,28);abw.wkts=ri(0,2);
    const fow=dBats.map((bt,i)=>({wkt:i+1,runs:ri(Math.max(1,10*(i+1)-5),Math.max(10*(i+1)+10,r-5)),name:bt.name})).sort((a,b2)=>a.runs-b2.runs);
    const rrHist=[];const numSeg=Math.max(1,Math.floor(ov/5));
    for(let i=0;i<numSeg;i++)rrHist.push(parseFloat((ri(4,10)+Math.random()).toFixed(1)));
    liveMatch={tA,tB,maxOv,phase:1,runsA:r,wktsA:w,oversA:ov,runsB:0,wktsB:0,oversB:0,target:0,
      battersA:[...dBats,b1,b2],striker:dBats.length,
      bowlersB:dBowl,activeBowler:abw,bowlTeam:tB,batTeam:tA,
      fow,extras:ri(4,14),rrHist,lastBall:"\u2014",
      bat1:b1.name,bat2:b2.name,bat1Runs:b1.runs,bat1Balls:b1.balls,bat2Runs:b2.runs,bat2Balls:b2.balls,
      bowler:abw.name,bowlOvers:abw.overs,bowlRuns:abw.runs,bowlWkts:abw.wkts};
  } else {
    const tgt=ri(140,290),rb=ri(20,Math.min(tgt-2,120)),wb=ri(0,5),ovb=parseFloat((ri(6,Math.floor(maxOv*0.65))+Math.random()*0.4).toFixed(1));
    const dBatsB=seedBatters(batsB);
    const remPool=batsB.filter(x=>!dBatsB.find(b=>b.name===x));
    const b1=mkBatter(pr(remPool.length?remPool:batsB));
    const b2=mkBatter(pr(remPool.filter(x=>x!==b1.name).length?remPool.filter(x=>x!==b1.name):batsB));
    b1.runs=ri(0,65);b1.balls=ri(b1.runs,b1.runs+35);b1.fours=ri(0,Math.floor(b1.runs/6));b1.sixes=ri(0,Math.floor(b1.runs/12));
    b2.runs=ri(0,45);b2.balls=ri(b2.runs,b2.runs+28);b2.fours=ri(0,Math.floor(b2.runs/6));b2.sixes=ri(0,Math.floor(b2.runs/12));
    const dBowl=seedBowlers(bowlsA);
    const abw=mkBowler(pr(bowlsA.filter(x=>!dBowl.find(b=>b.name===x)).length?bowlsA.filter(x=>!dBowl.find(b=>b.name===x)):bowlsA));
    abw.overs=ri(0,3);abw.balls=abw.overs*6;abw.runs=ri(0,32);abw.wkts=ri(0,2);
    const fow=dBatsB.map((bt,i)=>({wkt:i+1,runs:ri(Math.max(1,5*(i+1)-3),Math.max(5*(i+1)+10,rb-3)),name:bt.name})).sort((a,b2)=>a.runs-b2.runs);
    const rrHist=[];const numSeg=Math.max(1,Math.floor(ovb/5));
    for(let i=0;i<numSeg;i++)rrHist.push(parseFloat((ri(5,13)+Math.random()).toFixed(1)));
    liveMatch={tA,tB,maxOv,phase:2,runsA:tgt-1,wktsA:10,oversA:maxOv,runsB:rb,wktsB:wb,oversB:ovb,target:tgt,
      battersB:[...dBatsB,b1,b2],striker:dBatsB.length,
      bowlersA:dBowl,activeBowler:abw,bowlTeam:tA,batTeam:tB,
      fow,extras:ri(2,10),rrHist,lastBall:"\u2014",
      bat1:b1.name,bat2:b2.name,bat1Runs:b1.runs,bat1Balls:b1.balls,bat2Runs:b2.runs,bat2Balls:b2.balls,
      bowler:abw.name,bowlOvers:abw.overs,bowlRuns:abw.runs,bowlWkts:abw.wkts};
  }
  currentScorecardInn=liveMatch.phase;
  updateInnTabs();
}

let currentScorecardInn=1;
function updateInnTabs(){
  const t1=document.getElementById("sc-tab-1"),t2=document.getElementById("sc-tab-2");
  if(t1)t1.classList.toggle("active",currentScorecardInn===1);
  if(t2)t2.classList.toggle("active",currentScorecardInn===2);
}
(function(){
  const tabs=document.getElementById("sc-innings-tabs");
  if(tabs)tabs.addEventListener("click",e=>{
    const btn=e.target.closest(".sc-inn-tab");
    if(!btn)return;
    currentScorecardInn=+btn.dataset.inn;
    updateInnTabs();
    renderLiveMatch();
  });
})();

function tickLiveMatch(){
  if(!liveMatch){initLiveMatch();renderLiveMatch();return;}
  const m=liveMatch,roll=Math.random();
  let dr=0,isWkt=false;
  if(roll<0.26)dr=0;else if(roll<0.53)dr=1;else if(roll<0.67)dr=2;else if(roll<0.81)dr=4;else if(roll<0.91)dr=6;else isWkt=true;
  m.lastBall=isWkt?"W":String(dr);
  const batsTeam=m.phase===1?m.tA:m.tB;
  const bBag=BAT_POOL[batsTeam]||["Batter"];
  const batters=m.phase===1?(m.battersA=m.battersA||[]):(m.battersB=m.battersB||[]);
  const s=m.striker;
  m.activeBowler.runs+=dr;

  if(isWkt){
    if(m.phase===1){
      m.wktsA++;m.activeBowler.wkts++;
      if(batters[s])batters[s].dismissed=true;
      m.fow=m.fow||[];m.fow.push({wkt:m.wktsA,runs:m.runsA,name:batters[s]?batters[s].name:"?"});
      if(m.wktsA>=10){
        m.phase=2;m.runsB=0;m.wktsB=0;m.oversB=0;m.target=m.runsA+1;
        const nb=mkBatter(pr(BAT_POOL[m.tB]||["Batter"]));
        const nb2=mkBatter(pr((BAT_POOL[m.tB]||["Batter"]).filter(x=>x!==nb.name)||[nb.name]));
        m.battersB=[nb,nb2];m.bowlersA=[];m.striker=0;m.batTeam=m.tB;m.bowlTeam=m.tA;
        m.activeBowler=mkBowler(pr(BOWL_POOL_LM[m.tA]||["Bowler"]));m.rrHist=[];
        currentScorecardInn=2;updateInnTabs();
      } else {
        const nb=mkBatter(pr(bBag.filter(x=>!batters.find(b=>b.name===x)).length?bBag.filter(x=>!batters.find(b=>b.name===x)):bBag));
        batters.push(nb);m.striker=batters.length-1;
      }
    } else {
      m.wktsB++;m.activeBowler.wkts++;
      if(batters[s])batters[s].dismissed=true;
      m.fow=m.fow||[];m.fow.push({wkt:m.wktsB,runs:m.runsB,name:batters[s]?batters[s].name:"?"});
      if(m.wktsB>=10){initLiveMatch();renderLiveMatch();return;}
      const nb=mkBatter(pr(bBag.filter(x=>!batters.find(b=>b.name===x)).length?bBag.filter(x=>!batters.find(b=>b.name===x)):bBag));
      batters.push(nb);m.striker=batters.length-1;
    }
  } else {
    if(m.phase===1)m.runsA+=dr;else m.runsB+=dr;
    if(batters[s]){batters[s].runs+=dr;batters[s].balls++;if(dr===4)batters[s].fours++;if(dr===6)batters[s].sixes++;}
    if(dr%2===1)m.striker=1-m.striker;
  }

  const ovKey=m.phase===1?"oversA":"oversB";
  let balls=Math.round((m[ovKey]%1)*10)+1;
  m.activeBowler.balls++;
  if(balls>=6){
    m[ovKey]=Math.floor(m[ovKey])+1;
    m.activeBowler.overs=Math.floor(m.activeBowler.overs)+1;
    const bowlerList=m.phase===1?(m.bowlersB=m.bowlersB||[]):(m.bowlersA=m.bowlersA||[]);
    const ex=bowlerList.find(b=>b.name===m.activeBowler.name);
    if(ex){ex.overs=m.activeBowler.overs;ex.runs=m.activeBowler.runs;ex.wkts=m.activeBowler.wkts;ex.balls=m.activeBowler.balls;}
    else bowlerList.push({...m.activeBowler});
    m.rrHist=m.rrHist||[];
    const curR=m.phase===1?m.runsA:m.runsB,curOv=m[ovKey];
    if(curOv>0)m.rrHist.push(parseFloat((curR/curOv).toFixed(1)));
    const newBowlerPool=(m.phase===1?BOWL_POOL_LM[m.tB]:BOWL_POOL_LM[m.tA])||["Bowler"];
    const nb=pr(newBowlerPool.filter(x=>x!==m.activeBowler.name).length?newBowlerPool.filter(x=>x!==m.activeBowler.name):newBowlerPool);
    m.activeBowler=mkBowler(nb);
  } else {
    m[ovKey]=parseFloat((Math.floor(m[ovKey])+balls/10).toFixed(1));
  }
  if(m[ovKey]>=m.maxOv){
    if(m.phase===1){
      m.phase=2;m.runsB=0;m.wktsB=0;m.oversB=0;m.target=m.runsA+1;
      const nb=mkBatter(pr(BAT_POOL[m.tB]||["Batter"]));
      const nb2=mkBatter(pr((BAT_POOL[m.tB]||["Batter"]).filter(x=>x!==nb.name)||[nb.name]));
      m.battersB=[nb,nb2];m.bowlersA=[];m.striker=0;m.batTeam=m.tB;m.bowlTeam=m.tA;
      m.activeBowler=mkBowler(pr(BOWL_POOL_LM[m.tA]||["Bowler"]));m.rrHist=[];
      currentScorecardInn=2;updateInnTabs();
    } else {initLiveMatch();renderLiveMatch();return;}
  }
  if(m.phase===2&&m.runsB>=m.target){setTimeout(()=>{initLiveMatch();renderLiveMatch();},1500);return;}

  const activeBats=m.phase===1?m.battersA:m.battersB;
  const ab1=activeBats&&activeBats[m.striker];
  const ab2=activeBats&&activeBats[m.striker===0?1:(m.striker>0?m.striker-1:0)];
  m.bat1=ab1?ab1.name:"\u2014";m.bat1Runs=ab1?ab1.runs:0;m.bat1Balls=ab1?ab1.balls:0;
  m.bat2=ab2?ab2.name:"\u2014";m.bat2Runs=ab2?ab2.runs:0;m.bat2Balls=ab2?ab2.balls:0;
  m.bowler=m.activeBowler.name;m.bowlOvers=m.activeBowler.overs;m.bowlRuns=m.activeBowler.runs;m.bowlWkts=m.activeBowler.wkts;
  renderLiveMatch();
}

function renderLiveMatch(){
  if(!liveMatch)return;
  const m=liveMatch,inn=currentScorecardInn,isChase=m.phase===2;
  const set=(id,txt)=>{const e=document.getElementById(id);if(e)e.textContent=txt;};

  // Summary bar
  set("live-fixture",`${m.tA} vs ${m.tB} \u2022 ${FMT}`);
  set("sc-sum-team-a",m.tA);set("sc-sum-score-a",`${m.runsA}/${m.wktsA}`);set("sc-sum-overs-a",`${m.oversA} ov`);
  set("sc-sum-team-b",m.tB);
  if(isChase){set("sc-sum-score-b",`${m.runsB}/${m.wktsB}`);set("sc-sum-overs-b",`${m.oversB} ov`);}
  else{set("sc-sum-score-b","Yet to bat");set("sc-sum-overs-b","");}

  const saEl=document.getElementById("sc-sum-score-a"),sbEl=document.getElementById("sc-sum-score-b");
  if(saEl)saEl.className="sc-team-score"+(m.phase===1?" batting":"");
  if(sbEl)sbEl.className="sc-team-score"+(m.phase===2?" batting":"");

  const curR=isChase?m.runsB:m.runsA,curOv=isChase?m.oversB:m.oversA;
  set("live-crr",curOv>0?(curR/curOv).toFixed(2):"0.00");
  const rrrBlock=document.getElementById("sc-rrr-block");
  if(isChase&&m.target){
    const needed=m.target-m.runsB,bl=Math.max(1,Math.round((m.maxOv-m.oversB)*6));
    set("live-rrr",((needed/bl)*6).toFixed(2));
    if(rrrBlock)rrrBlock.style.display="";
  } else {if(rrrBlock)rrrBlock.style.display="none";}

  const lb=document.getElementById("live-last-ball");
  if(lb){lb.textContent=m.lastBall;lb.className="live-last-ball"+(m.lastBall==="6"?" six":m.lastBall==="4"?" four":m.lastBall==="W"?" wicket":"");}

  const showInn1=inn===1;
  const batters=showInn1?(m.battersA||[]):(m.battersB||[]);
  const bowlers=showInn1?(m.bowlersB||[]):(m.bowlersA||[]);
  const strikerIdx=(showInn1&&m.phase===1)||((!showInn1)&&m.phase===2)?m.striker:-1;
  const activeBowlerName=((showInn1&&m.phase===1)||((!showInn1)&&m.phase===2))?m.activeBowler.name:null;
  const teamRuns=showInn1?m.runsA:m.runsB;
  const teamWkts=showInn1?m.wktsA:m.wktsB;
  const teamOvers=showInn1?m.oversA:m.oversB;
  const batTeamName=showInn1?m.tA:m.tB;
  const bowlTeamName=showInn1?m.tB:m.tA;

  set("sc-batting-team",batTeamName);set("sc-bowling-team",bowlTeamName);

  const batBody=document.getElementById("sc-bat-body");
  if(batBody){
    let html="";
    batters.forEach((bt,i)=>{
      const isStriker=i===strikerIdx&&!bt.dismissed;
      const sr=bt.balls>0?((bt.runs/bt.balls)*100).toFixed(1):"0.0";
      html+=`<tr class="sc-bat-row${isStriker?" striker":""}${bt.dismissed?" dismissed":""}">
        <td class="sc-td sc-td-name">${bt.name}</td>
        <td class="sc-td sc-runs-cell${bt.runs>=50?" big-score":""}">${bt.runs}</td>
        <td class="sc-td">${bt.balls}</td>
        <td class="sc-td">${bt.fours}</td>
        <td class="sc-td">${bt.sixes}</td>
        <td class="sc-td">${sr}</td></tr>`;
    });
    if(!html)html=`<tr><td class="sc-td sc-td-name" colspan="6" style="color:var(--mute);text-align:center;padding:14px">Yet to bat</td></tr>`;
    batBody.innerHTML=html;
  }

  set("sc-extras",m.extras||0);
  set("sc-total-score",`${teamRuns+(m.extras||0)}/${teamWkts} (${teamOvers} ov)`);

  const bowlerDisplay=[...bowlers];
  if(activeBowlerName){
    const idx=bowlerDisplay.findIndex(b=>b.name===activeBowlerName);
    if(idx>=0)bowlerDisplay[idx]={...m.activeBowler};
    else bowlerDisplay.push({...m.activeBowler});
  }
  const bowlBody=document.getElementById("sc-bowl-body");
  if(bowlBody){
    let html="";
    bowlerDisplay.forEach(bw=>{
      const isNow=bw.name===activeBowlerName;
      const eco=bw.overs>0?(bw.runs/bw.overs).toFixed(2):"0.00";
      html+=`<tr class="sc-bowl-row${isNow?" bowling-now":""}">
        <td class="sc-td sc-td-name">${bw.name}</td>
        <td class="sc-td">${bw.overs}</td>
        <td class="sc-td">${bw.maidens||0}</td>
        <td class="sc-td">${bw.runs}</td>
        <td class="sc-td sc-wkts-cell">${bw.wkts}</td>
        <td class="sc-td">${eco}</td></tr>`;
    });
    if(!html)html=`<tr><td class="sc-td" colspan="6" style="color:var(--mute);text-align:center;padding:14px">No data</td></tr>`;
    bowlBody.innerHTML=html;
  }

  const fowChips=document.getElementById("sc-fow-chips");
  if(fowChips){
    const fow=m.fow||[];
    fowChips.innerHTML=fow.length
      ?fow.map(f=>`<span class="sc-fow-chip">${f.wkt}-${f.runs} <span style="font-weight:400;opacity:.7">(${f.name.split(" ").pop()})</span></span>`).join("")
      :`<span style="font-size:12px;color:var(--mute);font-family:'JetBrains Mono',monospace">No wickets yet</span>`;
  }

  const actBats=showInn1?(m.battersA||[]):(m.battersB||[]);
  const bA=actBats[strikerIdx]||null;
  const b2i=strikerIdx===0?1:(strikerIdx>0?strikerIdx-1:0);
  const bB=actBats[b2i]||null;
  const partnership=(bA&&!bA.dismissed?bA.runs:0)+(bB&&!bB.dismissed?bB.runs:0);
  const partPct=m.target&&m.phase===2?Math.min(100,(partnership/Math.max(1,m.target-teamRuns+partnership))*100):Math.min(100,(partnership/Math.max(1,teamRuns+1))*80);
  const pfEl=document.getElementById("sc-partnership-fill");
  const plEl=document.getElementById("sc-partnership-label");
  if(pfEl)pfEl.style.width=partPct+"%";
  if(plEl)plEl.textContent=`Current Partnership: ${partnership} runs`;

  const statusEl=document.getElementById("sc-status-text");
  if(statusEl){
    if(m.phase===1){
      const projRR=(curOv>0?curR/curOv:5);
      statusEl.textContent=`${m.tA} batting \u2022 Projected: ~${Math.round(projRR*m.maxOv)}`;
    } else {
      const needed=m.target-m.runsB;
      const ballsLeft=Math.max(0,Math.round((m.maxOv-m.oversB)*6));
      if(needed<=0)statusEl.textContent=`${m.tB} won by ${10-m.wktsB} wickets! \ud83c\udfc6`;
      else if(ballsLeft<=0)statusEl.textContent=`${m.tA} won by ${needed-1} runs! \ud83c\udfc6`;
      else statusEl.textContent=`${m.tB} need ${needed} off ${ballsLeft} balls`;
    }
  }

  const rrBarsEl=document.getElementById("sc-rr-bars");
  if(rrBarsEl){
    const hist=m.rrHist||[];
    if(hist.length){
      const maxRR=Math.max(...hist,1);
      rrBarsEl.style.alignItems="flex-end";
      rrBarsEl.innerHTML=hist.map((rr,i)=>{
        const pct=Math.round((rr/maxRR)*100);
        const barColor=rr>=8?"#e07a25":rr>=6?col("--a"):"#8aa097";
        return `<div class="sc-rr-bar-wrap"><div class="sc-rr-bar" style="height:${pct}%;background:${barColor}" title="Seg ${i+1}: ${rr}"></div><div class="sc-rr-bar-label">${i*5+1}</div></div>`;
      }).join("");
    } else {
      rrBarsEl.innerHTML=`<span style="font-size:11px;color:var(--mute);font-family:'JetBrains Mono',monospace">Building trend...</span>`;
    }
  }

  // Legacy hidden DOM compat
  set("live-team-a",m.tA);set("live-score-a",`${m.runsA}/${m.wktsA}`);set("live-overs-a",`${m.oversA} ov`);
  set("live-team-b",m.tB);
  if(isChase){set("live-score-b",`${m.runsB}/${m.wktsB}`);set("live-overs-b",`${m.oversB} ov`);}
  else{set("live-score-b","Yet to bat");set("live-overs-b","");}
}

initLiveMatch();
renderLiveMatch();
setInterval(tickLiveMatch, 2800);

// ======= Bowler Head-to-Head Comparison =======
// Metrics for bowler comparison (lower avg/eco is better → invert for radar)
const BM = [
  ["wkts",  "Wickets",  false],
  ["bavg",  "Average",  true],   // lower is better → invert
  ["eco",   "Economy",  true],   // lower is better → invert
  ["fiver", "5-Wicket Hauls", false],
  ["m",     "Matches",  false]
];

let BA = null, BB = null; // selected bowler names

function getBowler(name) {
  return BD.find(p => p.name === name);
}

// Initialise BA/BB from current BD
function initBowlerPair() {
  if (!BD.length) return;
  if (!BA || !BD.find(p => p.name === BA)) BA = BD[0].name;
  if (!BB || !BD.find(p => p.name === BB) || BB === BA) BB = BD[1] ? BD[1].name : BD[0].name;
}

// ---- Bowler combo dropdowns ----
let comboBPA, comboBPB;

function setupBowlerCombo(prefix, getPlayer, setPlayer) {
  const combo = document.getElementById(`combo-${prefix}`);
  const input = document.getElementById(`${prefix}-input`);
  const menu  = document.getElementById(`${prefix}-menu`);
  if (!combo || !input || !menu) return null;

  const arrow = combo.querySelector('.combo-arrow');

  function renderBMenu(query = '') {
    const q = query.trim().toLowerCase();
    const matches = BD.filter(p => p.name.toLowerCase().includes(q));
    const current = getPlayer();
    if (!matches.length) {
      menu.innerHTML = '<div class="combo-empty">No bowler found</div>';
      return;
    }
    menu.innerHTML = matches.map((p, idx) => `
      <div class="combo-item${p.name === current ? ' selected' : ''}${idx === 0 && q ? ' active' : ''}" data-name="${p.name}">
        <span>${p.name}</span>
        <span class="tag">${p.team}</span>
      </div>
    `).join('');
  }

  function openMenu() {
    document.querySelectorAll('.combo.open').forEach(c => { if (c !== combo) c.classList.remove('open'); });
    combo.classList.add('open');
    const isCurrent = input.value.trim().toLowerCase() === (getPlayer() || '').toLowerCase();
    renderBMenu(isCurrent ? '' : input.value);
  }

  function closeMenu() {
    combo.classList.remove('open');
    const q = input.value.trim().toLowerCase();
    if (!q) { input.value = getPlayer() || ''; return; }
    const match = BD.find(p => p.name.toLowerCase() === q) || BD.find(p => p.name.toLowerCase().includes(q));
    if (match) { setPlayer(match.name); input.value = match.name; drawBowlerH2H(); }
    else { input.value = getPlayer() || ''; }
  }

  function selectBowler(name) {
    setPlayer(name); input.value = name;
    combo.classList.remove('open');
    drawBowlerH2H();
  }

  if (arrow) arrow.onclick = e => {
    e.stopPropagation();
    combo.classList.contains('open') ? closeMenu() : (openMenu(), input.focus(), input.select());
  };

  input.onclick = e => { e.stopPropagation(); if (!combo.classList.contains('open')) { openMenu(); input.select(); } };
  input.onfocus = () => { if (!combo.classList.contains('open')) { openMenu(); input.select(); } };
  input.onblur  = () => setTimeout(() => { if (!combo.contains(document.activeElement)) closeMenu(); }, 160);
  input.oninput = () => {
    if (!combo.classList.contains('open')) combo.classList.add('open');
    renderBMenu(input.value);
    const exact = BD.find(p => p.name.toLowerCase() === input.value.trim().toLowerCase());
    if (exact) { setPlayer(exact.name); drawBowlerH2H(); }
  };

  input.onkeydown = e => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (!combo.classList.contains('open')) { openMenu(); return; }
      const active = menu.querySelector('.combo-item.active') || menu.querySelector('.combo-item');
      const next = active ? active.nextElementSibling : menu.querySelector('.combo-item');
      if (next && next.classList.contains('combo-item')) { if (active) active.classList.remove('active'); next.classList.add('active'); next.scrollIntoView({block:'nearest'}); }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const active = menu.querySelector('.combo-item.active');
      const prev = active ? active.previousElementSibling : null;
      if (prev && prev.classList.contains('combo-item')) { active.classList.remove('active'); prev.classList.add('active'); prev.scrollIntoView({block:'nearest'}); }
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const active = menu.querySelector('.combo-item.active') || menu.querySelector('.combo-item');
      if (active && active.dataset.name) selectBowler(active.dataset.name);
      else { const q = input.value.trim().toLowerCase(); if (q) { const m2 = BD.find(p => p.name.toLowerCase().includes(q)); if (m2) selectBowler(m2.name); } }
    } else if (e.key === 'Escape') closeMenu();
  };

  menu.onclick = e => {
    e.stopPropagation();
    const item = e.target.closest('.combo-item');
    if (item && item.dataset.name) selectBowler(item.dataset.name);
  };

  return {
    sync() { if (document.activeElement !== input) input.value = getPlayer() || ''; },
    close() { if (combo.classList.contains('open')) closeMenu(); }
  };
}

comboBPA = setupBowlerCombo('bpa', () => BA, name => { BA = name; });
comboBPB = setupBowlerCombo('bpb', () => BB, name => { BB = name; });

document.addEventListener('click', e => {
  if (!e.target.closest('.combo')) {
    if (comboBPA) comboBPA.close();
    if (comboBPB) comboBPB.close();
  }
});

// ---- Draw bowler H2H ----
function drawBowlerH2H() {
  initBowlerPair();
  if (comboBPA) comboBPA.sync();
  if (comboBPB) comboBPB.sync();

  const a = getBowler(BA) || BD[0];
  const b = getBowler(BB) || BD[1];
  if (!a || !b) return;

  const ca = col('--a'), cb = col('--b'), ink = col('--ink'), grid = 'rgba(128,128,128,.25)';

  // Comparison rows
  let wa = 0, wb = 0;
  const cmpEl = document.getElementById('bowl-cmp');
  if (cmpEl) {
    cmpEl.innerHTML = BM.map(([k, label, lowerBetter]) => {
      const av = a[k], bv = b[k];
      const mx = Math.max(av, bv) || 1;
      let winner;
      if (lowerBetter) winner = av < bv ? 'a' : av > bv ? 'b' : '';
      else             winner = av > bv ? 'a' : av < bv ? 'b' : '';
      if (winner === 'a') wa++;
      if (winner === 'b') wb++;
      const fmtV = v => (k === 'bavg' || k === 'eco') ? v.toFixed(2) : v;
      // For bars: lower-better metrics → invert bar width
      const aBar = lowerBetter ? (1 - av / mx) * 100 : av / mx * 100;
      const bBar = lowerBetter ? (1 - bv / mx) * 100 : bv / mx * 100;
      return `<div class="row">
        <div class="side l ${winner==='a'?'win':''}"><div class="bar" style="width:${aBar}%;max-width:calc(100% - 60px)"></div><b>${fmtV(av)}</b></div>
        <div class="lab">${label}</div>
        <div class="side r ${winner==='b'?'win':''}"><div class="bar" style="width:${bBar}%;max-width:calc(100% - 60px)"></div><b>${fmtV(bv)}</b></div>
      </div>`;
    }).join('');
  }

  const verdictEl = document.getElementById('bowl-verdict');
  if (verdictEl) {
    verdictEl.innerHTML = BA === BB
      ? 'Pick two different bowlers.'
      : wa === wb
        ? `${a.name} and ${b.name} are level.<small>${wa} categories each.</small>`
        : `${wa > wb ? a.name : b.name} takes it, ${Math.max(wa,wb)}–${Math.min(wa,wb)}.<small>Wins counted across ${BM.length} categories. Average and economy rate reflect bowling quality over raw wickets.</small>`;
  }

  // Radar — normalise; for lower-better metrics invert the score
  const mxs = BM.map(([k, , lowerBetter]) => {
    const mx = Math.max(...BD.map(p => p[k])) || 1;
    return {mx, lowerBetter};
  });
  const rd = p => BM.map(([k], i) => {
    const raw = p[k] / mxs[i].mx * 100;
    return +(mxs[i].lowerBetter ? 100 - raw : raw).toFixed(1);
  });

  try {
    mk('bowl-radar', {
      type: 'radar',
      data: {
        labels: BM.map(m => m[1]),
        datasets: [
          {label: a.name, data: rd(a), borderColor: ca, backgroundColor: ca + '33'},
          {label: b.name, data: rd(b), borderColor: cb, backgroundColor: cb + '33'}
        ]
      },
      options: {
        maintainAspectRatio: false,
        scales: { r: {min:0,max:100,ticks:{display:false},grid:{color:grid},angleLines:{color:grid},pointLabels:{color:ink}} },
        plugins: {title: {display:true, text:'Profile (100 = best in dataset)', color:ink}}
      }
    });
  } catch(err) { console.warn('Bowl radar error:', err); }

  // Bar — top wicket takers from current BD
  const top = [...BD].sort((x,y) => y.wkts - x.wkts).slice(0, 8);
  try {
    mk('bowl-bar', {
      type: 'bar',
      data: {
        labels: top.map(p => p.name.split(' ').slice(-1)[0]),
        datasets: [{
          label: 'Wickets',
          data: top.map(p => p.wkts),
          backgroundColor: top.map(p => p.name === BA ? ca : p.name === BB ? cb : '#8aa097')
        }]
      },
      options: {
        maintainAspectRatio: false,
        indexAxis: 'y',
        plugins: {
          legend: {display:false},
          title: {display:true, text:'Career wickets (top 8, A and B highlighted)', color:ink}
        },
        scales: {x:{grid:{color:grid}}, y:{grid:{display:false}}}
      }
    });
  } catch(err) { console.warn('Bowl bar error:', err); }
}

// ---- H2H tab switch ----
let h2hTab = 'bat';
function switchH2HTab(tab) {
  h2hTab = tab;
  const batSec  = document.getElementById('h2h-bat-section');
  const bowlSec = document.getElementById('h2h-bowl-section');
  const tabBat  = document.getElementById('h2h-bat');
  const tabBowl = document.getElementById('h2h-bowl');

  if (tab === 'bat') {
    if (batSec)  batSec.style.display  = '';
    if (bowlSec) bowlSec.style.display = 'none';
    if (tabBat)  tabBat.classList.add('active');
    if (tabBowl) tabBowl.classList.remove('active');
  } else {
    if (batSec)  batSec.style.display  = 'none';
    if (bowlSec) bowlSec.style.display = '';
    if (tabBat)  tabBat.classList.remove('active');
    if (tabBowl) tabBowl.classList.add('active');
    // Sync bowler data to current format then redraw
    BD = BOWL_SETS[FMT];
    initBowlerPair();
    if (comboBPA) comboBPA.sync();
    if (comboBPB) comboBPB.sync();
    drawBowlerH2H();
  }
}

(function() {
  const hb = document.getElementById('h2h-bat');  if (hb) hb.onclick = () => switchH2HTab('bat');
  const hw = document.getElementById('h2h-bowl'); if (hw) hw.onclick = () => switchH2HTab('bowl');

  // When global format changes, update bowler H2H too
  const fmtEl = document.getElementById('fmt');
  if (fmtEl) fmtEl.addEventListener('click', () => setTimeout(() => {
    if (h2hTab === 'bowl') {
      BD = BOWL_SETS[FMT];
      initBowlerPair();
      if (comboBPA) comboBPA.sync();
      if (comboBPB) comboBPB.sync();
      drawBowlerH2H();
    }
  }, 80));
})();

// Initial render of bowler H2H data (hidden, ready when tab is clicked)
initBowlerPair();
if (comboBPA) comboBPA.sync();
if (comboBPB) comboBPB.sync();

// ======= RapidAPI Cricbuzz Live Scorecard Integration =======
// Fetches real live match data and populates the scorecard panel.
// Falls back to the existing simulation engine transparently.

const RAPID_KEY  = '14cdb2a5f3msh29dcd396889f155p110e86jsnaf85cd2c2f1c';
const RAPID_HOST = 'cricbuzz-cricket.p.rapidapi.com';

// Map Cricbuzz series type strings → Crease format tokens
function detectFormat(seriesName = '', matchType = '') {
  const s = (seriesName + ' ' + matchType).toUpperCase();
  if (s.includes('T20') || s.includes('TWENTY20')) return 'T20I';
  if (s.includes('TEST'))                             return 'Test';
  return 'ODI';
}

// Convert Cricbuzz innings object into liveMatch structure understood by renderLiveMatch()
function buildMatchFromCricbuzz(scorecard, matchInfo) {
  try {
    const teams   = matchInfo.matchTeamInfo || [];
    const tA      = (teams[0] && teams[0].battingTeamShortName) || 'TM1';
    const tB      = (teams[1] && teams[1].battingTeamShortName) || 'TM2';
    const fmt     = detectFormat(matchInfo.seriesName, matchInfo.matchFormat);
    const maxOv   = fmt === 'Test' ? 90 : fmt === 'ODI' ? 50 : 20;

    const inn     = scorecard.scoreCard || [];
    const inn1    = inn[0] || {};
    const inn2    = inn[1] || {};

    const parseScore = (innObj) => ({
      runs : (innObj.scoreDetails && innObj.scoreDetails.runs)   || 0,
      wkts : (innObj.scoreDetails && innObj.scoreDetails.wickets)|| 0,
      overs: parseFloat((innObj.scoreDetails && innObj.scoreDetails.overs) || 0),
    });

    const s1 = parseScore(inn1);
    const s2 = parseScore(inn2);

    const parseBatters = (innObj) =>
      (innObj.batsmanStriker ? [innObj.batsmanStriker, innObj.batsmanNonStriker] : [])
        .concat(
          (innObj.batsmen || []).map(b => ({
            name     : b.fullName || b.name || '—',
            runs     : +(b.runs  || 0),
            balls    : +(b.balls || 0),
            fours    : +(b.fours || 0),
            sixes    : +(b.sixes || 0),
            dismissed: b.outDesc !== undefined && b.outDesc !== '',
          }))
        )
        .filter((v, i, a) => a.findIndex(x => x.name === v.name) === i);

    const parseBowlers = (innObj) =>
      (innObj.bowlers || []).map(bw => ({
        name   : bw.fullName || bw.name || '—',
        overs  : parseFloat(bw.overs  || 0),
        maidens: +(bw.maidens || 0),
        runs   : +(bw.runs    || 0),
        wkts   : +(bw.wickets || 0),
        balls  : 0,
      }));

    const parseFow = (innObj) =>
      (innObj.wickets || []).map((w, i) => ({
        wkt  : i + 1,
        runs : +(w.wktRuns || 0),
        name : w.batsman1 && w.batsman1.name ? w.batsman1.name.split(' ').pop() : '?',
      }));

    const inplay = (matchInfo.state || '').toLowerCase().includes('inprogress')
                || (matchInfo.status || '').toLowerCase().includes('live');
    const phase  = inplay && s2.overs > 0 ? 2 : 1;

    const battersA = parseBatters(inn1);
    const battersB = parseBatters(inn2);

    const striker1 = inn1.batsmanStriker
      ? battersA.findIndex(b => b.name === (inn1.batsmanStriker.fullName || inn1.batsmanStriker.name))
      : 0;
    const striker2 = inn2.batsmanStriker
      ? battersB.findIndex(b => b.name === (inn2.batsmanStriker.fullName || inn2.batsmanStriker.name))
      : 0;

    const activeBowlerRaw =
      (phase === 1 ? inn1.bowlerStriker : inn2.bowlerStriker) || {};

    return {
      // identifiers
      tA, tB, maxOv, fmt,
      // inn 1
      runsA : s1.runs,  wktsA : s1.wkts,  oversA : s1.overs,
      // inn 2
      runsB : s2.runs,  wktsB : s2.wkts,  oversB : s2.overs,
      // meta
      phase,
      target : phase === 2 ? s1.runs + 1 : 0,
      battersA,
      battersB,
      bowlersB : parseBowlers(inn1),
      bowlersA : parseBowlers(inn2),
      fow      : parseFow(phase === 1 ? inn1 : inn2),
      extras   : (inn1.extrasData && inn1.extrasData.total) || 0,
      rrHist   : [],
      lastBall : '—',
      striker  : phase === 1 ? Math.max(0, striker1) : Math.max(0, striker2),
      batTeam  : phase === 1 ? tA : tB,
      bowlTeam : phase === 1 ? tB : tA,
      activeBowler: {
        name  : activeBowlerRaw.fullName || activeBowlerRaw.name || '—',
        overs : parseFloat(activeBowlerRaw.overs  || 0),
        runs  : +(activeBowlerRaw.runs    || 0),
        wkts  : +(activeBowlerRaw.wickets || 0),
        balls : 0,
        maidens: 0,
      },
      // legacy props for renderLiveMatch()
      bat1: '—', bat1Runs:0, bat1Balls:0,
      bat2: '—', bat2Runs:0, bat2Balls:0,
      bowler: activeBowlerRaw.fullName || '—', bowlOvers:0, bowlRuns:0, bowlWkts:0,
      _fromApi: true,
    };
  } catch (e) {
    console.warn('[Crease] buildMatchFromCricbuzz error:', e);
    return null;
  }
}

// Show/hide a small API-source badge on the live panel header
function setApiSourceBadge(isLive) {
  const badge = document.getElementById('live-badge');
  if (!badge) return;
  if (isLive) {
    badge.textContent = 'LIVE · API';
    badge.style.background = '#e04b3a';
  } else {
    badge.textContent = 'SIM';
    badge.style.background = '#2c5c4a';
  }
}

let _apiPollTimer = null;

async function fetchLiveFromApi() {
  const opts = {
    method : 'GET',
    headers: {
      'x-rapidapi-key' : RAPID_KEY,
      'x-rapidapi-host': RAPID_HOST,
    },
  };

  try {
    // 1. Get current live matches list
    const listRes  = await fetch('https://cricbuzz-cricket.p.rapidapi.com/matches/v1/live', opts);
    if (!listRes.ok) throw new Error(`Matches list HTTP ${listRes.status}`);
    const listJson = await listRes.json();

    // Flatten all match items from all type groups
    const allMatches = (listJson.typeMatches || []).flatMap(tg =>
      (tg.seriesMatches || []).flatMap(sm =>
        (sm.seriesAdWrapper && sm.seriesAdWrapper.matches) || []
      )
    );

    // Prefer international matches (INT series type)
    const intMatches = allMatches.filter(m =>
      m.matchInfo && (m.matchInfo.seriesId > 0)
    );
    const pick = intMatches[0] || allMatches[0];
    if (!pick || !pick.matchInfo) {
      console.info('[Crease] No live matches from API — keeping simulation');
      setApiSourceBadge(false);
      return;
    }

    const matchId = pick.matchInfo.matchId;
    if (!matchId) { setApiSourceBadge(false); return; }

    // 2. Fetch full scorecard for that match
    const scRes  = await fetch(
      `https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/${matchId}/scard`, opts
    );
    if (!scRes.ok) throw new Error(`Scorecard HTTP ${scRes.status}`);
    const scJson = await scRes.json();

    const built = buildMatchFromCricbuzz(scJson, pick.matchInfo);
    if (!built) { setApiSourceBadge(false); return; }

    // 3. Inject into the existing render pipeline
    liveMatch = built;
    currentScorecardInn = liveMatch.phase;
    updateInnTabs();
    renderLiveMatch();
    setApiSourceBadge(true);

    // Update fixture label with full series name
    const fixEl = document.getElementById('live-fixture');
    if (fixEl && pick.matchInfo.seriesName) {
      fixEl.textContent =
        `${built.tA} vs ${built.tB} · ${pick.matchInfo.seriesName}`;
    }

    console.info('[Crease] Live scorecard loaded from API — match', matchId);
  } catch (err) {
    console.warn('[Crease] API fetch failed, simulation active:', err.message);
    setApiSourceBadge(false);
  }
}

// Kick off: try API immediately, then re-poll every 60 s
(function startApiPolling() {
  fetchLiveFromApi();
  _apiPollTimer = setInterval(fetchLiveFromApi, 60_000);
})();