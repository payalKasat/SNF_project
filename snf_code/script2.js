/* Created by Ashwini 3/4/2018 */


$(document).ready(function() {
    select_nav_info();
    //dynamic_project_img_creation(project_image);
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

function dynamic_nav_info_creation(paragraph,header){
    $('._info_side').empty();
    $('.current_tab').removeClass('current_tab');
    var info_h2 =$('<h2>'+ header +'</h2>').addClass('info_h2 text-center');
    var info_p = $('<p>'+ paragraph+'</p>').addClass('info_p');
    $('._info_side').append(info_h2,info_p);

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
function select_nav_info(){
    $('.nav_1').ready(function () {
        dynamic_nav_info_creation(paragraph[0],heading[0]);
        $('.nav_1').addClass('current_tab');
    });
    // $('.nav_1').onload(function(){
    //     dynamic_nav_info_creation(paragraph[0],heading[0]);
    //     $(this).addClass('current_tab');
    // });
    $('.nav_1').click(function(){
        dynamic_nav_info_creation(paragraph[0],heading[0]);
        $(this).addClass('current_tab');
    });
    $('.nav_2').click(function(){
        dynamic_nav_info_creation(paragraph[1],heading[1]);
        $(this).addClass('current_tab');

    });
    $('.nav_3').click(function(){
        dynamic_nav_info_creation(paragraph[2],heading[2]);
        $(this).addClass('current_tab');

    });
    $('.nav_4').click(function(){
        dynamic_nav_info_creation(paragraph[3],heading[3]);
        $(this).addClass('current_tab');

    });
    $('.nav_5').click(function(){
        dynamic_nav_info_creation(paragraph[4],heading[4]);
        $(this).addClass('current_tab');

    });
    $('.nav_6').click(function(){
        dynamic_nav_info_creation(paragraph[5],heading[5]);
        $(this).addClass('current_tab');

    });
    $('.nav_7').click(function(){
        dynamic_nav_info_creation(paragraph[6],heading[6]);
        $(this).addClass('current_tab');

    });


}
