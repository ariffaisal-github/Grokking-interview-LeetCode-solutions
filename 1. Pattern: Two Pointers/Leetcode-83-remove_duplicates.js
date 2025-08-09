/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let curr=head;
    while(curr !== null) {
        let second = curr.next;
        while(second !== null && second.val === curr.val) {
            second = second.next;
        }
        curr.next = second;
        curr = curr.next;
    }
    return head;
};
