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
            $.get('https://enigmatic-basin-9438.herokuapp.com/sentiment/' + c.replace(/[&\/\\#,+()$~%.'":*?<>{}"']/g,'_'), function(data){
              $.get("/api-hackathon/userComments/list.jade", function(template){
                var html = jade.render(template, {comment : c, sentiment: data});
                $("#list").html(html);
              })
            })


        });
    }

}
