$(document).ready(function(){
    var funcion;
    verificar_sesion();
    obtener_datos();
    function verificar_sesion(){
        funcion = 'verificar_sesion';
        $.post('Controllers/UsuarioController.php',{funcion},(response)=>{
            
            if(response!=''){
                let sesion=JSON.parse(response);
                $('#nav_login').hide();
                $('#nav_register').hide();
                $('#usuario_nav').text(sesion.user+'#'+sesion.id);
                $('#avatar_nav').attr('src','../Util/img/'+sesion.avatar);
                $('#avatar_menu').attr('src','../Util/img/'+sesion.avatar);
                $('#usuario_menu').text(sesion.user);
               
            } else{
               
                $('#nav_usuario').hide();
                location.href = 'login.php';
            }

        })
    }
    function obtener_datos(){
        funcion = 'obtener_datos';
        $.post('Controllers/UsuarioController.php',{funcion},(response)=>{
           let usuario =JSON.parse(response);
           $('#username').text(usuario.username);
           $('#tipo_usuario').text(usuario.tipo_usuario);
           $('#nombres').text(usuario.nombres+" "+usuario.apellidos);
           $('#avatar_perfil').attr('src','../Util/img/'+usuario.avatar);
           $('#curp').text(usuario.curp);
           $('#email').text(usuario.email);
           $('#telefono').text(usuario.telefono);
        })   
    }

})