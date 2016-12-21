var displayEnterEmail = function() {

    var $enterEmail = $(".enter-email");
    $enterEmail.removeClass("none");

    // var $submitForm = $(".submit-form");
    // $submitForm.on("submit", function(e) {
    //     e.preventDefault();
    //     $enterEmail.addClass("none");
    //     var $displayResult = $(".display-result-property-value");
    //     $displayResult.removeClass("none");
    // });


};

var displayEnterParking = function() {

    var $enterParking = $(".enter-parking-spaces");
    $enterParking.removeClass("none");

    var $eighthPhase = $(".eighth_phase");

    $eighthPhase.on("click", function(e) {
        e.preventDefault();
        $enterParking.addClass("none");

        displayEnterEmail();
    });
};

var displayEnterSMeters = function() {

    var $enterSMeters = $(".enter-square-meters");
    $enterSMeters.removeClass("none");

    var $seventhPhase = $(".seventh_phase");

    $seventhPhase.on("click", function(e) {
        e.preventDefault();
        $enterSMeters.addClass("none");

        displayEnterParking();
    });
};

var displayEnterBathrooms = function() {

    var $enterBathrooms = $(".enter-bathrooms");
    $enterBathrooms.removeClass("none");

    var $sixthPhase = $(".sixth_phase");

    $sixthPhase.on("click", function(e) {
        e.preventDefault();
        $enterBathrooms.addClass("none");

        displayEnterSMeters();
    });
};

var displayEnterDistance = function() {

    var $enterDistance = $(".enter-distance");
    $enterDistance.removeClass("none");

    var $fifthPhase = $(".fifth_phase");

    $fifthPhase.on("click", function(e) {
        e.preventDefault();
        $enterDistance.addClass("none");

        displayEnterBathrooms();
    });
};

var displayEnterBedrooms = function() {

    var $enterBedrooms = $(".enter-bedrooms");
    $enterBedrooms.removeClass("none");


    var $fourthPhase = $(".fourth_phase");

    $fourthPhase.on("click", function(e) {
        e.preventDefault();
        $enterBedrooms.addClass("none");

        displayEnterDistance();
    });
};

var displayEnterHouseNumber = function() {

    var $enterHouseNumber = $(".enter-house-number");
    $enterHouseNumber.removeClass("none");

    var $thirdPhase = $(".third_phase");

    $thirdPhase.on("click", function(e) {
        e.preventDefault();
        $enterHouseNumber.addClass("none");

        displayEnterBedrooms();
    });
};

var displayEnterStreetName = function() {

    var $enterStreetName = $(".enter-street-name");
    $enterStreetName.removeClass("none");

    var $secondPhase = $(".second_phase");

    $secondPhase.on("click", function(e) {
        e.preventDefault();
        $enterStreetName.addClass("none");

        displayEnterHouseNumber();
    });
};

var displayEnterSuburb = function() {
    var $enterSuburb = $(".enter-suburb");
    $enterSuburb.removeClass("none");

    // Grab the next button
    var $firstPhase = $(".first_phase");
    $firstPhase.on("click", function(e) {


        //Prevent default page submit
        e.preventDefault();


        //remove class display none from the suburb div
        $enterSuburb.addClass("none");

        //call function for display .enter-bedrooms
        displayEnterStreetName();

    });
};

$(document).ready(function() {

    var $valueMyProperty = $(".Value-My-Property");

    $valueMyProperty.on("click", function() {
        $valueMyProperty.addClass("none");
        displayEnterSuburb();

    });

    $("#suburb-form").on("ajax:success", function(e, data, status, xhr) {
        console.log(data);
        // there's a variable in this function called data that we can access.
        // var suburb = data.suburb.name;
        // var postcode = data.suburb.postcode;

        var $enterEmail = $(".enter-email");
        $enterEmail.addClass("none");

        $(".global-stats").addClass("none");

        // var $displayResult = $(".display-result-property-value");
        // $displayResult.removeClass("none");
        // $displayResult.append("<p>" + postcode + "</p>");

        //Begin implementing Bar chart

        // Display result value

        $(".evaluation-container").append("<p> Your " + data.bedrooms + " bedroom property is worth $" + data.my_property_price);


        //  ===========================  Start of Rhy's Area ================================



        //  =========================== End Rhy's Area ================================


        //  =========================== Start of Steve's Area ================================



        //  =========================== end of Steve's Area ================================



        //  =========================== Start of Esther's Area ================================
        Var ctx = document.getElementById("myBubbleChart");
        var myBubbleChart = new Chart(ctx,{
            data = {
            datasets: [
        {
            label: '3 bedroom & 4 bedroom homes V 2 & 3 bedroom units',
            data: [
                {
                    x: 1770000, 1770000, 1280000, 1540000, 1500000, 1650000, 8850000, 1151000, 1900000, 680000
                    y: 2350000, 2350000, 1692000, 2000000, 2360000, 2070000, 9925000, 1365000, 2315000, 755000
                    r: 10
                },
                {
                    x: 1050555, 820000, 705000, 755750, 930000, 1150000, 790000, 950000, 412000
                    y: 1630000, 1027500, 854750, 1288000, 1200000, 1822500, 900000, 1628000, 542000
                    r: 10
                }
            ],
            backgroundColor:"#FF6384",
            hoverBackgroundColor: "#FF6384",
        }]
    };
                points: {
            borderWidth: 1,
            borderColor: 'rgb(0,0,0)'
        }
    }
}
});
        //  =========================== End of Esther's Area ================================



    });


    // ------- start of Steve section ---------------------


    var globalCurrentPrice = setInterval(function() {
        $("#global-current-price");

    }, 1000);



    // $<%= number_with_delimiter(@current_month_average*0.7, :precision => 0, :delimiter => ",") %>


    // --------- Start of Global Emotion Section ---------------------

    function animateEmotion() {
        // $("#happy-face").css("margin-top","0");
        $(".home-owner-face").animate({
            marginTop: -10
        }, 1000, function() {
            $(".home-owner-face").animate({
                marginTop: 0
            }, 1000, animateEmotion);
        });

    }
    animateEmotion();

    // function animateEmotionInvestor(){
    //   // $("#happy-face").css("margin-top","0");
    //   $(".investor-face").animate({marginTop:+10}, 1000, function(){
    //       $(".investor-face").animate({marginTop:0},1000,animateEmotionInvestor);
    //   });
    //
    // }
    // animateEmotionInvestor();



    // --------- End of Global Emotion Section ------------------------


    // ------- end of Steve section ------------------------

});
