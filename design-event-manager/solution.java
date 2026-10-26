class EventManager{
	HashMap<Integer, Integer> eventIdToPriority;
	TreeMap<Integer, TreeSet<Integer>> priorityToEventIds;
	public EventManager(int[][] events){
		this.eventIdToPriority = new HashMap<>();
		this.priorityToEventIds = new TreeMap<>();
		for (int[] event : events){
			final int eventId = event[0], priority = event[1];

			this.eventIdToPriority.put(eventId, priority);

			this.priorityToEventIds.putIfAbsent(priority, new TreeSet<>());
			this.priorityToEventIds.get(priority).add(eventId);
		}
	}

	public void updatePriority(int eventId, int newPriority){
		final int oldPriority = this.eventIdToPriority.get(eventId);

		this.eventIdToPriority.put(eventId, newPriority);

		TreeSet<Integer> eventIds = this.priorityToEventIds.get(oldPriority);
		eventIds.remove(eventId);
		if (eventIds.isEmpty()){
			this.priorityToEventIds.remove(oldPriority);
		}
		this.priorityToEventIds.putIfAbsent(newPriority, new TreeSet<>());
		this.priorityToEventIds.get(newPriority).add(eventId);
	}

	public int pollHighest(){
		if (this.priorityToEventIds.isEmpty()){
			return -1;
		}

		final int priority = this.priorityToEventIds.lastEntry().getKey();
		TreeSet<Integer> eventIds = this.priorityToEventIds.get(priority);
		final int eventId = eventIds.first();
		eventIds.remove(eventId);
		if (eventIds.isEmpty()){
			this.priorityToEventIds.remove(priority);
		}

		this.eventIdToPriority.remove(eventId);

		return eventId;
	}
}
