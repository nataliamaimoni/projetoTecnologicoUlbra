<?php 
    require_once("config.php");
    
    if((isset($_POST['email'])&& $_POST['email'] !='')){
        
        $email = $conn->real_escape_string($_POST['email']);                 
        $consulta = mysqli_query($conn, "SELECT * FROM ulbra_v2 WHERE email='".$email."'") or die('Query failed: ' . mysqli_error());
        $linha = mysqli_num_rows($consulta);
        $dado = mysqli_fetch_assoc($consulta);

        echo "<br> Personalizações salva pelo email ".$email."<br><br>";

        if($linha > 0){
            
            do {
                echo "<br> <span class='day'> Dia e hora:  ".$dado['data']."</span>";
                echo "<br>".$dado['personalization'];
                echo "<br><br><br><br>";
            }while($dado = mysqli_fetch_assoc($consulta));
  
        }
        else
        {
            echo "<p class='recoverError'> Email não encontrado. <br> Personalize seu interruptor e clique em SALVAR PERSONALIZAÇÃO.</p>";
        }
        //  Liberando memória
        mysqli_free_result($consulta);


    }

?>