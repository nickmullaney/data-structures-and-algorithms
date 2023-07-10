// linkedListUtils.js

function isLinkedListCircular(head) {
  if (head === null || head.next === null) {
    return false; // An empty list or a list with only one node is not circular
  }

  let tortoise = head;
  let hare = head.next;

  while (hare !== null && hare.next !== null) {
    if (tortoise === hare) {
      return true; // The tortoise and the hare meet, so the list is circular
    }
    tortoise = tortoise.next;
    hare = hare.next.next;
  }

  return false; // The hare reached the end of the list, so it's not circular
}

module.exports = {
  isLinkedListCircular,
};
