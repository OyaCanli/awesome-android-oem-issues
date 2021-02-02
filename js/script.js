$().ready(function(){
    $.getJSON("./data/issues.json", function(data) {

        var theme = './theme/default.mst';

        data = data.sort(sortByProperty("topic"))

        for(var topic in data) {
            data[topic].issues = data[topic].issues.sort(sortByProperty("relatedClass"))
        }

        $.get(theme, function(template) {
            Mustache.parse(template); 
            var rendered = Mustache.render(template, {datasets:data});
                $('#issues_data').html(rendered);
                $('#issues_data table').DataTable();
        });
    }).fail(function(){
        console.log("An error has occurred.");
    });

    function sortByProperty(property){  
        return function(a,b){  
           if(a[property] > b[property])  
              return 1;  
           else if(a[property] < b[property])  
              return -1;  
       
           return 0;  
        }  
     }
});