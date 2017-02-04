<?php
class JSSDK {
  private $appId;
  private $appSecret;

  public function __construct($appId, $appSecret) {
    $this->appId = $appId;
    $this->appSecret = $appSecret;
  }

  public function getSignPackage() {
    $jsapiTicket = $this->getJsApiTicket();
    $url = urldecode($_GET["url"]);
    $timestamp = time();
    $nonceStr = $this->createNonceStr();

    // 这里参数的顺序要按照 key 值 ASCII 码升序排序
    $string = "jsapi_ticket=$jsapiTicket&noncestr=$nonceStr&timestamp=$timestamp&url=$url";

    $signature = sha1($string);

    $signPackage = array(
      "appId"     => $this->appId,
      "nonceStr"  => $nonceStr,
      "timestamp" => $timestamp,
      "url"       => $url,
      "signature" => $signature,
      "rawString" => $string,
      "jsapiTicket" => $jsapiTicket
    );
    return $signPackage;
  }

  private function createNonceStr($length = 16) {
    $chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    $str = "";
    for ($i = 0; $i < $length; $i++) {
      $str .= substr($chars, mt_rand(0, strlen($chars) - 1), 1);
    }
    return $str;
  }

  private function getJsApiTicket() {
        $access_token = $this->getAccessToken();
        $filename = './jsapi_ticket';
        if (file_exists($filename) && filemtime($filename) +7000 < time()) {
            return file_get_contents($filename);
        }
        $url = 'https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token='.$access_token.'&type=jsapi';
        $res = $this->api_request($url);
        if ($res->errcode==0) {
            file_put_contents($filename, $res->ticket);
            return $res->ticket;
        }else{
            echo "获取jsapi_ticket错误";
            exit();
        }
  }

  private function getAccessToken() {
        $appId = $this->appId;
        $appSecret = $this->appSecret;
        $filename = './access_token';
        if (file_exists($filename) && filemtime($filename) +7000 < time()) {
            return file_get_contents($filename);
        }
        $url = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid='.$appId.'&secret='.$appSecret;
        $res = $this->api_request($url);
        if (isset($res->access_token)) {
            file_put_contents($filename, $res->access_token);
            return $res->access_token;
        }else{
            echo "获取access_token错误";
            exit();
        }      
  }


    private function api_request($url,$data=null){
        //初始化cURL方法
        $curl = curl_init();
        //设置cURL参数（基本参数）
        $opts = array(
            //在局域网内访问https站点时需要设置以下两项，关闭ssl验证！
            //此两项正式上线时需要更改（不检查和验证认证）
            CURLOPT_SSL_VERIFYPEER => false,
            CURLOPT_SSL_VERIFYHOST => false,
            CURLOPT_TIMEOUT => 500,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_URL => $url,
        );
        curl_setopt_array($curl, $opts);
        //post请求参数
        if (!empty($data)) {
            curl_setopt($curl, CURLOPT_POST, true);
            curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
        }
        //执行cURL操作
        $output = curl_exec($curl);
        if (curl_errno($curl)) {    //cURL操作发生错误处理。
            // var_dump(curl_error($curl));
            die;
        }
        //关闭cURL
        curl_close($curl);
        $res = json_decode($output);
        return ($res);   //返回json数据
    }
}

