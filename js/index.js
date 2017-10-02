$(document).ready(function(){
    console.log('document ready');

    $.get('index.yaml', process_yaml);



});

function process_yaml(data, status){
    console.log('status of GET: ' + status);

    // Load the template
    $.get('templates/chart.mst', function(template) {

        var doc = jsyaml.load(data);

        $('#generatedAt').html(doc.generated);
        $('#apiVersion').html(doc.apiVersion);

        chartList = doc.entries;

        for (var key in chartList) {

            var chartDetails = { name:key, versions: chartList[key] };

            var rendered = Mustache.render(template, chartDetails);
            $('#target').append(rendered);
            console.log('Found chart: ' + key + ' with ' + chartList[key].length + ' version(s)');

            console.log(chartList[key]);
        }
    });
}
