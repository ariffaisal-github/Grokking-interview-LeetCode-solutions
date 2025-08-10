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
    let topHead = new ListNode(-1, head);
    let cur = head;
    let prev = topHead; // prev always points to prev of cur
    while(cur) {
        if(cur.next && cur.val === cur.next.val) {
            while(cur.next && cur.val === cur.next.val){
                cur = cur.next;
            }
            prev.next = cur.next;
        } else {
            prev = prev.next;
        }
        cur = cur.next;
    }
    return topHead.next;
};
