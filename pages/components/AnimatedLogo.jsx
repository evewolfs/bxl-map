// components/AnimatedLine.js
import React from 'react';
import styles from '../../styles/Home.module.css'


const AnimatedLogo = () => {
  return (



 
    <svg
    xmlns="http://www.w3.org/2000/svg"
    id="logo"
    viewBox="0 0 135.02 34.26"
    style={{ width: "40vw", height: "auto", padding: "2%", display: "block",
    marginLeft: "auto",
    marginRight: "auto"}} // Set the width and height
  >

       <path
      className={styles.animatedLogo}
      d="m31.39,5.38c1.89-.12,3.94.4,5.32,1.77s.66,3.78-.07,5.36c-.66,1.42-1.7,2.71-3.09,3.46s-2.89.69-4.16,1.55c-.29.2-.21.71.19.7,2.06-.08,4.29-.2,6.02-1.45s2.92-3.54,3.33-5.51-.1-4.06-1.45-5.53c-.67-.73-1.53-1.29-2.47-1.61-1.11-.38-2.63-.09-3.48-1.01l.06.45c.67-1.54,4.2.4,5.06.95,1.86,1.18,2.28,3.09,2.22,5.17-.05,1.75-.54,3.49-1.49,4.97-.89,1.38-2.89,3.88-4.67,3.86-.98-.01-2.53-.5-3.37.24-.46.41-.39,1.07.1,1.43,1.25.91,3.06-.95,3.88,1.15.63,1.6.87,3.49,1.16,5.18.27,1.51.35,3.14.98,4.56.37.86,1.15,2.12,2.18,2.26.53.07,1.4-.2,1.5-.8.12-.71-.74-1.39-1.04-1.94-.73-1.34-1.1-2.98-1.45-4.46-.39-1.62-.8-3.29-1.08-4.93-.34-2.01.8-2.65,2.12-3.83,1.02-.91,1.74-2.02,2.27-3.28,1.19-2.82,2.36-6.32.29-8.97s-5.5-3.57-8.79-4.13l.22.55c.32-.54,1.77-.45,2.3-.44.7.02,1.4.12,2.08.31,1.14.32,2.28.84,3.06,1.76,1.16,1.37,1.92,3.15,2.57,4.81.7,1.79-.27,4.39-1.09,6-.57,1.12-1.31,2.14-2.21,3.02-.78.77-1.85,1.36-2.39,2.34-.47.86-.29,1.77-.06,2.67.38,1.46.83,2.91,1.29,4.35s.95,2.87,1.47,4.3c.22.59.51,1.18.67,1.79.34,1.3-1.23,1.08-2.07.82-2.55-.78-2.43-5.32-2.8-7.41-.22-1.24-.49-2.47-.97-3.64-.29-.71-.57-1.64-1.39-1.84-.46-.11-1.13.05-1.61.1-.44.04-.92.03-1.32.24-.94.49-.99,1.88-1.19,2.78-.34,1.55-.64,3.11-.78,4.7-.16,1.78.17,3.64-.31,5.38l.46-.26c-.27-.07-.36-1.07-.38-1.33-.04-.39,0-.79.02-1.18.05-.84.19-1.67.35-2.49.27-1.33.64-2.64.94-3.97.6-2.67.94-5.39,1.21-8.12s.48-5.56.83-8.32c.29-2.29.91-4.68-.18-6.86-.08-.17-.36-.25-.51-.13-1.22.87-.74,3.2-.79,4.49-.08,2.31-.24,4.61-.51,6.9-.55,4.61-2.09,9.01-2.67,13.6-.14,1.13-.23,2.26-.3,3.4-.04.57-.07,1.14-.1,1.7-.01.24-.02.49-.04.73-.03.4.13,1.03-.35.88s-.18-.92-.13-1.36l.21-1.71c.15-1.22.3-2.45.45-3.67.3-2.41.58-4.81,1.15-7.18.53-2.18.99-4.35,1.33-6.57.37-2.46.75-4.94.94-7.42.12-1.54.21-3.48-1.34-4.35-.31-.17-.59.11-.55.42.2,1.46.4,2.93.29,4.41s-.49,2.85-.82,4.25c-.62,2.61-.67,5.25-1.1,7.89-.4,2.46-1.21,4.82-1.54,7.29-.37,2.85-.42,5.74-1.19,8.53-.13.47.6.66.72.2.73-2.63.82-5.35,1.13-8.05s1.28-5.52,1.68-8.33.61-5.61,1.28-8.41.66-5.21.28-7.98l-.55.42c1.89,1.05.87,4.89.65,6.58-.33,2.54-.66,5.07-1.16,7.58-.44,2.22-1.09,4.39-1.42,6.64s-.6,4.67-.89,7c-.14,1.13-.36,2.29-.42,3.43-.03.48-.03,1.08.39,1.4,1.02.77,1.61-.64,1.68-1.42.24-2.64.23-5.28.7-7.9.41-2.27,1.1-4.48,1.57-6.74.53-2.52.87-5.08,1.09-7.65.11-1.35.19-2.7.25-4.05.03-.64.05-1.27.06-1.91s-.19-2.01.38-2.41l-.51-.13c.75,1.51.53,3.15.31,4.75-.19,1.36-.36,2.73-.5,4.1-.31,3.01-.52,6.03-.91,9.03s-1.22,6.01-1.82,9.04c-.27,1.35-.44,2.73-.32,4.1.06.68.15,1.4.9,1.58.2.05.41-.06.46-.26.38-1.39.23-2.76.26-4.18.04-1.83.36-3.64.74-5.43.13-.63.17-1.58.49-2.14.39-.69,1.85-1.05,2.64-.89,1.3.28,1.71,3.4,1.92,4.52.43,2.31.32,5.37,1.85,7.3.61.77,1.47,1.13,2.44,1.2.81.06,1.88.28,2.17-.69.33-1.08-.55-2.46-.91-3.44-.59-1.65-1.15-3.31-1.66-4.99-.23-.76-.46-1.52-.68-2.29s-.65-1.81-.43-2.63c.35-1.34,2.21-2.27,3.09-3.28,1.58-1.83,2.61-4.1,2.94-6.5.24-1.73-.09-2.63-.79-4.16-.84-1.85-1.83-3.8-3.7-4.78-1.24-.65-2.64-1-4.04-1.03-.92-.02-2.41-.09-2.95.81-.11.19-.02.51.22.55,3.28.56,6.97,1.36,8.82,4.46,1.05,1.76.44,3.64-.08,5.46-.44,1.56-1,3.16-2.07,4.41-.77.91-1.84,1.5-2.58,2.43s-.75,1.81-.52,2.92c.61,2.99,1.18,6.06,2.31,8.91.19.47.4.82.69,1.24.09.13.25.3.31.44.3.78-.94.28-1.29-.05-1.19-1.13-1.26-3.21-1.51-4.72-.27-1.67-.6-3.33-1.01-4.97-.25-.99-.51-2.16-1.54-2.62-.5-.22-1.03-.21-1.56-.15-.15.02-.3.05-.44.08l-.56.1c-.34-.48-.18-.65.47-.51,1.16-.06,2.49.5,3.52-.19,2.27-1.52,4.27-4.06,4.99-6.7s.72-6.18-1.6-7.98c-1.22-.94-5.68-3.45-6.7-1.11-.07.16-.06.32.06.45,1.04,1.14,2.66.75,3.98,1.27,2.2.85,3.49,3.14,3.31,5.45-.15,1.92-1.41,4.37-2.9,5.61-1.6,1.33-3.84,1.42-5.82,1.49l.19.7c1-.67,2.17-.75,3.27-1.15.77-.28,1.48-.7,2.1-1.24,1.39-1.2,2.33-2.9,2.8-4.66s.57-3.36-.82-4.61c-1.56-1.4-3.65-2.02-5.73-1.88-.48.03-.48.78,0,.75h0Z"
    />
    <path
      className={styles.animatedLogo}
      d="m60.9.64c-.21.7-.18,1.36-.23,2.08-.07,1.02-.34,2-.57,2.99-.47,1.98-.82,3.99-1.13,6-.6,3.87-1.04,7.77-1.86,11.6-.38,1.75-.66,4.55-2.02,5.84-1.01.95-2.57,1.03-3.61.13-.96-.84-1.03-2.14-.91-3.33.41-3.96,1.38-7.93,2.06-11.85.79-4.53,1.45-9.09,1.94-13.66.02-.21-.19-.36-.38-.38-.52-.05-.74.28-.9.75-.45,1.3-.55,2.84-.81,4.19-.45,2.33-.99,4.67-1.08,7.05-.1,2.73-.64,5.38-1.11,8.07-.23,1.28-.46,2.57-.69,3.85-.21,1.18-.51,2.41-.39,3.62.32,3.25,4.98,4.91,7.24,2.42.56-.62.8-1.42.99-2.22.27-1.17.6-2.22,1.06-3.33.96-2.34.75-4.82,1.17-7.27.47-2.75,1.33-5.42,1.65-8.2.17-1.45.22-2.9.48-4.34.23-1.25.33-3.15,1.37-4.01l-.64-.27c-.23,2.87-.31,5.79-.79,8.63-.32,1.93-.88,3.82-1.31,5.73-.28,1.27-.6,2.54-.85,3.82-.5,2.49-.48,5.07-1.14,7.54s-2.18,4.93-4.83,5.45c-2.84.56-5.37-2.12-4.85-4.91.19-1.04.67-2,.96-3.02.32-1.12.27-2.17.21-3.32-.06-1.25.03-2.47.34-3.68s.85-2.45,1.02-3.74c.15-1.14.04-2.3.17-3.45.15-1.4.51-2.76.72-4.15.13-.9.74-4.23-.55-4.65-1.45-.47-1.27,3.49-1.27,4.13.01,2.88-.63,5.65-1.13,8.46-.47,2.6-.88,5.21-1.09,7.84-.1,1.27-.18,2.48-.55,3.71-.33,1.1-.61,2.13-.51,3.3.16,1.8.91,3.55,2.7,4.2,1.95.71,4.36.87,6.28.02s3.49-2.59,3.97-4.64c.69-2.96,1.09-6.02,1.63-9.02s1.11-6.04,1.58-9.07c.21-1.3.39-2.61.55-3.92.18-1.48,0-3.52,1.21-4.6h-.53c.28.36-.02,1.5-.07,1.9-.09.68-.19,1.35-.3,2.02-.21,1.25-.45,2.5-.67,3.76-.39,2.19-.69,4.38-.84,6.6-.17,2.52-1.18,4.69-1.61,7.14-.38,2.2-.25,4.32-1.35,6.35s-3.04,3.66-5.3,4.37c-1.11.35-2.44.61-3.58.3-1.29-.35-2.51-1.6-3.22-2.69-1.44-2.18-.74-4.75-.35-7.14s.39-4.72.89-7.03c.56-2.56,1.26-4.94,1.5-7.57.25-2.79.61-5.51,1.35-8.21.13-.47-.6-.67-.72-.2-.72,2.61-1.1,5.25-1.34,7.94-.12,1.44-.25,2.89-.57,4.3-.34,1.5-.87,2.95-1.12,4.47-.45,2.73-.67,5.5-1.09,8.23-.34,2.23-.24,4.34,1.23,6.16s3.12,2.81,5.47,2.53c2.16-.26,4.23-1.26,5.78-2.8s2.55-3.62,2.83-5.8c.17-1.31.17-2.63.5-3.92.36-1.41.95-2.76,1.2-4.2s.25-2.84.4-4.26c.18-1.7.48-3.39.78-5.08.28-1.56.58-3.13.8-4.7.13-.95.56-2.18-.07-3.01-.13-.17-.4-.12-.53,0-1.44,1.29-1.24,3.62-1.46,5.37-.33,2.68-.79,5.35-1.26,8.01s-.94,5.28-1.42,7.92c-.22,1.2-.43,2.4-.65,3.6-.24,1.33-.36,2.76-1.15,3.9-1.64,2.36-4.38,3.15-7.12,2.63-1.57-.3-2.77-.88-3.3-2.49-.48-1.44-.31-2.82.13-4.24.73-2.39.67-4.95,1.01-7.42s.85-5.14,1.33-7.71c.21-1.14.43-2.29.51-3.45.09-1.22-.05-2.45.07-3.66-.02.16.1-1.1.23-1.21l.06-.21.13.78c.06.59.05,1.18,0,1.77-.11,1.4-.46,2.76-.69,4.14-.17,1.04-.25,2.05-.26,3.1-.02,1.45-.33,2.7-.76,4.07-.31.99-.55,1.98-.65,3.02-.11,1.19.09,2.36.04,3.55-.09,2.09-1.55,3.93-1.29,6.06.19,1.58,1.23,3.02,2.62,3.78,3.39,1.85,6.86-1,8.11-4.09,1-2.49,1.03-5.2,1.41-7.82.23-1.56.64-3.12.98-4.66.46-2.08,1.08-4.15,1.41-6.26.45-2.83.55-5.73.77-8.59.03-.36-.41-.45-.64-.27-1.19.98-1.31,2.93-1.57,4.34-.37,2.07-.39,4.18-.78,6.25s-1,4.17-1.36,6.29-.18,4.25-.79,6.26c-.29.97-.81,1.87-1.1,2.84s-.32,1.98-.78,2.85c-1.11,2.1-4.66,1.84-5.87-.04-.72-1.12-.46-2.55-.26-3.78.19-1.13.4-2.25.6-3.37.39-2.2.83-4.39,1.16-6.6.36-2.39.31-4.78.76-7.17.12-.65,1.17-7.21,1.51-7.17l-.38-.38c-.52,4.91-1.26,9.78-2.12,14.64-.41,2.33-.82,4.67-1.23,7-.31,1.78-.93,3.79-.64,5.6.54,3.4,4.98,4.01,6.54.99.93-1.8,1.26-4.09,1.65-6.06.46-2.3.8-4.63,1.13-6.95.37-2.56.72-5.12,1.23-7.66.23-1.18.54-2.34.79-3.51s.12-2.47.46-3.63c.14-.46-.59-.66-.72-.2h0Z"
    />
    <path
      className={styles.animatedLogo}
      d="m80.11,22.86c1.06,2.03,1.79,4.14,2.36,6.35.45,1.72.95,3.38,2.18,4.72.18.19.46.11.59-.08.61-.85-.08-2.13-.35-3.01-.48-1.59-1.01-3.16-1.6-4.72-1.18-3.13-2.83-5.96-2.61-9.42s2.43-6.1,4.22-8.89c.94-1.46,1.87-2.88,3-4.2.69-.82,1.28-1.64,1.16-2.76-.03-.25-.22-.42-.47-.36-.79.17-1.2.89-1.67,1.5-.78,1.03-1.48,2.12-2.2,3.2-1.29,1.96-2.85,3.65-4.24,5.53s-1.43,3.59-1.01,5.83c.29,1.53.09,2.74-.16,4.25-.12.74-.14,1.46-.05,2.2.34,2.86,1.44,5.66,2.58,8.29.13.3.27.57.41.86.16.32.37.71.45,1.04.11.48.18.19-.03.24-.76.16-1.12-.59-1.3-1.15-.85-2.66-1.84-5.32-2.56-8.02s.95-4.86.6-7.48c-.17-1.29-.6-2.59-.19-3.88.44-1.37,1.57-2.57,2.4-3.71,1.55-2.12,3.47-4.24,4.68-6.58.32-.63,1.04-2.89-.51-2.27-.8.32-1.42,1.6-1.9,2.26-.8,1.1-1.58,2.23-2.32,3.38-.66,1.02-1.29,2.06-1.9,3.11-.21.36-.55,1.38-.89,1.59-.8.49-1.15-1.29-1.37-1.85-.89-2.28-1.53-4.68-2.51-6.92-.22-.5-.59-1.43-1.27-1.47-.44-.03-.68.31-.69.71,0,.52.33,1.15.49,1.64.24.75.49,1.51.75,2.26.51,1.5,1.04,3,1.6,4.48,1.02,2.73,2.63,5.55,1.81,8.53-.76,2.78-2.84,5.12-4.52,7.39-1.98,2.68-3.86,5.53-6.07,8.03l.63.36c.73-3.27,2.7-5.96,4.8-8.49,1.74-2.1,4.24-4.43,5.04-7.11.38-1.26.01-2.43-.35-3.64-.51-1.67-1.02-3.33-1.55-4.99-1.03-3.2-2.18-6.35-3.56-9.41-.08-.18-.35-.23-.51-.13-.76.46-.53,1.29-.34,2.02.44,1.65.97,3.28,1.52,4.89s1.15,3.22,1.79,4.8c.7,1.74,1.63,3.61,1.33,5.53-.28,1.78-1.65,3.08-2.76,4.4-.97,1.16-1.9,2.36-2.77,3.59-.94,1.33-1.82,2.71-2.63,4.12-.68,1.18-1.47,3.68-3.12,3.71l.32.56c1.61-2.84,3.41-5.58,5.23-8.28.95-1.41,1.93-2.79,2.98-4.13.87-1.11,2.12-2.17,2.75-3.45.53-1.09.15-2.21-.16-3.32-.41-1.49-.91-2.95-1.49-4.38-1.2-2.96-2.68-5.82-3.23-9-.08-.47-.8-.27-.72.2.48,2.78,1.66,5.31,2.76,7.88.62,1.45,1.19,2.93,1.65,4.44.21.7.44,1.41.58,2.13.26,1.3-.15,1.95-.94,2.88-3.81,4.51-7.16,9.51-10.06,14.65-.14.24.03.57.32.56,1.04-.02,1.74-.65,2.3-1.48.89-1.31,1.54-2.78,2.38-4.13.9-1.45,1.87-2.85,2.9-4.2s2.25-2.59,3.25-3.97c2.04-2.81,1.05-5.57-.15-8.52-.7-1.73-1.35-3.47-1.94-5.24-.22-.64-2.05-5.22-1.38-5.62l-.51-.13c1.36,3,2.47,6.1,3.48,9.23.49,1.51.95,3.02,1.41,4.54.56,1.83.92,3.28-.13,5.03-2.94,4.91-7.92,8.43-9.22,14.26-.08.34.36.66.63.36,2.47-2.79,4.56-5.97,6.77-8.97,1.78-2.41,3.93-4.97,4.26-8.08.15-1.46-.22-2.82-.73-4.17-.66-1.75-1.35-3.48-1.99-5.24-.59-1.64-1.16-3.29-1.69-4.96-.04-.12-.34-1.34-.43-1.36.14.02.62,1.29.63,1.32.32.82.57,1.67.86,2.5.62,1.77,1.29,3.53,1.99,5.28.26.64.64,1.67,1.53,1.39.35-.11.5-.39.69-.67.49-.76.89-1.6,1.35-2.38.93-1.57,1.92-3.1,2.96-4.59.48-.68.97-1.36,1.47-2.03.07-.09.59-.91.78-.66.12.16-.52,1.15-.64,1.34-.97,1.56-2.16,3.02-3.25,4.5-1.01,1.38-2.13,2.73-3.02,4.2-.79,1.31-.9,2.6-.66,4.09.21,1.28.41,2.4.11,3.69-.19.8-.5,1.56-.65,2.36-.33,1.79.37,3.48.91,5.15.66,2.06,1.28,4.14,1.98,6.18.36,1.05,1.24,1.36,2.35,1.27.12-.01.27-.06.32-.19.39-.84-.45-1.95-.81-2.7-.32-.67-.59-1.38-.85-2.07-.89-2.3-1.97-4.97-1.86-7.48.07-1.74.64-3.21.33-4.97-.21-1.23-.58-2.43-.24-3.67.28-1.03.96-1.91,1.62-2.71,1.08-1.3,2.15-2.55,3.1-3.96.56-.83,1.1-1.69,1.67-2.52s1.35-2.52,2.35-2.74l-.47-.36c.16,1.52-1.42,2.7-2.24,3.83-.93,1.28-1.75,2.65-2.6,3.98-1.5,2.35-3.15,4.52-3.47,7.36-.15,1.33-.14,2.72.15,4.03.33,1.49,1.06,2.88,1.64,4.28s1.16,2.94,1.66,4.44c.23.67.44,1.35.65,2.03.17.57.88,2.13.49,2.66l.59-.08c-1.42-1.54-1.75-3.59-2.28-5.53s-1.24-3.66-2.14-5.38c-.22-.43-.87-.05-.65.38h0Z"
    />
    <path
      className={styles.animatedLogo}
      d="m103.95,33.9c-.21-2.06-1.26-3.97-1.99-5.89-.39-1.03-.76-2.07-1.11-3.11-.19-.57-.41-1.14-.55-1.72-.11-.38-.17-.77-.19-1.16.12-.55.2-.63.26-.25.25.28.33,1.17.43,1.54.16.59.33,1.17.5,1.76.3,1.02.62,2.04.99,3.03.74,2.03,1.68,3.97,2.8,5.83.16.26.48.22.65,0,.63-.85,0-2.11-.3-2.98-.51-1.41-1.17-2.76-1.62-4.2s-.69-2.89-1.27-4.28c-.29-.69-.61-1.36-.83-2.07-.05-.18-.3-.63-.03-.73.12-.05.51,1.26.54,1.37.37,1.41.53,2.81,1.07,4.18.5,1.28,1.12,2.5,1.67,3.75s.73,2.82,1.43,4.01c.35.59.88,1.16,1.58.86.12-.05.18-.2.19-.32.09-1.3-.79-2.79-1.31-3.95-.8-1.78-1.27-3.54-1.77-5.42-.44-1.64-1.05-3.22-1.76-4.76-.47-1.03-1.25-2.15-.93-3.33.25-.89.94-1.56,1.51-2.24,1.3-1.57,2.16-3.46,3.11-5.25,1.39-2.61,2.87-5.03,3.87-7.84.07-.19-.08-.42-.26-.46-.81-.19-1.32.3-1.74.96-.88,1.42-1.56,3.02-2.32,4.51-1.39,2.7-2.59,6.26-5.08,8.16l.56.32c-.09-1.3,1.1-2.77,1.7-3.86.66-1.2,1.31-2.39,1.97-3.59.62-1.13,1.24-2.25,1.85-3.38.47-.85,1.19-1.75,1.23-2.75,0-.19-.18-.39-.38-.38-.64.06-.94.37-1.32.88-.75,1-1.37,2.13-2.02,3.2s-1.29,2.17-1.9,3.27c-.31.55-.61,1.1-.91,1.66-.26.49-.5,1.28-.88,1.68-.84.89-1.03.22-1.35-.65-.2-.54-.36-1.09-.51-1.65-.29-1.11-.51-2.23-.8-3.34-.5-1.9-1.24-3.7-2.62-5.14-.25-.26-.75,0-.63.36.87,2.5,1.74,5,2.6,7.51s2.19,5.1,2.34,7.68-1.62,4.91-2.95,6.97-2.65,4.16-3.82,6.34c-.51.96-1.05,1.93-1.76,2.76-.24.27-.78.97-1.15,1.06-.91.22.38-1.13.6-1.42,1.45-1.9,2.59-3.96,3.83-5.99,2.01-3.3,6.45-6.84,5.17-11.12-.82-2.74-1.89-5.44-2.95-8.09-.8-1.98-1.49-4.93-3.41-6.11-.24-.15-.57.04-.56.32.05,1.28.55,2.37,1.14,3.49.71,1.34,1.18,2.64,1.56,4.11s.9,2.65,1.54,3.95c.8,1.62,1.51,3.38.73,5.15-.66,1.49-1.71,2.85-2.58,4.22-.91,1.44-1.82,2.88-2.74,4.32-1.65,2.6-3.27,6.1-6.12,7.56l.56.32c-.07-.8.92-1.87,1.34-2.48.46-.67.91-1.34,1.37-2.01.91-1.34,1.83-2.68,2.75-4.02s1.84-2.67,2.76-4.01c.85-1.23,2.02-2.5,2.57-3.89.43-1.1-.01-2.23-.36-3.29-.46-1.4-.99-2.78-1.54-4.15-1.18-2.96-2.44-5.89-3.33-8.96-.13-.46-.86-.27-.72.2.85,2.92,2.02,5.71,3.16,8.52.55,1.37,1.09,2.75,1.57,4.14.25.73.73,1.73.67,2.51-.07.98-.74,1.76-1.28,2.53-1.76,2.53-3.5,5.07-5.24,7.61-.92,1.34-1.83,2.68-2.74,4.02-.63.92-1.82,2.08-1.71,3.26.03.29.3.46.56.32,2.66-1.36,4.2-4.38,5.73-6.81,1.04-1.64,2.08-3.29,3.13-4.93.93-1.47,2.02-2.93,2.78-4.49,1.38-2.83-.5-5.3-1.53-7.87-.58-1.45-.75-3.02-1.35-4.46-.68-1.63-1.86-3.07-1.92-4.9l-.56.32c1.2.74,1.66,2.28,2.18,3.52.62,1.46,1.21,2.92,1.77,4.4.49,1.28.96,2.57,1.41,3.87.48,1.39,1.17,2.84.8,4.33-.61,2.44-2.58,4.36-4.01,6.34-1.57,2.17-2.69,4.63-4.26,6.8-.45.62-3.12,3.11-1.5,3.73,1.39.54,3.02-2.09,3.58-3.01,1.3-2.14,2.43-4.37,3.8-6.48s3.08-4.27,3.66-6.72c.65-2.74-.78-5.57-1.66-8.1-1.05-3.03-2.1-6.07-3.16-9.1l-.63.36c1.81,1.89,2.34,4.42,2.92,6.89.26,1.14.54,2.27.99,3.36.23.55.46,1.36,1.16,1.43.57.06.97-.36,1.25-.79.69-1.05,1.19-2.29,1.81-3.39.65-1.17,1.32-2.33,2.02-3.48.37-.61.74-1.21,1.12-1.81.31-.49.93-1.83,1.57-1.9l-.38-.38c-.03.66-.59,1.38-.9,1.95-.35.63-.69,1.27-1.04,1.9-.66,1.2-1.31,2.39-1.97,3.59-.62,1.13-1.24,2.25-1.85,3.38-.48.88-1.06,1.72-.99,2.76.02.25.32.51.56.32,1.87-1.43,2.84-3.54,3.89-5.59.67-1.31,1.34-2.62,2.01-3.93.33-.65,1.69-4.26,2.65-4.04l-.26-.46c-.95,2.67-2.31,4.97-3.67,7.42-.62,1.12-1.16,2.28-1.81,3.38-.46.79-.96,1.53-1.55,2.23s-1.22,1.41-1.46,2.3c-.26.95.02,1.82.42,2.68.62,1.35,1.26,2.67,1.74,4.07.85,2.46,1.3,4.95,2.38,7.33.3.67.61,1.34.85,2.04.1.3.67,1.77-.02.61-.61-1.03-.77-2.42-1.23-3.53-.97-2.35-2.16-4.52-2.63-7.04-.11-.58-.82-4.37-2.14-3.29-.56.45-.15,1.53.02,2.06.42,1.32,1.08,2.53,1.44,3.87.39,1.47.77,2.89,1.35,4.3.37.9,1.94,3.67,1.25,4.59h.65c-1.52-2.53-2.65-5.21-3.52-8.03-.4-1.31-.73-2.64-1.13-3.95-.15-.48-.34-1.12-.97-1.07-1.79.14-.1,4.33.15,5.06.49,1.41,1.01,2.82,1.56,4.2s1.21,2.68,1.36,4.15c.05.48.8.48.75,0h0Z"
    />
    <path
      className={styles.animatedLogo}
      d="m125.86,33.7c-.38-1.97-1.03-3.86-1.7-5.75-.16-.47-1.86-5.59-1.5-5.64l-.36-.28c.59,2.55,1.33,5.06,2.27,7.5.39,1.03.81,2.07,1.28,3.07.3.64.6,1.3,1.39,1.24.18-.01.4-.16.38-.38-.27-2.34-1.23-4.69-1.89-6.95-.37-1.26-.74-2.53-1.11-3.79s-.91-2.62-.41-3.94l-.63.17c.93,1.11,1.21,3.05,1.62,4.41.46,1.51.91,3.03,1.41,4.53.62,1.85,1.27,3.66,1.86,5.51.31.97,1.61,1,1.79-.13.16-.98-.59-2.29-.91-3.18-.52-1.46-1.03-2.93-1.55-4.39-.49-1.39-.98-2.78-1.47-4.16-.24-.69-.49-1.39-.73-2.08s-.76-1.64-.81-2.39c-.09-1.52,1.29-2.87,2.1-4.04.87-1.25,1.75-2.5,2.63-3.74,1.69-2.39,3.56-4.7,5.16-7.16.89-1.37-.08-2.55-1.55-1.73-2.06,1.15-2.92,3.58-3.93,5.56-.69,1.36-1.48,2.66-2.28,3.96s-1.62,2.82-3.11,3.56l.51.51c2.45-4.36,4.9-8.73,7.36-13.09.11-.19.02-.51-.22-.55-.74-.12-1.12.22-1.55.81-.84,1.16-1.54,2.46-2.31,3.68-1.54,2.45-3.07,4.9-4.61,7.36h.65c-1.16-1.99-1.85-4.16-2.54-6.34-.3-.97-.61-1.94-.96-2.9-.23-.6-.43-1.51-1-1.91-1.16-.79-1.26.66-1.07,1.4.51,1.98,1.45,3.85,2.28,5.7.98,2.18,1.94,4.45,2.17,6.86s-.52,4.59-1.7,6.7c-1.08,1.93-2.28,3.79-3.54,5.61-.61.88-1.24,1.75-1.9,2.6-.51.67-1.97,3.23-3.06,2.92l.22.55c1.68-2.77,3.32-5.59,5.09-8.3.86-1.33,1.81-2.59,2.72-3.88.77-1.09,1.72-2.3,2-3.63.25-1.16-.15-2.4-.44-3.52-.41-1.56-.87-3.1-1.4-4.63-1.04-3.01-2.32-5.92-3.8-8.74-.1-.19-.34-.21-.51-.13-.77.34-.5,1.24-.3,1.87.51,1.64,1.11,3.26,1.73,4.86.55,1.42,1.13,2.82,1.75,4.21.78,1.75,2.31,3.82,1.33,5.73-.64,1.26-1.74,2.29-2.53,3.47-.9,1.34-1.66,2.77-2.42,4.19s-1.53,2.86-2.42,4.21c-.8,1.22-2.25,3.94-3.95,3.89l.27.64c1.98-2.18,3.41-4.73,4.88-7.27,1.6-2.76,3.57-5.16,5.41-7.75.65-.91,1.25-1.75.98-2.9-.38-1.59-1.23-3.17-1.82-4.7-1.28-3.33-2.49-6.68-3.63-10.06-.15-.45-.88-.26-.72.2,1.02,2.99,2.08,5.97,3.2,8.93.55,1.44,1.1,2.88,1.67,4.31.37.92.89,1.86.37,2.82-.33.62-.8,1.2-1.23,1.77-1.69,2.24-3.35,4.4-4.76,6.83s-2.88,5.12-4.87,7.3c-.22.24-.07.63.27.64,1.29.04,2.08-.91,2.83-1.85.99-1.24,1.89-2.55,2.69-3.92,1.76-3.01,3.19-6.11,5.38-8.85.69-.87,1.41-1.81,1.52-2.94.16-1.55-.9-3.07-1.51-4.42-.39-.86-4.57-10.18-3.73-10.55l-.51-.13c1.41,2.69,2.64,5.47,3.65,8.34.48,1.38.92,2.77,1.3,4.18.44,1.62,1.03,3.26.21,4.85-1.25,2.44-3.16,4.55-4.63,6.86-1.62,2.54-3.15,5.14-4.71,7.71-.13.21,0,.48.22.55,1.54.45,2.5-1.46,3.29-2.46,1.25-1.59,2.43-3.24,3.55-4.93,2.27-3.44,4.76-7.08,4.29-11.38s-2.98-7.87-4.26-11.89c-.11-.34-.69-1.9.12-.55.28.47.43,1.11.61,1.63.33.96.62,1.94.93,2.91.62,1.97,1.31,3.9,2.35,5.69.15.25.5.24.65,0,1.2-1.91,2.39-3.81,3.59-5.72.6-.95,1.2-1.91,1.79-2.86.34-.54,1.49-3.05,2.24-2.92l-.22-.55c-2.45,4.36-4.9,8.73-7.36,13.09-.19.34.18.68.51.51,1.73-.85,2.65-2.64,3.62-4.22,1.18-1.92,2.14-3.91,3.19-5.89.47-.89,1.01-1.77,1.77-2.44.33-.29,1.54-1.07,1.27.17-.11.5-.93,1.26-1.23,1.68-1.51,2.07-3,4.16-4.48,6.26-.69.98-1.38,1.97-2.07,2.96s-1.66,2.03-2.09,3.17c-.26.7-.14,1.34.08,2.03.42,1.31.91,2.6,1.37,3.89.87,2.47,1.74,4.93,2.61,7.4.36,1.02,1.1,2.33,1.19,3.4.03.28.02,1.01-.22.67-.16-.22-.18-.72-.25-.98-.58-2.23-1.58-4.36-2.26-6.56-.42-1.36-.82-2.73-1.25-4.09-.34-1.1-.58-2.26-1.33-3.16-.2-.24-.54-.07-.63.17-.79,2.1.52,4.7,1.11,6.71.37,1.26.74,2.53,1.11,3.79.42,1.42,1,2.9,1.17,4.38l.38-.38c-.67.05-1.46-2.52-1.61-2.9-.37-.93-.72-1.87-1.04-2.81-.62-1.82-1.13-3.67-1.56-5.55-.03-.14-.21-.3-.36-.28-1.79.23-.25,3.53.06,4.48.84,2.61,1.89,5.15,2.42,7.86.09.47.82.27.72-.2h0Z"
    />
    <path
      className={styles.animatedLogo}
      d="m11.12,12.81l-.28.07.29.69c1.78-1.35,3.96-3.32,3.19-5.83-.32-1.03-1.1-1.85-2.01-2.4-.79-.48-2.1-1.14-3.05-.92-1.07.26-1.01,1.65-1.15,2.52-.29,1.72-.59,3.43-.87,5.16-.1.64-.48,1.85.13,2.34.32.26.8.13,1.17.1.94-.08,1.88-.2,2.82-.3l-.27-.64c-1.09.96-2.78.63-4.08,1.16-.23.09-.41.43-.17.63,1.25,1.01,2.68.35,4.11.76v-.72c-1.26.23-2.49.52-3.71.9-.43.13-.3.68.1.74,1.17.15,5.02.06,5.05,1.71l.47-.36c-1.03-.4-2.06-.78-3.11-1.11-.73-.23-1.74-.72-2.53-.62-1.35.18-1.21,2.28-1.29,3.28-.09,1.19-.14,2.39-.38,3.57-.22,1.08-.58,2.13-.8,3.22s-.76,2.97.61,3.34c1.49.4,3.5-.1,4.86-.71,1.52-.68,2.82-1.8,3.65-3.25s1.18-3.04,1.01-4.64c-.19-1.85-1.28-3.27-1.98-4.93-.53-1.26-.63-2.5.08-3.71.5-.84,1.22-1.54,1.76-2.36.65-1.01,1.64-2.96.84-4.12-.87-1.26-2.97-2.04-4.37-2.47-.92-.28-2.89-1-3.52.13-.42.75-.42,1.94-.57,2.78-.22,1.23-.44,2.46-.66,3.69-.43,2.38-.85,4.75-1.28,7.13-.38,2.14-.72,4.24-.89,6.41-.09,1.14-.32,2.21-.73,3.28-.36.93-1.04,1.84-1.26,2.81-.82,3.6,6.27.91,7.54.33,1.57-.72,3.52-1.57,4.6-2.98s1.66-3.33,1.75-5.01c.1-1.86-.73-3.22-1.72-4.71-.55-.83-1.15-1.74-1.12-2.78.03-1.28.79-2.37,1.51-3.37,1-1.39,2.16-2.93,1.88-4.74-.16-1.01-.8-2.33-1.67-2.94-.59-.41-1.68-.52-2.37-.68-1.05-.24-2.12-.44-3.19-.59-1.01-.14-3.08-.86-3.39.59-.17.81-.01,1.79-.11,2.63-.14,1.26-.35,2.52-.53,3.78-.33,2.29-.65,4.59-1.14,6.85-.43,2.03-.85,4.01-1.03,6.08-.2,2.36-.81,4.4-1.69,6.59-.35.87-1.5,2.87-.17,3.48.66.3,1.69.14,2.39.13.96-.02,1.92-.09,2.87-.24,3.59-.55,7.01-2.2,9.18-5.19,1.74-2.39,2.97-6.36,1.03-8.98-.47-.63-1.1-1.09-1.63-1.66s-1.08-1.29-.9-2.12c.12-.56.62-1.05.95-1.49,1.08-1.44,2.09-3.04,2.32-4.87.18-1.4-.09-2.91-1-4.03-1.12-1.39-3.04-1.96-4.72-2.28-2.07-.39-4.17-.48-6.2-1.09l.09.69c1.73-.93,3.9-.1,5.73.1,2.1.23,4.21.49,5.42,2.46,1.93,3.13.56,9-2.66,10.87-.23.14-.25.52,0,.65,4.96,2.56,4.38,9,1.26,12.75-1.65,1.99-3.93,3.68-6.48,4.26-2.81.65-5.91.49-8.78.61l.38.38c.05-2.8,1.11-5.38,1.72-8.08.27-1.2.36-2.39.47-3.6.14-1.54.52-3.01.81-4.52,1-5.31,2.15-11.06,1.53-16.47-.05-.47-.81-.48-.75,0,.35,3.01.08,6.02-.36,9.01-.39,2.73-.76,5.48-1.33,8.18s-.6,5.28-1.25,7.85S.04,30.92,0,33.56c0,.2.17.38.38.38,3.31-.14,7.08.16,10.23-1.02,2.53-.95,4.8-2.88,6.33-5.1,2.82-4.08,2.67-10.41-2.19-12.91v.65c1.83-1.06,2.77-2.95,3.35-4.92.67-2.28.87-4.87-.42-6.98-1.17-1.91-3.13-2.5-5.24-2.74s-4.88-1.19-6.94-.09c-.29.16-.21.6.09.69,3.16.95,7.43.37,10.07,2.63,3,2.57.5,6.6-1.29,9.01-.66.89-.92,1.77-.45,2.82.6,1.32,2.03,1.95,2.71,3.21,1.59,2.92-.26,6.83-2.36,8.95-2.35,2.38-5.62,3.51-8.89,3.79-.8.07-1.77.21-2.56.07-.47-.09-.99.23-1.16-.7-.05-.28.3-.88.4-1.13.64-1.65,1.38-3.26,1.73-5,.33-1.65.32-3.34.59-4.99s.7-3.25,1.01-4.88c.64-3.38,1.29-6.9,1.5-10.34.02-.36-.1-1.01.01-1.34.17-.52.35-.4.79-.46.94-.12,2.14.24,3.06.41,1.3.23,3.22.35,4.19,1.25,3.16,2.92-1.02,5.96-2.02,8.65-1.13,3.05,1.71,4.7,2.41,7.36.46,1.72-.12,3.65-.88,5.2-.84,1.72-2.52,2.55-4.15,3.38s-3.38,1.48-5.2,1.69c-.31.04-1.02.19-1.31.07-1.13-.47-.67-1.09-.39-1.66.39-.79.78-1.58,1.07-2.41.52-1.48.56-2.94.69-4.48.16-1.86.58-3.71.91-5.54.67-3.77,1.35-7.54,2.02-11.3.14-.79.07-1.48.96-1.57.83-.09,2.03.4,2.79.69s1.5.68,2.18,1.13c.78.52,1.14.68,1.02,1.87-.05.49-.3,1.04-.51,1.48-.71,1.44-2.12,2.48-2.62,4.03-.47,1.46.04,2.92.7,4.22.82,1.61,1.67,3.08,1.58,4.95s-1,3.73-2.44,4.96c-1.34,1.14-3.69,2.21-5.5,1.86-1.39-.26-.95-1.62-.72-2.69.19-.87.46-1.71.66-2.57s.32-1.7.39-2.57c.08-1.02-.05-2.4.32-3.36l.09-.45c.4-.3.8-.35,1.22-.15.45.06.93.27,1.36.41,1.05.33,2.09.71,3.11,1.11.23.09.48-.14.47-.36-.05-2.5-4.12-2.24-5.8-2.46l.1.74c1.22-.37,2.45-.67,3.71-.9.38-.07.33-.63,0-.72-1.18-.34-2.77.25-3.78-.56l-.17.63c1.47-.6,3.15-.24,4.41-1.35.23-.2.06-.67-.27-.64-.93.1-1.88.26-2.82.3-.62.02-.66.14-.71-.46-.04-.47.14-1.05.22-1.51.3-1.8.6-3.59.91-5.39.11-.63.35-1.12,1.1-1.23.35-.05,1.05.34,1.37.49.94.45,1.85,1.19,2.17,2.23.67,2.14-1.34,3.85-2.84,4.99-.32.24-.15.79.29.69l.28-.07c.47-.11.27-.84-.2-.72h0Z"
    />
  </svg>
         
     
        
  );
};

export default AnimatedLogo;
