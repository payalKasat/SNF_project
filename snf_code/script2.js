/* Created by Ashwini 3/4/2018 */


$(document).ready(function() {
    default_project(heading[0],paragraph[0]);
    select_nav_info();
    dynamic_team_member_creation();

    $('.team').click(function () {
        dynamic_team_member_creation();
    });
    $('.mentor').click(function () {
        dynamic_mentor_member_creation();
    });
    $('.NRI').click(function () {
       dynamic_NRI_member_creation();
    });
    $('.state').click(function () {
        dynamic_state_member_creation();
    });
    // Add smooth scrolling to all links in navbar + footer link
    $(".navbar a, footer a[href='#home_page']").on('click', function (event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
        $(".nav-tabs a").click(function(){
            $(this).tab('show');
        });
});


/*----------------------- our work page script--------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------*/
/* dynamically project images creating  */
// var project_images = ["../images/snf_water_project/water_project1"];
//
// function dynamic_project_img_creation() {
//     $('.thumbnail').empty();
//     for(var i =0; i <= project_images.length ;i++){
//         $('.thumbnail).append('<img src="' + project_images[i] + '">');
//
//     }
//
//
// }
/* dynamically information creation  */

var paragraph =['The year 2016 turned out to be rather unfortunate for the state of Maharashtra as famines' +
' hit the state as a large scale. The plight of the ruralites is heart wrenching as they wander about for ' +
'miles in search of water the social networking forum therefore decided to step in and help the people out' +
' of this miseries. Our team surveyed the worst hit / affected villages and called out for help through social' +
' media. The appeal was headed by several as the response was overwhelming. With the immense contributions and' +
' aid that poured in, the team took work immediately. Five villages were surveyed and the task to make these ' +
'five villages self sufficient and water abundant was completed within the five months from January 2016 to ' +
'May 2016. Similar programs were carried out to self sufficethhree more such villages in the year 2017. our ' +
'sincere efforts continues towards our mission as hundreds of appeals reach us every others day from various' +
' villages facing water scarcity. Based on the donations and aids that come in, the forum strives to take up' +
' more of such cases.','These funds aim towards providing monetary relief to the families of soldiers who lost' +
' their lives during service to the nation. Indian Military personnel who patrol the boundaries or are ' +
'stationed nearby the borders fall prey to the foul play from across the borders. Our country thus, loses ' +
'out these men who have suffered at the cause of Infiltration bids. These brave hearts who once left with ' +
'the promise of returning soon. alas. Never make it back to their homes. The selfless sacrifices of these ' +
'Jawans leave us forever indebted to their service. And thus to make up for the losses of their families. ' +
'Our organization strives in every possible way. We aim towards gathering economic aid as well as towards ' +
'providing educational, medical and insurance facilities to the kin of the martyrs. The fundraising started ' +
'in 2013 to imbibe the importance of patriotism in the young generation of India through social media. So far ' +
'families of 10 such martyred soldiers have been helped by urging netizens to contribute some amounts for this ' +
'good cause. As much as we hope for peace across the borders, we also take a stance for the ones who have lost' +
' their brethren to war. We urge you to step forward and donate generously for this Noble cause.','A citizen of a' +
' country is a great asset to it, however an educated citizen is the greatest asset to the nation. We believe ' +
'that the progress comes in with every educated individual who can now make a great deal of contributions ' +
'towards the development of the society. Unfortunately though , education somehow never reaches the remote ' +
'areas of the country where there are many who wish to be literate. This is mostly due to the lack of' +
' availability of resources and educational material that cannot be afforded or obtained with ease.' +
' Educational system of the rural India needs to be strengthened and to do so. our organization sends ' +
'forth an appeal to our members and followers for donations in any form – especially – the stationery ' +
'materials and books that can be distributed according to the requests of our beneficiaries and government ' +
'schools in remote areas. Based on the donations received, E-learning kits were provided to villages like ' +
'Gadhaipada, Peth, Khambale. With these ongoing programmes. we strive to reach more areas with a better hope ' +
'and more to give !!.','India remains one of the third world countries with sub standard medical facilities ' +
'for the backward economic sections. The plight of the malnourished and ailing children from the rural areas ' +
'in unbearable. These sections have always been deprived of the proper medical facilities which is one of the ' +
'major reasons of degrading standards of life. The organization has been functional towards providing ' +
'healthcare to these people who are in a desperate need of medical facilities more than ever. Our members ' +
'who are practicing doctors visit remote villages for a regular health check up of all school going children' +
' and ailing adults. We distribute medicines through the collected funds. As no or very low medical facilities' +
' are present in rural areas, we conduct medical checkup camps for adults and children like the cancer ' +
'detection camp or dental checkup camps for the underprivileged sections of the society. We pledge to bring' +
' proper medical facilities and better standards of life in order to contribute our share towards the ' +
'society and towards the nation.','Every living being on this planet owes its very existence to the Flora that' +
' has kept the ecological balance of the Earth. In these times of modernization and industrialization the ' +
'Flora has suffered irreparable damages due to mass deforestation. We are yet to realize that with every tree' +
' being cut – the count down to the doom has begun. Our organization maintains stark environmental policies ' +
'and zero tolerance towards inhuman slaughter of trees. In order to reverse the damages done to the nature,' +
' we constantly organize tree plantation drives with the avid participation of Founders, members , followers' +
' and volunteers. We are extremely proud to bring up the Saint Tukaram Maharaj Park in Nasik city which was ' +
'entirely sponsored by our organization. Mr. Pramod Gaikwad – our founder-who obtained the land from the' +
' Municipal Corporation and amassed funds to groom the park – which was soon made open for the public ' +
'recreation. We have been laboring endlessly to turn the barren patches of earth into the greener ones ' +
'with an overwhelming response from all our volunteers.','Buried deep beneath the poverty and lack of facilities, ' +
'there is talent worthy of recognition and fame. Reaching out to such talented sportsmen of India, we aim ' +
'towards encouraging sports and games in every possible way. The organization has been collecting funds to' +
' pay the coaching fees and to pay for the sports equipment of the players who are in a desperate need of ' +
'financial help. The talent of sports present in children coming from a strikingly backward background is' +
' really surprising yet worthy of motivation. Social networkers were called upon to provide help so as to ' +
'encourage children from poor families to play sports and excel at them by providing sports related equipments' +
' to rural schools. We are also grateful to our supporters who send in sports kits and donations to boost ' +
'their morale. The forum believes that the nation should excel in every possible field – sports being one of ' +
'the foremost ones!! Thus we have been working for grooming and training of these calibered individuals who ' +
'are sure to bring glory to their motherland !!.','Most of us are fortunate to have everything we might hope for.' +
' But there are many who cannot be considered just as fortunate!! Desolate orphans and helpless abandoned ' +
'senior citizens are amongst the many who are deprived of families of their own and have no one to turn to. ' +
'To bring in hopes to these neglected sections of our society, Our organization has pledged not let any ' +
'occasion pass without being celebrated. Along with generous donations, we urge our members and all our' +
' followers to visit orphanages and old age homes from time to time with essentials. Most importantly on ' +
'the occasions of their birthdays and anniversaries which can be celebrated in those shelter homes. No gift' +
' can be greater than the joy that lights up the faces of these little children who have known anything but ' +
'sorrows for most of their lives. The members of the Forum have made it ritualistic to celebrate their special' +
' occasions at Orphanages and Old Age homes – as initiated by our Founder – Mr. Pramod Gaikwad.'];

var heading = ['Clean water Project','Shahid Jawan Fund','Educational Facilities','Health & Medical Projects',
    'Enviromental Conservation','Sport Projects','Orphanages and old home help on birthday'];

function dynamic_nav_info_creation(paragraph,header){
    $('.current_div').hide();
    $('._info_side').empty();
    $('.current_tab').removeClass('current_tab');
    var info_h2 =$('<h2>'+ header +'</h2>').addClass('info_h2 text-center');
    var info_p = $('<p>'+ paragraph+'</p>').addClass('info_p');
    $('._info_side').append(info_h2,info_p);

}

function default_project(header, paragraph) {
    $('.nav_1').ready(function () {
        $('.water_project').show().addClass('current_div');
        var info_h2 =$('<h2>'+ header +'</h2>').addClass('info_h2 text-center');
        var info_p = $('<p>'+ paragraph+'</p>').addClass('info_p');
        $('._info_side').append(info_h2,info_p);        $('.nav_1').addClass('current_tab');
    });
}
function select_nav_info(){

    $('.nav_1').click(function(){
        dynamic_nav_info_creation(paragraph[0],heading[0]);
        $('.water_project').show().addClass('current_div');
        $(this).addClass('current_tab');
    });
    $('.nav_2').click(function(){
        dynamic_nav_info_creation(paragraph[1],heading[1]);
        $('.shahid_javan_project').show().addClass('current_div');
        $(this).addClass('current_tab');

    });
    $('.nav_3').click(function(){
        dynamic_nav_info_creation(paragraph[2],heading[2]);
        $('.education_project').show().addClass('current_div');
        $(this).addClass('current_tab');

    });
    $('.nav_4').click(function(){
        dynamic_nav_info_creation(paragraph[3],heading[3]);
        $('.health_project').show().addClass('current_div');
        $(this).addClass('current_tab');

    });
    $('.nav_5').click(function(){
        dynamic_nav_info_creation(paragraph[4],heading[4]);
        $('.environmental_project').show().addClass('current_div');
        $(this).addClass('current_tab');

    });
    $('.nav_6').click(function(){
        dynamic_nav_info_creation(paragraph[5],heading[5]);
        $('.sport_project').show().addClass('current_div');
        $(this).addClass('current_tab');

    });
    $('.nav_7').click(function(){
        dynamic_nav_info_creation(paragraph[6],heading[6]);
        $('.orphanage_project').show().addClass('current_div');
        $(this).addClass('current_tab');

    });

}


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
        'Pramod Gaikwad - Founder, Social Networking Forum',
        '02 Dr Uttam Fartale',
        '03 Dr. Pankaj Bhadane',
        '4 Er. Prashant Bachhav',
        '05 Ramdas Shinde',
        '06 Gulab Aaher',
        '07 Ambika Takalkar',
        '08 Shrikant Dhone',
        '09 Vaibhav Kambale',
        '10 Vaishali Kulkarni',
        '11 Nilesh Gaikwad',
        '12 Adv.Arundhati Dumbare',
        '13 Dr Yogesh Joshi - Nashik',
        '14 Dinesh and Suvarna Joshi - Nashik',
        '15 Ashish Choursiya, Nashik',
        '16 Dr Madhavi Muthal',
        '17 Vivek Shinde Ahemednagar',
        '18 Sharad Thombare',
        '19 Sandhya Chougule - Mumbai',
        '20 Smita Chavhanke',
        '21 Pratibha Choudhari - Pune',
        '22 aArchana Jadhav Kushare',
        '23 Archana Gaikwad',
        '24 Datta Patil',
        '25 Sachin',
        '26 Laxman Kokane',
        '27 Amod Patil',
        '28 Sharad Sonawane',
        '29 Sunil Sawant -',
        '30 Pramod Bhadane',
        '31 Rajesh Jadhav',
        '32 Shashank Mhatre',
        '33 Dilip Dude',
        '34 Pramod Patil',
        '35 Mahesh Deore',
        '36 Avinash Tambe',
        '37 Nilesh Kalaskar',
        '38 Bharat Rana',
        '39 Dnyaneshwar Patil',
        '40 Ratnakar Gore',
        '41 Deodatta Borase',
        '42 Rahul Gadgil',
        '43 Sandeep Battase',
        '44 Sumit Mehetre',
        '45 Vaibhav Tupe',
        '46 Rupesh Gunjegaonkar',
        '47 Mitesh Mutha',
        '48 Sachin Patil',
        '49 Vinayak Mali',
        '50 Sandeep Ramname',
        '51 Rahul Jinde',
        '52 Amol Dhondage',
        '53 Ashish Jadhav',
        '54 Balaji Biradar',
        '55 Pritam Dumbare',
        '56 Darshan Gaikwad',
        '57 Rahul Borase',
        'Dr Sarala Sohnandani',
        '2 Dr Vishal Pawar',
        '3 Dr Samir Pawar',
        '4 Dr Manish Deore',
        '5 Dr Milind Borse',
        '6 Dr. Prashant',
        '7 Dr Nitin Surana',
        '8 Mr. And Mrs Pimprikar',
        '9 Dr Kshama Aghor',
        '10 Dr Hemraj Dhondage',
        '11 Dr kavita Gadekar',
        '12 Dr Hemant Borase',
        '13 Dr Milind Gangurde',
        '14 Dr Nitin chitalkar',
        '15 Dr Pankaj Devare',
        '16 Dr Pramod Ahire',
        '17 Dr Prashant Sonawane',
        '18 Dr Rajesh Patil',
        '19 Dr Sandeep Aaher',
        '19 Dr Sandeep gunde',
        '20 Dr Sandeep Pasnsare',
        '21 Dr Smita Raut',
        '22 Dr Sujata Kulkarni',
        '23 Dr Vinit Devare',
        '24 Dr Vinod Chaudhari',
        '25 Sunil Baravkar',
        '26 Vaibhav More',
        '27 Vikrant Mane',
        '28 Dr Pramod Ahire',
        '29 Yogesh Kadam',
        '30 Dr Sarika devare',
        '31 Atul ahire',
        '32 Dr Amol Patil',
        '33 Dr Ganesh Pathade',
        '34 Dr Maruti Ghuge',
        '35 Dr Milind Pimprikar',
        '36 Dr Varsha Baste',
        '37 Dr Yogesh Gosavi',
        '38 Dr Vishal Pawar'
    ],
    mentor:[
        '1 Dr. Vinay Sahastrbuddhe, Delhi.jpg',
        '2 Jeevan Sonawane - Nagpur.jpg',
        '3 Rajesh Bakshi - Muscut.jpg',
        '4 Laxmikant Powanikar - Qtar.png',
        '5 Kishor Gore USA.jpg',
        '6 Dr. Jaydip Nikam Nashik.png',
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
    NRI:[
        '1 Sanjay Mane dubai.jpg',
        '2 Mukul Agashe - Singapur.jpg',
        '3 Sandeep Gangarde - Gulf.jpg',
        '4 Sandeep Rane - USA.jpg',
        '5 Rajendra Gill - UK.jpg',
        '6 Nandkumar Desai - Dubai.jpg',
        '7 Dr Rahul Gosavi, UK.jpg',
        '8 Yogesh Kasat, USA.jpg'
    ]

};
//members images array
function dynamic_team_member_creation() {
    $('.mentor-img-div,.NRI-img-div,.state-img-div').empty();
    $('.mentor-div,.NRI-div,.state-div').hide();
    $('.team-div').show();
    var team_member_length = teamArray['team'].length;
    for(var j = 0; j <= team_member_length; j++) {               //loop for appending team member's images to team-div
        $('.member' + j ).append('<img src="../images/team/' + teamArray['team'][j] + '">');     //append images to div
    }
}
//team creation function ends here

function dynamic_mentor_member_creation() {
    $('.team-img-div,.state-img-div,.NRI-img-div').empty();
    $('.team-div,.NRI-div,.state-div').hide();
    $('.mentor-div').show();
    var mentor_member_length = teamArray['mentor'].length;
    for(var j = 0; j <= mentor_member_length; j++) {               //loop for appending mentor member's images to mentor-div
        $('.mentor' + j ).append('<img src="../images/team/Mentors/' + teamArray['mentor'][j] + '">');     //append images to div
    }
}
//mentor creation function ends here

function dynamic_NRI_member_creation() {
    $('.team-img-div,.mentor-img-div,.state-img-div').empty();
    $('.team-div,.mentor-div,.state-div').hide();
    //$('.mentor-img-div').empty();
    //$('.mentor-div').hide();
    $('.NRI-div').show();
    var mentor_member_length = teamArray['NRI'].length;
    for(var j = 0; j <= mentor_member_length; j++) {               //loop for appending mentor member's images to mentor-div
        $('.NRI' + j ).append('<img src="../images/team/NRI%20Members/' + teamArray['NRI'][j] + '">');     //append images to div
    }
}
//NRI creation function ends here

function dynamic_state_member_creation() {
    $('.team-img-div,.mentor-img-div,.NRI-img-div').empty();
    $('.team-div,.mentor-div,.NRI-div').hide();
    $('.state-div').show();
    var mentor_member_length = teamArray['other_states'].length;
    for(var j = 0; j <= mentor_member_length; j++) {               //loop for appending mentor member's images to mentor-div
        $('.state' + j ).append('<img src="../images/team/Members%20from%20other%20states/' + teamArray['other_states'][j] + '">');     //append images to div
    }
}

//state creation function ends here