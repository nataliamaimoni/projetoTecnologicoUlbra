<?php 
    require_once("config.php");
    
    if((isset($_POST['email'])&& $_POST['email'] !='')){

        date_default_timezone_set('Brazil/East');
        $day = date ('d-m-Y H:i');
        $email = $conn->real_escape_string($_POST['email']); 
        $details = $conn->real_escape_string($_POST['details']);   
        
        $consulta = mysqli_query($conn, "SELECT * FROM ulbra_v2 WHERE email='".$email."'");
        $linha = mysqli_num_rows($consulta);

        echo "dai '.$day.'";

        $sql="INSERT INTO ulbra_v2 (data, email, personalization) VALUES ('".$day."','".$email."','".$details."')";

        if(!$result = $conn->query($sql)){
            die('Erro [' . $conn->error . ']');
        }
        else
        {
            echo "Personalização salva com sucesso";
        }

        //LÓGICA ANTIGA PARA UPATE CASO O EMAIL JÁ ESTIVESSE NA BASE
        
        // if($linha == 0){

        //     $sql="INSERT INTO ulbra_v2 (data, email, personalization) VALUES ('".$day."','".$email."','".$details."')";

        //         if(!$result = $conn->query($sql)){
        //             die('Erro [' . $conn->error . ']');
        //         }
        //         else
        //         {
        //             echo "Personalização salva com sucesso";
        //         }
        //     }
        //     else
        //     {
        //         $sql="UPDATE `ulbra_v2` SET `personalization`='".$details."' WHERE email='".$email."'";                

        //         if(!$result = $conn->query($sql)){
        //             die('Erro [' . $conn->error . ']');
        //         }
        //         else
        //         {
        //             echo "Atualização salva com sucesso";
        //         }
        //     }

        
    }
    else
    {
        echo "Por favor, preencha seu email";
    }
?>