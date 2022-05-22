export function doDate()
{
    var str = "";
    var now = new Date();

    str += now.getHours() +":" + now.getMinutes() + ":" + now.getSeconds();
    return str
}

