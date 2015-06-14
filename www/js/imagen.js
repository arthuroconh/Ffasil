// A button will call this function
// To capture photo
function capturePhoto() {
    // Take picture using device camera and retrieve image as base64-encoded string
    navigator.camera.getPicture(uploadPhoto, onFail, { 
        quality: 50, destinationType: Camera.DestinationType.FILE_URI 
    });
}

// A button will call this function
// To select image from gallery
function getPhoto(source) {
    // Retrieve image file location from specified source
    navigator.camera.getPicture(uploadPhoto, onFail, { quality: 50,
        destinationType: navigator.camera.DestinationType.FILE_URI,
        sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
    });
}
function getPhoto2(source) {
    // Retrieve image file location from specified source
    navigator.camera.getPicture(uploadPhoto2, onFail, { quality: 50,
        destinationType: navigator.camera.DestinationType.FILE_URI,
        sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
    });
}
function getPhoto3(source) {
    // Retrieve image file location from specified source
    navigator.camera.getPicture(uploadPhoto3, onFail, { quality: 50,
        destinationType: navigator.camera.DestinationType.FILE_URI,
        sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
    });
}
function getPhoto4(source) {
    // Retrieve image file location from specified source
    navigator.camera.getPicture(uploadPhoto4, onFail, { quality: 50,
        destinationType: navigator.camera.DestinationType.FILE_URI,
        sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
    });
}
function getPhoto5(source) {
    // Retrieve image file location from specified source
    navigator.camera.getPicture(uploadPhoto5, onFail, { quality: 50,
        destinationType: navigator.camera.DestinationType.FILE_URI,
        sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
    });
}
function getPhoto6(source) {
    // Retrieve image file location from specified source
    navigator.camera.getPicture(uploadPhoto6, onFail, { quality: 50,
        destinationType: navigator.camera.DestinationType.FILE_URI,
        sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
    });
}
function getPhoto7(source) {
    // Retrieve image file location from specified source
    navigator.camera.getPicture(uploadPhoto7, onFail, { quality: 50,
        destinationType: navigator.camera.DestinationType.FILE_URI,
        sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
    });
}
function getPhoto8(source) {
    // Retrieve image file location from specified source
    navigator.camera.getPicture(uploadPhoto8, onFail, { quality: 50,
        destinationType: navigator.camera.DestinationType.FILE_URI,
        sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
    });
}
function getPhoto9(source) {
    // Retrieve image file location from specified source
    navigator.camera.getPicture(uploadPhoto9, onFail, { quality: 50,
        destinationType: navigator.camera.DestinationType.FILE_URI,
        sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
    });
}
function getPhoto10(source) {
    // Retrieve image file location from specified source
    navigator.camera.getPicture(uploadPhoto10, onFail, { quality: 50,
        destinationType: navigator.camera.DestinationType.FILE_URI,
        sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
    });
}
function uploadPhoto(imageURI) {
    //If you wish to display image on your page in app
    // Get image handle
    clave = window.localStorage.getItem("id");
    var largeImage = document.getElementById('largeImage');

    // Unhide image elements
    largeImage.style.display = 'block';

    // Show the captured photo
    // The inline CSS rules are used to resize the image
    largeImage.src = imageURI;

    var options = new FileUploadOptions();
    options.fileKey = "file";
    var userid = window.localStorage.getItem("usuario");;
    var imagefilename = userid + Number(new Date()) + ".jpg";
    var ruta = userid + "/" + imagefilename;
    options.fileName = imagefilename;
    options.mimeType = "image/jpg";
    $('#nombreimagen').val(ruta);
    var params = new Object();
    params.imageURI = imageURI;
    params.userid = sessionStorage.loginuserid;
    options.params = params;
    options.chunkedMode = false;
    var ft = new FileTransfer();
    var url = "http://desarrollotricolor.com.ve/ffasil/subirimagen.php?carpeta="+userid;
    ft.upload(imageURI, url, win, fail, options, true);
                            $('#cargando2').addClass('visible');
                            $('#cargando2').removeClass('escondido');
}
function uploadPhoto2(imageURI) {
    //If you wish to display image on your page in app
    // Get image handle
    clave = window.localStorage.getItem("id");
    var largeImagen = document.getElementById('largeImagen');

    // Unhide image elements
    largeImagen.style.display = 'block';

    // Show the captured photo
    // The inline CSS rules are used to resize the image
    largeImagen.src = imageURI;

    var options = new FileUploadOptions();
    options.fileKey = "file";
    var userid = window.localStorage.getItem("usuario");;
    var imagefilename = userid + Number(new Date()) + ".jpg";
    var ruta = userid + "/" + imagefilename;
    options.fileName = imagefilename;
    options.mimeType = "image/jpg";
    $('#nombreimagen2').val(ruta);
    var params = new Object();
    params.imageURI = imageURI;
    params.userid = sessionStorage.loginuserid;
    options.params = params;
    options.chunkedMode = false;
    var ft = new FileTransfer();    
    var url = "http://desarrollotricolor.com.ve/ffasil/subirimagen.php?carpeta="+userid;
    ft.upload(imageURI, url, win, fail, options, true);
                            $('#cargando22').addClass('visible');
                            $('#cargando22').removeClass('escondido');

}

function uploadPhoto3(imageURI) {
    //If you wish to display image on your page in app
    // Get image handle
    clave = window.localStorage.getItem("id");
    var largeImagen3 = document.getElementById('largeImage3');

    // Unhide image elements
    largeImagen3.style.display = 'block';

    // Show the captured photo
    // The inline CSS rules are used to resize the image
    largeImagen3.src = imageURI;

    var options = new FileUploadOptions();
    options.fileKey = "file";
    var userid = window.localStorage.getItem("usuario");;
    var imagefilename = userid + Number(new Date()) + ".jpg";
    var ruta = userid + "/" + imagefilename;
    options.fileName = imagefilename;
    options.mimeType = "image/jpg";
    $('#nombreimagen').val(ruta);
    var params = new Object();
    params.imageURI = imageURI;
    params.userid = sessionStorage.loginuserid;
    options.params = params;
    options.chunkedMode = false;
    var ft = new FileTransfer();
    var url = "http://desarrollotricolor.com.ve/ffasil/subirimagen.php?carpeta="+userid;
    ft.upload(imageURI, url, win3, fail, options, true);
                            $('#cargando3').addClass('visible');
                            $('#cargando3').removeClass('escondido');
}
function uploadPhoto4(imageURI) {
    //If you wish to display image on your page in app
    // Get image handle
    clave = window.localStorage.getItem("id");
    var largeImage4 = document.getElementById('largeImage4');

    // Unhide image elements
    largeImage4.style.display = 'block';

    // Show the captured photo
    // The inline CSS rules are used to resize the image
    largeImage4.src = imageURI;

    var options = new FileUploadOptions();
    options.fileKey = "file";
    var userid = window.localStorage.getItem("usuario");;
    var imagefilename = userid + Number(new Date()) + ".jpg";
    var ruta = userid + "/" + imagefilename;
    options.fileName = imagefilename;
    options.mimeType = "image/jpg";
    $('#nombreimagen2').val(ruta);
    var params = new Object();
    params.imageURI = imageURI;
    params.userid = sessionStorage.loginuserid;
    options.params = params;
    options.chunkedMode = false;
    var ft = new FileTransfer();
    var url = "http://desarrollotricolor.com.ve/ffasil/subirimagen.php?carpeta="+userid;
    ft.upload(imageURI, url, win4, fail, options, true);
                            $('#cargando4').addClass('visible');
                            $('#cargando4').removeClass('escondido');
}
function uploadPhoto5(imageURI) {
    //If you wish to display image on your page in app
    // Get image handle
    clave = window.localStorage.getItem("id");
    var largeImage5 = document.getElementById('largeImage5');

    // Unhide image elements
    largeImage5.style.display = 'block';

    // Show the captured photo
    // The inline CSS rules are used to resize the image
    largeImage5.src = imageURI;

    var options = new FileUploadOptions();
    options.fileKey = "file";
    var userid = window.localStorage.getItem("usuario");;
    var imagefilename = userid + Number(new Date()) + ".jpg";
    var ruta = userid + "/" + imagefilename;
    options.fileName = imagefilename;
    options.mimeType = "image/jpg";
    $('#nombreimagen3').val(ruta);
    var params = new Object();
    params.imageURI = imageURI;
    params.userid = sessionStorage.loginuserid;
    options.params = params;
    options.chunkedMode = false;
    var ft = new FileTransfer();
    var url = "http://desarrollotricolor.com.ve/ffasil/subirimagen.php?carpeta="+userid;
    ft.upload(imageURI, url, win5, fail, options, true);
                            $('#cargando5').addClass('visible');
                            $('#cargando5').removeClass('escondido');
}
function uploadPhoto6(imageURI) {
    //If you wish to display image on your page in app
    // Get image handle
    clave = window.localStorage.getItem("id");
    var largeImage6 = document.getElementById('largeImage6');

    // Unhide image elements
    largeImage6.style.display = 'block';

    // Show the captured photo
    // The inline CSS rules are used to resize the image
    largeImage6.src = imageURI;

    var options = new FileUploadOptions();
    options.fileKey = "file";
    var userid = window.localStorage.getItem("usuario");;
    var imagefilename = userid + Number(new Date()) + ".jpg";
    var ruta = userid + "/" + imagefilename;
    options.fileName = imagefilename;
    options.mimeType = "image/jpg";
    $('#nombreimagen4').val(ruta);
    var params = new Object();
    params.imageURI = imageURI;
    params.userid = sessionStorage.loginuserid;
    options.params = params;
    options.chunkedMode = false;
    var ft = new FileTransfer();
    var url = "http://desarrollotricolor.com.ve/ffasil/subirimagen.php?carpeta="+userid;
    ft.upload(imageURI, url, win6, fail, options, true);
                            $('#cargando6').addClass('visible');
                            $('#cargando6').removeClass('escondido');
}
function uploadPhoto7(imageURI) {
    //If you wish to display image on your page in app
    // Get image handle
    clave = window.localStorage.getItem("id");
    var largeImage7 = document.getElementById('largeImage7');

    // Unhide image elements
    largeImage7.style.display = 'block';

    // Show the captured photo
    // The inline CSS rules are used to resize the image
    largeImage7.src = imageURI;

    var options = new FileUploadOptions();
    options.fileKey = "file";
    var userid = window.localStorage.getItem("usuario");;
    var imagefilename = userid + Number(new Date()) + ".jpg";
    var ruta = userid + "/" + imagefilename;
    options.fileName = imagefilename;
    options.mimeType = "image/jpg";
    $('#nombreimagen5').val(ruta);
    var params = new Object();
    params.imageURI = imageURI;
    params.userid = sessionStorage.loginuserid;
    options.params = params;
    options.chunkedMode = false;
    var ft = new FileTransfer();
    var url = "http://desarrollotricolor.com.ve/ffasil/subirimagen.php?carpeta="+userid;
    ft.upload(imageURI, url, win7, fail, options, true);
                            $('#cargando7').addClass('visible');
                            $('#cargando7').removeClass('escondido');
}
function uploadPhoto8(imageURI) {
    //If you wish to display image on your page in app
    // Get image handle
    clave = window.localStorage.getItem("id");
    var largeImage8 = document.getElementById('largeImage8');

    // Unhide image elements
    largeImage8.style.display = 'block';

    // Show the captured photo
    // The inline CSS rules are used to resize the image
    largeImage8.src = imageURI;

    var options = new FileUploadOptions();
    options.fileKey = "file";
    var userid = window.localStorage.getItem("usuario");;
    var imagefilename = userid + Number(new Date()) + ".jpg";
    var ruta = userid + "/" + imagefilename;
    options.fileName = imagefilename;
    options.mimeType = "image/jpg";
    $('#nombreimagen6').val(ruta);
    var params = new Object();
    params.imageURI = imageURI;
    params.userid = sessionStorage.loginuserid;
    options.params = params;
    options.chunkedMode = false;
    var ft = new FileTransfer();
    var url = "http://desarrollotricolor.com.ve/ffasil/subirimagen.php?carpeta="+userid;
    ft.upload(imageURI, url, win8, fail, options, true);
                            $('#cargando8').addClass('visible');
                            $('#cargando8').removeClass('escondido');
}
function uploadPhoto9(imageURI) {
    //If you wish to display image on your page in app
    // Get image handle
    clave = window.localStorage.getItem("id");
    var largeImage9 = document.getElementById('largeImage9');

    // Unhide image elements
    largeImage9.style.display = 'block';

    // Show the captured photo
    // The inline CSS rules are used to resize the image
    largeImage9.src = imageURI;

    var options = new FileUploadOptions();
    options.fileKey = "file";
    var userid = window.localStorage.getItem("usuario");;
    var imagefilename = userid + Number(new Date()) + ".jpg";
    var ruta = userid + "/" + imagefilename;
    options.fileName = imagefilename;
    options.mimeType = "image/jpg";
    $('#nombreimagen7').val(ruta);
    var params = new Object();
    params.imageURI = imageURI;
    params.userid = sessionStorage.loginuserid;
    options.params = params;
    options.chunkedMode = false;
    var ft = new FileTransfer();
    var url = "http://desarrollotricolor.com.ve/ffasil/subirimagen.php?carpeta="+userid;
    ft.upload(imageURI, url, win9, fail, options, true);
                            $('#cargando9').addClass('visible');
                            $('#cargando9').removeClass('escondido');
}
function uploadPhoto10(imageURI) {
    //If you wish to display image on your page in app
    // Get image handle
    clave = window.localStorage.getItem("id");
    var largeImage10 = document.getElementById('largeImage10');

    // Unhide image elements
    largeImage10.style.display = 'block';

    // Show the captured photo
    // The inline CSS rules are used to resize the image
    largeImage10.src = imageURI;

    var options = new FileUploadOptions();
    options.fileKey = "file";
    var userid = window.localStorage.getItem("usuario");;
    var imagefilename = userid + Number(new Date()) + ".jpg";
    var ruta = userid + "/" + imagefilename;
    options.fileName = imagefilename;
    options.mimeType = "image/jpg";
    $('#nombreimagen8').val(ruta);
    var params = new Object();
    params.imageURI = imageURI;
    params.userid = sessionStorage.loginuserid;
    options.params = params;
    options.chunkedMode = false;
    var ft = new FileTransfer();
    var url = "http://desarrollotricolor.com.ve/ffasil/subirimagen.php?carpeta="+userid;
    ft.upload(imageURI, url, win10, fail, options, true);
                            $('#cargando10').addClass('visible');
                            $('#cargando10').removeClass('escondido');
}
//Success callback
function win(r) {    
}
function win3(r) {    
                            $('#cargando3').removeClass('visible');
                            $('#cargando3').addClass('escondido');
}
function win4(r) {    
                            $('#cargando4').removeClass('visible');
                            $('#cargando4').addClass('escondido');
}function win5(r) {    
                            $('#cargando5').removeClass('visible');
                            $('#cargando5').addClass('escondido');
}function win6(r) {    
                            $('#cargando6').removeClass('visible');
                            $('#cargando6').addClass('escondido');
}function win7(r) {    
                            $('#cargando7').removeClass('visible');
                            $('#cargando7').addClass('escondido');
}function win8(r) {    
                            $('#cargando8').removeClass('visible');
                            $('#cargando8').addClass('escondido');
}function win9(r) {    
                            $('#cargando9').removeClass('visible');
                            $('#cargando9').addClass('escondido');
}function win10(r) {    
                            $('#cargando10').removeClass('visible');
                            $('#cargando10').addClass('escondido');
}
//Failure callback
function fail(error) {
}
// Called if something bad happens.
// 
function onFail(message) {
    
}