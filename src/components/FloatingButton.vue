<template>
  <transition name="floating-button--animation">
    <div class="floating-button" v-if="showFloatingButton">
      <div class="floating-button--wrapper">
        <div class="floating-button--info">
          <font-awesome-icon icon="times" class="floating-button--icon" />
          {{ getState }} Table Selected
        </div>

        <Button>
          <font-awesome-icon
            icon="tag"
            flip="horizontal"
            class="floating-button--icon floating-button--icon-tag"
          />
          Assign Category
        </Button>

        <Button backgroundColor="#EB5757">
          <font-awesome-icon
            icon="minus-circle"
            class="floating-button--icon floating-button--icon-minus-circle"
          />
          Delete Table
        </Button>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from "vuex";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTimes,
  faTag,
  faMinusCircle
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faTimes, faTag, faMinusCircle);

export default {
  name: "FloatingButton",
  components: {
    Button: () => import("./Button"),
    FontAwesomeIcon
  },
  computed: {
    ...mapGetters(["showFloatingButton", "getState"])
  }
};
</script>

<style lang="scss" scoped>
.floating-button {
  background-color: #4339f2;
  left: 50%;
  bottom: 5%;
  transform: translateX(-50%);
  position: fixed;
  padding: 15px 25px;
  border-radius: 12px;
  color: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  &--wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }

  &--info {
    margin: 0 15px 0 20px;
    font-size: 18px;
  }

  &--icon {
    cursor: pointer;
    margin-right: 5px;

    &-tag {
      color: #9d97ff;
    }

    &-minus-circle {
      color: #ff9a9a;
    }
  }

  &--animation {
    &-enter {
      &-active {
        transition: all 0.5s;
      }

      bottom: -50%;
    }

    &-leave {
      &-active {
        transition: all 1s;
      }

      &-to {
        bottom: -50%;
      }
    }
  }
}
</style>
