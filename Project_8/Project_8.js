function validate()
{
    var a=document.getElementById('name');
    var b=document.getElementById('number');
    var flag=true;
    var c=document.getElementById('box2');
    if (a.value.length!=0)
    {
        if (b.value.length==10)
        {
            if (!c.checked)
            {
                alert('Agree the terms')
                flag=false;
            }
        return flag;   
        }
        else
        {
            alert('Phone Number should be 10 digit')
            flag=false;

        }
    }
    else
    {
        alert('Name required')
        flag=false;
    }
    return flag;
    
}
