function isPalindrome(str)
{
	var j = str.length - 1
		for (var i = 0; i < str.length; i++, j--)
		{
			while(i < j) {
				if(str[i] == str[j])
					return true
				else return false
			}
	  }
};


isPalindrome("put it up")
