type OrderedStream struct {
    ptr int
    list []string
}

func Constructor(n int) OrderedStream {
    return OrderedStream{
        list : make([]string, n),
        // The pointer starts at the first index [0] in this.list.
        ptr  : 0,
    }
}

func (this *OrderedStream) Insert(id int, value string) []string {
    // Always insert. It is a 1-indexed id in a 0-indexed slice, so subtract 1
    this.list[id-1] = value

    // Only when a value at the first index [0] is added do we move this.ptr.
    // Until then, we return empty strings.
    if this.list[this.ptr] == "" {
        return []string{}
    }

    // At this point, we have a value at this.ptr.
    // We increment this.ptr until we find an empty value or we reach
    // the end of this.list.
    var end = this.ptr
    for this.ptr < len(this.list) && this.list[this.ptr] != "" {
        this.ptr++
        end++
    }
    // Return the sub-array of values.
    return this.list[id-1:end]
}
