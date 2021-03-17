function validform() {

        var a = document.forms["my-form"]["first-name"].value;
        var b = document.forms["my-form"]["last-name"].value;
        var c = document.forms["my-form"]["username"].value;
        var d = document.forms["my-form"]["image"].value;
        var e = document.forms["my-form"]["position"].value;
        var f = document.forms["my-form"]["number"].value;

        if (a==null || a=="")
        {
            alert("Please Enter Your First Name");
            return false;
        }else if (b==null || b=="")
        {
            alert("Please Enter Your Last Name");
            return false;
        }else if (c==null || c=="")
        {
            alert("Please Enter Your Username");
            return false;
        }else if (e==null || e=="")
        {
          alert("Please Enter Your Position");
          return false;
        }else if (d==null || d=="")
        {
          alert("Please Enter Your Image");
          return false;
        }else if (f==null || f=="")
        {
          alert("Please enter your Number");
          return false;
        }

    }
