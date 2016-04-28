function isPalindrome(str)
{
	var j = str.length - 1
		for (var i = 0; i < str.length; i++)
		{
			while(i < j) {
				if(str[i] == str[j])
					return true
				else return false
			}
	  }
};
var str = "put it up"
isPalindrome(str)


