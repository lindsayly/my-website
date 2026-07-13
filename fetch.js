window.onload = function() {
    fetch('data.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        var tableCode = '<table><caption>Examples of Modern Matcha Powder</caption><thead><tr><th>Brand</th><th>Name</th><th>Region</th><th>Tasting Notes</th></tr></thead><tbody>';
        for (var i = 0; i < json.length; i++) {
            tableCode += '<tr><td>' + json[i].brand + '</td><td>' + json[i].name + '</td><td>' + json[i].region + '</td><td>' + json[i].notes + '</td></tr>';
    }
    tableCode += '</tbody><tfoot><tr><td colspan="4">Sources:<br><a href="https://naokimatcha.com/products/superior-blend-matcha>Naoki</a><br><a href="https://namimatcha.com/products/nami-yame-matcha?variant=50295643013412">Nami</a><br><a href="https://ujichamatcha.com/products/samidori-yamamasa-koyamaen?variant=41753933381706">Yamamasa Koyameen</a><br></td></tr></tfoot></table>';
    document.getElementById('brands').innerHTML = tableCode;
    })

 }