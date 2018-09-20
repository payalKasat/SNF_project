/* Created by Ashwini 3/4/2018 */


$(document).ready(function() {
    default_project(heading[0],paragraph[0]);
    select_nav_info();
    dynamicaly_news_image();
    supporter_animation();
    dynamicaly_blog_image();
    dynamicaly_awards_image();
    payment_option();

    //donate button click
    $('.donate').click(function () {
        donete_button();
    });
    $('.donate_now').click(function () {
        donete_button();
    });
    //form submit
    // $('.submit').click(function () {
    //     submit_form();
    // });
    $('.news>div').click(function () {
        news_pic_click(this);
    });
    $('.blog>div').click(function () {
        blog_pic_click(this);
    });
    $('.award>div').click(function () {
        awards_pic_click(this);
    });
    //dynamic_team_member_creation();

    $('.team').click(function () {
        dynamic_team_member_creation();
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
    $('.founder').click(function () {
        $('.team-div,.mentor-div,.NRI-div,.state-div').hide();
        $('.founder_div').show();
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
        $('h2').show(3000);
    myMap();
});

function myMap() {
    var label = 'Silicon Valley Certifications (I) Pvt. Ltd';
    var myCenter = new google.maps.LatLng(20.006870, 73.766447);
    var mapProp = {center:myCenter, zoom:12, scrollwheel:false, draggable:false, mapTypeId:google.maps.MapTypeId.ROADMAP};
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    var marker = new google.maps.Marker({
        position:myCenter,
        label :label
    });
    marker.setMap(map);

}

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
/* what we do page script start  */
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
        $('.water_project').show(2000).addClass('current_div');
        $(this).addClass('current_tab');
    });
    $('.nav_2').click(function(){
        dynamic_nav_info_creation(paragraph[1],heading[1]);
        $('.shahid_javan_project').show(2000).addClass('current_div');
        $(this).addClass('current_tab');

    });
    $('.nav_3').click(function(){
        dynamic_nav_info_creation(paragraph[2],heading[2]);
        $('.education_project').show(2000).addClass('current_div');
        $(this).addClass('current_tab');

    });
    $('.nav_4').click(function(){
        dynamic_nav_info_creation(paragraph[3],heading[3]);
        $('.health_project').show(2000).addClass('current_div');
        $(this).addClass('current_tab');

    });
    $('.nav_5').click(function(){
        dynamic_nav_info_creation(paragraph[4],heading[4]);
        $('.environmental_project').show(2000).addClass('current_div');
        $(this).addClass('current_tab');

    });
    $('.nav_6').click(function(){
        dynamic_nav_info_creation(paragraph[5],heading[5]);
        $('.sport_project').show(2000).addClass('current_div');
        $(this).addClass('current_tab');

    });
    $('.nav_7').click(function(){
        dynamic_nav_info_creation(paragraph[6],heading[6]);
        $('.orphanage_project').show(2000).addClass('current_div');
        $(this).addClass('current_tab');

    });

}


//state creation function ends here
/** blog page script and animation**/

// var blog_images = [
//
// ];

/* media and news page script start here */
var news_images =[
    'IMG-20180415-WA0003.jpg',
    'Kotambi SNF news.jpg',
    'Aurbd-a4884580-large.jpg',
    'divy marathi news marathwads dushkal madat niddhi 213-2013.jpg',
    'Divy Marathi Rajesh Marathe.jpg',
    '2 Social Networking Forum News Shahid Hemraj - Uttar Pradesh.jpg',
    'Divy Marathi tree plantation (2).jpg',
    'DM shahid shankar shinde dattu fad news 17 Aug 16.jpg',
    'E lEarning systems in Tribal Villages.jpg',
    'IMG-20151013-WA0002.jpg',
    'IMG-20160228-WA0000.jpg',
    'IMG-20160303-WA0001.jpg',
    'IMG_1944.JPG',
    'Social Networking Forum - SHanth Sunderarajan Tamilnadu news.jpg',
    'SNF educational project - E learning Project news.jpg',
    'Kisan Tadavi news Divy Marathi June 18 2015.jpg',
    'Medical camp ekdare 2 Oct 2016.jpg',
    'old Books projects SNF Lokmat 19 Oct 16.jpeg',
    'Pudhari news ladachi blood group check up.JPG',
    'Pudhari news tree plantation (3).JPG',
    'shanti news DM Dec 24 16.jpg',
    'SNF birthday help news Bookes presented to Ashram School on Birthday.jpg',
    'Social Networking Forum - E learning Project news.jpg',
    'Social Networking Forum Educational facilities - News.jpg',
    'Social Networking Forum Educational facilities - old Books projects SNF Lokmat 19 Oct 16.jpeg',
    'Social0004.jpg',
    'Solapur news.jpg',
    'Tree plantetion Tavalibaud DM news 25 Dec 2016.jpg',
    'Tribal students Nashik Darshan 15 Jan DM.jpg',
    'Vadpada News Lokmat Times June 17 2017.jpg',
    'Water Management Course DM 9 Oct 17.jpg',
    '2 Social Networking Forum Shahid Hemraj And Sudhakar Singh news Dainik Bhaskar Bhopal.jpg',
    'Social Networking Forum initiative - shanti news DM Dec 24 16.jpg',
    '5 Nehru Yuva Kendra computer awareness news (1).jpg'

];

var selected_news= null;
function news_pic_click(element) {
    selected_news = $(element).attr('title');
    console.log(selected_news);
    news_model_pop_up(selected_news);
}

function news_model_pop_up(news_pic) {
    $('.modal-body').empty();
    $('.modal-body').append('<img class="news_img" src=" images/SNF%20news/'+news_images[news_pic] +'">');

    $('#newsmodal').modal('show');
    
}

function dynamicaly_news_image() {
    var news_length = news_images.length;
    for(var j = 0; j <= news_length; j++) {               //loop for appending news images to news-div
        //var news_img = news_images[j];
        $('.news' + j ).append('<img class="news_image" src="images/SNF%20news/' + news_images[j] + '">');     //append images to div
    }
}

/**----------------------------------- blog page script --------------------------------------------------------
 * --------------------------------------------------------------------------------------
 */

var blog_images =[
    'Aurbd-a4701880-large.jpg',
    'Divy Marathi Rajesh Marathe.jpg',
    'Malegao water help news DM - 14 March 17.jpg',
    'mata mulakhat 2 March 16.jpeg',
    'Pramod Gaikwad Maharashtra Times interview.jpg',
    'snf article in mata 15 Dec 15.jpg',
    'SOCIAL FORUM ARTICLE lOKMAT.jpg',
    'Social Networking Forum Water Project - Torangan news.jpg'

];

var selected_blog= null;
function blog_pic_click(element) {
    selected_blog = $(element).attr('title');
    console.log(selected_blog);
    blog_model_pop_up(selected_blog);
}

function blog_model_pop_up(blog_pic) {
    $('.modal-body').empty();
    $('.modal-body').append('<img class="blog_img" src=" images/SNF%20Articles/'+blog_images[blog_pic] +'">');

    $('#blogmodal').modal('show');

}

function dynamicaly_blog_image() {
    var blog_length = blog_images.length;
    for(var j = 0; j <= blog_length; j++) {               //loop for appending news images to news-div
        //var news_img = news_images[j];
        $('.blog' + j ).append('<img class="blog_image" src="images/SNF%20Articles/' + blog_images[j] + '">');     //append images to div
    }
}


/***------------------------------------------- awards and re-cognition script ---------------------------------------------
 * ----------------------------------------------------------------------------------------------------
 */

var awards_name = ['Award to Pramod Gaikwad by Maharashtra Govt work done for tribal community Minister Vishnu Sawara and Palak Mantri Dada Bhuse',
    'Jalyoddha Award  to SOcial Networking Forum for making villages water sufficient by Sakal Media group',
    'Lions club Award to SOcial Networking Forum for using social media for social cause 2017',
    'Pramod Gaikwad by Khatod social org Beed for helping one village in Marathwada drought 2014',
    'SNF founder for work done in tribal areas in UGC International conference for tribal deve',
    'Global leadership award to SNF founder Pramod Gaikwad from Afgan Women welfare minister Masuda Jala for using social media for social cause'
];
var awards_images =[
    '1 Award to Pramod Gaikwad by Maharashtra Govt work done for tribal community Minister Vishnu Sawara and Palak Mantri Dada Bhuse.JPG',
    '2 Jalyoddha Award  to SOcial Networking Forum for making villages water sufficient by Sakal Media group.JPG',
    '3 Lions club Award to SOcial Networking Forum for using social media for social cause 2017.jpg',
    'Felicitation of Pramod Gaikwad by Khatod social org Beed for helping one village in Marathwada drought i 2014.JPG',
    'Felicitation of SNF founder for work done in tribal areas in UGC International conference for tribal deve.jpg',
    'Global leadership award to SNF founder Pramod Gaikwad from Afgan Women welfare minister Masuda Jala for using social media for social cause.JPG'

];

var selected_awards= null;
function awards_pic_click(element) {
    selected_awards = $(element).attr('title');
    console.log(selected_awards);
    award_model_pop_up(selected_awards);
}

function award_model_pop_up(award_pic) {
    $('.modal-body').empty();
    $('.modal-body').append('<img class="award_img" src=" images/Awards%20and%20recognitions/'+awards_images[award_pic] +'">');

    $('#awardmodal').modal('show');

}

function dynamicaly_awards_image() {
    var award_length = awards_images.length;
    for(var j = 0; j <= award_length; j++) {               //loop for appending news images to news-div
        var award_name = awards_name[j];
        var h4 = $('<h4></h4>').text(award_name);
        $('.award' + j ).append('<img class="award_img" src="images/Awards%20and%20recognitions/' + awards_images[j] + '">',h4);     //append images to div
    }
}



/**---------------------------------------------- donate button script ------------------------------------------------
 * --------------------------------------------------------------------------------------------
 */

function donete_button(){
    $('#donate_modal').modal('show');
}

/**---------------------------------------- supporter animation----------------------------------------------------------------------
-----------------------------------------------------------------------------
 */

function supporter_animation(){
    $('.second_row').hide();
    $('.third_row').hide();
    $('.first_row').show();
    setTimeout(function () {
        $('.first_row').hide();
        $('.second_row').show();


    },2000);
    setTimeout(function () {
        $('.second_row').hide();
        $('.third_row').show();
    },5000);


}


/** contact page send ajax call scripting
 */



/**------------------------------------------ team page scripting --------------------------------------------------
 -------------------------------------------------------*/
//
// /*   team page script start here */
// var teamArray = {
//
//     team:[
//         '1 Pramod Gaikwad - Founder, Social Networking Forum.jpg',
//         '02 Dr Uttam Fartale.png',
//         '03 Dr. Pankaj Bhadane.jpg',
//         '4 Er. Prashant Bachhav.jpg',
//         '05 Ramdas Shinde.png',
//         '06 Gulab Aaher.png',
//         '07 Ambika Takalkar.jpg',
//         '08 Shrikant Dhone.jpg',
//         '09 Vaibhav Kambale.jpg',
//         '10 Vaishali Kulkarni.jpg',
//         '11 Nilesh Gaikwad.png',
//         '12 Adv.Arundhati Dumbare.jpg',
//         '13 Dr Yogesh Joshi - Nashik.jpg',
//         '14 Dinesh and Suvarna Joshi - Nashik.jpg',
//         '15 Ashish Choursiya, Nashik.jpg',
//         '16 Dr Madhavi Muthal.jpg',
//         '17 Vivek Shinde Ahemednagar.jpg',
//         '18 Sharad Thombare.png',
//         '19 Sandhya Chougule - Mumbai.jpg',
//         '20 Smita Chavhanke.jpg',
//         '21 Pratibha Choudhari - Pune.jpg',
//         '22 aArchana Jadhav Kushare.jpg',
//         '23 Archana Gaikwad.jpg',
//         '24 Datta Patil.png',
//         '25 Sachin.png',
//         '26 Laxman Kokane.png',
//         '27 Amod Patil.png',
//         '28 Sharad Sonawane.jpg',
//         '29 Sunil Sawant -.jpg',
//         '30 Pramod Bhadane.jpg',
//         '31 Rajesh Jadhav.jpg',
//         '32 Shashank Mhatre.jpg',
//         '33 Dilip Dude.jpg',
//         '34 Pramod Patil.JPG',
//         '35 Mahesh Deore.jpg',
//         '36 Avinash Tambe.jpg',
//         '37 Nilesh Kalaskar.jpg',
//         '38 Bharat Rana.jpg',
//         '39 Dnyaneshwar Patil.jpg',
//         '40 Ratnakar Gore.jpg',
//         '41 Deodatta Borase.jpg',
//         '42 Rahul Gadgil.jpg',
//         '43 Sandeep Battase.jpg',
//         '44 Sumit Mehetre.png',
//         '45 Vaibhav Tupe.jpg',
//         '46 Rupesh Gunjegaonkar.jpg',
//         '47 Mitesh Mutha.jpg',
//         '48 Sachin Patil.jpg',
//         '49 Vinayak Mali.jpg',
//         '50 Sandeep Ramname.jpg',
//         '51 Rahul Jinde.jpg',
//         '52 Amol Dhondage.jpg',
//         '53 Ashish Jadhav.jpg',
//         '54 Balaji Biradar.jpg',
//         '55 Pritam Dumbare.jpg',
//         '56 Darshan Gaikwad.jpg',
//         '57 Rahul Borase.jpg',
//         '1 Dr Sarala Sohnandani.jpg',
//         '2 Dr Vishal Pawar.jpg',
//         '3 Dr Samir Pawar.jpg',
//         '4 Dr Manish Deore.png',
//         '5 Dr Milind Borse.jpg',
//         '6 Dr. Prashant.jpg',
//         '7 Dr Nitin Surana.jpg',
//         '8 Mr. And Mrs Pimprikar.jpg',
//         '9 Dr Kshama Aghor.jpg',
//         '10 Dr Hemraj Dhondage.jpg',
//         '11 Dr kavita Gadekar.jpg',
//         '12 Dr Hemant Borase.png',
//         '13 Dr Milind Gangurde.png',
//         '14 Dr Nitin chitalkar.png',
//         '15 Dr Pankaj Devare.png',
//         '16 Dr Pramod Ahire.png',
//         '17 Dr Prashant Sonawane.png',
//         '18 Dr Rajesh Patil.png',
//         '19 Dr Sandeep Aaher.png',
//         '19 Dr Sandeep gunde.png',
//         '20 Dr Sandeep Pasnsare.png',
//         '21 Dr Smita Raut.png',
//         '22 Dr Sujata Kulkarni.png',
//         '23 Dr Vinit Devare.png',
//         '24 Dr Vinod Chaudhari.png',
//         '25 Sunil Baravkar.png',
//         '26 Vaibhav More.png',
//         '27 Vikrant Mane.png',
//         '28 Dr Pramod Ahire.png',
//         '29 Yogesh Kadam.png',
//         '30 Dr Sarika devare.png',
//         '31 Atul ahire.png',
//         '32 Dr Amol Patil.png',
//         '33 Dr Ganesh Pathade.png',
//         '34 Dr Maruti Ghuge.jpg',
//         '35 Dr Milind Pimprikar.jpg',
//         '36 Dr Varsha Baste.jpg',
//         '37 Dr Yogesh Gosavi.jpg',
//         '38 Dr Vishal Pawar.png'
//     ],
//     team_member_name:[
//         'Pramod Gaikwad - Founder, Social Networking Forum',
//         'Dr Uttam Fartale',
//         'Dr. Pankaj Bhadane',
//         'Er. Prashant Bachhav',
//         'Ramdas Shinde',
//         'Gulab Aaher',
//         'Ambika Takalkar',
//         'Shrikant Dhone',
//         'Vaibhav Kambale',
//         'Vaishali Kulkarni',
//         'Nilesh Gaikwad',
//         'Adv.Arundhati Dumbare',
//         'Dr Yogesh Joshi - Nashik',
//         'Dinesh and Suvarna Joshi - Nashik',
//         'Ashish Choursiya, Nashik',
//         'Dr Madhavi Muthal',
//         'Vivek Shinde Ahemednagar',
//         'Sharad Thombare',
//         'Sandhya Chougule - Mumbai',
//         'Smita Chavhanke',
//         'Pratibha Choudhari - Pune',
//         'Archana Jadhav Kushare',
//         'Archana Gaikwad',
//         'Datta Patil',
//         'Sachin',
//         'Laxman Kokane',
//         'Amod Patil',
//         'Sharad Sonawane',
//         'Sunil Sawant -',
//         'Pramod Bhadane',
//         'Rajesh Jadhav',
//         'Shashank Mhatre',
//         'Dilip Dude',
//         'Pramod Patil',
//         'Mahesh Deore',
//         'Avinash Tambe',
//         'Nilesh Kalaskar',
//         'Bharat Rana',
//         'Dnyaneshwar Patil',
//         'Ratnakar Gore',
//         'Deodatta Borase',
//         'Rahul Gadgil',
//         'Sandeep Battase',
//         'Sumit Mehetre',
//         'Vaibhav Tupe',
//         'Rupesh Gunjegaonkar',
//         'Mitesh Mutha',
//         'Sachin Patil',
//         'Vinayak Mali',
//         'Sandeep Ramname',
//         'Rahul Jinde',
//         'Amol Dhondage',
//         'Ashish Jadhav',
//         'Balaji Biradar',
//         'Pritam Dumbare',
//         'Darshan Gaikwad',
//         'Rahul Borase',
//         'Dr Sarala Sohnandani',
//         'Dr Vishal Pawar',
//         'Dr Samir Pawar',
//         'Dr Manish Deore',
//         'Dr Milind Borse',
//         'Dr. Prashant',
//         'Dr Nitin Surana',
//         'Mr. And Mrs Pimprikar',
//         'Dr Kshama Aghor',
//         'Dr Hemraj Dhondage',
//         'Dr kavita Gadekar',
//         'Dr Hemant Borase',
//         'Dr Milind Gangurde',
//         'Dr Nitin chitalkar',
//         'Dr Pankaj Devare',
//         'Dr Pramod Ahire',
//         'Dr Prashant Sonawane',
//         'Dr Rajesh Patil',
//         'Dr Sandeep Aaher',
//         'Dr Sandeep gunde',
//         'Dr Sandeep Pasnsare',
//         'Dr Smita Raut',
//         'Dr Sujata Kulkarni',
//         'Dr Vinit Devare',
//         'Dr Vinod Chaudhari',
//         'Sunil Baravkar',
//         'Vaibhav More',
//         'Vikrant Mane',
//         'Dr Pramod Ahire',
//         'Yogesh Kadam',
//         'Dr Sarika devare',
//         'Atul ahire',
//         'Dr Amol Patil',
//         'Dr Ganesh Pathade',
//         'Dr Maruti Ghuge',
//         'Dr Milind Pimprikar',
//         'Dr Varsha Baste',
//         'Dr Yogesh Gosavi',
//         'Dr Vishal Pawar'
//     ],
//     mentor:[
//         '1 Dr. Vinay Sahastrbuddhe, Delhi.jpg',
//         '2 Jeevan Sonawane - Nagpur.jpg',
//         '3 Rajesh Bakshi - Muscut.jpg',
//         '4 Laxmikant Powanikar - Qtar.png',
//         '5 Kishor Gore USA.jpg',
//         '6 Dr. Jaydip Nikam Nashik.png',
//     ],
//     mentor_name:[
//         'Dr. Vinay Sahastrbuddhe - Delhi',
//         'Jeevan Sonawane - Nagpur',
//         'Rajesh Bakshi - Muscut',
//         'Laxmikant Powanikar - Qtar',
//         'Kishor Gore - USA',
//         'Dr. Jaydip Nikam - Nashik',
//     ],
//     other_states:[
//         '1 Dr. T Chandrkant - Bhopal.jpg',
//         '2 Sanjay Barve - Goa.jpg',
//         '3 Aditi Bakshi - Hyderabad.jpg',
//         '4 Dr Prajaktha Jirati Madhy Pradesh.png',
//         '5 Dipali Ahire Ayre - Gujrath.jpg',
//         '6 Ram Ture Tamilnadu.jpg',
//         '7 Sharvari Sawant Gujrath.jpg'
//     ],
//     other_state_name:[
//         'Dr. T Chandrkant - Bhopal',
//         'Sanjay Barve - Goa',
//         'Aditi Bakshi - Hyderabad',
//         'Dr Prajaktha Jirati - Madhy Pradesh',
//         'Dipali Ahire Ayre - Gujrath',
//         'Ram Ture - Tamilnadu',
//         'Sharvari Sawant - Gujrath'
//     ],
//     NRI:[
//         '1 Sanjay Mane dubai.jpg',
//         '2 Mukul Agashe - Singapur.jpg',
//         '3 Sandeep Gangarde - Gulf.jpg',
//         '4 Sandeep Rane - USA.jpg',
//         '5 Rajendra Gill - UK.jpg',
//         '6 Nandkumar Desai - Dubai.jpg',
//         '7 Dr Rahul Gosavi, UK.jpg',
//         'yk.jpg'
//     ],
//     NRI_name:[
//         'Sanjay Mane - Dubai',
//         'Mukul Agashe - Singapur',
//         'Sandeep Gangarde - Gulf',
//         'Sandeep Rane - USA',
//         'Rajendra Gill - UK',
//         'Nandkumar Desai - Dubai',
//         'Dr Rahul Gosavi - UK',
//         'Yogesh Kasat - USA'
//     ]
//
// };
// //members images array
// function dynamic_team_member_creation() {
//     $('.mentor-img-div,.NRI-img-div,.state-img-div,.team-img-div').empty();
//     $('.mentor-div,.NRI-div,.state-div,.founder_div').hide();
//     $('.team-div').show();
//     var team_member_length = teamArray['team'].length;
//     for(var j = 0; j <= team_member_length; j++) {               //loop for appending team member's images to team-div
//         var team_member_name = teamArray['team_member_name'][j];
//         var h4 = $('<h4></h4>').text(team_member_name);
//         $('.member' + j ).append('<img src="images/team/' + teamArray['team'][j] + '">',h4);     //append images to div
//     }
// }
// //team creation function ends here
//
// function dynamic_mentor_member_creation() {
//     $('.team-img-div,.state-img-div,.NRI-img-div,.mentor-img-div').empty();
//     $('.team-div,.NRI-div,.state-div,.founder_div').hide();
//     $('.mentor-div').show();
//     var mentor_member_length = teamArray['mentor'].length;
//     for(var j = 0; j <= mentor_member_length; j++) {               //loop for appending mentor member's images to mentor-div
//         var team_member_name = teamArray['mentor_name'][j];
//         var h4 = $('<h4></h4>').text(team_member_name);
//         $('.mentor' + j ).append('<img src="images/team/Mentors/' + teamArray['mentor'][j] + '">',h4);     //append images to div
//     }
// }
// //mentor creation function ends here
//
// function dynamic_NRI_member_creation() {
//     $('.team-img-div,.mentor-img-div,.state-img-div,.NRI-img-div').empty();
//     $('.team-div,.mentor-div,.state-div,.founder_div').hide();
//     //$('.mentor-img-div').empty();
//     //$('.mentor-div').hide();
//     $('.NRI-div').show();
//     var mentor_member_length = teamArray['NRI'].length;
//     for(var j = 0; j <= mentor_member_length; j++) {               //loop for appending mentor member's images to mentor-div
//         var team_member_name = teamArray['NRI_name'][j];
//         var h4 = $('<h4></h4>').text(team_member_name);
//         $('.NRI' + j ).append('<img src="images/team/NRI%20Members/' + teamArray['NRI'][j] + '">',h4);     //append images to div
//     }
// }
// //NRI creation function ends here
//
// function dynamic_state_member_creation() {
//     $('.team-img-div,.mentor-img-div,.NRI-img-div,.state-img-div').empty();
//     $('.team-div,.mentor-div,.NRI-div,.founder_div').hide();
//     $('.state-div').show();
//     var mentor_member_length = teamArray['other_states'].length;
//     for(var j = 0; j <= mentor_member_length; j++) {               //loop for appending mentor member's images to mentor-div
//         var team_member_name = teamArray['other_state_name'][j];
//         var h4 = $('<h4></h4>').text(team_member_name);
//         $('.state' + j ).append('<img src="images/team/Members%20from%20other%20states/' + teamArray['other_states'][j] + '">',h4);     //append images to div
//     }
// }
//
// //state creation function ends here
