var isFFOS = ("mozApps" in navigator && navigator.userAgent.search("Mobile") != -1);

if ( isFFOS ) {
    const manifest_url = "http://dpd.leandro.org/manifest.webapp";

    function install() {
        var myapp = navigator.mozApps.install(manifest_url);
        myapp.onsuccess = function(data) {
            console.log("App instalada");
        };
        myapp.onerror = function() {
            alert("Error installing the app: " + this.error.name);
        };
    };

    var request = navigator.mozApps.checkInstalled(manifest_url);
    request.onsuccess = function() {
        if (!request.result)
            install();
    };
    request.onerror = function() {
        alert('Error checking installation status: ' + this.error.message);
    };
}






$(document).ready(function() {

    $('form').submit(function(){
      $('#key').val( $('#key').val().toLowerCase() );
    });

});
