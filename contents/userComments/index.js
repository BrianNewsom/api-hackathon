var userComments = {
    load: function() {

        $.get("/api-hackathon/userComments/ui.jade", function(template) {
            var html = jade.render(template)
            $("#ui").html(html)
        })

        /*
        // default search results
        legislators.searchByChamber('senate')
        */

    },

    searchByName: function(username) {
        $.get('https://enigmatic-basin-9438.herokuapp.com/user/' + username, function(data){
            console.log(data);
            var c = data.data.children[0].data.body;
            $.get("/api-hackathon/userComments/list.jade", function(template){
                var html = jade.render(template, {comment : c});
                $("#list").html(html);

            })


        });
    }

}
