function minGroups($intervals) {
        $events = [];

        foreach ($intervals as $interval) {
            $events[] = [$interval[0], 1];
            $events[] = [$interval[1] + 1, -1];  // + 1 to avoid overlap at the end point
        }
       
        usort($events, function($a, $b) {
            if ($a[0] == $b[0]) return $a[1] - $b[1];
            return $a[0] - $b[0];
        });

        $currentGroups = 0;
        $maxGroups = 1;

        foreach ($events as $event) {
            $currentGroups += $event[1];
            $maxGroups = max($maxGroups, $currentGroups);
        }

        return $maxGroups;
    }
