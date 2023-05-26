const { Stack, Queue } = require('./index');

describe('Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it('should successfully push onto a stack', () => {
    stack.push(10);
    expect(stack.peek()).toBe(10);
  });

  it('should successfully push multiple values onto a stack', () => {
    stack.push(10);
    stack.push(20);
    stack.push(30);
    expect(stack.peek()).toBe(30);
  });

  it('should successfully pop off the stack', () => {
    stack.push(10);
    stack.push(20);
    stack.push(30);
    expect(stack.pop()).toBe(30);
    expect(stack.peek()).toBe(20);
  });

  it('should successfully peek the next item on the stack', () => {
    stack.push(10);
    stack.push(20);
    stack.push(30);
    expect(stack.peek()).toBe(30);
  });
  
  it('should return null when calling pop on an empty stack', () => {
    const stack = new Stack();

    const removedValue = stack.pop();

    expect(removedValue).toBeNull();
  });

  it('should raise an exception when calling peek on an empty stack', () => {
    expect(() => {
      stack.peek();
    }).toThrow();
  });

  it('should return true if the stack is empty', () => {
    expect(stack.isEmpty()).toBe(true);
  });

  it('should return false if the stack is not empty', () => {
    stack.push(10);
    expect(stack.isEmpty()).toBe(false);
  });
});

describe('Queue', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  it('should successfully enqueue into a queue', () => {
    queue.enqueue(10);
    expect(queue.peek()).toBe(10);
  });

  it('should successfully enqueue multiple values into a queue', () => {
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);
    expect(queue.peek()).toBe(10);
  });

  it('should successfully dequeue out of a queue the expected value', () => {
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);
    expect(queue.dequeue()).toBe(10);
    expect(queue.peek()).toBe(20);
  });

  it('should successfully peek into a queue, seeing the expected value', () => {
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);
    expect(queue.peek()).toBe(10);
  });

  it('should raise an exception when calling dequeue on an empty queue', () => {
    expect(() => {
      queue.dequeue();
    }).toThrow();
  });

  it('should raise an exception when calling peek on an empty queue', () => {
    expect(() => {
      queue.peek();
    }).toThrow();
  });

  it('should return true if the queue is empty', () => {
    expect(queue.isEmpty()).toBe(true);
  });

  it('should return false if the queue is not empty', () => {
    queue.enqueue(10);
    expect(queue.isEmpty()).toBe(false);
  });
});
