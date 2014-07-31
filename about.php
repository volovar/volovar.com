<?php
$SpamErrorMessage = "No Websites URLs permitted";

if (preg_match("/http/i", "$name")) {echo "$SpamErrorMessage"; exit();}

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$body = $_POST['body'];

$formcontent = "-Information-\n $name \n $email \n $phone \n\n $body";

$recipient = "MIKE@VOLOVAR.COM";
$subject = "Message from Volovar.com";

$dodgy_strings = array(
                "content-type:"
                ,"mime-version:"
                ,"multipart/mixed"
                ,"bcc:"
);

function check_input($data, $problem='')
{
    if ($problem && strlen($data) == 0)
    {
        show_error($problem);
    }
    return $data;
}

function show_error($myError)
{
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="description" content="About and contact page, volovar.com">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />

    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <title>Volovar.com | About</title>

    <link href='http://fonts.googleapis.com/css?family=PT+Sans:400,700' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" type="text/css" media="screen, projection" href="/css/main.css" />

    <script src="//yui.yahooapis.com/3.10.1/build/yui/yui-min.js"></script>
    <script type="text/javascript">
        var _gaq = _gaq || [];
        _gaq.push(['_setAccount', 'UA-8392296-1']);
        _gaq.push(['_trackPageview']);

        (function() {
        var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
        })();
    </script>
</head>

<body>
    <div class="header" id="topHeader">
        <button class="nav-button" id="navButton">
            <span class="nav-button_inner">
                <span class="logo">
                    <span class="logo-title left-title">michael</span>
                    <span class="logo-title right-title">volovar</span>
                </span>
            </span>
        </button>

        <noscript>
            <ul class="nav nav-list group">
                <li><a href="/">Home</a></li>
                <li><a href="/projects.html">Projects</a></li>
                <li><a class="active" href="/about.html">About</a></li>
            </ul>
        </noscript>
    </div>

    <div class="wrap">
        <div class="wrap-inner">
            <div class="headline">
                <h1>Information Center</h1>
                <h2>General Info and Inquiries</h2>
            </div>

            <div class="content group">
                <div class="full">
                    <div class="column first">
                        <p class="intro">I'm Michael Volovar, web developer by day and web developer by night. During the day I write Javascript and wrangle CSS for <a href="//www.studyblue.com" target="_blank">StudyBlue</a> and at night I try to learn new things and build stuff for myself. Before I became a web developer my plan was to make movies. This led to me working as a designer &amp; animator in need of a web presence. In the process of creating a site I discovered my love of the web. Once that happened, I began building sites for various small businesses in Chicago with one of my <a href="//aeodesign.com/" target="_blank">designer friends</a> and eventually moved to <a href="//www.vodori.com/index.html" target="_blank">Vodori</a> to work with larger clients as well as build their content management system, <a href="//www.vodori.com/pepper.html" target="_blank">Pepper.</a></p>

                        <p>If you'd like to work with me or just chat, send me some mail using the form on this page. If you came to this page before visiting any of the other pages, why not check out some of the stuff I've <a href="/projects.html">made.</a></p>

                        <p>You can view and download my resume <a href="/resume/resume.html">here</a> or check me out on <a href="//www.linkedin.com/pub/michael-volovar/20/155/7b5" target="_blank">LinkedIn</a></p>
                    </div>

                    <div class="column">
                    <p class="correction">&#42; Please correct the following error: <?php echo $myError; ?></p>
                        <form name="main-form" class="contact-form group" id="contact" action="/about.php" method="POST">
                            <fieldset>
                                <label for="name">Name</label>
                                <input id="name" type="text" name="name" />
                            </fieldset>

                            <fieldset>
                                <label for="email">Email<em id="emailError" class="emailError"> &#42;Required</em></label>
                                <input id="email" type="email" name="email" onChange="validateEmail()" />
                            </fieldset>

                            <fieldset>
                                <label for="phone">Phone</label>
                                <input id="phone" type="tel" name="phone" />
                            </fieldset>

                            <fieldset>
                                <label for="body">Message</label>
                                <textarea id="body" name="body" rows="5" cols="28" ></textarea>
                            </fieldset>

                            <fieldset>
                                <input type="submit" value="send" />
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="footer group">
        <div class="footer-inner">
            <p>&#169;<span id="date">200X</span> Michael Volovar <a href="/about.html">Info &rArr;</a></p>
            <ul class="small-links group">
                <li><a class="dribbble" href="http://dribbble.com/volovar"><span>Dribbble!</span></a></li>
                <li><a class="twitter" href="https://twitter.com/#!/volovar"><span>Follow me on Twitter</span></a></li>
                <li><a class="zerply" href="http://zerply.com/volovar/"><span>Zerply</span></a></li>
                <li><a class="linkedin" href="http://www.linkedin.com/pub/michael-volovar/20/155/7b5"><span>LinkedIn</span></a></li>
            </ul>
        </div>
    </div>

    <script type="text/javascript" src="js/navigation.js"></script>
    <script src="/js/contactValid.js" type="text/javascript"></script>
    <script type="text/javascript" src="js/date.js"></script>
</body>
<!--|/-->
</html>
<?php
exit();
}

function is_valid_email($email) {
  return preg_match('#^[a-z0-9.!\#$%&\'*+-/=?^_`{|}~]+@([0-9.]+|([^\s]+\.+[a-z]{2,6}))$#si', $email);
}

function contains_bad_str($str_to_test) {
  $bad_strings = array(
                "content-type:"
                ,"mime-version:"
                ,"multipart/mixed"
				,"Content-Transfer-Encoding:"
                ,"bcc:"
				,"cc:"
				,"to:"
  );

  foreach($bad_strings as $bad_string) {
    if(eregi($bad_string, strtolower($str_to_test))) {
      echo "$bad_string found. Suspected injection attempt - mail not being sent.";
      exit;
    }
  }
}

function contains_newlines($str_to_test) {
   if(preg_match("/(%0A|%0D|\\n+|\\r+)/i", $str_to_test) != 0) {
     echo "newline found in $str_to_test. Suspected injection attempt - mail not being sent.";
     exit;
   }
}

if($_SERVER['REQUEST_METHOD'] != "POST"){
   echo("Unauthorized attempt to access page.");
   exit;
}

if (!is_valid_email($email)) {
  show_error('Please Enter a valid email');
  exit;
}

contains_bad_str($email);
contains_bad_str($body);

contains_newlines($email);


$mailheader = "From: $email \r\n";

mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
printf("<script>location.href='thanks.html'</script>");
?>
