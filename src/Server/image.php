
    <?php
          header('Access-Control-Allow-Origin: *');  
      require './vendor/autoload.php';

      use Aws\S3\S3Client;
      use Aws\Sts\StsClient;
      use Aws\S3\Exception\S3Exception;
      
      function GetPlanImg($category, $plancode){
        
        $BUCKET_NAME = 'costaplanoimage';
        $IAM_KEY = 'AKIA2HRT5ZVWK5XXAR6F';
        $IAM_SECRET = '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';
      
        $keyPath = "$category/$plancode.png";
        try {
          $sts = new StsClient(array(
              'credentials' => array(
                'key' => $IAM_KEY,
                'secret' => $IAM_SECRET
              ),
              'version' => 'latest',
              'region'  => 'eu-west-1'
            )
          );

          $cred = $sts->getSessionToken()['Credentials'];

          $s3 = new S3Client(array(
            'credentials' => array(
              'key' => $cred['AccessKeyId'],
              'secret' => $cred['SecretAccessKey'],
              'token' => $cred['SessionToken']
              ),
            'version' => 'latest',
            'region'  => 'eu-west-1'
            ) 
          );

          $cmd = $s3->getCommand('GetObject', [
            'Bucket' => $BUCKET_NAME,
            'Key' => $keyPath
          ]);
        
          $request = $s3->createPresignedRequest($cmd, '+20 minutes');
          $presignedUrl = (string)$request->getUri();

          return $presignedUrl;


          } catch (Exception $e) {
            die("Error: " . $e->getMessage());
          }
          
        }

        $arr = array('title' => 'Metro Counter', 'url' =>  GetPlanImg('Sweet', '022') ,'title1'=>'3 Shelf Full Width Chilled Display' ,'url1' =>  GetPlanImg('Sweet', '023'),'title2'=>'3 Shelf Full Width Chilled Display' ,'url2' =>  GetPlanImg('Sweet', '023'),'title3'=>'3 Shelf Full Width Chilled Display' ,'url3' =>  GetPlanImg('Sweet', '023'));

        
        echo json_encode($arr);
        
    ?>