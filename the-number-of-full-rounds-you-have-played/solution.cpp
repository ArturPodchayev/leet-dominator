class Solution {
public:
    int numberOfRounds(string loginTime, string logoutTime) {
        int inHr = std::stoi(loginTime.substr(0,2));
        int outHr = std::stoi(logoutTime.substr(0,2));

        int inMins = std::stoi(loginTime.substr(3,2));
        int outMins = std::stoi(logoutTime.substr(3,2));

        int gamesPlayedInBetween = 0;
        int gamesPlayedFirstHour = 0;
        int gamesPlayedLastHour = 0;

        if (inHr != outHr){
            gamesPlayedFirstHour = (60 - inMins)/15;
            gamesPlayedLastHour = outMins/15;
            gamesPlayedInBetween = 4 * (outHr > inHr ? std::abs(outHr - inHr - 1) : std::abs(outHr + 24 - inHr - 1));
        }
        else{
            //this means they played over 24 hours  (6:19 -> 6:18)
            if (inMins > outMins){
                gamesPlayedInBetween = 4*(24 - 1); //for semantics
                gamesPlayedFirstHour = (60 - inMins)/15;
                gamesPlayedLastHour = outMins/15;
            }
            //(6:18 -> 6:19)
            else{
                gamesPlayedInBetween = (outMins - (outMins%15) - inMins)/15;
            }
        }
        
        return gamesPlayedFirstHour + gamesPlayedLastHour + gamesPlayedInBetween;
    }
};
