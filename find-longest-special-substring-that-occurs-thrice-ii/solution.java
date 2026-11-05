public int maximumLength(String s) {
	int res = -1;
	char[] arr = s.toCharArray();

	Map<Character, ArrayList<Integer>> map = new HashMap<>();

	int last = 0;

	if(!map.containsKey(arr[last])) map.put(arr[last], new ArrayList<>());
	for(int i=1; i<arr.length; i++){
		if(arr[i] != arr[last]){
			map.get(arr[last]).add(i-last);

			last = i;
			if(!map.containsKey(arr[last])) map.put(arr[last], new ArrayList<>());
		}
	}
	map.get(arr[last]).add(arr.length-last);


	for(char ch : map.keySet()){
		boolean flag = true;
		ArrayList<Integer> list = map.get(ch);
		int size = list.size(), curr = 1;

		while(flag){
			int ct = 0;
			for(int i=0; i<size&&ct<3; i++){
				int val = list.get(i);
				if(val>=curr) ct += val - curr + 1;
			}

			if(ct < 3){
				flag = false;
			}else if(res<curr){
				res = curr;
			}
			curr++;
		}
	}

	return res;
}
