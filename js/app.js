$( "#query" ).on( "click", function( event ) {
    query.load()
})

$( "#top" ).on( "click", function( event ) {
    topa.load()
})

$('#subReddit').on("click", function(event){
    subReddit.load()
})

$('#userComments').on("click", function(event){
    userComments.load()
})
