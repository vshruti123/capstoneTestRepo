function validateProduction() {
    var x = document.forms["Production"]["id1"].value;
    if (x == "1111") {
      var y = document.forms["Production"]["qty"].value;
      var z = document.forms["Production"]["price"].value;
      var a = y*z
      alert("Authorised and expected price is "+ a);
      return false;
    }
    
  }
  
  function validateStorage() {
    var x = document.forms["Storage"]["id3"].value;
    if (x == "3333") {
        var a = document.forms["Storage"]["leaveStorage"].value;
        var b = document.forms["Transportation"]["qtyEnterVehicle"].value;
        var c = "notsame";
      if(a==b){
          c = "same";
      }
      else
      c ="notsame";
      alert("Authorised and quantity entering and leaving is " + c);
      return false;
    }
    else
    alert("Not Authorised");
  }
  function validateTransportation() {
    var x = document.forms["Transportation"]["id2"].value;
    if (x == "2222") {
        var a = document.forms["Transportation"]["qtyEnterVehicle"].value;
        var b = document.forms["Production"]["qty"].value
        var c = "notsame";
        var d = document.forms["Transportation"]["qtyDamaged"].value;
        if(a==b){
          c = "same";
        }
        else 
        c = "notsame";
      alert("Authorised and quantity entering and leaving is " + c + "Damaged goods are of quantity" + d);
      return false;
    }
    else
    alert("Not Authorised");
  }
  function validateSales() {
    var x = document.forms["Sales"]["id4"].value;
    if (x == "4444") {
        var a = document.forms["Sales"]["qtySold"].value;
        var b = document.forms["Production"]["qty"].value
        var d = document.forms["Transportation"]["qtyDamaged"].value;
        var e = b-d;
        var f = document.forms["Sales"]["salePrice"].value;
        var h = f * a;
      alert("Authorised and quantity after removing damaged goods " + e +" and actual quantity sold is " + a + "the expected earning is " + h);
      return false;
    }
    else
    alert("Not Authorised");
  }