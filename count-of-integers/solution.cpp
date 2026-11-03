typedef long long ll;
#define mod 1000000007
#define all(x) begin(x), end(x)

class Solution {
public:
	ll minS, maxS;
	unordered_map<ll, unordered_map<ll, unordered_map<bool, ll>>> dp;

	ll rec(int ind, int sum, bool restriction, string& str) {
		if (ind >= str.size())
			if (sum >= minS && sum <= maxS)
				return 1;
			else
				return 0;

		if (sum > maxS)
			return 0;

		if (dp.find(ind) != end(dp) && dp[ind].find(sum) != end(dp[ind]))
			if (dp[ind][sum].find(restriction) != end(dp[ind][sum]))
				return dp[ind][sum][restriction];

		ll ans = 0;
		if (restriction)
		{
			for (char ch = '0'; ch <= str[ind]; ch++)
			{
				ans += rec(ind + 1, sum + (ch - '0'), ch == str[ind] ? true : false, str);
				ans %= mod;
			}
		}
		else
		{
			for (char ch = '0'; ch <= '9'; ch++)
			{
				ans += rec(ind + 1, sum + (ch - '0'), false, str);
				ans %= mod;
			}
		}
		return dp[ind][sum][restriction] = ans % mod;
	}

	int count(string num1, string num2, int min_sum, int max_sum) {
		minS = min_sum;
		maxS = max_sum;

		reverse(all(num1));
		while (num1.size() != 22)
			num1.push_back('0');
		reverse(all(num1));

		reverse(all(num2));
		while (num2.size() != 22)
			num2.push_back('0');
		reverse(all(num2));

		dp.clear();
		ll ans = rec(0, 0, true, num2) + mod;
		dp.clear();
		ans -= rec(0, 0, true, num1);
		int sum = 0;
		for (char ch : num1)
			sum += (ch - '0');
		if (sum <= max_sum && sum >= min_sum)
			ans++;
		return ans % mod;
	}
};
