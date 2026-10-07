class Solution {
    public int numberOfRounds(String loginTime, String logoutTime) {
        int loginOrig = Integer.parseInt(loginTime.substring(0, 2)) * 60 + Integer.parseInt(loginTime.substring(3, 5));
        int logoutOrig = Integer.parseInt(logoutTime.substring(0, 2)) * 60
                + Integer.parseInt(logoutTime.substring(3, 5));
        int login = loginOrig == 0 ? 0 : (loginOrig - 1) / 15 + 1;
        int logout = logoutOrig / 15;
        //System.out.println(loginOrig + "|" + logoutOrig + "\n" + login + "|" + logout);
        return logoutOrig >= loginOrig ? Math.max(0, logout - login) : logout + 24 * 4 - login;
    }
}
