import * as React from 'react';

export function IconMediaPlay(props) {
  return (
    <svg
      baseProfile="tiny"
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M8.998 7.002l.085.078L14.134 12l-5.096 4.964L9 17l-.002-9.998M9 5a2 2 0 00-2 2v10a2 2 0 002 2c.543 0 1.033-.218 1.393-.568L17 12l-6.604-6.433A2.008 2.008 0 009 5z" />
    </svg>
  );
}

export function IconRightArrow(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M11.293 17.293l1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z" />
    </svg>
  );
}

export function IconLeftArrow(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M12.707 17.293L8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z" />
    </svg>
  );
}
