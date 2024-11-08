import { beforeEach, describe, expect, test } from '@jest/globals';
import Dog from './dog.js';

describe('Dog class tests', () => {
  let dog;

  beforeEach(() => {
    dog = new Dog('Buddy', 'Golden Retriever', 2, 'Golden');
  });

  test('Dog can bark', () => {
    expect(dog.bark()).toBe('Woof! Woof!');
  });

  test('Dog can sleep', () => {
    expect(dog.sleep()).toBe(`${dog.name} is now sleeping.`);
    expect(dog.isSleeping).toBeTruthy();
  });

  test('Dog can wake up', () => {
    expect(dog.wakeUp()).toBe(`${dog.name} woke up.`);
    expect(dog.isSleeping).toBeFalsy();
  });

  test('Dog can learn a new trick', () => {
    expect(dog.learnTrick('sit')).toBe(`${dog.name} learned a new trick: sit.`);
    expect(dog.tricks).toContain('sit');
  });

  test('Dog cant learn an empty trick', () => {
    expect(() => dog.learnTrick('')).toThrow('Trick cannot be empty');
  });

  test('Dog can display its description', () => {
    expect(dog.getDescription()).toBe('Buddy Golden Retriever');
  });

  test('Dog can display info.', () => {
    expect(dog.displayInfo()).toBe(
      'Buddy is a 2 year old Golden Golden Retriever.',
    );
  });
});
