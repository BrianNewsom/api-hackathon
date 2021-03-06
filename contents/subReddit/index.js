var subReddit = {


    load: function() {

        $.get("/api-hackathon/subReddit/ui.jade", function(template) {
            var html = jade.render(template)
            $("#ui").html(html)
        })
        /*

        // default search results
        legislators.searchByChamber('senate')
        */

    },

    searchByName: function(subreddit){
        $.get('https://enigmatic-basin-9438.herokuapp.com/r/' + subreddit, function(data){
            var title = data.data.children[0].data.title;
            $.get("https://enigmatic-basin-9438.herokuapp.com/sentiment/" + title, function(sentiment){
                var sentiment = sentiment.body
                $.get('/api-hackathon/subReddit/list.jade', function(template){
                    var html = jade.render(template, {title : title, sentiment: sentiment});
                    $("#list").html(html);
                })
            })
        });
    }
}
