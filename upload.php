<?php

if($_SERVER["REQUEST_METHOD"] === "POST"){
 if($_FILES["mm_file"]["error"] == UPLOAD_ERR_OK){
   $tempfile = $_FILES["mm_file"]["tmp_name"];
   //$filename = mb_convert_encoding($filename, "cp932", "utf8"); //文字コード変換
   $fileName = $_POST["fileName"];
   $file_path = "img/".$fileName;
   $result = move_uploaded_file($tempfile, $file_path ); //ファイル保存
   if($result == TRUE){
     //echo $file_path;
     $message ="<br><br>ファイルのアップロードに成功しました";
   }
   else{
     //echo $file_path;
     $message ="ファイルの移動に失敗しました";
   }
 }
 elseif($_FILES["mm_file"]["error"] == UPLOAD_ERR_NO_FILE) {
   $message ="ファイルがアップロードされませんでした";
 }
 else {
   $message ="ファイルのアップロードに失敗しました";
 }
 echo $message;
}
//参考:https://www.w3schools.com/php/php_file_upload.asp
?>

