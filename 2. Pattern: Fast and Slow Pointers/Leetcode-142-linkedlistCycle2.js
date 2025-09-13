/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    //Must handle this specific edge case
    if(head===null || head.next===null) return null;

    let slow = head, fast = head;
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast) break;
    }
    if(slow !== fast) return null;

    fast = head;
    while(fast !== slow) {
        fast = fast.next;
        slow = slow.next;
    }
    return fast;
};
