<style lang="scss" scoped>
  .app-loading {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    .app-ld-bg {
      background-color: #b5b5b5;
      position: absolute;
      width: 100%;
      height: 100%;
      opacity: 0.3;
    }
  }
  .lds-roller {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-roller div {
    animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    transform-origin: 40px 40px;
  }
  .lds-roller div:after {
    content: " ";
    display: block;
    position: absolute;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #fff;
    margin: -4px 0 0 -4px;
  }
  .lds-roller div:nth-child(1) {
    animation-delay: -0.036s;
  }
  .lds-roller div:nth-child(1):after {
    top: 63px;
    left: 63px;
  }
  .lds-roller div:nth-child(2) {
    animation-delay: -0.072s;
  }
  .lds-roller div:nth-child(2):after {
    top: 68px;
    left: 56px;
  }
  .lds-roller div:nth-child(3) {
    animation-delay: -0.108s;
  }
  .lds-roller div:nth-child(3):after {
    top: 71px;
    left: 48px;
  }
  .lds-roller div:nth-child(4) {
    animation-delay: -0.144s;
  }
  .lds-roller div:nth-child(4):after {
    top: 72px;
    left: 40px;
  }
  .lds-roller div:nth-child(5) {
    animation-delay: -0.18s;
  }
  .lds-roller div:nth-child(5):after {
    top: 71px;
    left: 32px;
  }
  .lds-roller div:nth-child(6) {
    animation-delay: -0.216s;
  }
  .lds-roller div:nth-child(6):after {
    top: 68px;
    left: 24px;
  }
  .lds-roller div:nth-child(7) {
    animation-delay: -0.252s;
  }
  .lds-roller div:nth-child(7):after {
    top: 63px;
    left: 17px;
  }
  .lds-roller div:nth-child(8) {
    animation-delay: -0.288s;
  }
  .lds-roller div:nth-child(8):after {
    top: 56px;
    left: 12px;
  }
  @keyframes lds-roller {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>

<template>
    <div
        class="app-loading"
        :style="{ display: show ? 'flex' : 'none' }"
    >
        <div class="app-ld-bg" />
        <div class="lds-roller">
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        percent: 0,
        show: false,
        canSuccess: true,
        duration: 3000,
        height: '2px',
        color: '#77b6ff',
        failedColor: 'red'
    }),
    methods: {
        start() {
            this.show = true;
            this.canSuccess = true;
            if (this._timer) {
                clearInterval(this._timer);
                this.percent = 0;
            }
            this._cut = 10000 / Math.floor(this.duration);
            this._timer = setInterval(() => {
                this.increase(this._cut * Math.random());
                if (this.percent > 95) {
                    this.finish();
                }
            }, 100);
            return this;
        },
        set(num) {
            this.show = true;
            this.canSuccess = true;
            this.percent = Math.floor(num);
            return this;
        },
        get() {
            return Math.floor(this.percent);
        },
        increase(num) {
            this.percent = this.percent + Math.floor(num);
            return this;
        },
        decrease(num) {
            this.percent = this.percent - Math.floor(num);
            return this;
        },
        finish() {
            this.percent = 100;
            this.hide();
            return this;
        },
        pause() {
            clearInterval(this._timer);
            return this;
        },
        hide() {
            clearInterval(this._timer);
            this._timer = null;
            setTimeout(() => {
                this.show = false;
                this.$nextTick(() => {
                    setTimeout(() => {
                        this.percent = 0;
                    }, 200);
                });
            }, 500);
            return this;
        },
        fail() {
            this.canSuccess = false;
            return this;
        }
    }
};
</script>
