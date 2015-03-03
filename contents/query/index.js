var query = {
    load: function() {

        $.get("/api-hackathon/query/ui.jade", function(template) {
            var html = jade.render(template)
            $("#ui").html(html)
        })

        query.search()
    },

    search : function(term) {

        $.get("https://enigmatic-basin-9438.herokuapp.com/sentiment/" + term, function(data){
            console.log('got' + data)
            
            data = data.body

            if(data.result){
                $.get("/api-hackathon/query/list.jade", function(template){
                    var html = jade.render(template, {
                        data: data
                    })
                    console.log(html)
                    $("#list").html(html)
                })
            }            
        })
    }

}
