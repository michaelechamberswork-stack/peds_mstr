function lts_date_field_isDate(txtDate)
{
    var currVal = txtDate;
    if(currVal == '')
        return false;
    
    var rxDatePattern = /^(\d{1,2})(\/|-)(\d{1,2})(\/|-)(\d{4})$/; //Declare Regex
    var dtArray = currVal.match(rxDatePattern); // is format OK?
    
    if (dtArray == null) 
        return false;
    
    //Checks for mm/dd/yyyy format.
    dtMonth = dtArray[1];
    dtDay= dtArray[3];
    dtYear = dtArray[5];        
    
    if (dtMonth < 1 || dtMonth > 12) 
        return false;
    else if (dtDay < 1 || dtDay> 31) 
        return false;
    else if ((dtMonth==4 || dtMonth==6 || dtMonth==9 || dtMonth==11) && dtDay ==31) 
        return false;
    else if (dtMonth == 2) 
    {
        var isleap = (dtYear % 4 == 0 && (dtYear % 100 != 0 || dtYear % 400 == 0));
        if (dtDay> 29 || (dtDay ==29 && !isleap)) 
                return false;
    }
    return true;
}

function lts_date_field_update(h, m, d, y, e)
{	
	$this = $(this);
	e.html("");

	if($(m).val() == "" || $(d).val() == "" || $(y).val() == "")
	{
		$(h).val("");
		$this.trigger('lts_date_change');
	}
	else if($(y).val().length != 4)
	{
		e.html("Year must be 4 digits");
		$(y).focus();
	}
	else
	{
		$(h).val($(m).val() + "/" + $(d).val() + "/" + $(y).val());
		if(!lts_date_field_isDate($(h).val()))
		{
			h.val("1/1/0001");
			e.html("Invalid Date");
		}		
		$this.trigger('lts_date_change');
	}
}
