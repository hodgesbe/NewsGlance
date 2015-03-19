var main = function(){
        $.getJSON("http://api.nytimes.com/svc/topstories/v1/home.json?&api-key=f2e425449a8965c26dd227193dc3d9c5:15:71605180", function (topStories) {
        var newsStories = topStories.results,
            abstract = "",
            imageUrl = "",
            $newsArticle = $("<article>");
        
        for (var i = 0; i<newsStories.length; i++){
            console.log(newsStories[i]);
            abstract = newsStories[i].abstract;
            if(newsStories[i].multimedia !== ""){
                imageUrl = newsStories[i].multimedia[0].url
            }
            $("<img src="+imageUrl+"><br>").appendTo($newsArticle);
            $("<p>"+abstract+"</p><br>").appendTo($newsArticle);
        }
            $(".topStories").append($newsArticle);
    });
};
$(document).ready(main);