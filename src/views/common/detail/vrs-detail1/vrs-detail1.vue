<!-- 
  name: 活动详情页1
  author: 小炜
 -->
<template>
  <div class="vrs-detail1">
    <div class="vrs-thumb-wrap">
      <img class="thumb" src="./img/detail1-1.png" alt="thumb" />
      <dl>
        <dt class="name">活动名称</dt>
        <dd class="vrs-red">往期活动</dd>
      </dl>
    </div>
    <!-- 活动未开始/进行中 -->
    <template v-if="status">
      
      <!-- 活动详情 -->
      <div class="vrs-detail-main">
        <div class="vrs-card">
          <div class="vrs-card-title bg">活动安排</div>
          <ul class="vrs-plan">
            <li class="vrs-plan-item flex">
              <i class="vrs-round"></i>
              <span class="vrs-title">活动名称：</span>
              <span class="flex-item">
                热烈庆祝我党成立98周年
              </span>
            </li>
            <li class="vrs-plan-item flex">
              <i class="vrs-round"></i>
              <span class="vrs-title">活动时间：</span>
              <span class="flex-item">
                2019-07-01 09:00 — 2019-07-01 18:00
              </span>
            </li>
            <li class="vrs-plan-item flex">
              <i class="vrs-round"></i>
              <span class="vrs-title">报名时间：</span>
              <span class="flex-item">
                2019-07-01 09:00 — 2019-07-01 18:00
              </span>
            </li>
            <li class="vrs-plan-item flex">
              <i class="vrs-round"></i>
              <span class="vrs-title">参与人数：</span>
              <span class="flex-item">
                10/30
              </span>
            </li>
          </ul>
        </div>

        <div class="vrs-card">
          <div class="vrs-card-title bg">活动详情</div>
          <div class="vrs-rich-text">
            <p>富文本</p>
            <br />
            <img src="./img/detail1-3.png" alt="" />
          </div>
        </div>
      </div>
      <!-- 活动详情 end -->
      <!-- 根据 vrs-detail1 定位，实际使用时请根据浏览器定位 fixed -->
      <div style="height: 0.98rem;"></div>
      <button class="vrs-bottom-bar dis">报名</button>
    </template>
    <!-- 活动未开始/进行中 end -->

    <!-- 活动已结束 -->
    <template v-else>
      <vrs-collapse class="vrs-fold">
        <template v-slot:title>
          <div class="vrs-title flex-c">
            <span>展开活动介绍</span>
            <i class="bg vrs-arrow"></i>
          </div>
        </template>
        <!-- 活动详情 -->
        <div class="vrs-detail-main">
          <div class="vrs-card">
            <div class="vrs-card-title bg">活动安排</div>
            <ul class="vrs-plan">
              <li class="vrs-plan-item flex">
                <i class="vrs-round"></i>
                <span class="vrs-title">活动名称：</span>
                <span class="flex-item">
                  热烈庆祝我党成立98周年
                </span>
              </li>
              <li class="vrs-plan-item flex">
                <i class="vrs-round"></i>
                <span class="vrs-title">活动时间：</span>
                <span class="flex-item">
                  2019-07-01 09:00 — 2019-07-01 18:00
                </span>
              </li>
              <li class="vrs-plan-item flex">
                <i class="vrs-round"></i>
                <span class="vrs-title">报名时间：</span>
                <span class="flex-item">
                  2019-07-01 09:00 — 2019-07-01 18:00
                </span>
              </li>
              <li class="vrs-plan-item flex">
                <i class="vrs-round"></i>
                <span class="vrs-title">参与人数：</span>
                <span class="flex-item">
                  10/30
                </span>
              </li>
            </ul>
          </div>

          <div class="vrs-card">
            <div class="vrs-card-title bg">活动详情</div>
            <div class="vrs-rich-text">
              <p>富文本</p>
              <br />
              <img src="./img/detail1-3.png" alt="" />
            </div>
          </div>
        </div>
        <!-- 活动详情 end -->
      </vrs-collapse>

      <!-- 活动内容(活动结束) -->
      <div class="vrs-detail-main">
        <div class="vrs-card">
          <div class="vrs-card-title bg">活动视频</div>
          <div class="vrs-video">
            <!-- 第三方 iframe 视频 -->
            <iframe
              src="//player.bilibili.com/player.html?aid=58297778&cid=101694564&page=1"
              scrolling="no"
              border="0"
              frameborder="no"
              framespacing="0"
              allowfullscreen="true"
            >
            </iframe>
          </div>
        </div>

        <div class="vrs-card">
          <div class="vrs-card-title bg">活动风采</div>
          <div class="vrs-rich-text">
            <img src="./img/detail1-3.png" alt="" /><br />
            <p>富文本</p>
          </div>
        </div>
      </div>
      <!-- 活动内容(活动结束) end -->
    </template>
    <!-- 活动已结束 end -->



    <!-- 投票活动详情 -->
    <div class="vrs-detail-main">
      <!-- 统计 -->
      <div class="vrs-card count flex-v">
        <div class="flex-item ovh">
          <div class="vrs-num single-txt">20</div>
          <div class="flex-c">
            <i class="vrs-round"></i>
            <span>参赛选手</span>
          </div>
        </div>
        <span class="vrs-line"></span>
        <div class="flex-item ovh">
          <div class="vrs-num">5000</div>
          <div class="flex-c">
            <i class="vrs-round"></i>
            <span>总票数</span>
          </div>
        </div>
        <span class="vrs-line"></span>
        <div class="flex-item ovh">
          <div class="vrs-num">9000</div>
          <div class="flex-c">
            <i class="vrs-round"></i>
            <span>访问量</span>
          </div>
        </div>
      </div>
      <!-- 统计 end -->
      <div class="vrs-card">
        <div class="vrs-card-title bg">活动时间</div>
        <ul class="vrs-plan">
          <li class="vrs-plan-item flex">
            <i class="vrs-round"></i>
            <span class="vrs-title">报名时间：</span>
            <span class="flex-item">
              2019-07-01 09:00 — 2019-07-01 18:00
            </span>
          </li>
          <li class="vrs-plan-item flex">
            <i class="vrs-round"></i>
            <span class="vrs-title">投票时间：</span>
            <span class="flex-item">
              2019-07-01 09:00 — 2019-07-01 18:00
            </span>
          </li>
        </ul>
      </div>
      <!-- 参赛选手 瀑布流 -->
      <div class="vrs-card player-list">
        <div class="vrs-card-title bg">参赛选手</div>
        <div class="flex">
          <div class="vrs-ml flex-item">
            <template v-for="(item, index) in list">
              <div class="vrs-player-item" :key="index" v-if="index % 2 == 0">
                <img :src="item" alt="258">
                <div class="vrs-vote">4000票</div>
                <span class="vrs-medal bg" v-if="index < 3">{{index + 1}}</span>
                <dl class="vrs-info">
                  <dt class="vrs-name">飘落水中央</dt>
                  <dd class="vrs-author"><span class="vrs-gray">参赛者：</span>佐伊</dd>
                </dl>
              </div>
            </template>
          </div>
          <div class="vrs-ml flex-item">
            <template v-for="(item, index) in list">
              <div class="vrs-player-item" :key="index" v-if="index % 2 != 0">
                <img :src="item" alt="258">
                <div class="vrs-vote">4000票</div>
                <span class="vrs-medal bg" v-if="index < 3">{{index + 1}}</span>
                <dl class="vrs-info">
                  <dt class="vrs-name">飘落水中央</dt>
                  <dd class="vrs-author"><span class="vrs-gray">参赛者：</span>佐伊</dd>
                </dl>
              </div>
            </template>
          </div>
        </div>
        <button class="vrs-more-btn">查看更多</button>
      </div>
      <!-- 参赛选手 end -->
      <div class="vrs-card">
        <div class="vrs-card-title bg">活动规则</div>
        <div class="vrs-rich-text">
          <p>富文本</p>
        </div>
      </div>
    </div>
    <!-- 投票活动详情 end -->


    <!-- 作品详情 -->
    <div class="vrs-thumb-wrap">
      <!-- 前三名 -->
      <div class="vrs-ranking bg flex-c" :style="{backgroundImage: `url(${require('./img/icon-1.png')})`}">
        <span>第</span>
        <span class="vrs-medal bg">1</span>
        <span>名</span>
      </div>
      <!-- <div class="vrs-ranking bg flex-c" :style="{backgroundImage: `url(${require('./img/icon-1.png')})`}">
        <span>第 4 名</span>
      </div> -->
      <div class="vrs-works-name">飘落水中央（作品名称）</div>
      <div class="vrs-player-info flex-v">
        <span class="vrs-gray2">伊卡洛斯</span>
        <span class="vrs-works-status">未通过审核</span>
        <!-- <span class="vrs-works-status active">已通过审核</span> -->
        <span class="vrs-green flex-item tr">2988票</span>
        <span>&nbsp;&nbsp;(当前排名：9)</span>
      </div>
      <div class="flex">
        <span class="vrs-sign">宣言</span>
        <span class="lh vrs-gray2 flex-item">
          这是我的两把枪，一把叫射，另一把叫啊，怎么样，喜欢吗
        </span>
      </div>
    </div>
    <div class="vrs-detail-main">
      <div class="vrs-card works-card">
        <div class="vrs-card-title bg">作品</div>
        <img class="vrs-works-img" src="./img/260.jpg" @click="preview" alt="">
      </div>
    </div>
    <!-- 作品详情 end -->

  </div>
</template>

<script>
import vrsCollapse from '@/components/vrs-collapse'
import { ImagePreview } from 'vant'

export default {
  name: 'vrs-detail1',
  components: {
    vrsCollapse
  },
  data() {
    return {
      status: false,
      list: [
        require('./img/258.jpg'),
        require('./img/259.jpg'),
        require('./img/260.jpg'),
        require('./img/260.jpg')
      ]
    }
  },
  methods: {
    preview() {
      ImagePreview(this.list)
    },
  }
}
</script>

<style lang='scss' scoped>
.vrs-detail1 {
  position: relative;
  .vrs-bottom-bar {
    // position: fixed;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0.98rem;
    line-height: 0.98rem;
    color: #fff;
    font-size: 0.34rem;
    text-align: center;
    background-color: #ec4a2d;
    &.dis {
      background-color: #999;
    }
  }
  .vrs-red {
    color: #EC4A2D;
  }
  .vrs-green {
    color: #52AD36;
  }
  .vrs-gray {
    color: #999;
  }
  .vrs-gray2 {
    color: #666;
  }
  .vrs-thumb-wrap {
    padding: 0.4rem 0.3rem;
    background-color: #fff;
    .thumb {
      height: 3.45rem;
      width: 6.9rem;
      border-radius: 0.16rem;
      object-fit: cover;
    }
    .name {
      font-size: 0.34rem;
      padding: 0.4rem 0 0.3rem;
    }
  }
  .vrs-detail-main {
    padding: 0.4rem 0.3rem 0.6rem;
  }
  .vrs-round {
    width: 0.3rem;
    height: 0.3rem;
    border-radius: 50%;
    border: 0.06rem solid #ec4a2d;
  }
  .vrs-card {
    + .vrs-card {
      margin-top: 0.4rem;
    }
    &.count {
      padding: 0.4rem 0;
    }
    &.player-list {
      padding: 0 0.2rem 0.62rem 0;
    }
    &.works-card {
      padding: 0 0.2rem 0.6rem; 
    }
    background-color: #fff;
    border-radius: 0.16rem;
    padding: 0 0.3rem 0.5rem;
  }
  .vrs-card-title {
    @include wh(2.4rem, 0.5rem);
    line-height: 0.5rem;
    text-align: center;
    color: #fff;
    margin: 0 auto;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAAAyCAYAAAEVcma7AAAABGdBTUEAALGPC/xhBQAABx9JREFUeAHtXT1sHEUUntk7uUhAJN4TDREKqUJxDuAIpDSYApByDg1CBAoKwl9B6KAAJExBAx2hIEHQIAGRJQriswQ0qVIgG2JfTfgRKBLyOUGEBuwd5i33Nrtzt97b8+3s7e53zbuZ2Zn33vfm7b57OzMnN1rNFaHErLD8kcRv43hTWeYrHNsMmZ+vMRVsat1Y7sj8NbalNWlLvCIa9yqvUsO4P1LI88yUxpY2bRtWJqJxuCHL71KKs7n4ca6z2ofa3Xu4niW04bF5gvmM5eLidrjRxvfgzsXMsprlrCnzyWVyMfM8aG9uubfmwdw2z8CL5eLFG0KKVdsC2OTHUzu4UTfanaM2BbDJSz8YzjE/azcPZmibSim/cNvrTzHfPoW5Iau7Jo+fPZU/NJbX7zP55Bb0mILYKgc+bIthnnzqNTlbqedw8FjKE3VrvKW4Qbz8Ke1I8aI1xjkx0o9dP7jyFZ5ud4LnVE7yWGNbiZtWXYogqIo8h4v/7B08UTispNYqWPjHMAwRC1ND2awcti7p129hKd+khjJ8TGVJpz4LU+X1EzN3bW2rK/S9qJ9BypIu/RbWlfsurP9EHRyn1iqawu79j9filCVdpHpi7pbu392/iqYY5B0CAR1dOpTd0e8gXhjiclxSMAQomg7u0Xm9SiwYZoURl2/bwTOpzCnLwlhlTIJSWoeHCgxMFWx1bgQtHgKUf9dB4/csecTAVOnurcYrJgagVFQHVW67E8nU9RmYgq4qpPNKZdieMpyiDOsWBFnhSvqOoMtEZLLLcY/XPg9mNSjo0q8Yf+Ey6OQi4B6YmoqTLtaDuUP3sXseVlvb33AZdHIQ0MZT7nIn1klJ0kQDszobrZnXhVLvcBk0PwR0pOzpYKo2jARDGzg82Gar+b6nxOlwHb5ni4BelbtVk+r2fe3OtTScKreQJQ04Jbh2xdE3aX+5QwmUgQoGAjqn8ZBTd+SDRj2KJUHAz2mE01ol0QtqaAT4DaEfYofXDwOdciDgLnU+Ik18A5v5y3KoWGEtQrs3bv5IRrBVmhnh7nHnWJnAwHoHXFDJjaDFRMDfg9UTPTCw/gFd6k1ZxTRVeqk5uOKegYGpAsEWw1JcysEVaxAxMIIthqWgNBRcsQYRA/uVCLYYm8LRcHDFwvcZGMEWQ1M8Gg6uWPo+AyPYYmiKReOWWfUZmNRCsFUs45K0cbtEBxoYwVbBDDwguGINBhq41xjZiMgdQCcPAXfP4QfipIo1sF7IdXdcJ9RPDgK0MHKnE7FiDSzPrf5LB7dMjiqQZBAC+mCdg4PquS7WwHQBncpDK/f4YtDJQkDWa48kSbSjgalz0rLMJAZozwgBfTSB+9Xlb5NGTzQwDUCr5mmpZtJgaLeEgJRvNNrrQy1hTrVsduP4jN61pu61pAbYDEBAbw09REdODGgaWJXKwDTC9VZz/7aSfyihrB2iOlDyilXqTNUZncx4Ja3aqQ3MDNTCgrP53ZefaUM/yXWgY0fgqj4Y5rnppcvLo44su/PN55V389DOUQdCPyAABOwiQIs7HFoAoAPks3ZZgxsQAAK7QYB81vddHgT7+RkJUCAw4Qjod4d8JlaQxvIX82Ax1oRbDuJVHgHto+GFd4ED02ItbCOt/PQAABOOAPloeGFl4MAkN20TNnc9TLg+EA8IVAYB8k1zK3/EgQmJXlKrMn/RURnrQ9FCI0CL2M0dZ6RQ7HtCJLUKbW8IXyYEQkkrU62+JzBfgKQWIwEKBHJEwEhamZLEOrCf1MJxHSZeKAMBqwjQLu5w0spkHuvAdCHtEI7bbWoOhDIQAALjRYB8L2mX/o4OTOLQbmL6AT1e0TAaEAACOyFAPhe3kz/cLzaJFb6IviOpZSKCMhDICIEdklYmx8QnMHdAUouRAAUCGSKQkLQyOQ/twEhqmdChDATGj0BS0srkOLQDU0f6QV0TzjPmICgDASCwewTIt5KSViaXVA5Mnfcvr30qpXPKHAhlIAAERkeAfIp8K+0IQyexzIE3WzMnPaU+N+tRBgJAIB0C0nFOuktr59P1+v/qkR2Yuvvn6wjZUUrdMQpz9AECVUZAHzX3e02opg6bU/1/bBizXTkwD7Qxf+Rl4XlnuAwKBIBAAgKOc7qxtPZBwlWJzWNxYObSnZ95V3nqVS6DAgEgEEVAOvI9d2n9tWjt6KWxOjCL0W0deVQoT59oKKa5DhQIVBUB7WSb+r+bn3bba1+PG4NMHJiFVAtz9e7KtZek570NZ2ZUQKuAADmtcpy33KP7P5QLF7ey0jlTBzaF3jwxe6fy/jkllHxWnzd8wGxHGQgUFQEp5G9Cqk+kM/Xx9IXVX23pYdWB45TS2exDnnCOeUIdk0oc1McMuDqz7WpQGtrRb4vrh3ogkDUCeg7+qefghs4Yd/X/DHWVFD87Ql5yhHdJZ4+vZM0/afz/AHpiqcZ3Kzo6AAAAAElFTkSuQmCC);
  }
  .vrs-rich-text {
    line-height: 0.42rem;
    margin-top: 0.5rem;
  }
  .vrs-plan {
    padding-top: 0.1rem;
  }
  .vrs-plan-item {
    margin-top: 0.3rem;
    color: #888888;
    line-height: 0.4rem;
    .vrs-round {
      margin: 0.05rem 0.2rem 0 0;
    }
    .vrs-title {
      color: #333333;
    }
  }
  .vrs-video {
    margin-top: 0.4rem;
    height: 3.1rem;
  }
  .vrs-fold {
    background: #fff5f4;
    border-bottom: 0.4rem solid #fff;
    .vrs-title {
      height: 0.8rem;
      color: #EC4A2D;
    }
    .vrs-arrow {
      @include wh(0.20rem, 0.12rem);
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAALCAYAAAHq0oasAAAABGdBTUEAALGPC/xhBQAAAahJREFUKBWFUUFLAkEUnrfaEgRRGkTUPYJcxYhuERkVuypRWVH3fkC3bv6Hbt2CBEOQSrxHx8KgJLBbh06xO0akYqmvN1uz7FrUwu775vu++fbNG8aTUY3Rg+m0IiqzjBC3geeD6Tm/TZi69iwAplI+3J3q8bhsQTiriciKVEw9hBIzS9eW3QRYcW0dEQ+GiuURx/UNxD+sWqUVHFNVR+OJcJx6NAUhuhJpTneOywWqemhWJLmoL/iWnBn+QboIsVFpthpPphGdcPEOpFlk2gB7NkEne+eGNumoBIjLUq95NycG3KzqkYggLUPLiVcaQAJR6WQNIi4ZsJdgsbzp1jzYjGv7HoIWQLGPNFhV9anz/YVSpdvw19oefL1yxJDtgE9ZstsyjfAqIGYRkIOixIKF2/v/Qnj94Zia2CLfKd3iBhyWPjxnrBpassOQBgCv4PPHAuc3d+5QcbP82sogsg0AyAdGe7ZEiPR4wiTJ4xG902nnSawpfmVhIDpY5lc8iwzXAFguMB3chvRFS/pl/TVMilYivIjtzhmte4HBSaBvfAdyubbUu+snm9um6Xh1ozYAAAAASUVORK5CYII=);
      margin-left: 0.14rem;
    }
  }

  .count {
    padding: 0.4rem 0;
    .vrs-line {
      width: 0.04rem;
      height: 1rem;
      border-radius: 2px;
      background-color: #FFF5F4;
    }
    .vrs-num {
      font-size: 0.48rem;
      text-align: center;
      padding-bottom: 0.3rem;
    }
    .vrs-round {
      margin-right: 0.1rem;
    }
  }
  .player-list {
    padding: 0 0.2rem 0.62rem 0;
    .vrs-ml {
      margin-left: 0.2rem;
    }
  }
  .vrs-player-item {
    border-radius: 0.16rem;
    overflow: hidden;
    position: relative;
    margin-top: 0.4rem;
    background-color: #fff;
    box-shadow: 0 2px 6px 0 rgba(0,0,0,0.20);
    .vrs-vote {
      position: absolute;
      height: 0.34rem;
      line-height: 0.34rem;
      border-radius: 0.18rem;
      background-color: rgba(0, 0, 0, 0.3);
      top: 0.2rem;
      left: 0.2rem;
      color: #fff;
      font-size: 0.22rem;
      padding-right: 0.2rem;
      padding-left: 0.5rem;
      z-index: 2;
      &::before {
        content: '';
        position: absolute;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAYFJREFUOBGllM8rRFEUx+eNGVYKRUZKytqfwIaN3ZTYiiz8qJkm/4O/AXsLLKyklCaisZ2dEmNBSLMgJRPP50z31nnX65n35tSnc+758X333ft6qVSI+b4/CufwBmVYg1xIa2spho/BtR8S8pACDLemRBfNg/ANUSbil1CCkUhxGlYhrp0wMBQqTOE0rprp3xPBtFal0M96QudixGPSGxBknYcOKSSwisy4grNK6IO4ADWVs+EVQREebQK/r+Lm7fbxyg11fk/Eacir3BnxtAziM1AxtRd88M1ILJqidvMsPNiGSSOUJV6CG7C2FdidaTyyVeWrxJ6pdxGvwL2q23AqIEi2B75s1fGbrDfgwcnb5StBxhWcs9UEfkeL2Vvu1smY8cGffnYlN3yXYHd1ZrJasLlDz/PqJMdBvq0L8KEVO2S28W8jT83BOsi/MOrPM+OKyTe2THIBOt2iWcsN9hrkrJufEf4drsFajaAkgs8EAzbbpi/KGe7CJ8i5tcMt8+VfIW2aPt36yuMAAAAASUVORK5CYII=);
        width: 0.2rem;
        height: 0.2rem;
        left: 0.16rem;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    .vrs-medal {
      position: absolute;
      top: 0.16rem;
      right: 0.16rem;
      z-index: 2;
    }
    .vrs-info {
      padding: 0.3rem 0.2rem;
    }
    .vrs-name {
      margin-bottom: 0.2rem;
    }
    .vrs-author {
      font-size: 0.26rem;
    }
  }
  .vrs-more-btn {
    width: 3.4rem;
    height: 0.8rem;
    background-color: #EC4A2D;
    border-radius: 0.4rem;
    margin: 0.6rem auto 0;
    color: #fff;
  }
  .vrs-works-name {
    font-size: 0.34rem;
    line-height: 0.44rem;
  }
  .vrs-player-info {
    padding: 0.3rem 0 0.2rem;
  }
  .vrs-works-status {
    line-height: 0.48rem;
    height: 0.48rem;
    padding: 0 0.2rem;
    margin-left: 0.2rem;
    background-color: #FFF5F4;
    color: #EC4A2D;
    border-radius: 0.24rem;
    &.active {
      background-color: #F4FFF5;
      color: #61C579;
    }
  }
  .vrs-sign {
    width: 0.8rem;
    height: 0.4rem;
    line-height: 0.4rem;
    background-color: #FFE8E3;
    color: #EC4A2D;
    text-align: center;
    margin-right: 0.2rem;
    font-size: 0.24rem;
  }
  .vrs-works-img {
    border-radius: 0.16rem;
    margin-top: 0.4rem;
  }

  .vrs-medal {
    width: 0.4rem;
    height: 0.48rem;
    color: #fff;
    font-size: 0.24rem;
    text-align: center;
    padding-top: 0.05rem;
    line-height: 0.3rem;
    background-image: url(data:image/png;base64,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);
    font-weight: bold;
  }
  .vrs-ranking {
    height: 1.08rem;
    width: 2.46rem;
    margin: -0.2rem 0 0.3rem;
    padding-bottom: 0.18rem;
    padding-right: 0.2rem;
    font-size: 0.38rem;
    color: #fff;
    .vrs-medal {
      margin: 0 0.14rem;
    }
  }
  
}
</style>
<style lang="scss">
.vrs-detail1 .vrs-video iframe {
  width: 100% !important;
  height: 100% !important;
}
</style>