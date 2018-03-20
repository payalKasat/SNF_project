/* Created by Ashwini 3/4/2018 */


$(document).ready(function() {
    default_project(heading[0],paragraph[0]);
    select_nav_info();
    dynamicaly_news_image();
    //dynamic_team_member_creation();
    $('.news>div').click(function () {
        news_pic_click(this);
    });
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


//state creation function ends here


/* media and news page script start here */
var news_images =[
    'Aurbd-a4884580-large.jpg',
    'Cleft Operation news.jpg',
    'divy marathi news marathwads dushkal madat niddhi 213-2013.jpg',
    'Divy Marathi Rajesh Marathe.jpg',
    'Divy Marathi tree plantation (2).jpg',
    'DM shahid shankar shinde dattu fad news 17 Aug 16.jpg',
    'E lEarning systems in Tribal Villages.jpg',
    'IMG-20151013-WA0002.jpg',
    'IMG-20160228-WA0000.jpg',
    'IMG-20160303-WA0001.jpg',
    'IMG_1944.JPG',
    'Kisan Tadavi news Divy Marathi June 18 2015.jpg',
    'Medical camp ekdare 2 Oct 2016.jpg',
    'old Books projects SNF Lokmat 19 Oct 16.jpeg',
    'Pudhari news ladachi blood group check up.JPG',
    'Pudhari news tree plantation (3).JPG',
    'shanti news DM Dec 24 16.jpg',
    'SNF birthday help news Bookes presented to Ashram School on Birthday.jpg',
    'SNF Elearning Project news.jpg',
    'Social Networking Forum - E learning Project news.jpg',
    'Social Networking Forum Educational facilities - News.jpg',
    'Social Networking Forum Educational facilities - old Books projects SNF Lokmat 19 Oct 16.jpeg',
    'Social0004.jpg',
    'Solapur news.jpg',
    'Tree plantetion Tavalibaud DM news 25 Dec 2016.jpg',
    'Tribal students Nashik Darshan 15 Jan DM.jpg',
    'Vadpada News Lokmat Times June 17 2017.jpg',
    'Water Management Course DM 9 Oct 17.jpg'
];

var selected_news= null;
function news_pic_click(element) {
    selected_news = $(element).attr('title');
    console.log(selected_news);
    model_pop_up(selected_news);
}

function model_pop_up(news_pic) {
    $('.modal-body').empty();
    $('.modal-body').append('<img class="news_img" src=" ../images/SNF%20news/'+news_images[news_pic] +'">');

    //var model_image = $(news_pic.innerHTML);
    // $('.modal-body').append('<img src=" ' + news_pic + ' "');
    //$('.modal-body').append(news_pic);

    $('#newsmodal').modal('show');
    
}

function dynamicaly_news_image() {
    var news_length = news_images.length;
    for(var j = 0; j <= news_length; j++) {               //loop for appending news images to news-div
        //var news_img = news_images[j];
        $('.news' + j ).append('<img class="news_image" src="../images/SNF%20news/' + news_images[j] + '">');     //append images to div
    }
}