var topa = {
    load: function() {

        $.get("/api-hackathon/top/ui.jade", function(template) {
            var html = jade.render(template)
            $("#ui").html(html)
        })

    },

    go: function() {
        $.get("https://enigmatic-basin-9438.herokuapp.com/list/top", function(data){
            var topTitle = data.data.children[0].data.title
            $.get("/api-hackathon/top/list.jade", function(template){

                var html = jade.render(template, {title: topTitle})
                $("#list").html(html);

            })
        })
    }

}
