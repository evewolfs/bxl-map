// components/AnimatedLine.js
import React from "react";
import styles from "../../styles/Home.module.css";

const AnimatedLogo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 129.086 33.74"
      className={styles.animatedLogo}
      style={{
        height: "auto",
        paddingTop:"4%",
        display: "block", // Make it a block element
        padding: "1%",
      }} // Set the width and height
    >
      <path
        className={styles.animatedLogo}
        d="M1 1.675a548.82 548.82 0 01.133 30.062c-.003.123-.005.251.049.361.159.326.628.273.983.201 1.692-.344 3.445.026 5.169-.073 3.948-.226 7.591-3.181 8.625-6.998s-.618-8.207-3.912-10.395c1.269-1.772 2.007-3.96 1.851-6.134s-1.258-4.305-3.066-5.521C9.511 2.29 7.907 1.92 6.323 1.763a19.523 19.523 0 00-2.778-.077c-.256.011-.543.042-.706.24-.135.164-.145.394-.148.606L2.45 19.283c-.054 3.788-.108 7.594.43 11.343 2.345-.396 4.857.598 7.081-.245 2.12-.803 3.327-3.047 3.955-5.225.748-2.592.784-5.763-1.216-7.573-.513-.465-1.129-.806-1.641-1.272s-.93-1.119-.859-1.808c.079-.762.709-1.326 1.169-1.939 1.389-1.85 1.249-4.615-.129-6.474S7.433 3.294 5.127 3.481c-.332.027-.719.115-.853.42.686.533 1.638.487 2.491.653 2.112.411 3.8 2.417 3.845 4.569s-1.559 4.225-3.652 4.724c-.976.233-2.288.384-2.465 1.372-.124.696.507 1.326 1.182 1.537s1.402.14 2.103.23c1.52.195 2.885 1.17 3.712 2.461s1.143 2.868 1.057 4.398c-.047.842-.218 1.694-.642 2.423-.98 1.687-3.08 2.367-5.024 2.53-.252.021-.517.033-.744-.077-.445-.217-.556-.789-.613-1.281-.633-5.517-1.267-11.047-1.317-16.601-.017-1.889.034-3.786.346-5.649M23.249 32.106c-1.042-3.677-.172-7.587-.133-11.409.016-1.589-.113-3.175-.194-4.761-.231-4.567-.058-9.144.116-13.714.006-.147.014-.302.095-.425.151-.23.477-.246.752-.238 3.552.104 7.352.29 10.204 2.41 2.687 1.998 4.042 5.634 3.317 8.903-.554 2.498-2.183 4.639-4.079 6.357a194.468 194.468 0 006.054 13.139c-1.372-.043-2.745-.06-4.118-.051a144.812 144.812 0 01-3.976-10.388c-.15-.441-.348-.938-.787-1.095-.231-.083-.485-.052-.728-.02l-2.473.324c-.343 3.671-.685 7.376-.249 11.037a8.027 8.027 0 01-3.06-.268l.138-15.528c.041-4.576.08-9.173-.567-13.703.813-.188 1.659.024 2.467.236l3.579.938c.897.235 1.8.472 2.631.884 2.346 1.161 3.891 3.734 3.915 6.351s-1.427 5.176-3.631 6.588c-.254.163-.531.327-.662.599-.186.388-.01.844.167 1.236a208.547 208.547 0 004.767 9.878c.203.394.318 1.025-.106 1.152-.342.102-.617-.279-.771-.601l-4.404-9.223c-.277-.58-.605-1.21-1.203-1.447-.641-.254-1.351.033-2.013.226s-1.503.236-1.91-.321c-.201-.274-.24-.631-.272-.969a128.466 128.466 0 01-.564-12.092c0-.211.003-.432.106-.615.164-.294.526-.405.858-.459 2.194-.354 4.495.797 5.727 2.646s1.437 4.283.763 6.4c-.196.617-.471 1.225-.921 1.69-1.185 1.228-3.146 1.129-4.842.94M45.31 2.451a17.068 17.068 0 00-.85 6.367c.061 1.065.222 2.128.184 3.194-.04 1.12-.299 2.221-.384 3.339-.189 2.489.49 4.972.414 7.467-.047 1.535-.374 3.111.071 4.581.547 1.804 2.149 3.076 3.775 4.029 1.006.59 2.087 1.114 3.249 1.216 2.04.18 4.033-1.017 5.218-2.687s1.668-3.745 1.832-5.787c.076-.939.09-1.882.104-2.824l.071-4.794.224-15.048a18.646 18.646 0 01-3.665-.188c.285 1.701-.031 3.435-.167 5.154-.493 6.233 1.389 12.55.317 18.709-.184 1.057-.468 2.129-1.109 2.989s-1.709 1.47-2.77 1.308c-.904-.138-1.648-.798-2.178-1.543-1.86-2.615-1.561-6.126-1.359-9.329a87.324 87.324 0 00-.501-16.333c-.419-.483-1.265-.319-1.682.165s-.517 1.159-.58 1.796c-.695 7.096 1.116 14.188 1.301 21.316.038 1.469.064 3.093 1.061 4.173.64.693 1.574 1.027 2.487 1.264 1.411.365 2.991.534 4.257-.188 1.618-.923 2.181-2.956 2.456-4.798.546-3.652.544-7.36.541-11.053l-.006-6.821c-.001-1.792-.003-3.588-.188-5.371l.159.791M83.013 1.489a131.053 131.053 0 00-6.726 13.765c-.172.412-.345.835-.37 1.281-.05.895.491 1.702.993 2.444a58.608 58.608 0 016.65 13.178l-2.932-.127c-.276-.012-.569-.03-.794-.189-.178-.126-.289-.325-.393-.517a206.454 206.454 0 01-5.425-10.691c-1.461.784-2.036 2.539-2.599 4.099a35.038 35.038 0 01-3.405 6.933c-.124.195-.259.397-.463.506-.258.137-.571.097-.861.054l-2.493-.377a97.986 97.986 0 007.479-15.299c.127-.33.255-.674.237-1.027-.022-.438-.261-.83-.49-1.203a95.206 95.206 0 01-6.79-13.255 14.828 14.828 0 013.152.045c.169.021.344.047.482.146.201.144.274.405.336.644a29.744 29.744 0 004.965 10.308l4.327-8.31c.34-.653.699-1.329 1.289-1.77s1.482-.571 2.043-.095a71.514 71.514 0 00-6.183 10.294c-.682 1.387-1.334 2.914-1.038 4.431.21 1.075.871 1.997 1.486 2.903 2.186 3.222 2.476 3.636 3.834 7.286-2.555-2.949-2.399-3.661-4.492-6.955-.27-.425-.698-.899-1.18-.755-.267.08-.441.33-.59.565-2.056 3.249-3.397 6.92-5.563 10.097-.214.314-.538.662-.904.56l6.635-14.257M104.489 2.136l-6.032 12.447c-.281.58-.568 1.181-.592 1.825-.036.949.496 1.815.994 2.623a77.702 77.702 0 016.622 13.535 9.33 9.33 0 01-2.58.041c-.205-.025-.419-.062-.581-.189-.135-.106-.218-.262-.298-.413l-5.824-11.066c-1.485 1.565-2.319 3.621-3.121 5.625l-2.106 5.265c-.091.228-.195.471-.404.599-.185.113-.414.112-.63.103a15.09 15.09 0 01-3.665-.605 158.802 158.802 0 016.912-14.145c.268-.485.545-.995.55-1.549.005-.535-.244-1.035-.487-1.511L86.396 1.313l3.598-.083 5.051 10.587c.107.225.266.483.515.48.247-.003.4-.263.503-.488l3.546-7.789c.349-.766.732-1.573 1.436-2.032s1.83-.376 2.198.381a73.066 73.066 0 01-4.724 9.542c-.741 1.258-1.548 2.604-1.438 4.06.066.877.464 1.69.854 2.478l5.765 11.639c.125.252.248.563.095.8-.165.255-.569.242-.807.052s-.351-.49-.456-.775a64.055 64.055 0 00-5.246-10.938c-.22-.365-.562-.78-.975-.679-.305.075-.467.399-.592.687a122.567 122.567 0 01-5.147 10.547c-.332.605-.932 1.308-1.567 1.037.429-1.27.199-2.682.58-3.968.335-1.131 1.11-2.068 1.797-3.026 1.45-2.024 2.566-4.264 3.676-6.493.119-.24.242-.494.228-.762-.012-.237-.13-.455-.245-.663-1.911-3.464-3.692-7-5.34-10.597-.228-.497-.442-1.12-.107-1.552 2.504 3.683 3.578 8.355 6.801 11.428M126.911 1.996l-3.181.367c-.197.023-.403.049-.565.163-.162.115-.256.301-.343.479l-4.87 9.989c-2.498-2.906-3.759-6.638-5.368-10.116-.094-.203-.196-.415-.378-.545-.244-.175-.57-.165-.87-.147l-2.935.172a545.832 545.832 0 016.186 12.858c.159.343.322.7.316 1.078-.005.338-.143.658-.279.967l-6.715 15.27c1.435.206 2.892.26 4.338.162l4.617-12.901a55.887 55.887 0 016.545 11.952l3.996-.051-6.32-11.472c-.595-1.081-1.209-2.238-1.134-3.47.048-.791.379-1.534.705-2.257l4.662-10.349-.367-.065c-2.847 2.871-3.373 7.515-6.365 10.236-.164.149-.346.297-.565.331-.485.075-.851-.412-1.097-.836l-5.279-9.13c-.257 1.73.911 3.302 1.866 4.767a24.655 24.655 0 012.979 6.434c.145.489.277.994.236 1.502-.073.904-.667 1.666-1.208 2.394a32.752 32.752 0 00-5.27 10.777c1.986-1.398 2.856-3.853 3.926-6.034a26.575 26.575 0 013.246-5.07c.116-.142.244-.291.42-.342.404-.117.737.318.934.69l5.625 10.636"
      ></path>
    </svg>
  );
};

export default AnimatedLogo;