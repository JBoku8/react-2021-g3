export const messageSelector = ({ message }) => message;
export const counterSelector = ({ counter }) => counter;
export const errorSelector = ({ error }) => error;

export const messageAndCounterSelector = ({ message, counter }) => [
  message,
  counter,
];
