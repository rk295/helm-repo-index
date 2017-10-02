$(document).ready(function(){

    $.get('index.yaml', process_yaml);
});

function process_yaml(data, status){
    // Load the template
    $.get('templates/chart.mst', function(template) {

        var doc = jsyaml.load(data);
        var compiledTemplate = Handlebars.compile(template);

        $('#generatedAt').html(doc.generated);
        $('#apiVersion').html(doc.apiVersion);

        $('#target').append(compiledTemplate(doc));
    });
}
