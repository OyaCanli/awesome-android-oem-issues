$().ready(function(){
    $.getJSON("./data/issues.json", function(data) {

        //TODO : Sort by topic; and in topics sort by relatedClass
        var theme = './theme/default.mst';

        $.get(theme, function(template) {
            Mustache.parse(template); 
            var rendered = Mustache.render(template, {datasets:data});
                $('#issues_data').html(rendered);
                $('#issues_data table').DataTable();
        });
    }).fail(function(){
        console.log("An error has occurred.");
    });
});