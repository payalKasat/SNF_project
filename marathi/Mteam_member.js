
/*   team page script start here */
var teamArray = {

    team:[
        '1 Pramod Gaikwad - Founder, Social Networking Forum.jpg',
        '02 Dr Uttam Fartale.png',
        '03 Dr. Pankaj Bhadane.jpg',
        '4 Er. Prashant Bachhav.jpg',
        '05 Ramdas Shinde.png',
        '06 Gulab Aaher.png',
        '07 Ambika Takalkar.jpg',
        '08 Shrikant Dhone.jpg',
        '09 Vaibhav Kambale.jpg',
        '10 Vaishali Kulkarni.jpg',
        '11 Nilesh Gaikwad.png',
        '12 Adv.Arundhati Dumbare.jpg',
        '13 Dr Yogesh Joshi - Nashik.jpg',
        '14 Dinesh and Suvarna Joshi - Nashik.jpg',
        '15 Ashish Choursiya, Nashik.jpg',
        '16 Dr Madhavi Muthal.jpg',
        '17 Vivek Shinde Ahemednagar.jpg',
        '18 Sharad Thombare.png',
        '19 Sandhya Chougule - Mumbai.jpg',
        '20 Smita Chavhanke.jpg',
        '21 Pratibha Choudhari - Pune.jpg',
        '22 aArchana Jadhav Kushare.jpg',
        '23 Archana Gaikwad.jpg',
        '24 Datta Patil.png',
        '25 Sachin.png',
        '26 Laxman Kokane.png',
        '27 Amod Patil.png',
        '28 Sharad Sonawane.jpg',
        '29 Sunil Sawant -.jpg',
        '30 Pramod Bhadane.jpg',
        '31 Rajesh Jadhav.jpg',
        '32 Shashank Mhatre.jpg',
        '33 Dilip Dude.jpg',
        '34 Pramod Patil.JPG',
        '35 Mahesh Deore.jpg',
        '36 Avinash Tambe.jpg',
        '37 Nilesh Kalaskar.jpg',
        '38 Bharat Rana.jpg',
        '39 Dnyaneshwar Patil.jpg',
        '40 Ratnakar Gore.jpg',
        '41 Deodatta Borase.jpg',
        '42 Rahul Gadgil.jpg',
        '43 Sandeep Battase.jpg',
        '44 Sumit Mehetre.png',
        '45 Vaibhav Tupe.jpg',
        '46 Rupesh Gunjegaonkar.jpg',
        '47 Mitesh Mutha.jpg',
        '48 Sachin Patil.jpg',
        '49 Vinayak Mali.jpg',
        '50 Sandeep Ramname.jpg',
        '51 Rahul Jinde.jpg',
        '52 Amol Dhondage.jpg',
        '53 Ashish Jadhav.jpg',
        '54 Balaji Biradar.jpg',
        '55 Pritam Dumbare.jpg',
        '56 Darshan Gaikwad.jpg',
        '57 Rahul Borase.jpg',
        '1 Dr Sarala Sohnandani.jpg',
        '2 Dr Vishal Pawar.jpg',
        '3 Dr Samir Pawar.jpg',
        '4 Dr Manish Deore.png',
        '5 Dr Milind Borse.jpg',
        '6 Dr. Prashant.jpg',
        '7 Dr Nitin Surana.jpg',
        '8 Mr. And Mrs Pimprikar.jpg',
        '9 Dr Kshama Aghor.jpg',
        '10 Dr Hemraj Dhondage.jpg',
        '11 Dr kavita Gadekar.jpg',
        '12 Dr Hemant Borase.png',
        '13 Dr Milind Gangurde.png',
        '14 Dr Nitin chitalkar.png',
        '15 Dr Pankaj Devare.png',
        '16 Dr Pramod Ahire.png',
        '17 Dr Prashant Sonawane.png',
        '18 Dr Rajesh Patil.png',
        '19 Dr Sandeep Aaher.png',
        '19 Dr Sandeep gunde.png',
        '20 Dr Sandeep Pasnsare.png',
        '21 Dr Smita Raut.png',
        '22 Dr Sujata Kulkarni.png',
        '23 Dr Vinit Devare.png',
        '24 Dr Vinod Chaudhari.png',
        '25 Sunil Baravkar.png',
        '26 Vaibhav More.png',
        '27 Vikrant Mane.png',
        '28 Dr Pramod Ahire.png',
        '29 Yogesh Kadam.png',
        '30 Dr Sarika devare.png',
        '31 Atul ahire.png',
        '32 Dr Amol Patil.png',
        '33 Dr Ganesh Pathade.png',
        '34 Dr Maruti Ghuge.jpg',
        '35 Dr Milind Pimprikar.jpg',
        '36 Dr Varsha Baste.jpg',
        '37 Dr Yogesh Gosavi.jpg',
        '38 Dr Vishal Pawar.png'
    ],
    team_member_name:[
        'प्रमोद गायकवाड - संस्थापक, सोशल नेटवर्किंग फोरम ',
        'उत्तम उत्तमला',
        'डॉ. पंकज भाडे ',
        'एर प्रशांत बच्छाव ',
        'रामदास शिंदे',
        'गुलाब आहेर',
        'अंबिका टाकळकर',
        'श्रीकांत ढोणे',
        'वैभव कांबळे',
        'वैशाली कुलकर्णी',
        'निलेश गायकवाड',
        'अॅड. अरुंधती दुंबरे',
        'योगेश जोशी - नाशिक',
        'दिनेश आणि सुवर्णा जोशी - नाशिक ',
        'आशीष चौसरिया, नाशिक',
        'डॉ. माधवी मुथल',
        'विवेक शिंदे अहमदनगर',
        'शरद ठोंबरे',
        'संध्या चौगुले - मुंबई',
        'स्मिता चौहानके',
        'प्रतिभा चौधरी - पुणे',
        'अर्चना जाधव कुशारे',
        'अर्चना गायकवाड',
        'दत्ता पाटील',
        'सचिन',
        'लक्ष्मण कोकेणे',
        'आमोद पाटील',
        'शरद सोनवणे',
        'सुनील सावंत -',
        'प्रमोद भदन',
        'राजेश जाधव',
        'शशांक म्हात्रे',
        'दिलीप ड्यूड',
        'प्रमोद पाटील',
        'महेश देवर',
        'अविनाश तांबे ',
        'निलेश कळस्कर',
        'भारत राणा',
        'ज्ञानेश्वर पाटील',
        'रत्नाकर गोरे',
        'देवदट्टा बोरेस',
        'राहुल गाडगीळ',
        'संदीप बटसे',
        'सुमित मेहता',
        'वैभव तुपे',
        'रुपेश गुन्गांवकर',
        'मितेश मुथा',
        'सचिन पाटील',
        'विनायक माळी',
        'संदीप रामनाम',
        'राहुल जिंदे',
        'अमोल ढोंडगे',
        'आशिष जाधव',
        'बालाजी बिदार',
        'प्रीतम दुंबरे',
        'दर्शन गायकवाड',
        'राहुल बोरासे',
        'डॉ. सरला सोहनंदानी',
        'डॉ. विशाल पवार',
        'डॉ. समीर पवार',
        'डॉ. मनीष देवटे',
        'मिलिंद बोर्से',
        'डॉ. प्रशांत ',
        'डॉ नितीन सुराना',
        'मिस्टर. आणि श्रीमती पिंपरीकर',
        'डॉ क्षमा अघोर',
        'डॉ हेमराज धोंडेज',
        'कविता गाडेकर',
        'डॉ हेमान बोरसे ',
        'मिलिंद गांगुर्डे',
        'डॉ नितिन चितळकर',
        'डॉ पंकज देवरे',
        'डॉ. प्रमोद अहिरे',
        'डॉ. प्रशांत सोनवणे',
        'राजेश पाटील',
        'डॉ संदीप एहहर',
        'डॉ संदीप गुंडे',
        'डॉ संदीप पाससनारे',
        'डॉ स्मिता राऊत',
        'डॉ सुजाता कुलकर्णी',
        'डॉ. विनित देवरे',
        'डॉ. विनोद चौधरी',
        'सुनील बारवकर',
        'वैभव अधिक',
        'विक्रांत माने',
        'डॉ. प्रमोद अहिरे',
        'योगेश कदम',
        'डॉ. सारिका दिसारे',
        'अतुलशायर ',
        'डॉ. अमोल पाटील',
        'गणेश पठारे',
        'डॉ मारुती घुगे',
        'मिलिंद पिंपरीकर',
        'डॉ वर्षा बरस्ते',
        'डॉ. योगेश गोसावी',
        'डॉ. विशाल पवार',
    ],
    mentor:[
        '1 Dr. Vinay Sahastrbuddhe, Delhi.jpg',
        '2 Jeevan Sonawane - Nagpur.jpg',
        '3 Rajesh Bakshi - Muscut.jpg',
        '4 Laxmikant Powanikar - Qtar.png',
        '5 Kishor Gore USA.jpg',
        '6 Dr. Jaydip Nikam Nashik.png',
    ],
    mentor_name:[
        'डॉ. विनय सहस्त्रबुद्धे - दिल्ली ',
        'जीवन सोनवणे - नागपूर',
        'राजेश बक्षी - मुस्कट',
        'लक्ष्मीकांत पॉवरनीकर - कतार',
        'किशोर गोर - यूएसए',
        'डॉ. जयदीप निकम - नाशिक'
    ],
    other_states:[
        '1 Dr. T Chandrkant - Bhopal.jpg',
        '2 Sanjay Barve - Goa.jpg',
        '3 Aditi Bakshi - Hyderabad.jpg',
        '4 Dr Prajaktha Jirati Madhy Pradesh.png',
        '5 Dipali Ahire Ayre - Gujrath.jpg',
        '6 Ram Ture Tamilnadu.jpg',
        '7 Sharvari Sawant Gujrath.jpg'
    ],
    other_state_name:[
        'डॉ. टी चंद्रकांत - भोपाळ ',
        'संजय बर्वे - गोवा',
        'अदत्ती बक्षी - हैद्राबाद',
        'डॉ. प्राजक्ता जिराती - मध्य प्रदेश',
        'दीपाली अहिरे आयरे - गुजराथ',
        'राम तुर्य - तामिळनाडू',
        'शरवरी सावंत - गुजराथ'
    ],
    NRI:[
        '1 Sanjay Mane dubai.jpg',
        '2 Mukul Agashe - Singapur.jpg',
        '3 Sandeep Gangarde - Gulf.jpg',
        '4 Sandeep Rane - USA.jpg',
        '5 Rajendra Gill - UK.jpg',
        '6 Nandkumar Desai - Dubai.jpg',
        '7 Dr Rahul Gosavi, UK.jpg',
        'yk.jpg'
    ],
    NRI_name:[
        'संजय माने - दुबई ',
        'मुकुल आगाशे - सिंगपुर',
        'संदीप गंगार्डे - गल्फ',
        'संदीप राणे - अमेरिका',
        'राजेंद्र गिल - यूके',
        'नंदकुमार देसाई - दुबई',
        'राहुल गांधी गोसावी - यूके',
        'योगेश कसा - अमेरिका'
    ]

};
//members images array
function dynamic_team_member_creation() {
    $('.mentor-img-div,.NRI-img-div,.state-img-div,.team-img-div').empty();
    $('.mentor-div,.NRI-div,.state-div,.founder_div').hide();
    $('.team-div').show();
    var team_member_length = teamArray['team'].length;
    for(var j = 0; j <= team_member_length; j++) {               //loop for appending team member's images to team-div
        var team_member_name = teamArray['team_member_name'][j];
        var h4 = $('<h4></h4>').text(team_member_name);
        $('.member' + j ).append('<img src="../images/team/' + teamArray['team'][j] + '">',h4);     //append images to div
    }
}
//team creation function ends here

function dynamic_mentor_member_creation() {
    $('.team-img-div,.state-img-div,.NRI-img-div,.mentor-img-div').empty();
    $('.team-div,.NRI-div,.state-div,.founder_div').hide();
    $('.mentor-div').show();
    var mentor_member_length = teamArray['mentor'].length;
    for(var j = 0; j <= mentor_member_length; j++) {               //loop for appending mentor member's images to mentor-div
        var team_member_name = teamArray['mentor_name'][j];
        var h4 = $('<h4></h4>').text(team_member_name);
        $('.mentor' + j ).append('<img src="../images/team/Mentors/' + teamArray['mentor'][j] + '">',h4);     //append images to div
    }
}
//mentor creation function ends here

function dynamic_NRI_member_creation() {
    $('.team-img-div,.mentor-img-div,.state-img-div,.NRI-img-div').empty();
    $('.team-div,.mentor-div,.state-div,.founder_div').hide();
    //$('.mentor-img-div').empty();
    //$('.mentor-div').hide();
    $('.NRI-div').show();
    var mentor_member_length = teamArray['NRI'].length;
    for(var j = 0; j <= mentor_member_length; j++) {               //loop for appending mentor member's images to mentor-div
        var team_member_name = teamArray['NRI_name'][j];
        var h4 = $('<h4></h4>').text(team_member_name);
        $('.NRI' + j ).append('<img src="../images/team/NRI%20Members/' + teamArray['NRI'][j] + '">',h4);     //append images to div
    }
}
//NRI creation function ends here

function dynamic_state_member_creation() {
    $('.team-img-div,.mentor-img-div,.NRI-img-div,.state-img-div').empty();
    $('.team-div,.mentor-div,.NRI-div,.founder_div').hide();
    $('.state-div').show();
    var mentor_member_length = teamArray['other_states'].length;
    for(var j = 0; j <= mentor_member_length; j++) {               //loop for appending mentor member's images to mentor-div
        var team_member_name = teamArray['other_state_name'][j];
        var h4 = $('<h4></h4>').text(team_member_name);
        $('.state' + j ).append('<img src="../images/team/Members%20from%20other%20states/' + teamArray['other_states'][j] + '">',h4);     //append images to div
    }
}

//state creation function ends here
