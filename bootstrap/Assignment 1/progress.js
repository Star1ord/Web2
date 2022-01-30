const circle = document.querySelector(".progress-ring__circle");
const radius = circle.r.baseVal.value;
const circumference = radius * 2 * Math.PI;

circle.style.strokeDasharray = circumference;
circle.style.strokeDashoffset = circumference;

function setProgress(percent) {
  const offset = circumference - (percent / 100) * circumference;
  circle.style.strokeDashoffset = offset;
}



<figure class="clock">
      <div class="mins">0</div>
      <div>:</div>
      <div class="secs">00</div>
      <audio src="http://soundbible.com/mp3/service-bell_daniel_simion.mp3"></audio>
      <svg class="progress-ring" height="120" width="120">
        <circle
          class="progress-ring__circle"
          stroke-width="8"
          fill="transparent"
          r="50"
          cx="60"
          cy="60"
        />
      </svg>
    </figure>

    <div class="btn-group">
      <button class="start">start focus</button>
      <button class="reset">reset</button>
      <button class="pause">pause</button>
    </div>

    <form action="">
      <label for="focusTime">Focus Time</label>
      <input type="number" value="1" id="focusTime" />
      <label for="breakTime">Break Time</label>
      <input type="number" value="1" id="breakTime" />
      <button type="submit">Save settings</button>
    </form>

    input {
  transition: 0.5s ease-in-out;
  margin: 10px 0;
  font-size: 18px;
  padding: 5px;
  background: rgba(0, 0, 0, 0.11);
  border: none;
}
.btn-group {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10%;
  margin: 35px 0;
}
button {
  margin: 5px;
  padding: 10px;
  border: none;
  font-size: 18px;
  transition: 0.5s ease-in-out;
}
form {
  height: 20%;
  display: flex;
  flex-direction: column;
  padding: 0;
  max-width: 370px;
  margin: 5px auto;
}
form button {
  background: rgb(25, 67, 255);
  width: 100%;
  margin: 5px 0;
  color: white;
}
.start {
  background: rgb(48, 33, 253);
  color: white;
}
.break {
  background: rgb(0, 199, 116);
  color: #000000;
}
.reset {
  background: rgb(250, 69, 109);
  color: #000000;
}
.pause {
  background: rgb(253, 143, 17);
}
.resume {
  background: rgb(131, 10, 252);
  color: white;
}
.clock {
  padding: 4px;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  height: 30%;
  font-size: 24px;
}
.progress-ring {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.progress-ring__circle {
  transition: 0.5s;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  stroke: rgb(51, 65, 255);
}


.danger {
  stroke: rgb(243, 17, 28);
  animation: pulse 0.9s ease-in-out infinite;
}

@keyframes pulse {
  0%,
  100% {
    transform: rotate(-90deg) scale(1);
  }
  50% {
    transform: rotate(-90deg) scale(1.05);
  }
  75% {
    transform: rotate(-90deg) scale(0.8);
  }
}

@media screen and (min-width: 768px) {
  .btn-group {
    grid-area: btns;
    justify-content: center;
  }
  .clock {
    grid-area: clock;
    height: 100%;
  }
  form {
    align-self: center;
    justify-self: center;
    grid-area: form;
    width: 50%;
    justify-content: space-around;
  }
}

@media screen and (max-width: 375px) {
  form {
    height: 40%;
  }
}

 <script src="settings.js"></script>
    <script src="timer.js"></script>
    <script src="progress.js"></script>