<?php

header("Content-Type:application/json");
//$response['status'] = 200;
//$response['status-message'] = "cool";
//$response['data'] = '[{"id":471,"communityName":"Abercrombie"},{"id":648,"communityName":"Aberdeen"}]';
//$json = '[{"id":471,"communityName":"Abercrombie"},{"id":648,"communityName":"Aberdeen"}]';


$requestParams = array(
    'CityName' => 'Berlin',
    'CountryName' => 'Germany'
);

//$client = new SoapClient('http://www.webservicex.net/globalweather.asmx?WSDL');
//
//$response = $client->GetWeather($requestParams);


//$client = new SoapClient('http://windows.moloko.com/ProdCatServices.asmx?WSDL');

$client = new SoapClient('http://windows.moloko.com/ProdCatServices.asmx?WSDL', array('cache_wsdl' => WSDL_CACHE_NONE) );


//var_dump($client->__getFunctions());

$response = $client->HelloWorld();

$seriousResponse = $client->Serious();

//$productResponse = $client->GetProducts();

var_dump($response);
//print_r("\n\r");
//var_dump($seriousResponse);
//print_r($response);

$functions = $client->__getFunctions ();
var_dump ($functions);


$json_response = json_encode($response);

$json_response2 = json_encode($seriousResponse);

//echo $json_response;
//echo $response;
//echo $json_response;
//echo $seriousResponse;
//echo $json_response2;
//echo $json_response3;
?>