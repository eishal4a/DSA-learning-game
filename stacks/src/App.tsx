import React, { useState } from "react";
import "./App.css";

const App: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const [stack, setStack] = useState<string[]>([]);
  const [queue, setQueue] = useState<string[]>([]);
  const [linkedList, setLinkedList] = useState<string[]>([]);
  const [doublyList, setDoublyList] = useState<string[]>([]);
  const [explanation, setExplanation] = useState<string>(
    "Click a button to see what is happening 💡"
  );

  const getValue = (): string | null => {
    if (!value.trim()) return null;
    const temp = value;
    setValue("");
    return temp;
  };

  // STACK
  const pushStack = () => {
    const val = getValue();
    if (val) {
      setStack((prev) => [...prev, val]);
      setExplanation(
        "Stack follows LIFO (Last In First Out). The last element added will be removed first."
      );
    }
  };

  const popStack = () => {
    setStack((prev) => prev.slice(0, -1));
    setExplanation(
      "Pop removes the TOP element because Stack works like a pile of books."
    );
  };

  // QUEUE
  const enqueue = () => {
    const val = getValue();
    if (val) {
      setQueue((prev) => [...prev, val]);
      setExplanation(
        "Queue follows FIFO (First In First Out). New elements join at the end."
      );
    }
  };

  const dequeue = () => {
    setQueue((prev) => prev.slice(1));
    setExplanation(
      "Dequeue removes the FIRST element because Queue works like a line of people."
    );
  };

  // SINGLY LINKED LIST
  const addNode = () => {
    const val = getValue();
    if (val) {
      setLinkedList((prev) => [...prev, val]);
      setExplanation(
        "Each node stores data and a pointer to the NEXT node only."
      );
    }
  };

  const removeNode = () => {
    setLinkedList((prev) => prev.slice(0, -1));
    setExplanation(
      "Removing updates the previous node to point to NULL."
    );
  };

  // DOUBLY LINKED LIST
  const addDNode = () => {
    const val = getValue();
    if (val) {
      setDoublyList((prev) => [...prev, val]);
      setExplanation(
        "Doubly Linked List has TWO pointers: previous and next. So we can move both directions."
      );
    }
  };

  const removeDNode = () => {
    setDoublyList((prev) => prev.slice(0, -1));
    setExplanation(
      "When removing, we update both previous and next connections."
    );
  };

  return (
    <div className="app">
      <h1>🎮 Learn DSA Step by Step 💕</h1>

      <input
        type="text"
        placeholder="Enter value"
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
      />

      <div className="container">

        <div className="card">
          <h2>📚 Stack</h2>
          <button onClick={pushStack}>Push</button>
          <button onClick={popStack}>Pop</button>
          <div className="display">
            {[...stack].reverse().map((item, i) => (
              <div key={i} className="stack-box">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h2>🚗 Queue</h2>
          <button onClick={enqueue}>Enqueue</button>
          <button onClick={dequeue}>Dequeue</button>
          <div className="display">
            {queue.map((item, i) => (
              <div key={i} className="queue-box">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h2>🔗 Singly LL</h2>
          <button onClick={addNode}>Add</button>
          <button onClick={removeNode}>Remove</button>
          <div className="display">
            {linkedList.map((item, i) => (
              <span key={i}>
                <span className="node">{item}</span>
                {i !== linkedList.length - 1 && (
                  <span className="arrow">→</span>
                )}
              </span>
            ))}
          </div>
        </div>

        <div className="card">
          <h2>🔁 Doubly LL</h2>
          <button onClick={addDNode}>Add</button>
          <button onClick={removeDNode}>Remove</button>
          <div className="display">
            {doublyList.map((item, i) => (
              <span key={i}>
                <span className="node">{item}</span>
                {i !== doublyList.length - 1 && (
                  <span className="arrow">↔</span>
                )}
              </span>
            ))}
          </div>
        </div>

      </div>

      <div className="explanation">{explanation}</div>
    </div>
  );
};

export default App;