function lts_time_field_update(t, h, m, a, e)
{
	if($(h).val() == "" && $(m).val() == "" && $(a).val() == "")
		$(t).val("");
	else
	{
		$(t).val($(h).val() + ":" + $(m).val() + " " + $(a).val());
	}
}