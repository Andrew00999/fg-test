<template>
  <div class='main_screen'>
    <div class="header_container">
      <LogoIcon name="logo" />
    </div>
    <main class="main_content">
      <div class="timer_mobile">
        <div class="timer_block">
          <div class="timer_block-info">
            <h2>3-day trial for <span>$0.99</span></h2>
            <div class="changed_fields">
              <div class="before_expired_timer">
                <p>Then $9.99</p>
                <span>$39.99/week</span>
              </div>
              <div class="expired_timer_info" style="opacity: 0">
                <p>Then $39.99/week</p>
              </div>
            </div>
          </div>
          <div class="timer">
            <p class="count_item" id="countdown"></p>
          </div>
        </div>
      </div>
      <div class="main_content-left">
        <h1>Start your learning <br> journey now</h1>
        <h3>Get a <span>Planet</span><span>Learn</span> plan to rock <br> self-learning</h3>
        <div @click="showModal">
          <CustomButton class="main_btn">Get my plan</CustomButton>
        </div>
      </div>
      <ModalWindow v-model:show="modalVisible">
        <div class="current_modal">
          <h2>Payment method</h2>
          <form @submit.prevent class="card_body">
            <div>
              <CardButton style="border: none; background-color: #FEC538">
                <PayPalIcon name="payPal" />
                <span class="modal_card_btns_text">buy now</span>
              </CardButton>
            </div>
            <div style="margin: 1.5rem 0">
              <CardButton>
                <GooglePayIcon name="googlePay" />
                <span class="modal_card_btns_text">pay</span>
              </CardButton>
            </div>
            <div class="line"><span>OR</span></div>
            <div class="card_input_block">
              <label class="card_number_label">
                <span>Card Number</span>
                <input type="text" placeholder="XXXX XXXX XXXX XXXX">
                <div class="visa_icon">
                  <VisaIcon name="visaIcon" />
                </div>
              </label>
              <div class="bottom_inputs">
                <label class="cvc_label select">
                  <span>Month</span>
                  <select name="" id="">
                    <option default value="Select">Select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                  <div class="arrow_icon">
                    <Arrow name="arrow" />
                  </div>
                </label>
                <label class="cvc_label select">
                  <span>Year</span>
                  <select name="" id="">
                    <option default value="Select">Select</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                  </select>
                  <div class="arrow_icon">
                    <Arrow name="arrow" />
                  </div>
                </label>
                <label class="cvc_label">
                  <span>CVC</span>
                  <input type="text" placeholder="XXXX">
                </label>
              </div>
              <CustomButton style="width: 80%">Submit</CustomButton>
            </div>
          </form>
          <span class="close_modal" @click="hideModal">Close</span>
        </div>
      </ModalWindow>
      <div class="main_content-right">
        <div class="main_content-right_card">
          <img class="asteroid" src="../assets/Asteroid.png" alt="">
          <div class="timer_pc">
            <div class="timer_block">
              <div class="timer_block-info">
                <h2>3-day trial for <span>$0.99</span></h2>
                <div class="changed_fields">
                  <div class="before_expired_timer">
                    <p>Then $9.99</p>
                    <span>$39.99/week</span>
                  </div>
                  <div class="expired_timer_info" style="opacity: 0">
                    <p>Then $39.99/week</p>
                  </div>
                </div>
              </div>
              <div class="timer">
                <p class="count_item" id="countdown"></p>
              </div>
            </div>
          </div>
          <div class="list">
            <div class="list_item" v-for="item in list" :key="item.id">
              <Dot name="dot" />
              <span v-html="item.text"></span>
            </div>
          </div>
          <CardButton>
            <Lock name="lock" />
            <span class="card_button_text">Safe & secure payment</span>
          </CardButton>
          <div class="card_text">
            <span>$0.99 charged today. If you don't cancel at least 24 hours before the end of the 3-day trial period,
              you will automatically be charged the full price of $19.99/Month . You can cancel your subscription at any
              time. By continuing, you indicate that you've read and agree to our Terms & Conditions, Privacy Policy ,
              Money Back , and Subscription Terms.</span>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Arrow from '@/components/UI/Arrow.vue';
import GooglePayIcon from '@/components/UI/GooglePayIcon.vue';
import PayPalIcon from '@/components/UI/PayPalIcon.vue';
import VisaIcon from '@/components/UI/VisaIcon.vue';

export default {
  data() {
    return {
      list: [
        { id: 1, text: "Exclusive access to <span style=\"color: #FF8D24; font-weight: 900;\">350+</span> learning programs" },
        { id: 2, text: "Personalized course plan" },
        { id: 3, text: "Comfy learning schedule made by you" },
        { id: 4, text: "<span style=\"color: #FF8D24; font-weight: 900;\">24/7</span> tutor support in a secure chat" },
        { id: 5, text: "Lifetime access to materials" },
      ],
      modalVisible: false
    };
  },
  methods: {
    showModal() {
      this.modalVisible = true;
    },
    hideModal() {
      this.modalVisible = false;
    }
  },
  mounted() {
    document.querySelectorAll('#countdown').forEach(item => {

      setInterval(updateTime, 1000);

      let time = 30;
      function updateTime() {
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        item.innerHTML = `${minutes}:${seconds}`;
        time--;
      }
    });
  },
  name: "HomePage",
  components: {
    PayPalIcon,
    GooglePayIcon,
    VisaIcon,
    Arrow
  }
}
</script>

<style scoped lang="scss">
.select {
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;

  option {
    font-style: normal;
    font-weight: 400;
    color: #6C727F;
    font-size: 1rem;
  }

  .arrow_icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: .5rem;
  }
}

.bottom_inputs {
  width: 100%;
  height: 100%;
  margin: 2rem 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.cvc_label {
  display: flex;
  flex-direction: column;
  width: calc(100% / 3 - .5rem);
  height: 100%;
  position: relative;

  input {
    padding: 1rem;
    border: 2px solid #D2D5DA;
    border-radius: .5rem;
    outline: 0;
    outline-offset: 0;
    transition: .3s ease-in-out;

    &::placeholder {
      font-style: normal;
      font-weight: 400;
      color: #6C727F;
      font-size: 1rem;
    }

    &:focus {
      border: 2px solid rgb(87, 194, 252);
    }
  }

  select {
    padding: 1rem;
    border: 2px solid #D2D5DA;
    border-radius: .5rem;
    outline: 0;
    outline-offset: 0;
    transition: .3s ease-in-out;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    cursor: pointer;

    font-style: normal;
    font-weight: 400;
    color: #6C727F;
    font-size: 1rem;

    &:focus {
      border: 2px solid rgb(87, 194, 252);
    }
  }

  span {
    display: block;
    position: absolute;
    top: -50%;
    left: 1rem;
    transform: translateY(85%);
    background-color: #fff;
    padding: 0 .5rem;
    font-weight: 700;
  }
}

.card_number_label {
  display: flex;
  flex-direction: column;
  position: relative;

  input {
    padding: 1rem;
    border: 2px solid #D2D5DA;
    border-radius: .5rem;
    outline: 0;
    outline-offset: 0;
    transition: .3s ease-in-out;

    &::placeholder {
      font-style: normal;
      font-weight: 400;
      color: #6C727F;
      font-size: 1rem;
    }

    &:focus {
      border: 2px solid rgb(87, 194, 252);
    }
  }

  span {
    display: block;
    position: absolute;
    top: -50%;
    left: 1rem;
    transform: translateY(85%);
    background-color: #fff;
    padding: 0 .5rem;
    font-weight: 700;
  }

  .visa_icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 1rem;
  }
}

.card_input_block {
  margin-top: 1.5rem;
}

.line {
  position: relative;
  width: 100%;
  letter-spacing: -0.36px;
  color: rgba(0, 0, 0, 0.4);
  font-weight: 600;

  span {
    padding: 0 1rem;
    background-color: #fff;
    position: relative;
    z-index: 2;
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 100%;
    height: 2px;
    border-radius: 2px;
    background-color: rgba(0, 0, 0, 0.1);
    z-index: 1;
  }
}

.modal_card_btns_text {
  font-size: 1.25rem;
  font-weight: 700;
  text-transform: uppercase;
}

.card_body {
  width: 100%;
  height: 100%;
  margin: 1.5rem 0 1rem;
}

.current_modal {
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    margin: 0;
    font-weight: 800;
  }
}

.close_modal {
  cursor: pointer;
  color: rgba(0, 0, 0, 0.4);
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 140%;
}

.header_container {
  width: 80%;
  padding: 1rem 0;
  margin: 0 auto;
}

.main {
  &_screen {
    position: relative;
    width: 100%;
    height: 100%;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: url('../assets/BG_Planets.png') no-repeat center;
      background-size: cover;
      opacity: .1;
      z-index: -1;
    }
  }

  &_content {
    width: 65%;
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;

    &-left {
      width: 50%;

      h1 {
        font-size: clamp(32px, 3.2vw, 42px);
      }

      h3 {
        margin: 2rem 0;

        span {
          font-weight: 900;
          color: #FF8D24;

          &:last-of-type {
            color: #000;
          }
        }
      }
    }

    &-right {
      width: 50%;

      &_card {
        position: relative;
        width: 100%;
        padding: 1rem 2rem;
        border-radius: 1.5rem;
        border: 1px solid #CDCDCD;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.06);
        background-color: #fff;

        .asteroid {
          position: absolute;
          top: -3rem;
          right: 3%;
          z-index: 1;
        }
      }
    }
  }
}

.timer_block {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &-info {
    position: relative;
    width: 60%;

    h2 {
      color: #000;
      font-size: clamp(18px, 1.7vw, 24px);
      margin-bottom: 0;

      >span {
        color: #FF8D24;
        opacity: 1;
        text-decoration: none;
        font-weight: 900;
        font-size: 1.75rem;
      }
    }

    p {
      font-size: 1.4rem;
      color: #000;
      font-weight: 600;
      line-height: 0;
    }

    span {
      text-decoration: line-through;
      color: #000000;
      opacity: 0.4;
      font-size: 1.25rem;
      font-weight: 600;
    }
  }
}

.count_item {
  position: relative;
  z-index: 2;
  font-size: 1.7rem;
  font-weight: 600;
  color: #fff;
  line-height: 0;
}


.timer {
  background-color: #000;
  padding: 0 3rem;
  border-radius: 1.2rem;
  margin-top: 2rem;
  overflow: hidden;

  animation-name: toBorderRedBattery;
  animation-duration: 30s;
  animation-timing-function: linear;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;

  position: relative;
  bottom: -2rem;

  &::before {
    content: '';

    animation-name: toLowBattery;
    animation-duration: 30s;
    animation-timing-function: linear;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #00CA14;
    border-radius: 1rem;
    z-index: 1;
  }
}

@keyframes toLowBattery {
  0% {
    transform: translate(0%);
  }

  100% {
    transform: translate(-100%);
  }
}

@keyframes toBorderRedBattery {
  0% {
    border: 0;
  }

  90% {
    border: 2px solid #FF0000;
    box-shadow: 0 0 10px #FF0000;
  }

  99% {
    opacity: 1;
    visibility: visible;
  }

  100% {
    border: 2px solid #FF0000;
    box-shadow: 0 0 10px #FF0000;
    opacity: 0;
    visibility: hidden;
  }
}

.changed_fields {
  position: relative;
  width: 100%;
}

.before_expired_timer {
  position: absolute;
  top: 0;
  left: 0;

  animation-name: before_expired_timer-animation;
  animation-duration: .3s;
  animation-delay: 30s;
  animation-timing-function: linear;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;

  transition: .3s ease;
}

.expired_timer_info {
  position: absolute;
  top: 0;
  left: 0;

  p {
    font-size: clamp(16px, 1vw, 20px);
    word-wrap: break-word;
  }

  animation-name: expired_timer_info-animation;
  animation-duration: .3s;
  animation-delay: 30s;
  animation-timing-function: linear;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;

  transition: .3s ease;
}

@keyframes before_expired_timer-animation {
  0% {
    opacity: 1;
    visibility: visible;
  }

  100% {
    opacity: 0;
    visibility: hidden;
  }
}

@keyframes expired_timer_info-animation {
  0% {
    opacity: 0;
    visibility: hidden;
  }

  100% {
    opacity: 1;
    visibility: visible;
  }
}

.list {
  margin: 5rem 0 2rem;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  &_item {
    font-size: 1.1rem;
    color: #000;
    font-weight: 400;
    display: flex;
    align-items: center;
    column-gap: .7rem;
  }
}

.card_button_text {
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  color: #01C120;
}


.card_text {
  font-style: normal;
  font-weight: 400;
  font-size: .9rem;
  color: #000000;
  opacity: 0.5;
  text-align: center;
  margin-top: 2rem;
  line-height: 135%;
}


.main_btn {
  width: 50%;
}



.timer_mobile {
  display: none;
}

.timer_pc {
  display: block;
}


@media (max-width: 992px) {
  .header_container {
    width: 90%;
    padding: .5rem 0;
    margin: 0 auto;
  }

  .timer_mobile {
    display: block;
    width: 100%;
    margin: 2rem 0;
    background-color: #fff;
    border: 1px solid #CDCDCD;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.06);
    border-radius: 1rem;
    padding: 1rem 1rem 5rem 1rem;
  }

  .timer_pc {
    display: none;
  }

  .main_btn {
    width: 100%;
  }

  .list {
    margin: 2rem 0;
  }

  .asteroid {
    display: none;
  }

  .main {
    &_content {
      width: 90%;
      height: 100%;

      margin: 0 auto;

      display: flex;
      flex-direction: column;

      &-left,
      &-right {
        width: 100%;
      }

      &-right {
        padding-bottom: 1rem;

        &_card {
          border: 0;
          background: transparent;
          padding: 0;
          box-shadow: none;
        }
      }

    }
  }
}
</style>