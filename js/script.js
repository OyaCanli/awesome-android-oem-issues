$().ready(function(){
    $.getJSON("./data/issues.json", function(data) {

        console.log(data[0].api);
        console.log(data[0].classes[0].classname);
        console.log(data[0].classes[0].devices[0]);

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