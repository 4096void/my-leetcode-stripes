/**
 * Definition for single-linked list.
 * function ListNode(val) {
 *     this.val = val
 *     this.next = null;
 * }
 */
/**
 * @param {Listnode} l1
 * @param {Listnode} l2
 * @return {Listnode}
 */

const nodes2list = function (nodes) {
  for (let i = 0, l = nodes.length; i < l; i++){
    nodes[i].next = nodes[i + 1];
  }
  return nodes[0];
};

const addTwoNumbers = function (l1, l2) {
  let rs = [], carry = 0;
  while (l1 || l2 || carry > 0) {
    let n1 = (l1 && l1.val) || 0;
    let n2 = (l2 && l2.val) || 0;
    let sum = n1 + n2 + carry;

    if (sum >= 10) {
      sum -= 10;
      carry = 1;
    } else {
      carry = 0;
    }

    rs.push({ val: sum, next: null });
    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
  }

  return nodes2list(rs);
};

exports.addTwoNumbers = addTwoNumbers;