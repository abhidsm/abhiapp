/* Theme Name: Worthy - Free Powerful Theme by HtmlCoder
 * Author:HtmlCoder
 * Author URI:http://www.htmlcoder.me
 * Version:1.0.0
 * Created:November 2014
 * License: Creative Commons Attribution 3.0 License (https://creativecommons.org/licenses/by/3.0/)
 * File Description: Place here your custom scripts
 */
$("#footer-form").submit(
    function(e){
        e.preventDefault();
        var name = $("#name2").val();
        var email =  $("#email2").val();
        var message =  $("#message2").val();
        window.location.href = "mailto:abhidsm@gmail.com?subject=From%20"+encodeURIComponent(name)+"%20email%20"+encodeURIComponent(email)+"&body="+encodeURIComponent(message);
    });
