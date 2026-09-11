class Solution(object):
    def numberWays(self, peoples_hat_preferences):
        # get mod set up 
        self.mod = 10**9+7
        # number of people 
        number_of_people = len(peoples_hat_preferences)
        # which hats go to which persons 
        hats_to_person = collections.defaultdict(list)
        # loop over person in range of hats, and hats for that person 
        for person in range(number_of_people) : 
            for hat in peoples_hat_preferences[person] : 
                # building the list of who likes which hat 
                hats_to_person[hat].append(person)
        # if there is a lonely hat, no good 
        if len(hats_to_person) < number_of_people : return 0 
        # set up masking appropriately to cover each person 
        person_mask = [1 << person for person in range(number_of_people)]
        # set up dynamic programming array covering 2^n permutations
        dpa_current = [0] * (2 ** number_of_people)
        # premark as 1 for the starting permutation. We know there is at least 1 by passing line 15
        dpa_current[0] = 1 
        # loop in range of hats 
        while hats_to_person : 
            # get a hat id and people who like this hat by popping item from dictionary 
            hat_id, people_who_like_this_hat = hats_to_person.popitem()
            # set up temp dpa of same size as current, but all zeros to reflect next round
            dpa_temp = [val for val in dpa_current]
            # ith_permutation with ith_permutation_value -> p_i, p_v
            for p_i, p_v in enumerate(dpa_current) : 
                # if value of permutation is 0, continue 
                if not p_v : 
                    continue 
                # otherwise then for person in people who like this hat 
                for person in people_who_like_this_hat : 
                    # if our person mask at person and p_i is currently even 
                    if not (person_mask[person] & p_i) : 
                        # it means we had not priorly considered this person with this hat 
                        # and we now need to do so, and in doing so account for the number of other 
                        # possible succesful permutations, p_v 
                        dpa_temp[person_mask[person] + p_i] += p_v
            # go to the next round 
            dpa_current = dpa_temp
        # return modulo valuation after considering all hats and people 
        return dpa_current[-1]%self.mod
