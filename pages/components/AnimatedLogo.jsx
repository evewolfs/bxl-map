// components/AnimatedLine.js
import React from "react";
import styles from "../../styles/Home.module.css";

const AnimatedLogo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="logo"
      viewBox="0 0 304.06 38.454"
      style={{
        width: "40vw",
        height: "auto",
        paddingTop:"4%",
        display: "block", // Make it a block element
        padding: "1%",
      }} // Set the width and height
    >
     
        <path
        className={styles.animatedLogo}
        d="M38.422 16.912c-.056.681.043 1.37-.052 2.046-.081.575-.446 1.229-1.026 1.207-.315-.375-.318-.912-.306-1.401l.118-4.63c.003-.131.007-.265.053-.388.116-.308.474-.464.803-.465s.645.118.963.201c.522.136 1.064.176 1.602.208 2.825.171 5.662.151 8.484-.058.202-.015.411-.03.602.038s.36.242.354.444a.714.714 0 01-.077.261c-2.227 5.07-5.539 9.571-8.513 14.242-.543.853-1.083 1.731-1.333 2.712 2.164-.432 4.408.059 6.607-.139.471-.042.965-.128 1.325-.434.592-.503.614-1.389.633-2.165.015-.61.056-1.219.125-1.825.037-.326.087-.666.279-.932s.572-.426.86-.267c.323.177.36.618.359.986-.01 1.907-.021 3.822-.313 5.707-.032.209-.084.443-.264.555-.108.068-.241.076-.368.083-3.067.169-6.142.339-9.208.151-.502-.031-1.005-.071-1.507-.04-.727.045-1.445.238-2.173.21-.152-.006-.309-.023-.438-.102-.318-.194-.331-.653-.234-1.013.233-.865.851-1.562 1.412-2.259 3.576-4.441 5.46-10.049 9.009-14.512-1.184-.417-2.475.039-3.727.121-.989.065-2.028-.227-3.004-.1-.777.101-.988.833-1.047 1.558zM62.537 18.022c-.411.794-1.525 1.215-2.264.712-.527-.358-.731-1.064-.642-1.695s.425-1.198.794-1.717c.318-.447.672-.877 1.113-1.202.542-.4 1.194-.624 1.848-.786 1.249-.31 2.566-.41 3.826-.148s2.461.905 3.273 1.903c.734.902 1.121 2.047 1.289 3.198s.133 2.321.107 3.484c-.06 2.693-.064 5.387-.013 8.08.011.557.033 1.146.336 1.613s.991.731 1.434.393c.414-.317.564-1.067 1.084-1.034.265.016.468.278.486.543s-.114.52-.288.721c-.486.562-1.26.761-1.983.931-.453.107-.917.214-1.38.166-1.222-.126-2.104-1.318-2.326-2.526-.018-.097-.038-.205-.117-.265-.135-.103-.325.004-.455.112-.465.385-.895.815-1.381 1.174-1.004.741-2.207 1.152-3.389 1.552-.432.146-.872.294-1.328.296-.412.002-.814-.115-1.206-.238-.574-.181-1.149-.381-1.657-.703a3.977 3.977 0 01-1.813-3.195c-.015-.556.089-1.109.214-1.651.22-.955.518-1.917 1.108-2.7.683-.907 1.713-1.506 2.792-1.862s2.216-.49 3.344-.622l2.412-.282c.158-.018.327-.042.444-.15.124-.116.156-.298.178-.466.23-1.759.189-3.553-.121-5.3-.087-.489-.212-1.006-.575-1.344-.317-.294-.763-.401-1.192-.453a6.439 6.439 0 00-3.51.573c-.751.358-.509.48-.316 1.178.156.563.15 1.184-.123 1.711z"
      ></path>
      <path
        className={styles.animatedLogo}
        d="M68.456 28.743a8.165 8.165 0 01-3.602 2.144c-.688.195-1.455.291-2.095-.028-.718-.358-1.113-1.169-1.213-1.965-.211-1.684.737-3.393 2.155-4.326 1.033-.68 3.533-1.662 4.559-.492.41.467.454 1.184.487 1.772.047.832.335 2.251-.292 2.894z"
      ></path>
      <path
        className={styles.animatedLogo}
        d="M60.982 16.706a.499.499 0 01.465.406c.062.361-.351.698-.703.595s-.529-.563-.369-.893.591-.482.938-.364.588.47.618.835c.048.589-.528 1.176-1.106 1.051-.529-.114-.83-.732-.754-1.268s.433-.989.823-1.364c1.7-1.636 4.347-2.241 6.56-1.425s3.85 3.052 3.875 5.411c.01.945-.216 1.875-.39 2.804a25.475 25.475 0 00-.414 5.656c.041 1.07.173 2.199.821 3.052.123.162.265.316.329.509s.017.442-.163.535c-.269.138-.556-.151-.708-.413-1.291-2.222-1.353-4.934-1.21-7.5s.452-5.187-.211-7.67c-.206.326-.278.718-.321 1.102-.256 2.249.292 4.505.388 6.767s-.396 4.77-2.19 6.151c-1.186.913-2.734 1.175-4.216 1.386-.951.136-2 .241-2.798-.294-.667-.447-1.009-1.279-1.012-2.082s.293-1.581.684-2.283c1.637-2.946 5.112-4.761 8.465-4.42-1.167.505-2.541.41-3.67.995-.581.3-1.059.762-1.529 1.217-.629.61-1.258 1.22-1.836 1.879-.389.444-.765.932-.883 1.51-.179.872.301 1.798 1.042 2.292s1.691.6 2.569.448 1.696-.54 2.475-.971c.669-.37 1.318-.774 1.945-1.212M37.713 19.055c-.066-1.166.04-2.341.313-3.476.067-.277.149-.563.338-.776.372-.418 1.012-.423 1.571-.396l7.948.385c-2.081 2.975-3.953 6.089-5.824 9.2-1.626 2.705-2.35 4.26-3.977 6.964 2.819-2.554 3.554-4.966 5.409-8.286 1.126-2.014 2.354-3.97 3.582-5.924.427-.679.9-1.399 1.643-1.702l-1.994 3.825c-.404.775-.809 1.552-1.28 2.289-.414.649-.878 1.265-1.332 1.887a56.893 56.893 0 00-2.036 2.962 44.44 44.44 0 00-3.023 5.58.292.292 0 00-.037.149c.013.11.14.164.248.189.853.202 1.743.029 2.618-.023 2.099-.123 4.217.462 6.292.126.15-.024.31-.059.414-.17.082-.088.116-.21.146-.326.429-1.681.663-3.412.695-5.147M86.754 1.233c.267-.006.553-.006.775.141.364.241.399.752.396 1.188l-.103 19.747c-.015 2.937-.03 5.885.363 8.796l2.001.15c.356.027.724.057 1.037.229s.554.529.476.877c-.076.342-.431.561-.779.605s-.696-.046-1.041-.11c-2.315-.429-4.665.325-7.011.529-.806.07-1.828-.062-2.086-.829-.234-.695.419-1.434 1.139-1.574s1.45.133 2.132.402l.463-5.625c.113-1.368.225-2.737.274-4.109.052-1.452.033-2.905.014-4.358L84.63 4.088c-.004-.303-.032-.653-.28-.826-.157-.11-.362-.116-.553-.119l-1.753-.021c-.498-.006-1.19-.251-1.053-.729.103-.358.588-.398.96-.366l4.59.402c.099.009.204.019.286.074.147.098.177.299.191.475.175 2.122.143 4.254.111 6.383-.054 3.62-.108 7.242-.289 10.858-.097 1.932-.23 3.864-.245 5.798a47.23 47.23 0 00.253 5.251c.012.12.03.25.117.334.08.077.198.095.309.11l2.736.353c-.559.39-1.288.405-1.97.405h-5.405c.429-.832 1.835-.16 2.594-.708.461-.333.511-.988.519-1.556l.076-5.471c.022-1.598.044-3.196.165-4.79.106-1.394.287-2.786.257-4.184-.028-1.273-.23-2.536-.335-3.805-.212-2.568.257-5.603-.642-8.059-.24-.654-1.847-1.666-1.763-2.288.085-.626 2.667-.36 3.246-.372zM112.532 14.467c-2.13-1.483-5.005-1.76-7.439-.86s-4.4 2.907-5.405 5.3-1.077 5.134-.364 7.63c.943 3.3 3.464 6.304 6.812 7.058 2.051.462 4.286.033 6.02-1.155s2.941-3.118 3.251-5.197c-.334-.125-.719.032-.973.282s-.412.579-.586.89c-.904 1.609-2.465 2.889-4.277 3.238s-3.84-.333-4.906-1.84c-.353-.498-.596-1.066-.799-1.642a14.222 14.222 0 01-.749-5.989c.018-.195.044-.402.17-.551.152-.182.408-.231.644-.26 1.244-.152 2.503-.049 3.754.007 1.584.071 3.172.067 4.756-.012.966-.048 2.477.088 2.988-.958.955-1.953-1.442-4.929-2.896-5.942z"
      ></path>
      <path
        className={styles.animatedLogo}
        d="M111.445 16.565c-.324-.98-1.27-1.673-2.281-1.881s-2.071.012-3.02.417c-.479.205-.944.459-1.325.814-1.001.929-1.291 2.377-1.517 3.724.033-.199 3.829-.164 4.213-.167 1.336-.009 2.873.268 4.171.066-.112-.966.068-2.041-.241-2.974z"
      ></path>
      <path
        className={styles.animatedLogo}
        d="M114.152 28.477a18.838 18.838 0 01-2.29 3.117c-.448.494-.932.972-1.527 1.272-.709.358-1.531.438-2.322.376-2.257-.177-4.357-1.494-5.663-3.343s-1.845-4.185-1.684-6.443.993-4.439 2.205-6.351c.616-.971 1.358-1.904 2.364-2.459.946-.522 2.069-.671 3.143-.554 2.693.294 5.111 2.341 5.845 4.949.061.216.111.449.044.663-.156.502-.804.613-1.329.635l-9.919.416c-.199.008-.405.018-.583.106-.234.115-.388.347-.506.58-.499.976-.582 2.117-.484 3.209.211 2.362 1.266 4.665 3.019 6.262.869.792 1.915 1.413 3.063 1.665s2.402.113 3.405-.5"
      ></path>
      <path
        className={styles.animatedLogo}
        d="M112.797 19.505c.382-1.323-.389-2.686-1.21-3.791-.579-.779-1.239-1.556-2.139-1.919-.612-.247-1.291-.281-1.95-.231-1.976.149-3.885 1.05-5.256 2.481s-2.19 3.377-2.254 5.357c-.028.856.08 1.709.153 2.562.109 1.27.145 2.56.504 3.783s1.097 2.402 2.244 2.957c.209-.63.087-1.315-.025-1.969a59.607 59.607 0 01-.581-4.292 38.598 38.598 0 01-.142-1.829c-.013-.255-.016-.533.139-.735.054-.071.131-.15.102-.235s-.198.007-.118.047M128.882 17.607c-.218.792-.968 1.421-1.788 1.447s-1.63-.59-1.776-1.398a2.165 2.165 0 01.079-.997c.45-1.515 1.946-2.459 3.407-3.061.547-.225 1.107-.423 1.687-.535 1.48-.287 3.065.011 4.34.815s2.226 2.108 2.604 3.567c.184.71.236 1.447.264 2.18.141 3.604-.258 7.221.039 10.815.04.478.162 1.051.615 1.21.434.153.873-.18 1.23-.471s.855-.573 1.247-.331c.32.199.369.675.195 1.01s-.506.555-.836.736c-.891.488-1.909.808-2.918.687s-1.992-.748-2.342-1.701c-.098-.266-.206-.605-.487-.637-.199-.023-.369.132-.513.272-1.189 1.146-2.719 1.968-4.358 2.174s-3.378-.241-4.623-1.327c-.481-.42-.891-.94-1.098-1.544-.468-1.371.175-2.858.891-4.118.325-.571.674-1.139 1.146-1.597.445-.432.987-.753 1.552-1.008 2.14-.966 4.567-.999 6.914-1.016.371-1.014.048-2.13-.048-3.206-.087-.979.019-1.975-.169-2.939s-.768-1.945-1.714-2.213c-.559-.158-1.157-.045-1.717.108-.425.116-2.165.486-2.29.953-.058.218.369.714.441.955.113.379.13.788.024 1.171z"
      ></path>
      <path
        className={styles.animatedLogo}
        d="M127.222 16.927c.372-.019.533.575.244.811s-.764.087-.961-.229-.17-.728-.048-1.08c.258-.746.892-1.315 1.6-1.666s1.491-.514 2.264-.673c.364-.075.73-.15 1.1-.17 1.725-.096 3.353 1.038 4.229 2.527s1.106 3.274 1.086 5.001-.272 3.446-.28 5.173c-.006 1.304.128 2.604.265 3.901.063.597.186 1.286.713 1.575.307.168.778.253.785.604a2.743 2.743 0 01-1.886-.814c-.73-.746-.969-1.85-.967-2.894s.212-2.077.235-3.12c.032-1.418-.282-2.825-.293-4.243-.011-1.4.265-2.848-.196-4.17-.194.693-.175 1.425-.163 2.144.048 2.799-.024 5.6-.215 8.394-.047.684-.111 1.4-.484 1.975-.273.421-.687.727-1.101 1.009-.952.647-1.983 1.224-3.116 1.428a5.234 5.234 0 01-4.235-1.128c-.348-.293-.665-.644-.816-1.073-.136-.385-.13-.807-.066-1.21.182-1.145.811-2.179 1.581-3.045.324-.365.679-.708 1.093-.967.468-.292.998-.467 1.522-.639 1.559-.512 3.205-1.03 4.813-.706-.566.402-1.332.271-2.026.269-1.329-.004-2.651.56-3.568 1.522s-1.416 2.31-1.348 3.637c.022.431.105.868.327 1.238.479.8 1.523 1.114 2.448.993s1.761-.594 2.566-1.064c.714-.417 1.451-.863 1.9-1.557M160.359 2.909c-.391.031-.867.02-1.068-.317-.203-.34.048-.803.406-.973s.774-.132 1.169-.101c1.703.133 3.42.072 5.109-.181.432 1.157.46 2.421.474 3.656.052 4.463-.003 8.928-.166 13.388 1.846-1.399 2.148-4.35 4.203-5.418 1.007-.523 2.209-.455 3.336-.317.952.116 1.925.282 2.748.774 1.094.653 1.796 1.812 2.232 3.01.548 1.504.738 3.114.844 4.712.225 3.389.09 6.79-.045 10.184a6.542 6.542 0 012.669.087c.437.107.955.396.892.842-.077.539-.839.564-1.373.462a22.274 22.274 0 00-7.989-.068c-.389.068-.8.144-1.168 0s-.639-.605-.435-.943c.085-.14.232-.231.383-.297.892-.389 1.913-.049 2.885-.009.147.006.312-.002.416-.106.095-.096.109-.244.117-.379.117-1.889.235-3.784.093-5.671-.079-1.053-.238-2.099-.271-3.154-.061-1.96.309-3.981-.29-5.848-.08-.25-.18-.5-.351-.7-.299-.348-.771-.495-1.226-.553-2.032-.259-4.035.976-5.206 2.656s-1.649 3.742-1.963 5.766c-.397 2.559-.571 5.182-.124 7.733 1.267-.188 2.832-.251 3.53.823.076.117.14.254.122.392-.041.331-.464.436-.797.45-2.934.125-5.914-.627-8.784-.005-.49.106-1.074.227-1.433-.123-.401-.391-.171-1.133.31-1.42s1.086-.239 1.636-.134c.411.078.859.179 1.228-.019.523-.28.6-.986.612-1.579l.072-3.604c.074-3.701.148-7.406-.046-11.102-.084-1.594-.217-3.185-.285-4.78a57.899 57.899 0 01.026-5.496c.03-.58.215-1.31-.391-1.645-.552-.305-1.511-.04-2.1.006z"
      ></path>
      <path
        className={styles.animatedLogo}
        d="M160.348 2.247l2.787.216c1.614 6.661.42 13.656.888 20.494.091 1.326.244 2.652.19 3.981a12.76 12.76 0 01-.473 2.956c-.157.552-.375 1.128-.838 1.467-.685.5-1.691.332-2.386.817a21.323 21.323 0 002.958-.345c.194-.036.396-.08.546-.207.225-.191.271-.514.302-.808.538-5.219.589-10.477.477-15.722-.068-3.21-.198-6.418-.318-9.626-.032-.853-.061-1.728.204-2.54.895.809.934 2.176.92 3.383-.085 7.407.292 14.836-.407 22.21-.067.702-.142 1.415-.014 2.108.05.271.139.548.336.739.15.146.35.228.549.296.77.263 1.598.349 2.406.252-.71.425-1.684-.004-2.13-.701s-.498-1.567-.519-2.394c-.055-2.167.017-4.344.378-6.481.196-1.163.481-2.319.974-3.389.446-.969 1.056-1.853 1.663-2.731.709-1.026 1.486-2.108 2.649-2.558.678-.262 1.432-.281 2.148-.159 1.834.312 3.479 1.574 4.255 3.264.356.776.535 1.62.685 2.461.653 3.674.788 7.44.402 11.151-.029.279-.06.567.023.835.266.86 1.422.971 2.321.916-1.122.115-2.478.128-3.111-.806-.34-.502-.362-1.147-.364-1.754-.02-4.734.363-9.709-1.719-13.96.991 4.934 1.327 10 .997 15.022-.022.342-.07.725-.341.934-.147.113-.335.153-.518.185-1.125.2-2.28.23-3.414.09M203.548 17.818c.429 1.263.57 2.604.668 3.935.12 1.623.177 3.267-.118 4.868s-.969 3.17-2.137 4.304c-.305.296-.648.564-1.044.719-.328.129-.683.175-1.034.203-1.504.12-3.118-.127-4.271-1.099-1.109-.935-1.63-2.396-1.889-3.823-.381-2.1-.301-4.256-.113-6.382.096-1.088.222-2.186.594-3.213s1.015-1.99 1.949-2.556c1.508-.914 3.151-.524 4.738-.107 1.436.377 2.201 1.81 2.656 3.151z"
      ></path>
      <path
        className={styles.animatedLogo}
        d="M206.028 17.245c1.946 3.164 2.536 7.203 1.275 10.697-.239.664-.545 1.31-.983 1.864-.447.565-1.019 1.017-1.59 1.457-.569.439-1.147.874-1.789 1.196-.807.403-1.694.615-2.573.824-.895.213-1.825.426-2.727.246-.485-.097-.941-.305-1.39-.513-.889-.412-1.779-.835-2.572-1.409-.683-.493-1.283-1.089-1.88-1.683-.346-.344-.695-.691-.969-1.094-.374-.55-.598-1.189-.769-1.832-.646-2.43-.58-5.015-.056-7.474.164-.767.374-1.533.743-2.225.59-1.108 1.564-1.978 2.65-2.609s2.285-1.04 3.489-1.395c3.76-1.108 7.15.715 9.141 3.952z"
      ></path>
      <path
        className={styles.animatedLogo}
        d="M200.113 13.68c.895.113 1.675.644 2.401 1.179.595.438 1.185.892 1.67 1.45.459.527.814 1.134 1.142 1.751.947 1.779 1.699 3.701 1.843 5.711s-.375 4.125-1.713 5.631c-.605.681-1.354 1.218-2.117 1.715-.734.478-1.499.931-2.339 1.181-1.47.438-3.091.216-4.476-.442s-2.547-1.727-3.475-2.948c-1.642-2.16-2.597-4.9-2.337-7.601s1.826-5.312 4.238-6.554 5.62-.922 7.554.981c.957.941 1.562 2.176 2.1 3.405.551 1.258 1.055 2.564 1.154 3.934.066.913-.052 1.83-.22 2.73-.274 1.464-.705 2.948-1.642 4.105-.891 1.101-2.172 1.821-3.487 2.349-.563.226-1.146.424-1.751.465-1.32.088-2.603-.601-3.505-1.569s-1.477-2.192-1.97-3.42c-.577-1.436-1.065-2.925-1.207-4.467-.293-3.171.987-6.449 3.351-8.582M214.827 15.128c-.16-.039-.324-.088-.449-.195-.412-.354-.101-1.094.404-1.294s1.071-.057 1.607.029c1.132.182 2.292.094 3.42-.106.377-.067.832-.12 1.079.172.095.112.139.257.176.399.312 1.186.299 2.429.296 3.655-.009 3.635.084 7.268.178 10.902.02.763.082 1.622.662 2.118.341.292.803.399 1.249.451.928.109 1.922.007 2.692-.521.498-.341.869-.836 1.216-1.33 1.182-1.68 2.226-3.51 2.621-5.525.24-1.224.234-2.48.227-3.727l-.031-5.426-1.944.349c-.366.066-.756.129-1.1-.013s-.593-.577-.404-.897c.16-.271.525-.324.839-.33.984-.021 1.975.119 2.95-.015.941-.129 1.939-.502 2.798-.098a.806.806 0 01.346.274c.074.115.099.254.122.39.917 5.507-.441 11.169.17 16.718.035.32.143.714.46.771.218.039.42-.111.59-.252l.988-.818c.143-.118.298-.242.483-.257.352-.03.619.376.572.726s-.306.633-.574.863c-.845.724-1.952 1.178-3.062 1.101s-2.196-.735-2.652-1.75c-.484-1.078-.222-2.34-.473-3.494-.495 2.082-1.873 3.978-3.793 4.921s-4.362.84-6.096-.414c-.574-.415-1.07-.952-1.377-1.59-.303-.63-.413-1.334-.5-2.027-.292-2.32-.377-4.66-.395-6.997-.009-1.171-.001-2.341.005-3.512.003-.595.006-1.189.007-1.784 0-.322.161-1.207-.11-1.43-.283-.232-1.125.092-1.45.114a5.711 5.711 0 01-1.748-.149z"
      ></path>
      <path
        className={styles.animatedLogo}
        d="M215.146 14.332a11.85 11.85 0 012.595.027c.26.031.532.077.736.241.204.164.307.422.382.673.343 1.153.262 2.383.206 3.585-.1 2.173-.105 4.35-.015 6.523.084 2.009.262 4.068 1.133 5.88.212-.519.033-1.104-.086-1.652-.211-.967-.225-1.965-.238-2.955l-.148-11.022c-.004-.279.068-.647.346-.672.722 5.353.166 10.847 1.248 16.138.04.194.083.391.177.566.292.541.979.722 1.593.746 1.133.045 2.263-.259 3.273-.774.668-.341 1.294-.778 1.789-1.341.937-1.066 1.335-2.492 1.648-3.876.735-3.249 1.155-6.581 1.057-9.91-.018-.618-.065-1.268-.404-1.785s-1.07-.828-1.598-.507l1.773.121c.55 1.169.639 2.496.661 3.788.068 3.859-.368 7.723-.108 11.573.04.598.105 1.218.415 1.73.429.708 1.279 1.089 2.107 1.103s1.631-.295 2.345-.714c-.722.488-1.726.438-2.48 0s-1.271-1.21-1.546-2.038c-.508-1.529-.25-3.189-.185-4.799.047-1.183-.013-2.368-.03-3.552a47.006 47.006 0 01.411-6.872c.862 2.01.719 4.287.621 6.472-.147 3.268-.16 6.541-.038 9.81M254.269 17.699c.09.701.687 1.34 1.394 1.362.395.013.78-.157 1.091-.402a2.435 2.435 0 00.911-1.785c.044-1.05-.622-2.035-1.492-2.625s-1.92-.848-2.956-1.03c-.681-.12-1.369-.211-2.06-.217-2.237-.019-4.531.959-5.818 2.789s-1.372 4.513.034 6.252c.79.978 1.949 1.593 3.136 2.007s2.429.651 3.629 1.028c1.16.365 2.325.894 3.085 1.843s.993 2.407.258 3.376c-.303.399-.735.681-1.185.902a6.46 6.46 0 01-2.065.613c-1.856.224-3.722-.369-5.395-1.202-.276-.137-.582-.325-.625-.631-.061-.424.401-.709.662-1.049.542-.708.157-1.8-.551-2.342-.623-.476-1.577-.628-2.168-.114-.351.305-.507.78-.564 1.242-.235 1.912 1.045 3.775 2.726 4.717s3.683 1.118 5.609 1.066c.551-.015 1.107-.048 1.635-.205.725-.215 1.363-.651 1.962-1.112.574-.441 1.131-.917 1.559-1.501.575-.784.893-1.731 1.072-2.687.176-.938.221-1.934-.13-2.822-.372-.94-1.159-1.669-2.041-2.165s-1.862-.783-2.833-1.067l-3.392-.992c-.842-.246-1.726-.517-2.331-1.153-.794-.835-.907-2.188-.4-3.223s1.549-1.749 2.669-2.018 2.309-.13 3.407.219c.433.138 1.647.518 1.758 1.052.057.275-.313.59-.424.84a1.947 1.947 0 00-.167 1.034z"
      ></path>
      <path
        className={styles.animatedLogo}
        d="M255.866 17.164c.017-.094-.124-.168-.192-.101-.235.145-.105.582.17.605s.489-.326.373-.577-.47-.337-.71-.2-.352.445-.301.717.241.503.474.653c.2.129.466.202.675.088a.675.675 0 00.248-.268c.442-.773.056-1.76-.474-2.476-.307-.414-.666-.799-1.106-1.068-.643-.394-1.412-.519-2.161-.611a34.66 34.66 0 00-2.365-.21c-.661-.036-1.346-.051-1.961.195-.442.176-.825.479-1.156.821-.819.848-1.338 1.941-1.738 3.05-.17.472-.323.965-.293 1.466.036.597.329 1.144.616 1.668.24.437.49.884.878 1.197.334.27.747.419 1.151.564l2.668.958c1.087.39 2.187.787 3.144 1.433.599.404 1.131.898 1.652 1.398.262.251.526.509.701.827.188.342.263.733.313 1.12.115.89.093 1.866-.438 2.59-.505.688-1.36 1.006-2.166 1.287-1.146.4-2.318.803-3.532.803-.749 0-1.489-.154-2.209-.361-1.077-.309-2.155-.759-2.925-1.574s-1.164-2.063-.72-3.092c.159-.369.508-.73.901-.65.296.06.494.361.533.661s-.047.6-.132.89c-.031.106-.07.221-.165.277-.233.137-.453-.198-.52-.46-.041-.16-.08-.337-.005-.485s.317-.208.401-.066a.322.322 0 01.032.163c.007.619-.238 1.25-.061 1.843.138.463.513.817.908 1.095 1.604 1.125 3.698 1.321 5.641 1.071.701-.09 1.403-.235 2.039-.543.666-.322 1.238-.811 1.746-1.348.374-.396.722-.829.926-1.334.208-.514.256-1.077.291-1.631.044-.692.066-1.407-.177-2.057-.267-.713-.837-1.281-1.488-1.675s-1.384-.63-2.116-.839c-2.242-.639-4.614-1.079-6.517-2.425-.211.152-.004.477.204.633a11.769 11.769 0 004.016 1.947c.54.144 1.094.25 1.611.463 1.263.52 2.188 1.617 3.342 2.347M283.075 21.43c-.033-1.598-.075-3.244-.724-4.705-.755-1.7-2.289-2.983-4.019-3.665-.689-.272-1.422-.458-2.163-.447-1.131.016-2.202.484-3.217.981-.772.378-1.533.778-2.281 1.199-.815.459-1.637.961-2.199 1.709-.573.763-.824 1.714-1.05 2.641-.716 2.935-1.283 6.136-.042 8.891.374.831.899 1.583 1.43 2.324.595.831 1.225 1.677 2.104 2.198.639.379 1.373.564 2.102.707 1.76.345 3.616.466 5.32-.091 1.468-.48 2.751-1.449 3.721-2.65.664-.822 1.208-1.827 1.133-2.881-.012-.162-.048-.341-.179-.437-.239-.175-.564.049-.749.28-.511.637-.814 1.416-1.278 2.088-1.2 1.738-3.54 2.598-5.579 2.051-.734-.197-1.417-.554-2.049-.978-.808-.542-1.554-1.212-2.03-2.061-.454-.809-.641-1.74-.753-2.661-.147-1.203-.449-3.086-.035-4.257.346-.977 2.503-.485 3.398-.468 3.047.06 6.094.14 9.14.233z"
      ></path>
      <path
        className={styles.animatedLogo}
        d="M279.591 17.143c-.152-.838-.547-1.665-1.238-2.164-.754-.544-1.747-.627-2.674-.552-.513.042-1.026.128-1.507.312-.952.364-1.732 1.104-2.258 1.976s-.81 1.874-.952 2.883c.642-.235 1.346.019 2.028.068.776.056 1.544-.161 2.319-.233 1.147-.107 2.474.34 3.583.059 1.049-.265.853-1.495.698-2.35z"
      ></path>
      <path
        className={styles.animatedLogo}
        d="M282.427 28.632c-.68.653-.896 1.654-1.469 2.404-.832 1.089-2.266 1.487-3.597 1.813-1.196.293-2.45.582-3.646.289-1.016-.248-1.886-.893-2.687-1.567-1.12-.943-2.188-2.006-2.804-3.335-.625-1.35-.739-2.888-.612-4.371a14.492 14.492 0 012.354-6.746c.431-.649.918-1.267 1.506-1.78.501-.437 1.069-.792 1.645-1.125.585-.338 1.205-.662 1.879-.704.583-.036 1.156.144 1.705.343 1.611.583 3.228 1.41 4.187 2.831.695 1.029.978 2.274 1.248 3.486-1.241.424-2.596.05-3.907.069-.957.014-1.896.241-2.84.401a20.286 20.286 0 01-5.127.208c-.35-.03-.742-.057-1.01.169-.148.125-.233.309-.305.489-1.012 2.503-.589 5.53 1.07 7.66.834 1.07 1.933 1.902 3.066 2.649.808.533 1.732 1.049 2.687.897-1.016-.248-1.884-.896-2.683-1.571-.7-.592-1.379-1.225-1.883-1.991-1.064-1.614-1.25-3.635-1.356-5.565-.124-2.267-.148-4.671.98-6.642.75-1.311 1.991-2.332 3.421-2.817s3.037-.429 4.429.155M8.888 31.137c.727-.049 1.661.354 1.573 1.077-.06.493-.606.799-1.104.801s-.966-.209-1.443-.35c-1.997-.593-4.123.032-6.201.175-.393.027-.851.008-1.091-.305-.324-.423.038-1.081.538-1.262s1.053-.046 1.575.059 1.107.167 1.55-.128c.498-.332.638-.988.774-1.571.624-2.663 2.011-5.073 3.076-7.593 1.376-3.254 2.221-6.713 3.595-9.968.735-1.741 1.619-3.417 2.342-5.163a30.773 30.773 0 001.519-4.703c.104-.441.206-.901.484-1.258s.793-.577 1.197-.371c.332.169.483.553.604.906 1.214 3.537 2.183 7.162 3.618 10.615.574 1.381 1.222 2.734 1.687 4.156.388 1.187.645 2.413.991 3.613.644 2.236 1.592 4.372 2.537 6.499l1.685 3.794c.141.317.291.647.562.865.393.315.943.323 1.445.297s1.04-.063 1.476.19.656.928.281 1.265c-.208.187-.514.205-.794.212l-10.616.288c-.687-.692-.061-1.985.87-2.277s1.926.073 2.833.433l-3.018-8.579-11.144.357c-.228.007-.468.018-.664.136-.246.149-.369.434-.475.701a60.631 60.631 0 00-1.688 4.846c-.118.391-.805 1.932-.553 2.267.273.364 1.612 0 1.977-.025z"
      ></path>
      <path
        className={styles.animatedLogo}
        d="M10.667 21.258c-.194-1.449.49-2.853 1.112-4.176a67.343 67.343 0 003.747-9.938c-.124.428.553 1.681.702 2.121a163.755 163.755 0 003.415 9.182c.192.473.977 1.688.889 2.175-.152.846-3.342.494-4.149.511l-5.716.124z"
      ></path>
      <path
        className={styles.animatedLogo}
        d="M9.489 32.189c-.996-.786-2.395-.793-3.647-.588s-2.502.589-3.763.455c.567-.893 2.024-.509 2.882-1.128.51-.368.711-1.019.892-1.622 1.955-6.532 5.092-12.638 7.607-18.975a104.652 104.652 0 002.915-8.361c3.381 4.799 4.291 10.857 6.443 16.319.814 2.065 1.815 4.069 2.362 6.22.4 1.576.562 3.244 1.34 4.672.393.721.928 1.351 1.46 1.976.258.303.53.617.899.767.565.23 1.348.087 1.677.601a55.698 55.698 0 00-9.031.191c.409-.744 1.421-.876 2.265-.786s1.741.305 2.509-.057c-.784-2.49-2.514-4.577-3.474-7.005-.732-1.851-.997-3.847-1.342-5.808a68.153 68.153 0 00-3.851-13.504c-.221-.552-.5-1.154-1.05-1.379-.398 1.775.483 3.553 1.238 5.208a44.278 44.278 0 013.424 11.288c.048.296.09.618-.051.883-.164.31-.527.452-.866.537-1.413.353-2.896.141-4.349.037-2.092-.15-4.2-.07-6.274.238-.156.023-.32.051-.445.148-.136.106-.202.275-.263.437L5.804 31.48"
      ></path>
    </svg>
  );
};

export default AnimatedLogo;
