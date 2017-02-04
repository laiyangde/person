<?php
define('APPID','wxedb7516086f68a14');
define('APPSECRET','c88ee127b72881ae9da27650de1b95ed');
require 'jssdk.php';
$JSSDK = new JSSDK(APPID,APPSECRET);
$signPackage = $JSSDK -> getSignPackage();
echo json_encode($signPackage);
