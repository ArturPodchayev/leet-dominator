struct Solution
{
    std::string trimTrailingVowels(std::string s)
    {
        size_t N = s.size();
        while ( N && 1065233 >> s[N - 1] - 'a' & 1 )
            --N;
        
        s.resize(N);
        return s;
    }
};
