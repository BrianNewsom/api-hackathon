var top = {
    load: function() {

        $.get("/api-hackathon/top/ui.jade", function(template) {
            var html = jade.render(template)
            $("#ui").html(html)
        })

    },

    searchByName: function() {
        alert('todo');
    }

}
