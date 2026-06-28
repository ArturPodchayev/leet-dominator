string reformatNumber(string s) 
{
	string out;
	
	auto i{0};
	for(const auto & c : s)
		if(isdigit(c))
		{
			if(i and i%3==0) out.push_back('-');   
			out.push_back(c);
			i++;
		}

	if(i%3==1) iter_swap(end(out)-2, end(out)-3);
	return out;
}
